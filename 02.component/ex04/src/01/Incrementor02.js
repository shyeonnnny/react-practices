 import React, {useState} from 'react';

 // 함수형
export default function ({ begin, step }) {
    console.log(stateNumber,'====================');
    /**
     * state : {
     *  asdfsadasdas : 20
     * }
     */
    // 클래스는 render()부분만 계속 호출하고
    // 함수는 모든 코드를 호출한다.
    const [stateNumber, setVal] = useState(begin);
    
    // [ 값, 함수] 

    // setVal이 클래스형식에서 setState랑 비슷한 역할을 하고
    // userState에 초기값을 지정해줄 수 있다.
    // useState에 지정해준 값을 stateNumber에 넘겨줘서 덧셈뺄셈을 한다음
    // setVal을 통해 변경된 값을 세팅해주고 다시 변경된값이 stateNumber에 들어가기때문에 화면에 변경된값이
    // 나타난다.

    // this.state = {
        // stateNumber : 5
    // }
   
    return (
        <div>
            <button onClick={(e) => {
                setVal(stateNumber + step);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ stateNumber }</span>
            {' '}
            <button onClick={(e) =>{
                if(stateNumber <= begin){
                    return
                }
                setVal(stateNumber - step);

                
            }}>
                <strong>-</strong>
            </button>              
        </div>
    );
}