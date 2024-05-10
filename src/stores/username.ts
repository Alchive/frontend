import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userName: localStorage.getItem('userName') || '', // 로컬 스토리지에서 값 불러오기
  }),
  actions: {
    // 유저네임 변경 시 로컬 스토리지에 저장하는 액션
    setUserName(userName: string) {
      this.userName = userName;
      localStorage.setItem('userName', userName); // 로컬 스토리지에 값 저장하기
      console.log(userName);
    },
  },
});
