import React from 'react';

// function Food(props) {
function Food({ name, age }) {
  // props를 디스트럭쳐링한 형태
  return (
    <div>
      <h1>{name} 개노답</h1>
      <p>나이 : {age}</p>
    </div>
  )
  // jsx안에서 변수는 {}에 삽입하면 된다
}

// 원래는 api에서 받아온 정보를 동적으로 렌더링하는 걸 보여주려는 의도지만,
// 귀찮았는지 api를 안 줘서 내가 그냥 배열 만들었음.
const foodILike = [
  {
    name: '이인우',
    age: 28
  }, {
    name: '박상준',
    age: 30
  }, {
    name: '한유진',
    age: 29
  }, {
    name: '김웅래',
    age: 27
  }
]

function App() {
  return (
    <div className="App">
      {foodILike.map(({ name, age }) => {
        return <Food name={name} age={age}></Food>
      })}
      {/* 여기서 name같은 것들을 prop이라고 함 */}
      {/* 이와 같은 prop은 해당 컴포넌트의 argument에 props라는 인자로 전달됨 */}
    </div>
  );
}

export default App;
