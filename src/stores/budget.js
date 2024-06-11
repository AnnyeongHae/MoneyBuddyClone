import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
// import axios from 'axios';

const BASEURI = '/api/budget';
export const useBudgetListStore = defineStore(
  'budgetList',
  () => {
    const state = reactive({ budgetList: [] });
    //budjetList 목록을 조회합니다

    const fetchBudgetList = async () => {
      try {
        const response = await axios.get(BASEURI);
        if (response.status === 200) {
          state.budgetList = response.data;
        } else {
          alert('데이터 조회 실패');
        }
      } catch (error) {
        alert('에러발생 :' + error);
      }
    };

    //   {
    //     //상태 정의
    //     state: () => {},

    //     //읽기 전용의 게터 (이건 아직 필요할지 모르겠음)
    //     getters: {},

    //     //액션
    //     actions: {},
    //   }
    return { budgetList, fetchBudgetList };
  }
);
