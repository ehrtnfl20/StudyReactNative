/* eslint-disable prettier/prettier */
import {
    observable
} from 'mobx';

class CounterStore {
    @observable counter = [{
        counterNum: 0
    }];

    //카운터 추가 버튼
    handleAddCounter = () => {
        console.log(this.counter.length);
        this.counter.push({
            counterNum: 0
        });
        console.log(this.counter.length);
    };
    //카운더 삭제 버튼
    handleRemoveCounter = () => {
        this.counter.pop();
    };

    // + 버튼
    handleIncrement = (index) => {

    };

    // - 버튼
    handleDecrement = (index) => {

    };
}


// decorate(CounterStore, {
//     counter: observable,
//     handleAddCounter: action,
//     handleRemoveCounter: action,
// });

export default new CounterStore();