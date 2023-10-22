const mysql = require('mysql');
const express = require('express')
const app = express();
const cors = require('cors');
const PORT = process.env.port || 4000;
const bodyParser = require('body-parser');


const DB = mysql.createConnection({
  host : 'localhost',
  user : 'test',
  password : '00007539',
  port : 3306,
  database : 'db'
});

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000', // 클라이언트의 Origin. 출처허용옵션
    credentials: true, // 인증 정보 (쿠키 등)를 전송할 때 true로 설정
  }));


DB.connect(function(err) {
  if(err) throw err;
  console.log("Mysql DB Connected!!");
});


// 서버 시작 시, 가장 큰 게시글 번호를 가져옵니다.
DB.query("SELECT MAX(BOARD_NO) AS maxNo FROM Board", (err, result) => {
  if (err) throw err;
  if (result[0].maxNo) {
    postNum = result[0].maxNo + 1;
  }
  console.log("초기 게시글 번호:", postNum);
});

app.get('/getNum' , (req, res)=>{
  res.json(postNum);
});


app.get('/Board', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const sqlQuery = "SELECT * FROM BOARD";
  DB.query(sqlQuery , (err, result)=>{
    res.send(result);
    console.log(result);
  });
});

app.get('/Board/:id', function (req, res){
  res.header("Access-Control-Allow-Origin", "*");
  const { id } = req.params; // 요청 URL에서 id를 추출
  const sqlQuery = `SELECT * FROM BOARD WHERE BOARD_NO = '${id}'`;
  DB.query(sqlQuery , (err, result)=>{
    res.send(result);
    console.log(result);
});
});

//POST 요청을 처리하는 라우트를 설정합니다.
app.post("/Board/:id", (req, res) => {
  // 클라이언트에서 보낸 데이터는 req.body에서 접근할 수 있습니다.
  const { no, title, who, content , date , viewCount } = req.body;

  var sqlQuery = `INSERT INTO board (BOARD_NO , BOARD_TITLE, BOARD_NAME , BOARD_CONTENT, BOARD_DATE , BOARD_CNT ) VALUES ( '${no}' , '${title}', '${who}', '${content}' ,'${date}' , '${viewCount}' )`;
  DB.query(sqlQuery, (err, result) => {
    res.send('Success')
    if (err) throw err;
    console.log("insert success");
    
    postNum++; // 게시글 번호 증가
  // 여기에서 데이터를 DB에 저장하거나 다른 작업을 수행할 수 있습니다.
  // 이 예제에서는 받은 데이터를 그대로 응답으로 돌려줍니다.
  console.log("서버로 보낸 데이터:", title, who, content);

  // 응답으로 데이터를 보냅니다. (이 부분을 실제 DB 저장으로 변경해야 합니다)
})});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

