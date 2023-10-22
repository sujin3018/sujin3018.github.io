import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route , useNavigate} from 'react-router-dom'
import data from './data.js';
import Main from './routes/Main.js';
import Board from './routes/Board';
import List from './routes/List';
import Result from './routes/Result';
import React , { useEffect, useState} from 'react';
import BoardDetail from './routes/BoardDetail';


function App() {
  let navigate = useNavigate();

  

  return (
    <div className="App">
       {/* <div className="black-nav">
        
      </div> */}

    


      <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link onClick={()=>{navigate('/Main')}}>Test</Nav.Link>
        <Nav.Link onClick={()=>{navigate('/Board')}}>글쓰기</Nav.Link>
        <Nav.Link onClick={()=>{navigate('/List')}}>목록</Nav.Link>

        </Nav>
      </Container>
      </Navbar> 


      <Routes>
      <Route path="/Main" element={<Main/>} />
      <Route path="/Board" element={<Board/>} />
      <Route path='/List' element={<List/>} />
      <Route path='/Result'  element={<Result/>}/>
      <Route path="/Board/:id"element={<BoardDetail/>}/>

      </Routes>
    {/* 라우터는 App.js에만 사용가능 */}
    </div>
  );
}


export default App;