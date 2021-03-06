## ex04: Component - State


### 01. 기본개념
1.  state
   - 컴포넌트 내부의 현재 상태를 나타내는 쓰기 가능한 데이터
   - 컴포넌트는 this.state 안에 여러 데이터를 가질 수 있다.(class component)
   - this.state은 특정 컴포넌트 전용이며 변경을 위해서는 setState() 함수를 사용한다.(class component)
   - 상태가 업데이트 되면 컴포넌트의 반응형(Reactive) Rendering이 트리거가 되고 컴포넌트와 자식 컴포넌트가 다시 렌더링 된다.
      + 컴포넌트 내부의 state은 최소한으로 유지하는 것이 좋다.
      + 컴포넌트 내부의 state을 외부에 정확하게 나타내고 인터페이스의 동기화를 위해서 다시 렌더링한다.
   - 컴포넌트가 동작(event)과 상호작용을 수행할 수 있는 매커니즘을 제공한다.
   - 클래스 컴포넌트에서는 constructor 에서 초기화 한다.
   - 함수 컴포넌트에서는 useState라는 후크 함수를 사용해서 초기화 한다.
   - 대체적으로 사용자 이벤트로 변경되거나 통신으로 변경된다.
2. src/01 예제


### 02. 제어 컴포넌트
1.  input, textarea, option과 같은 폼 컴포넌트 중에 사용자 입력에 따라 state값이 변경되고 렌더링 하는 컴포넌트를 제어(Controlled) 컴포넌트라고 한다.
2.  폼 컴포넌트가 반드시 제어 컴포넌트로 작성해야 하는 것은 아니다. 상태를 제어하지 않는 비제어(Uncontrolled) 컴포넌트로도 만들 수 있다.(Anti-Pattern)
3.  폼 컴포넌트를 제어 컴포넌트로 만드는 것은 조금 복잡해 보이지만 다음과 같은 장점이 있다.
   - 컴포넌트의 인터페이스를 외부에서 직접 변경할 수 없고 내부의 상태 변경으로 가능하다는 리액트의 컴포넌트 작성 원칙을 준수할 수 있다. 
   - 사용자 입력 값에 대한 Validation을 할 수 있다.
4. 예제
   - src/02 제어 컴포넌트
   - src/03 비제어 컴포넌트


### 03. 상태(Stateful) 컴포넌트 vs 순수(Pure, Dumb) Component
1.  Stateful Component
   - 상태(state)를 관리하는 컴포넌트
   - 보통 상태를 관리하는 컴포넌트는 컴포넌트 계층에서 상위에 있다.
   - 상태 컴포넌트는 순수 컴포넌트를 하나 이상 래핑할 수 있다.
2.  Pure Component
   - 상태 관리없이 속성(props)로 화면만 렌더링 하는 컴포넌트다.
   - 재사용이 용이, 테스트하기도 좋다.
3.  애플리케이션의 컴포넌트들은 상태 컴포넌트와 순수 컴포넌트로 분리하여 만드는 것이 좋다.
4.  어떤 컴포넌트가 상태 컴포넌트인가요?
   - 상태를 기반으로 렌더링 하는 컴포넌트
   - 많은 하위 컴포넌트를 가지고 있는 공통(하나)의 상위 컴포넌트
   - 컴포넌트 hierachy에서 상위에 있고 상태를 가져야만 하는 컴포넌트
   - 못 찾겠으면, 상태를 관리 하는 컴포넌트를 만들고 하위(pure) 컴포넌트를 래핑한다.
5. 예제
   - emaillist


### 04. Data Flow(Bottom-Up)
1. 리액트 애플리케이션에서의 데이터는 컴포넌트 계층 상위->하위(Top-Down)로 props 전달이 기본 data flow 메카니즘 이다.
2. 하지만, 거의 모든 애플리케이션에서는 하위->상위(Bottom-Up)로 데이터를 전달해야 하는 경우가 반드시 있다.
3. 예제: props로 전달한 callback 함수를 사용하는 방법
   - emaillist


### Run Examples
```bash
$ npm run debug src={no}
```