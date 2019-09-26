import React from 'react';
import PropTypes from 'prop-types';
// 내가 전달받은 props가 내가 원하는 props인지 확인해주는 모듈

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 6000)
  }
  // mounting => render => componentDidMount
  render() {
    const { isLoading } = this.state
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    )
  }
}

// lifecycle

// mounting: 생성
// updating
// unmounting: 다른 페이지로 넘어가면서 컴포넌트 소멸 or state의 변화로 기존 컴포넌트 소멸


export default App;
