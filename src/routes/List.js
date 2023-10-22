import React, { useState, useEffect } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

  function List(props) {
    var [data, setData] = useState([]);
    const [pcount , tcount] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      axios.get('http://localhost:4000/Board')
      .then((response) => {
        setData(response.data); // 서버에서 받은 데이터를 상태 변수에 저장
        //console.log(response.data);
      })
      .catch((error) => {
        console.error('데이터 가져오기 중 오류 발생:', error);
      });
    }, []); 
  


  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            {/* <th>내용</th> */}
            <th>작성자</th>
            <th>작성일자</th>
          </tr>
        </thead>
        <tbody>
    
      {
      Object.keys(data).map((a, i) => (
      <tr key={i}>
      <td>{data[a].BOARD_NO}</td>
      <td>
      <Link to={`/Board/${data[a].BOARD_NO}`}>{data[a].BOARD_TITLE}</Link>
      {/* {data[a].BOARD_TITLE} */}
      </td>
      <td>{data[a].BOARD_NAME}</td>
      <td>{data[a].BOARD_DATE}</td>
      </tr>
       ))}

        </tbody>
      </Table>
      <Button variant="info" onClick={()=>{navigate('/Board')}}>글쓰기</Button>
      <Button variant="secondary">수정하기</Button>
      <Button variant="danger">삭제하기</Button>
    </div>
  );
}

export default List;