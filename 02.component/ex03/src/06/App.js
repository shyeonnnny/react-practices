import React, {Component, useRef} from 'react';
import './assets/scss/App.scss';

export default class App extends Component {
    
    // 함수형 컴포넌트에서는 this.current.outter.scrollTop이라고 써야하지만
    // 클래스형 컴포넌트에서는 current를 떼야한다

    onScroll(e){
        console.log(this.outterRef.scrollTop, ':' ,this.outterRef.clientHeight, ";", this.innerRef.clientHeight)
    }

    render() {
        return (
            <div
                ref={ (ref) => this.outterRef = ref }
                className={'App'}
                onScroll={ this.onScroll.bind(this)}>
                <div
                    ref={ ref => this.innerRef = ref }>

                    <ul>
                        {Array.from({length: 100}, (_, i) => i + 1).map(i =>
                            <li>
                                {`아이템 ${i} 입니다.`}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}