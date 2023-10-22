function solution(id_pw, db) {
   
    for(var i =0;i<db.length;i++){
        if(id_pw[0] === db[i][0] && id_pw[1] === db[i][1]){
            var result = "login";
        } else if(id_pw[0] === db[i][0] && id_pw[1] != db[i][1]){
            var result = "wrong pw";
        } else if (id_pw[0] != db[i][0] && id_pw[1] != db[i][1]){
            var result = "fail";
        }
    }
    
    return result;
}