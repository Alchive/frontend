import { defineStore } from 'pinia';
import axios from 'axios';

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

export const useBoardStore = defineStore('boardStore', {
  state: () => ({
    boardData: null as BoardData | null,
  }),
  actions: {
    async fetchBoardData(boardId: number) {
      // 데이터 초기화
      this.boardData = null;
      try {
        const response = await axios.get(`http://localhost:8080/api/v2/boards/${boardId}`);
        console.log('게시글 조회 성공', response.data.data);
        this.boardData = response.data.data;
      } catch (error) {
        console.error('게시글 조회 실패', error);
      }
    },
  },
});
