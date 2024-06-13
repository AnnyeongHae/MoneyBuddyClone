import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import axios from 'axios';

const BudgetURI = '/api/budget/';
const PeriodicURI = '/api/periodicExpense';

export const useBudgetListStore = defineStore('BudgetList', () => {
    const budgetState = reactive({ budget: [] });
    const periodicState = reactive({ periodicExpense: [] });
    const incomeCategory = ['월급', '저축이자', '용돈', '기타'];
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
    const payType = ['현금', '은행', '카드'];

    const fetchBudget = async () => {
        try {
            const response = await axios.get(BudgetURI);
            if (response.status === 200) {
                budgetState.budget = response.data;
                // 확인
                console.log(budgetState.budget);
            } else {
                alert(
                    'fetchBudget 실행 실패 json에서 budget 데이터를 못들고옴'
                );
            }
        } catch (error) {
            alert('fetchBudget 에러 발생 : ' + error);
        }
    };
    // PeriodicExpense 불러오기
    const fetchPeriodic = async () => {
        try {
            const response = await axios.get(PeriodicURI);
            if (response.status === 200) {
                periodicState.periodicExpense = response.data;
                // 확인
                console.log(periodicState.periodicExpense);
            } else {
                alert(
                    'fetchPeriodic 실행 실패: 서버에서 periodicExpense 데이터를 가져오지 못함'
                );
            }
        } catch (error) {
            alert('fetchPeriodic 에러발생 : ' + error);
        }
    };

    const addBudget = async (BudgetData, successCallback) => {
        try {
            const response = await axios.post(BudgetURI, BudgetData);
            if (response.status === 201) {
                budgetState.budget.push(response.data);
                // periodicExpense가 true일 경우 서버 periodicExpense 배열에 추가
                if (response.data.periodicExpense === true) {
                    const periodicResponse = await axios.post(
                        PeriodicURI,
                        response.data
                    );
                    if (periodicResponse.status === 201) {
                        periodicState.periodicExpense.push(
                            periodicResponse.data
                        );
                    } else {
                        alert('PeriodicExpense 추가 실패');
                    }
                }
                successCallback();
            } else {
                alert('addBudget json에 budget 추가 실패');
            }
        } catch (error) {
            alert('addBudget 에러 발생 : ' + error);
        }
    };

    const editBudget = async (BudgetData, successCallback) => {
        try {
            // 이게 맞나..?
            const { id, ...payload } = BudgetData;
            const response = await axios.put(BudgetURI + `/${id}`, payload);
            if (response.status === 200) {
                let index = budgetState.budget.findIndex(
                    (budget) => budget.id === id
                );
                budgetState.budget[index] = { ...payload, id };

                let periodicIndex = periodicState.periodicExpense.findIndex(
                    (expense) => expense.id === id
                );

                if (payload.periodicExpense === true) {
                    // periodicExpense가 true이고 배열에 존재하지 않으면 추가
                    if (periodicIndex === -1) {
                        const periodicResponse = await axios.post(PeriodicURI, {
                            ...payload,
                            id,
                        });
                        if (periodicResponse.status === 201) {
                            periodicState.periodicExpense.push(
                                periodicResponse.data
                            );
                        } else {
                            alert('PeriodicExpense 추가 실패');
                        }
                    }
                } else {
                    // periodicExpense가 false이고 배열에 존재하면 삭제
                    if (periodicIndex !== -1) {
                        const deleteResponse = await axios.delete(
                            PeriodicURI + `/${id}`
                        );
                        if (deleteResponse.status === 200) {
                            periodicState.periodicExpense.splice(
                                periodicIndex,
                                1
                            );
                        } else {
                            alert('PeriodicExpense 삭제 실패');
                        }
                    }
                }
                successCallback();
            } else {
                alert('editBudget json에 budget 수정 실패');
            }
        } catch (error) {
            alert('editBudget 에러 발생 : ' + error);
        }
    };

    const deleteBudget = async (id) => {
        try {
            // Budget 항목 삭제
            const responseBudget = await axios.delete(BudgetURI + `/${id}`);
            if (responseBudget.status === 200) {
                let index = budgetState.budget.findIndex(
                    (budget) => budget.id === id
                );
                if (index !== -1) {
                    // Budget 상태에서 항목 제거
                    const isPeriodic =
                        budgetState.budget[index].periodicExpense;
                    budgetState.budget.splice(index, 1);

                    if (isPeriodic) {
                        // periodicExpense가 true인 경우 PeriodicURI에서 항목 삭제
                        const responsePeriodic = await axios.delete(
                            PeriodicURI + `/${id}`
                        );
                        if (responsePeriodic.status === 200) {
                            let periodicIndex =
                                periodicState.periodicExpense.findIndex(
                                    (periodic) => periodic.id === id
                                );
                            if (periodicIndex !== -1) {
                                periodicState.periodicExpense.splice(
                                    periodicIndex,
                                    1
                                );
                            }
                        } else {
                            alert('PeriodicExpense 삭제 실패!');
                        }
                    }
                    alert('지출이 삭제되었습니다.');
                }
            } else {
                alert('Budget 삭제 실패!');
            }
        } catch (error) {
            alert('deleteBudget 에러 발생 : ' + error);
        }
    };

    // 읽기 전용으로 내보내기
    const budget = computed(() => budgetState.budget);
    const periodic = computed(() => periodicState.periodicExpense);

    const incomeCategories = computed(() => incomeCategory);
    const expenseCategories = computed(() => expenseCategory);
    const payTypes = computed(() => payType);

    return {
        budget,
        periodic,
        fetchBudget,
        fetchPeriodic,
        addBudget,
        editBudget,
        deleteBudget,

        incomeCategories,
        expenseCategories,
        payTypes,
    };
});
