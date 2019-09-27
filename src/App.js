import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getmovies = async () => {
    const { data: { data: { movies } } } =
      await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=title")
    // axios는 생각보다 시간을 쓰기 때문에 자스에게 getmovies가 끝나기까지 시간이 좀 걸린다고 알려줘야함
    // 그래서 async/await으로 실행순서를 명시해줌(비동기를 동기화시켰다고 이해함)
    this.setState({ movies, isLoading: false })
    // 객체의 key 이름과 value이름이 같을 때 :value명 을 생략 가능
  }
  componentDidMount() {
    // 컴포넌트가 mount되면 getmovies를 호출하겠다는 것
    this.getmovies()
  }
  // mounting => render => componentDidMount
  render() {
    const { isLoading, movies } = this.state
    return (
      <section className="container">
        {isLoading ?
          (<div className="loader">
            <span className="loader__text">로딩중</span>
          </div>) :
          <div className="movies">
            {movies.map(({ id, year, title, summary, medium_cover_image }) => {
              return (
                <Movie
                  key={id}
                  id={id}
                  year={year}
                  title={title}
                  summary={summary}
                  medium_cover_image={medium_cover_image}>
                </Movie>)
            })}
          </div>
        }
      </section>
    )
  }
}

// lifecycle

// mounting: 생성
// updating
// unmounting: 다른 페이지로 넘어가면서 컴포넌트 소멸 or state의 변화로 기존 컴포넌트 소멸


export default App;
