<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { marked } from 'marked';

interface Problem {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  number: number;
  title: string;
  content: string;
  url: string;
  difficulty: string;
  platform: string;
  algorithms: string[];
}

interface Solution {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  content: string;
  language: string;
  description: string;
  status: string;
  memory: number;
  time: number;
  submitAt: string;
}

interface Board {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  memo: string;
  status: string;
  description: string;
}

interface BoardData {
  board: Board;
  problem: Problem;
  solutions: Solution[];
}

export default defineComponent({
  components: { Navbar },
  setup() {
    const isContentVisible = ref(true); // 컨텐츠의 가시성을 나타내는 ref 변수
    const toggleContent = () => {
      isContentVisible.value = !isContentVisible.value; // 컨텐츠의 가시성을 토글
    };

    const route = useRoute(); // 현재 라우트 정보 가져오기
    const router = useRouter();
    const boardData = ref<BoardData | null>(null); // API 데이터를 저장할 변수

    const fetchBoardData = async () => {
      const boardId = Number(route.params.id); // URL 파라미터에서 boardId 추출
      console.log('boardId', boardId);
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/boards/${boardId}`);
        console.log('게시글 조회 성공:', response.data.data);
        boardData.value = response.data.data;
      } catch (error) {
        console.error('게시글 조회 실패:', error);
      }
    };

    const markdownToHtml = (markdownText: string) => {
      return marked(markdownText); // marked 라이브러리를 사용하여 HTML로 변환
    };

    // 컴포넌트가 마운트될 때 데이터 로드
    onMounted(fetchBoardData);

    // `edit` 페이지로 이동하는 함수
    const goToEditPage = () => {
      const boardId = route.params.id;
      console.log('Navigating to edit page with ID:', boardId);
      router.push({ name: 'edit', params: { id: boardId } }); // 'edit' 페이지로 이동하며 ID 전달
    };

    return {
      isContentVisible,
      toggleContent,
      boardData,
      markdownToHtml,
      goToEditPage,
    };
  },
});
</script>

<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
    crossorigin="anonymous"
  />
  <Navbar />
  <div class="flex justify-center items-center">
    <div v-if="boardData" class="flex flex-col w-[1200px] font-Pretendard gap-[15px]">
      <div class="flex w-full justify-between mt-[40px]">
        <div class="flex gap-[20px]">
          <div class="text-4xl">{{ boardData.problem.number }}. {{ boardData.problem.title }}</div>
          <!-- <div class="text-4xl">{{ problems.problemNumber }}. {{ problems.problemTitle }}</div>
          <div class="font-Pretendards text-2xl">{{ problems.problemDifficulty }}</div> -->
        </div>
        <div class="flex">
          <!-- 문제 상태에 따라 fill 색상 변경 -->
          <svg width="37" height="35" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_108_11)">
              <path
                d="M20.0002 1.33337C10.8002 1.33337 3.3335 8.80004 3.3335 18C3.3335 27.2 10.8002 34.6667 20.0002 34.6667C29.2002 34.6667 36.6668 27.2 36.6668 18C36.6668 8.80004 29.2002 1.33337 20.0002 1.33337ZM20.0002 31.3334C12.6502 31.3334 6.66683 25.35 6.66683 18C6.66683 10.65 12.6502 4.66671 20.0002 4.66671C27.3502 4.66671 33.3335 10.65 33.3335 18C33.3335 25.35 27.3502 31.3334 20.0002 31.3334ZM27.6502 10.6334L16.6668 21.6167L12.3502 17.3167L10.0002 19.6667L16.6668 26.3334L30.0002 13L27.6502 10.6334Z"
                :fill="boardData && boardData.board.status === 'CORRECT' ? '#26B104' : '#FF0000'"
              />
            </g>
            <defs>
              <clipPath id="clip0_108_11">
                <rect width="40" height="40" fill="white" transform="translate(0 -2)" />
              </clipPath>
            </defs>
          </svg>
          <img class="w-[40px] h-[40px]" src="../assets/trash.svg" alt="trash" />
        </div>
      </div>
      <div class="flex mb-[20px]">
        <img
          v-if="boardData.problem.platform === 'BAEKJOON'"
          src="../assets//mainpage/baekjoon.svg"
          class="mr-2 bg-[50%_50%] bg-cover bg-no-repeat w-[23px] h-[22px]"
        />
        <img
          v-else
          src="../assets//mainpage/programers.svg"
          class="mr-2 bg-[50%_50%] bg-cover bg-no-repeat w-[23px] h-[22px]"
        />

        <a :href="boardData.problem.url" target="_blank" class="text-gray-600">
          {{ boardData.problem.url }}
        </a>
        <br />
      </div>
      <!-- 문제 내용 -->
      <div class="flex gap-[20px]" v-if="boardData">
        <div class="px-[10px] border-[2px] bg-white border-gray-300 rounded-[10px] text-blue-700 text-xl">
          {{ boardData.problem.algorithms?.join(', ') }}
        </div>
        <div class="px-[10px] border-[2px] bg-white border-gray-300 rounded-[10px] text-green-600 text-xl">
          {{ boardData.solutions[0].language }}
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
          v-if="isContentVisible && boardData"
          class="w-[1100px] mb-[20px] p-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
        >
          <div v-if="boardData" v-html="markdownToHtml(boardData.problem.content)"></div>
        </div>
        <div v-if="isContentVisible" class="flex my-[10px] text-2xl">
          <span class="flex flex-col">작성한 메모 <span class="border-[3px] border-blue-700" /></span>
        </div>
        <div
          v-if="boardData && isContentVisible"
          class="mb-[30px] p-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
        >
          <div v-if="boardData" v-html="markdownToHtml(boardData.board.memo)"></div>
          <!-- 문제의 제한 사항을 체크해보면 players 배열의 최대 길이는 50,000이고 callings 배열의 최대 길이는 1,000,000이
          된다. 만약 배열의 index를 활용하여 문제를 풀 경우 최악의 경우 O(n^2)이 되는데 이를 계산해보면 총
          50,000,000,000번 연산해야 하는 경우가 발생한다. 실제로 이러한 방법으로 풀었던 코드가 바로 아래에 있다. -->
        </div>
      </div>
      <div class="px-[50px] bg-white border-[2px] border-gray-300 rounded-[10px]">
        <div class="flex justify-between mt-[20px] my-[10px]">
          <span class="text-2xl flex flex-col">풀이<span class="border-[3px] border-blue-700"></span></span>
          <img class="" src="../assets/pen.svg" alt="pen" @click="goToEditPage" />
        </div>
        <div
          class="mb-[30px] p-[20px] bg-white border-[2px] border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
          v-if="boardData"
        >
          <div v-if="boardData" v-html="markdownToHtml(boardData.solutions[0].description)"></div>
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
<!--          <span class="font-Pretendards text-red-500">Ref</span>-->
        </div>
        <div
          v-if="boardData"
          class="mb-[30px] p-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
        >
          <div v-if="boardData" v-html="markdownToHtml(boardData.solutions[0].content)"></div>
<!--          <span-->
<!--            >{{ boardData.solutions[0].content }}-->
<!--            {{ boardData.solutions[0].description }}-->
<!--            &lt;!&ndash; <span class="text-red-400"> function</span><span class="text-blue-400"> solution(</span-->
<!--            ><span class="text-green-500">players, callings</span><span class="text-blue-400">)</span> {<br />-->
<!--            <span class="text-red-400">&nbsp; const</span> hash =-->
<!--            <span class="text-red-400">new</span> Map();<br /><br />&nbsp; players.forEach(<span class="text-blue-400"-->
<!--              >(</span-->
<!--            ><span class="text-green-500">name, index</span><span class="text-blue-400">) => </span> {<br />&nbsp;-->
<!--            &nbsp;&nbsp;&nbsp; hash.set(name, index);<br />&nbsp; }) <br /><br />callings.forEach(<span-->
<!--              class="text-green-500"-->
<!--              >name</span-->
<!--            ><span class="text-blue-400"> => </span> { <br /><span class="text-red-400">&nbsp; const</span> currIdx =-->
<!--            hash.get(name);<br />-->
<!--            <span class="text-red-400">&nbsp; const</span> front = players[currIdx - 1];<br /><br />-->
<!--            &nbsp;&nbsp;&nbsp;&nbsp; [players[currIdx], players[currIdx -1]] = [players[currIdx -1],-->
<!--            players[currIdx]];<br /><br />-->
<!--            &nbsp;&nbsp;&nbsp;&nbsp; hash.set(name, hash.get(name) - 1);<br />-->
<!--            &nbsp;&nbsp;&nbsp;&nbsp; hash.set(front, hash.get(name) + 1); <br />})<br /><br />-->
<!--            <span class="text-red-400">&nbsp; return</span> players;<br />-->
<!--            } &ndash;&gt;-->
<!--          </span>-->
        </div>
      </div>
    </div>
  </div>
</template>
