import React from 'react';
import PropTypes from 'prop-types';
// 내가 전달받은 props가 내가 원하는 props인지 확인해주는 모듈

class App extends React.Component {
  state = {
    count: 0
  }

  add = () => {
    console.log("add");
    // this.state.count += 1;
    // 위처럼 하면 리액트가 render메소드를 refresh하지 않음
    // 즉, state의 상태를 변경하려면 render 메소드를 호출함으로써 해야함
    this.setState(current => (
      { count: current.count + 1 }
    ));
    // 따라서 state의 상태를 변경하기 위해서는 this.setState메소드를 써야함
    // this.setState을 써줘야 인자로 전달된 state를 기반으로 render메소드가 재호출되기 때문
    // count를 호출할 때 this.state.count처럼 state에 직접적으로 의존하는 것은 좋지 않다고 함.
  };
  minus = () => {
    console.log("minus");
    this.setState(current => (
      { count: current.count - 1 }
    ));
  };

  // React.Component가 함수 기반 컴포넌트가 아닌 클래스 기반 컴포넌트이기에
  // return이 아닌 render()메소드를 가진다
  // 함수 기반 컴포넌트가 아닌 클래스 기반 컴포넌트를 쓰는 이유는 state때문이라고 함
  render() {
    return (
      <div>
        <h1>클래스 기반 컴포넌트란다</h1>
        <span>카운터 : {this.state.count}</span>
        <button onClick={this.add}>더한다</button>
        {/* 여기의 onClick도 prop임!!! */}
        <button onClick={this.minus}>뺀다</button>
      </div>
    )
  }
}


export default App;
