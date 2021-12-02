import React, { Component } from 'react';

// 클래스형
export default class extends Component {
    // 돔에있는 것은 다 텍스트이기때문에 int로 바꿔줘야하는데
    // 사진찍은것처럼 숫자를 int로 형변환해주고 증가한다음 다시 증가한값을 넣어주고 해야하는데
    // 리액트에서는 이런 복잡한 작업을 생략하게해준다.

    // 값을 변경하고 render()를 다시 호출해야 변경된 값이 화면에 출력된다.
    // render()를 다시 부르지않으면 값은 변경되지만 화면에 출력되지 않는다.
    constructor() {
        super(...arguments);
        this.state = {
            number: this.props.begin,

        // this.state에는 화면이 변경되면 다시 그려줘야하는 데이터들만 넣어줌
        // 예 ) 버튼 사이의 값
        // props는 읽는값이지 변경하는것은 아니다.
        // props가 내부적으로는 변할 수 있지만 읽을 수만 있기때문에 화면에 변경된값이 나타나지는 않는다.
        }
        
    }
    onClickButton2(e){
        if(this.state.number < this.props.begin){
            return
        }
        
        this.setState({
            number: this.state.number - this.props.step
        })

    }

    onClickButton(e) {
        // this.state.value = this.state.value + this.props.step;
        this.setState({
            number: this.state.number + this.props.step
        })

        // setState에서 render()함수도 부르고 숫자도 바꿔준다.
    }

    render() {
        console.log('---------------------------')
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.number}</span>
                {' '}
                <button onClick={this.onClickButton2.bind(this)}>
                    <strong>---</strong>
                </button>
                <button onClick={(e) => {
                    let res = this.state.number - this.props.step
                    if( res < this.props.begin) return;

                    this.setState({
                        number: res
                    })
                }}>
                    <strong>-</strong>
                </button>                    
            </div>
        );
    }
}