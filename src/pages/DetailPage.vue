<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
    crossorigin="anonymous"
  />
  <Navbar />
  <div class="flex justify-center items-center">
    <div class="flex flex-col w-[1200px] font-Pretendard gap-[15px]">
      <div class="flex w-full justify-between mt-[80px] mb-[20px]">
        <div class="flex gap-[20px]">
          <div class="text-4xl" v-if="problems">{{ problems.problem.number }}. {{ problems.problem.title }}</div>
          <!-- <div class="text-4xl">{{ problems.problemNumber }}. {{ problems.problemTitle }}</div>
          <div class="font-Pretendards text-2xl">{{ problems.problemDifficulty }}</div> -->
        </div>
        <div class="flex">
          <img src="../assets/checkbox.svg" alt="check" />
          <img src="../assets/trash.svg" alt="trash" />
        </div>
      </div>
      <div class="flex gap-[20px]">
        <div
          v-if="problems"
          class="px-[10px] border-[2px] bg-white border-gray-300 rounded-[10px] text-blue-700 text-xl"
        >
          {{ problems.problem.algorithms.join(', ') }}
        </div>
        <!-- <div class="px-[15px] border-[2px] bg-white border-gray-300 rounded-[10px] text-blue-700 text-xl">이분탐색</div> -->
      </div>
      <div class="px-[50px] border-[2px] bg-white border-gray-300 rounded-[10px] text-2xl">
        <div class="my-[10px]" @click="toggleContent">
          <i v-if="!isContentVisible" class="fas fa-chevron-down"></i>
          <i v-else class="fas fa-chevron-up"></i>
          문제
        </div>
        <div
          v-if="isContentVisible"
          class="w-[1100px] mb-[20px] p-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
        >
          {{ problems.problem.url }} <br />
          <br />
          {{ problems.problem.content }}
          <!-- {{ problems.problemDescription }} -->
          <!-- 얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을
          부릅니다. 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이
          "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 즉 "soe" 선수가 1등, "mumu"
          선수가 2등으로 바뀝니다. 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른
          이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 선수들의 이름을 1등부터 등수
          순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요. -->
        </div>
        <div v-if="isContentVisible" class="flex my-[10px] text-2xl">
          <span class="flex flex-col">제한사항<span class="border-[3px] border-blue-700" /></span>
        </div>
        <div
          v-if="isContentVisible"
          class="mb-[30px] p-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
        >
          <span
            >5 ≤ players의 길이 ≤ 50,000<br />- players[i]는 i번째 선수의 이름을 의미합니다.<br />
            - players의 원소들은 알파벳 소문자로만 이루어져 있습니다.<br />
            - players에는 중복된 값이 들어가 있지 않습니다.<br />- 3 ≤ players[i]의 길이 ≤ 10<br />
            2 ≤ callings의 길이 ≤v1,000,000<br />
            - callings는 players의 원소들로만 이루어져 있습니다.<br />- 경주 진행중 1등인 선수의 이름은 불리지
            않습니다.</span
          >
        </div>
        <div v-if="isContentVisible" class="flex my-[10px] text-2xl">
          <span class="flex flex-col">작성한 메모 <span class="border-[3px] border-blue-700" /></span>
        </div>
        <div
          v-if="isContentVisible"
          class="mb-[30px] p-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
        >
          {{ problems.board.memo }}
          <!-- 문제의 제한 사항을 체크해보면 players 배열의 최대 길이는 50,000이고 callings 배열의 최대 길이는 1,000,000이
          된다. 만약 배열의 index를 활용하여 문제를 풀 경우 최악의 경우 O(n^2)이 되는데 이를 계산해보면 총
          50,000,000,000번 연산해야 하는 경우가 발생한다. 실제로 이러한 방법으로 풀었던 코드가 바로 아래에 있다. -->
        </div>
      </div>
      <div class="px-[50px] bg-white border-[2px] border-gray-300 rounded-[10px]">
        <div class="flex justify-between mt-[30px] my-[10px]">
          <span class="text-2xl flex flex-col">풀이<span class="border-[3px] border-blue-700"></span></span>
          <img class="" src="../assets/pen.svg" alt="" />
        </div>
        <div
          class="mb-[30px] p-[20px] bg-white border-[2px] border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
          v-if="problems"
        >
          {{ problems.solutions[0].content }}<br />
          <span>
            <!-- hash 자료구조를 이용해서 풀이하는 방법으로 바꿨다. object의 key로 접근할 때 bigO는 O(1)이다. 먼저,
            players의 name을 key, 해당 index를 value로 초기화해주었다. 다음으로 callings에 대한 반복문을 돌리는데,
            초기화해주었던 hash에 callings에 대한 요소(이름)로 key에 접근해서 value를 currIdx에 담아두었다. 그럼 해당
            이름의 index를 받아왔고 이름이 불린 앞사람과 위치를 바꿔야 한다. 앞사람의 이름을 fornt라는 변수에 currIdx -
            1 값을 담아두었다. -->
          </span>
        </div>
        <div class="flex justify-between my-[10px] text-2xl">
          <span class="flex flex-col">코드<span class="border-[3px] border-blue-700" /></span>
          <span class="font-Pretendards text-red-500">Ref</span>
        </div>
        <div
          v-if="problems"
          class="mb-[30px] p-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
        >
          <span>
            {{ problems.solutions[0].description }}
            <!-- <span class="text-red-400"> function</span><span class="text-blue-400"> solution(</span
            ><span class="text-green-500">players, callings</span><span class="text-blue-400">)</span> {<br />
            <span class="text-red-400">&nbsp; const</span> hash =
            <span class="text-red-400">new</span> Map();<br /><br />&nbsp; players.forEach(<span class="text-blue-400"
              >(</span
            ><span class="text-green-500">name, index</span><span class="text-blue-400">) => </span> {<br />&nbsp;
            &nbsp;&nbsp;&nbsp; hash.set(name, index);<br />&nbsp; }) <br /><br />callings.forEach(<span
              class="text-green-500"
              >name</span
            ><span class="text-blue-400"> => </span> { <br /><span class="text-red-400">&nbsp; const</span> currIdx =
            hash.get(name);<br />
            <span class="text-red-400">&nbsp; const</span> front = players[currIdx - 1];<br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp; [players[currIdx], players[currIdx -1]] = [players[currIdx -1],
            players[currIdx]];<br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp; hash.set(name, hash.get(name) - 1);<br />
            &nbsp;&nbsp;&nbsp;&nbsp; hash.set(front, hash.get(name) + 1); <br />})<br /><br />
            <span class="text-red-400">&nbsp; return</span> players;<br />
            } -->
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: { Navbar },
  setup() {
    const isContentVisible = ref(false); // 컨텐츠의 가시성을 나타내는 ref 변수
    const toggleContent = () => {
      isContentVisible.value = !isContentVisible.value; // 컨텐츠의 가시성을 토글
    };

    // API 응답 데이터를 저장할 변수 정의
    // const problems = ref([]);

    const route = useRoute(); // 현재 라우트 정보 가져오기
    const problems = ref<any>(null); // 문제 데이터를 저장할 변수 정의

    // API에서 데이터를 가져오는 함수
    const problemAPI = async (boardId: number) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/boards/${boardId}`);
        console.log('게시글 조회 성공', response.data.data);
        problems.value = response.data.data; // 데이터를 변수에 할당하여 반응성 유지
      } catch (error) {
        console.error('게시글 조회 실패', error);
      }
    };

    // 컴포넌트가 마운트될 때 데이터를 가져오는 함수 호출
    // problemAPI();

    // 컴포넌트가 마운트될 때 데이터를 가져오는 함수 호출
    onMounted(() => {
      const boardId = route.params.id; // URL 파라미터에서 boardId 추출
      problemAPI(Number(boardId)); // API 호출
    });

    return {
      isContentVisible,
      toggleContent,
      problems,
    };
  },
});
</script>
