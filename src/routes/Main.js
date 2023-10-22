import {  useState } from "react";
import Form from 'react-bootstrap/Form';
import data from "../data.js";
import {  useNavigate } from 'react-router-dom';
import React from 'react';


function Main() {
  let [answer ,setAnswer] = useState([]);
  let [num, setNum] = useState([]);
  let [page, setPage] = useState(1);
  let totalPage = 5; // 한 페이지에 표시할 질문의 수를 나타내는 변수
  let [remain , zero] = useState(10);

  let start = (page - 1) * totalPage;
  let end = start + totalPage;
  let curPage = data.slice(start, end);
  const isLastPage = end >= data.length;
  const isFristPage = start !== 0 ;
  let navigate = useNavigate();


  const nextPage = () => {
    let ques = data
      .slice(start, end)
      .filter((test) => !answer[`${test.id}`]);

    if (ques.length > 0) {
      const num = ques.map((question) => question.id);
      setNum(num);
      alert(`${num.join(", ")} 번 질문에 답변해주세요!`);
    } else {
      if (isLastPage) {
       navigate('/Result' ,{
        state : {
          newArray
        }
       });
      } else {
        setPage(page + 1);
      }
    }
  }

  const change = (questionId, value) => {
    setAnswer({
      ...answer,
      [questionId]: value
    });

    if (!answer[questionId]) {
      zero(remain -= 1)
    }
};


let newArray = Object.entries(answer);



  return (
    <div>
      {/* 각 문제의 라디오 버튼을 클릭하면 남은문제가 하나씩 줄어들게끔 해줘 */}
      <div className='remainques'>남은문제 {remain}</div>
      <br/>
      <h1>스트레스 자가 진단</h1>
      <br/>
      {curPage.map(function (test) {
        const questionId = `${test.id}`;
        return (
          <div key={questionId}>
            <h4 >
              {test.id}. {test.text}
            </h4>
            <br />
            <h4>
              <Form>
                {['전혀', '가끔', '자주', '항상'].map((value) => (
                  <label key={value} style={{ marginRight: '10px' }}>
                    <Form.Check
                      inline
                      name={questionId}
                      type="radio"
                      value={value}
                      onChange={() => change(questionId, value)}
                      checked={answer[questionId] === value}
                    />
                    {value}
                  </label>
                ))}
              </Form>
            </h4>
            <br />
          </div>
        );
      })}


 {isFristPage ? (
    <button onClick={()=>{setPage(page-1)}}>이전</button>
 ) : null
};

      {isLastPage ? (
        <button onClick={nextPage}>결과보기</button>

      ) : (
        <button onClick={nextPage}>다음</button>
      )}

    </div>
  );
}


export default Main;