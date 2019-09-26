import React from 'react';
import PropTypes from 'prop-types';
// 내가 전달받은 props가 내가 원하는 props인지 확인해주는 모듈

// function Food(props) {
function Food({ name, age, nick }) {
  // props를 디스트럭쳐링한 형태
  return (
    <div>
      <h1>{name} 개노답</h1>
      <p>나이 : {age}</p>
      <span>{nick} of 0123</span>
    </div>
  )
  // jsx안에서 변수는 {}에 삽입하면 된다
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  nick: PropTypes.string.isRequired
}

// 원래는 api에서 받아온 정보를 동적으로 렌더링하는 걸 보여주려는 의도지만,
// 귀찮았는지 api를 안 줘서 내가 그냥 배열 만들었음.
const foodILike = [
  {
    id: 1,
    name: '이인우',
    age: 28,
    nick: '고집충'
  }, {
    id: 2,
    name: '박상준',
    age: 30,
    nick: '요령충'
  }, {
    id: 3,
    name: '한유진',
    age: 29,
    nick: '담배충'
  }, {
    id: 4,
    name: '김웅래',
    age: 27,
    nick: '국밥충'
  }
]
// react의 모든 element는 unique해야 하는데, 배열 안에 위치함으로써 unique함을 잃게 된다.
// 따라서 이들을 식별할 수 있는 id값을 준 것.
// 그리고 그 식별값을 컴포넌트에서는 key로 받는데 밑의 Food컴포넌트를 보자

function App() {
  return (
    <div className="App">
      {foodILike.map(({ id, name, age, nick }) => {
        return <Food key={id} name={name} age={age} nick={nick}></Food>
      })}
      {/* 여기서 name같은 것들을 prop이라고 함 */}
      {/* 이와 같은 prop은 해당 컴포넌트의 argument에 props라는 인자로 전달됨 */}
    </div>
  );
}

export default App;
