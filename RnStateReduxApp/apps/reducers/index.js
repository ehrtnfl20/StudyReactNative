/* eslint-disable prettier/prettier */

const initialState = {
    counter: [
       {
           counterNum: 0,
        },
    ],
};

const counter = (state = initialState, action) => {
    const {counter} = state;

    switch (action.type) {//순수함수, 실제 로직 값 증가
        case 'INCREMENT':
            return ({
                counter: [
                    ...counter.slice(0, action.index), //0부터 action(type과 index)에 들어오는 값을 index 값으로 짜르면, 0부터 index를 제외한 바로 앞번호까지 나옴
                    {
                        counterNum: counter[action.index].counterNum + 1,
                    },
                    ...counter.slice(action.index + 1, counter.length),
                ],
            }); //카운터 +
        case 'DECREMENT' : // 값 감소
            return ({
                counter: [
                    ...counter.slice(0, action.index), //0부터 action(type과 index)에 들어오는 값을 index 값으로 짜르면, 0부터 index를 제외한 바로 앞번호까지 나옴
                    {
                        counterNum: counter[action.index].counterNum - 1,
                    },
                    ...counter.slice(action.index + 1, counter.length),
                ],
            }); // 카운터 -
        case 'ADD':
            return ({
                counter: [
                    ...counter,
                    {
                        counterNum: 0,
                    },
                ],
            });   // 카운터 추가
        case 'REMOVE':
            return ({
                counter: counter.slice(0, counter.length - 1),  //  배열의 값이 5개일 경우 0부터 시작수, 마지막수 5-1로 (0~4까지임)
            });    // 카운터 삭제
        default:
            return state;
    }
};

export default counter;
