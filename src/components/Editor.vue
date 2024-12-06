<script>
// Toast UI Editor
import Editor from '@toast-ui/editor';
import '../style/toastui-editor.css';
import '../style/toastui-editor-only.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs'; // prism 테마 추가
import 'prismjs/themes/prism.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import Navbar from '../components/Navbar.vue';
import { useBoardStore } from '../stores/boardStore';
import { useRoute } from 'vue-router';

export default {
  components: { Navbar },
  data() {
    return {
      editor: null,
      boardData: null,
    };
  },
  mounted() {

    const boardStore = useBoardStore();
    const route = useRoute();
    const boardId = Number(route.params.id);
    console.log('boardId', boardId);

    boardStore.fetchBoardData(boardId).then(() => {
      this.boardData = boardStore.boardData;

      this.editor = new Editor({
        // const editor = new Editor({
        el: document.querySelector('#editor'),
        height: '600px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        plugins: [[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax],
      });
    });

    // SUBMIT 버튼 클릭 이벤트
    const btn = document.querySelector('#submit');
    btn.addEventListener('click', () => {
      const editContent = this.editor.getMarkdown();
      this.$emit('submitContent', editContent);
    });
  },
};
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
    <div class="flex flex-col w-[1200px] font-Pretendard gap-[15px]">
      <div v-if="boardData" class="font-Pretendard text-4xl my-5">
        {{ boardData.problem.number }}. {{ boardData.problem.title }}
      </div>
      <!-- 문제 내용 -->
      <div class="flex gap-[20px]" v-if="boardData">
        <div class="px-[10px] border-[2px] bg-white border-gray-300 rounded-[10px] text-blue-700 text-xl">
          {{ boardData.problem.algorithms?.join(', ') }}
        </div>
        <div class="px-[10px] border-[2px] bg-white border-gray-300 rounded-[10px] text-green-600 text-xl">
          {{ boardData.solutions[0].language }}
        </div>
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
          {{ boardData.problem.content }}
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
          v-if="boardData && isContentVisible"
          class="mb-[30px] p-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
        >
          {{ boardData.board.memo }}
        </div>
      </div>
      <div class="flex justify-center items-center mt-[30px]" id="editor"></div>
      <div class="flex justify-end items-end my-[20px]">
        <button
          class="w-[130px] px-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] text-xl hover:bg-blue-700 hover:text-white hover:scale-110"
          id="submit"
        >
          SUBMIT
        </button>
      </div>
    </div>
  </div>
</template>
