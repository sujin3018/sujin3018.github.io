import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate , useLocation , useParams} from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';


function BoardDetail() {
   

  const [viewCount, setCount] = useState(0);
  const { id } = useParams();
  let [totalDetail, setTotalDetail] = useState('');



  useEffect(() => {
    axios.post(`http://localhost:4000/Board/${id}/cnt`)
      .then(() => {
        setCount(viewCount + 1);
      })
      .catch((error) => {
        console.error('조회수 증가 중 오류 발생:', error);
      });
  }, []);


    useEffect(() => {
      axios.get(`http://localhost:4000/Board/${id}`)
        .then((response) => {
        setTotalDetail(response.data); // 서버에서 받은 데이터를 상태 변수에 저장

        setCount(response.data.viewCount)
        })
        .catch((error)=>{
          console.error('조회수 가져오다가 오류 발생:', error);
        });
      }, []); 

    


      return (
        <div>
        {
          Object.keys(totalDetail).map((a , i) => (
        <div key={i}>
        <h2 style={{ marginBottom : 130 }}>게시글 상세정보</h2>
        
        <div className='boarddate'>
        <label>{totalDetail[a].BOARD_DATE }</label>
        </div>
        <div className="post-view-row">
        <label>게시글 번호</label>
        <label>{totalDetail[a].BOARD_NO }</label>
        </div>
       
        <div className="post-view-row">
        <label>제목</label>
        <label>{totalDetail[a].BOARD_TITLE}</label>
        </div>
        <div className="post-view-row">
        <label>작성자</label>
        <label>{ totalDetail[a].BOARD_NAME}</label>
        </div>
        <div className="post-view-row">
        <label>조회수</label>
        {/* <label>{ totalDetail[a].BOARD_CNT }</label> */}
        <label>{ viewCount }</label>

        </div>
        <div >

         <div className='content'>
       { totalDetail[a].BOARD_CONTENT }
         </div>
        </div>
        </div>
        ))}
        </div>
      );
 }

/* <div className="post-view-row">
<label>첨부파일</label>
{image && <img src={`data:image/jpeg;base64,${image}`} alt="이미지" />}
</div> */

export default BoardDetail;