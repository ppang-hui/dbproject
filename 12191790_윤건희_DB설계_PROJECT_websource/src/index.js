// module 불러오기
import express from "express";
import logger from "morgan";
import path from "path";

//사용자가 만든 기능 불러오기 (현재 파일 위치 기준으로 경로 작성) 
//.js 쓰지 않아도 자동으로 인식
//import homeRouter from "../routes/home";
import airplaneInsertRouter from "../routes/insert";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";
import deleteRouter from "../routes/delete";
//port number, 수정가능
const PORT = 3000;

//app이라는 이름으로 만들어서 express 사용
const app = express();

//주석 따로 필요 X
app.use(express.urlencoded({ extended : false }));
app.use(express.json());

app.set('views',path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

//라우터 주소 
//app.use('/',homeRouter);
app.use('/insert',airplaneInsertRouter);
app.use('/update', updateRouter);
app.use('/select', selectRouter);
app.use('/delete', deleteRouter);
app.listen(PORT, () => {
     console.log(`Example app listending at http://localhost:${PORT}`)
})