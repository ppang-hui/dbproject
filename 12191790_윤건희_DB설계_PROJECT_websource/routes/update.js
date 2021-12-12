// /employee = update/employee
import express from "express";
import {selectSql, updateSql} from "../database/sql";

//라우터 변수
const router = express.Router();
router.get('/airplane', async(req, res)=> {
    const plan_res = await selectSql.getAirplane();
    res.render('updateAirplane', {
        title: "비행기 테이블 갱신",
        plan_res
    });
})

router.get('/airport',async(req,res)=> {
    const port_res = await selectSql.getAirportname();
    res.render('updateAirport', {
        title: "공항이름갱신",
        port_res
    })
})

router.get('/flight',async(req, res)=> {
    const fli_res = await selectSql.getFlight();
    res.render('updateFlight', {
        title:"항공편 이름 갱신",
        fli_res
    })
})

router.post('/flight',async(req,res)=>
{
    const vars = req.body;
    const data = {
       Airline: vars.airline
    }

    await updateSql.updateFlight(data);
    res.redirect('/select');
   
})
//post 방식, updateSql.updateEmployee 함수를 실행합니다.
//함수를 실행한 뒤 /select로 redirect 시켜줍니다.
router.post('/employee',async(req, res)=>{
    const vars =req.body;
    console.log(vars.salary);
    const data = {
        Salary : vars.salary
    }
    await updateSql.updateEmployee(data);

    res.redirect('/select');
});

router.post('/airplane',async(req, res)=> {
    const vars = req.body;
    console.log(vars.airplane_type);
    const data = {
        Airplane_type : vars.airplane_type
    };
    
    await updateSql.updateAirplane(data);
})

router.post('/airport',async(req, res)=> {
    const vars = req.body;
    const data = {
        Name : vars.name
    };
    await updateSql.updateAirport(data);
})
//post 방식, updateSql.updateDepartment(data)를 실행합니다.

router.post('/department', async(req, res)=> {
//req.body를 vars 변수에 넣어줍니다.
    const vars = req.body;
    //값 이 제대로 들어왔는지 console로 확인합니다
    console.log(vars.dname);

    const data = {
        Dname : vars.dname
    }
    //매개변수를 data로 넣어주고 updateSql.updateDepartment를 실행합니다.
    await updateSql.updateDepartment(data);

    res.redirect('/select');
})


module.exports = router;