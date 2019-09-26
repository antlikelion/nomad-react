import React from 'react';

// function Food(props) {
function Food({ name }) {
  // props를 디스트럭쳐링한 형태
  return <h1>{name} 존맛탱</h1>
  // jsx안에서 변수는 {}에 삽입하면 된다
}

function App() {
  return (
    <div className="App">
      <h1>하이?</h1>
      <Food name="김치" />
      <Food name="라면" />
      <Food name="삼겹살" />
      <Food name="쭈꾸미" />
      {/* 여기서 name같은 것들을 prop이라고 함 */}
      {/* 이와 같은 prop은 해당 컴포넌트의 argument에 props라는 인자로 전달됨 */}
    </div>
  );
}

export default App;
