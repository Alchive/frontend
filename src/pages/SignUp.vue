<template>
  <div class="z-20 absolute flex flex-col justify-center items-center w-full h-full top-0 left-0">
    <div
      class="flex flex-col w-[500px] h-[600px] p-[35px] rounded-[10px] bg-white border-[2px] border-[#5d9eff8c] shadow-[0px_0px_20px_0px_rgba(93,159,255,0.64)]"
    >
      <div class="flex flex-col">
        <span class="font-Pretendard text-4xl text-blue-700">Welcome</span>
        <span class="font-Pretendards text-xl">기본 회원 정보를 등록해주세요.</span>
      </div>
      <div class="flex flex-col mx-[30px] my-[70px] gap-[50px]">
        <div class="flex flex-col gap-[3px]">
          <span class="text-6md">이메일</span>
          <div class="flex justify-between">
            <span
              class="text-neutral-400"
              id="emailValue"
            ></span>
            <img
              class="w-[20px]"
              src="../assets/lock.svg"
              alt=""
            />
          </div>
          <span class="border-[2px] border-neutral-400"></span>
        </div>
        <div class="flex flex-col gap-[3px]">
          <span class="text-6md">닉네임</span>
          <input
            v-model="userName"
            type="text"
            placeholder="닉네임을 입력하세요"
            class="text-neutral-400"
          />
          <span class="border-[2px] border-neutral-400"></span>
        </div>
        <!-- <div class="flex flex-col gap-[3px]">
          <span class="text-6md">한 줄 소개</span>
          <input
            type="text"
            placeholder="당신을 한 줄로 소개해 보세요"
            class="text-neutral-400"
          />
          <span class="border-[2px] border-neutral-400"></span>
        </div> -->
      </div>
      <div
        @click="handleSubmit"
        class="flex flex-col items-center justify-center mx-[160px] border-[2px] rounded-[10px] border-[#5d9eff8c] shadow-[0px_0px_5px_0px_rgba(93,159,255,0.44)] hover:scale-110"
      >
        <span class="text-2xl text-neutral-600 hover:text-blue-700">Join</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    console.log(email);
    const emailSpan = document.getElementById('emailValue');
    if (emailSpan) {
      emailSpan.textContent = email;
    }
  },
  data() {
    return {
      userName: '', // 입력받은 닉네임 저장
    };
  },

  methods: {
    async handleSubmit() {
      const urlParams = new URLSearchParams(window.location.search);
      const email = urlParams.get('email');
      try {
        //user 생성
        const response = await fetch('http://localhost:8080/api/v1/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userEmail: email,
            userName: this.userName,
          }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // 응답에서 토큰 추출
        const { accessToken, refreshToken } = data.data;

        // 로컬 스토리지에 저장
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        window.location.href = '/main';
      } catch (error) {
        console.error('error:', error);
      }
    },
  },
};
</script>
