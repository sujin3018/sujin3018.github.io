import React, { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import axios from 'axios';


function Board() {
  // 게시글 제목, 글쓴이, 내용, 그리고 선택한 파일을 관리할 상태 변수
  let [no, setNo] = useState('');
  const [title, setTitle] = useState('');
  const [who, setWho] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const [focus, setFocus] = useState('');
  const { id } = useParams();
  const today = new Date;
  const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;


  useEffect(() => {
    const postNum = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getNum');
        setNo(response.data);
      } catch (error) {
        console.error('게시글 번호를 가져오는 중 오류 발생:', error);
      }
    };
    // 페이지가 로드될 때 게시글 번호를 가져오도록 설정
    postNum();
  }, []);

  
   
  const Submit = async (e) => {
    const newPost = {
      no ,
      title, who, content, date
  };

  console.log(newPost.no);

  if(!title || !who || !content){
    alert('모든 항목을 작성해주세요!')
  } else {
    try {
      await axios.post(`http://localhost:4000/Board/${id}` , newPost);
      alert('등록 완료!');
      // 폼 초기화
      setTitle('');
      setWho('');
      setContent('');
      setNo(no + 1);
    } catch (error) {
      console.error('등록 중 오류 발생:', error);
    }
    navigate(`/Board/${newPost.no}`);
  }
  // 파라미터 7이면 그 해당 게시글 상세보기 화면이 떠야함

};



  return (
    <div className='bar'>
      <h1>글 작성</h1>
      <form>
      <div>
          <div htmlFor="no">글번호</div>
          <input
            type="text"
            id="no"
            value={no}
            className='space'
            readOnly
          />
        </div>
        <div>
          <div htmlFor="title">제목</div>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => setFocus('title')}
            onBlur={() => setFocus('')}
            className='space'
          />
            {focus == 'title' && !title && <div className='focus'>필수 항목입니다!</div>}
        </div>
        <div>
          <div htmlFor="who">글쓴이</div>
          <input
            type="text"
            id="who"
            value={who}
            onChange={(e) => setWho(e.target.value)}
            onFocus={() => setFocus('who')}
            onBlur={() => setFocus('')}
            className='space'
          />
          {focus === 'who' && !who && <div className='focus'>필수 항목입니다!</div>}
        </div>
        <div>
          <div htmlFor="content">내용</div>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setFocus('content')}
            onBlur={() => setFocus('')}
            className='space1'
          />
          {focus === 'content' && !content && <div className='focus'>필수 항목입니다!</div>}
        </div>
        
        {/* <div>
          <input
            type="file"
            id="file"
            accept="image/*" // 이미지 파일만 허용하도록 설정
            value={file}
            onChange={(e) => setFile(e.target.value)}
            className='space'
          />
        </div> */}
        <button type="button" style={{ width : 130 }} onClick={Submit}>
          게시글 작성
        </button>
      </form>
      
    </div>
  );
}

export default Board;