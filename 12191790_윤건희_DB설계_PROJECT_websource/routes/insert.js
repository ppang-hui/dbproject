import express from "express";
import {insertSql} from "../database/sql";

const router = express.Router();

//home.hbs 파일을 찾아서 화면에 그려줍니다.
// insert/airport
router.get('/airplane',(req,res) => {
    res.render("airplane_insert");
});

router.get('/flight',(req,res)=> {
    res.render("flight_insert");
});
router.get('/airport',(req,res)=> {
    res.render("airport_insert");
});
router.post('/airplane',(req,res)=> 
{
    const vars = req.body;
    //vars 라는 변수에 데이터의 길이를 담아줍니다.
    //const var_length = Object.keys(req.body).length;

    const data = {
        Airplane_id : vars.airplane_id,
        Total_number_of_seats: vars.total_number_of_seats,
        Airplane_type : vars.airplane_type
    }
    insertSql.setAirplane(data);
    res.redirect('/insert/airplane');   
})
router.post('/flight',(req,res)=>{
    const vars = req.body;

    const data = {
        Flight_number : vars.flight_number,
        Airline : vars.airline
    }
    insertSql.setFlight(data);
    res.redirect('/insert/flight');
})
router.post('/airport',(req,res)=>{
    const vars = req.body;

    const data= {
        Airport_code : vars.airport_code,
        Name : vars.name,
    }
    const data1 = {
        Airport_code : vars.airport_code,
        City : vars.city,
        Country: vars.country
    }
    insertSql.setAirportname(data);
    insertSql.setAirportadd(data1);
    res.redirect('/insert/airport');
})
module.exports = router;