import { defineStore } from 'pinia';

interface Problem {
  problemId: number;
  problemDifficulty: string;
  problemTitle: string;
  problemState: string;
  platform: string;
  problemAlgorithms: string[];
}

export const useProblemStore = defineStore('problemStore', {
  state: () => ({
    problems: [] as Problem[],
  }),
  actions: {
    async fetchProblems() {
      try {
        const response = await fetch('http://localhost:8080/api/v1/boards', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        const data = await response.json();

        // 데이터 구조가 content 안에 중첩된 배열로 되어 있으므로, 이를 펼쳐서 접근합니다.
        if (data && data.data && data.data.content && Array.isArray(data.data.content)) {
          const contentArray = data.data.content.flat(); // 중첩된 배열을 평탄화합니다.
          this.problems = contentArray.map((item: any) => ({
            problemId: item.problem.id,
            problemDifficulty: item.problem.difficulty,
            problemTitle: item.problem.title,
            problemState: item.board.status === 'CORRECT' ? '맞았습니다' : '틀렸습니다',
            platform: item.problem.platform,
            problemAlgorithms: item.problem.algorithms,
          }));
          console.log('문제 목록 조회 성공', this.problems);
        } else {
          console.error('잘못된 데이터 형식:', data);
        }
      } catch (error) {
        console.error('문제 데이터를 가져오는 데 실패했습니다.', error);
      }
    },
  },
});
