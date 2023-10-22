import React, { useState , useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Board from './Board';
import { useNavigate } from 'react-router-dom';

function Result ()  {

  const location = useLocation();
  const newArray = location.state;

//  //결과를 계산할 때 사용할 상태 변수
  let [totalscore, setTotalScore] = useState(0);
  let navigate = useNavigate();
  
  useEffect(()=>{
      const newData = newArray.newArray;
      
      let score1 = 0;
      let score2 = 0;
      newData.forEach((item)=>{
        const [questionN, value] = item;
        
        const spec = [4, 5, 7, 8];
        if (spec.includes(Number(questionN))) {
        switch (value) {
          case '전혀':
            score1 += 3;
            break;
          case '가끔':
            score1 += 2;
            break;
          case '자주':
            score1 += 1;
            break;
          case '항상':
            score1 += 0;
            break;
          default:
            score1 += 0;
        }
       }else {
        switch (value) {
              case '전혀':
                score2 += 0;
                break;
              case '가끔':
                score2 += 1;
                break;
              case '자주':
                score2 += 2;
                break;
              case '항상':
                score2 += 3;
                break;
              default:
                score2 += 0;
            }
       }});
      let totalscore = score1 + score2;
      setTotalScore(totalscore);
      // }
    }, [newArray.newArray]);
      
    let resultText ;
    if (totalscore <= 17) {
      resultText = '정상';
    } else if (totalscore >= 18 && totalscore <= 25) {
      resultText = '경도의 스트레스';
    } else {
      resultText = '고도의 스트레스';
    }

     
    return (
      
      <div>
        <div style={{ fontSize : 28, textAlign : 'center', padding : '200px 0 '}}>
          나의 스트레스 수준은 
        <span style={{ color : 'blue' , fontWeight : 'bold' }}> {totalscore}점 </span> 
        입니다. <br/><br/>
        {resultText}        
         </div>

        <button onClick={()=>{navigate('/Main')}}>돌아가기</button>

      </div>

    )

  }
  

export default Result;