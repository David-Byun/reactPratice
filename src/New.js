/* eslint-disable */
import { useState } from 'react';
import './App.css';

function New() {
  let [title, setTitle] = useState(0);
  let [글제목, 글제목변경] = useState([
    '남자 코드 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <Nav />
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
              >
                {따봉[i]}
              </span>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <input
        onChange={async (e) => {
          await 입력값변경(e.target.value);
          글제목.add(e.target.value);
          console.log(입력값);
        }}
      ></input>

      {modal == true ? (
        <Modal
          글제목={글제목}
          글제목변경={글제목변경}
          title={title}
          color={'yellow'}
        />
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
/* 1. hmtl css 먼저 하기 2. state 설정하기 3. 변화 주기 */
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학']);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
