import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import axios from 'axios';

const BudgetURI = '/api/budget/';
const PeriodicURI = '/api/periodicExpense';

export const useBudgetListStore = defineStore(
  'BudgetList',
  () => {
    const budgetState = reactive({ budget: [] });
    const periodicState = reactive({ periodicExpense: [] });
    const incomeCategory = [
      '월급',
      '저축이자',
      '용돈',
      '기타',
    ];
    const expenseCategory = [
      '식비',
      '생활용품비',
      '패션미용',
      '문화생활',
      '교육',
      '의료비',
      '교통비',
      '공과금',
      '이자지출',
      '고정지출',
      '기타',
    ];
    const payType = ['현금', '은행', '카드', '기타'];

    // PeriodicExpense 불러오기
    const fetchPeriodic = async () => {
      try {
        const response = await axios.get(PeriodicURI);
        if (response.status === 200) {
          periodicState.periodicExpense = response.data;
          // 확인
          console.log(periodicState.periodicExpense);
        } else {
          alert('PeriodicExpense 데이터 조회 실패');
        }
      } catch (error) {
        alert('fetchPeriodic 에러발생 : ' + error);
      }
    };

    // PeriodicExpense가 작동하는 부분은 언제일까..?
    // PeriodicExpense 추가
    const addPeriodic = async (
      {
        id,
        date,
        type,
        category,
        amount,
        memo,
        periodicExpense,
      },
      successCallback
    ) => {
      try {
        const payload = {
          id,
          date,
          type,
          category,
          amount,
          memo,
          periodicExpense: true,
        };
        const response = await axios.post(
          PeriodicURI,
          payload
        );
        if (response.status === 201) {
          periodicState.periodicExpense.push(response.data);
          successCallback();
        } else {
          alert('PeriodicExpense 추가 실패');
        }
      } catch (error) {
        alert('addPeriodic 에러 발생 : ' + error);
      }
    };

    // PeriodicExpense 편집 => 일단 지우는 작업 같이 처리
    const editPeriodic = async (
      {
        id,
        date,
        type,
        category,
        amount,
        memo,
        periodicExpense,
      },
      successCallback
    ) => {
      try {
        const payload = {
          id,
          date,
          type,
          category,
          amount,
          memo,
          periodicExpense,
        };
        const response = await axios.put(
          PeriodicURI + `/${id}`,
          payload
        );
        if (response.status === 200) {
          let index =
            periodicState.periodicExpense.findIndex(
              (budget) => budget.id === id
            );
          periodicState.periodicExpense[index] = payload;

          // 해당 인덱스의 periodicExpense를 배열에서 제거
          if (
            periodicState.periodicExpense[index]
              .periodicExpense == false
          ) {
            periodicState.periodicExpense.splice(index, 1);
          }
        }
      } catch (error) {
        alert('editPeriodic 에러 발생 : ' + error);
      }
    };

    // 만약 토글을 받는다면 ? => 일단은 그냥 budget만 바꾸게..
    const periodicToggle = async (id) => {
      try {
        let periodic = periodicState.periodicExpense.find(
          (periodic) => periodic.id === id
        );
        let payload = {
          ...periodic,
          periodicExpense: !periodic.periodicExpense,
        };

        const response = await axios.put(
          BudgetURI + `/${id}`,
          payload
        );
        if (response.status === 200) {
          periodic.periodicExpense =
            payload.periodicExpense;
        } else {
          alert('periodicToggle에서 문제 발생');
        }
      } catch (error) {
        alert('periodicToggle 에러 발생 : ' + error);
      }
    };

    // 읽기 전용으로 내보내기
    const budget = computed(() => budgetState.budget);
    const periodic = computed(
      () => periodicState.periodicExpense
    );

    // 얘네들도 읽기전용으로 내보내야할까?
    const incomeCategories = computed(() => incomeCategory);
    const expenseCategories = computed(
      () => expenseCategory
    );
    const payTypes = computed(() => payType);

    // const doneCount = computed(() => {
    //     const filtered = state.todoList.filter(
    //         (todoItem) => todoItem.done === true
    //     );
    //     return filtered.length;
    // });

    return {
      fetchPeriodic,
      addPeriodic,
      editPeriodic,
      periodicToggle,
      budget,
      periodic,
      incomeCategories,
      expenseCategories,
      payTypes,
    };
  }
);
