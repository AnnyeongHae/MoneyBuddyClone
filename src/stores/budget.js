import { defineStore } from 'pinia';
import axios from 'axios';

const BASEURI = '/api/budget';
export const useBudgetListStore = defineStore('budgetList', {
    //상태 정의
    state: () => {},

    //읽기 전용의 게터 (이건 아직 필요할지 모르겠음)
    getters: {},

    //액션
    actions: {},
});
