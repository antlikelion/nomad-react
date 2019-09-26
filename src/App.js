import React from 'react';
import PropTypes from 'prop-types';
// 내가 전달받은 props가 내가 원하는 props인지 확인해주는 모듈

class App extends React.Component {
  state = {
    count: 0
  }

  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
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
