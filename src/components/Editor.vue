<template>
  <div class="flex justify-center items-center mt-[30px]" id="editor"></div>
  <div class="flex justify-end items-end w-[1200px] my-[20px] ml-[150px]">
    <button
      class="px-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] text-xl hover:bg-blue-700 hover:text-white hover:scale-110"
      id="submit"
    >
      SUBMIT
    </button>
  </div>
</template>

<script>
// Toast UI Editor
import Editor from "@toast-ui/editor";
// import "@toast-ui/editor/dist/toastui-editor.css";
import "../style/toastui-editor.css";
import "../style/toastui-editor-only.css";
//codeSyntaxHighlight 플러그인
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import Prism from "prismjs"; // prism 테마 추가
import "prismjs/themes/prism.css";
//colorSyntax 플러그인
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
export default {
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    // this.editor = new Editor({

    const editor = new Editor({
      el: document.querySelector("#editor"),
      height: "600px",
      initialEditType: "markdown",
      previewStyle: "vertical",
      plugins: [[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax],
    });
    const btn = document.querySelector("#submit");
    btn.addEventListener("click", () => {
      const editContent = editor.getMarkdown();
      this.$emit("submitContent", editContent);
    });
    editor.getMarkdown();
  },
};
</script>
