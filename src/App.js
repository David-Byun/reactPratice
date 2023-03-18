/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState([
    '남자 코드 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <Nav />
      <button
        onClick={() => {
          let title = [...글제목];
          title.sort();
          글제목변경(title);
        }}
      >
        가나다순정렬
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}
      >
        버튼
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉++);
            }}
          >
            좋아요
          </span>{' '}
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4>
              {글제목[i]}
              <span
                onClick={() => {
                  let title = [...따봉];
                  title[i] = title[i] + 1;
                  따봉변경[title];
                }}
              >
                {따봉[i]}
              </span>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal == true ? (
        <Modal 글제목={글제목} title={글제목[i]} color={'yellow'} />
      ) : (
        ''
      )}
    </div>
  );
}
const Nav = () => {
  return (
    <div className="black-nav">
      <h4>ReactBlog</h4>
    </div>
  );
};

function 함수() {
  let a = 10;
}

function Modal(props) {
  return props.글제목.map((a, i) => {
    return (
      <div className="modal" key={i}>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    );
  });
}

export default App;
