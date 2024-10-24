<template>
  <div
    class="shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] bg-[#FFFFFF] flex flex-col w-[300px] h-[200px] justify-center items-center"
  >
    <img class="flex z-0 w-[220px] mt-[20px] absolute overflow-hidden" src="../assets/background.svg" alt="" />
    <div class="flex flex-col justify-center items-center z-10">
      <div class="inline-block font-black text-[40px] text-[#004AB9] font-ChemyRetro">Algorive</div>
      <div class="text-[15px] font-Pretendards">나만의 알고리즘 저장소</div>

      <div>
        <!-- <input
          type="text"
          v-model="userName"
          placeholder="Enter your nickname"
        /> -->
        <button
          @click="handleClickGoogle()"
          class="flex mt-[20px] px-[10px] py-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] bg-gray-100 hover:scale-110"
        >
          <img class="w-[27px] mx-[5px]" src="../assets/google.png" alt="구글로고" />
          <div
            class="flex items-center text-[15px] font-Pretendards text-gray-600 hover:text-[#004AB9] hover:font-Pretendard"
          >
            Login with Google
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// import jwtdecode from 'jwt-decode';
export default {
  name: 'Login',
  data() {
    return {
      userName: '',
      email: '', // 이메일을 저장할 변수 추가
    };
  },
  methods: {
    // googleLoginBtn()
    async handleClickGoogle() {
      window.open('http://localhost:8080/oauth2/authorization/google');
    },
  },
};
</script>
