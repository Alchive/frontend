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
    // 문제 데이터 가져오기
    // const problemStore = useProblemStore();
    // if (!problemStore.problems.length) {
    //   problemStore.fetchProblems();
    // }
    const boardStore = useBoardStore();
    const route = useRoute();
    const boardId = Number(route.params.id);
    console.log('boardId', boardId);
    boardStore.fetchBoardData(boardId).then(() => {
      this.boardData = boardStore.boardData;
    });
    this.editor = new Editor({
      // const editor = new Editor({
      el: document.querySelector('#editor'),
      height: '600px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      plugins: [[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax],
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
        {{ boardData.problem.id }}. {{ boardData.problem.title }}
      </div>
      <!-- 문제 내용 -->
      <div class="flex gap-[20px]" v-if="boardData">
        <div class="px-[10px] border-[2px] bg-white border-gray-300 rounded-[10px] text-blue-700 text-xl">
          {{ boardData.problem.algorithms?.join(', ') }}
        </div>
        <!-- <div class="px-[15px] border-[2px] bg-white border-gray-300 rounded-[10px] text-blue-700 text-xl">이분탐색</div> -->
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
