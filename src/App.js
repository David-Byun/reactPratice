/* eslint-disable */
import { useState } from 'react';
import './App.css';

//2. 인풋 입력시에 글생성되게 3. 삭제버튼만들기//
function App() {
  let [subject, setSubject] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  let [modal, setModal] = useState(false);
  let [like, setLike] = useState([0, 0, 0]);
  let [title, setTitle] = useState(0);
  let [content, setContent] = useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let newSub = [...subject];
          newSub.sort();
          setSubject(newSub);
        }}
      >
        가나다순 정렬
      </button>
      {subject.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {subject[i]}
            </h4>
            <span
              onClick={() => {
                let sample = [...like];
                sample[i] = sample[i] + 1;
                setLike(sample);
              }}
            >
              좋아요
            </span>
            <span>{like[i]}</span>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...subject];
                copy.splice(i, 1);
                setSubject(copy);
                // copy 원하는 자료 삭제한 후 변경
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <input
            type="text"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            // Array의 수정이나 변경이 필요할 경우에는 카피본을 먼저 만든다.
            let copy = [...subject];
            copy.unshift(content);
            setSubject(copy);
          }}
        >
          Submit
        </button>
      </form>
      {modal == true ? <Modal subject={subject} title={title} /> : ''}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.subject[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}
export default App;
