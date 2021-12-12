import express from "express";
import { reset } from "nodemon";
//정보를 보여주거나 삭제할 수 있음
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();
router.get('/airplane',async(req,res)=> {
    const plane = await selectSql.getAirplane();
    res.render('deleteAirplane',{
        title: "비행기 삭제",
        plane
    })
});
router.get('/airportadd',async(req,res)=> {
    const porta = await selectSql.getAirportAdd();
    res.render('deleteAirportAdd',{
        title: "공항 주소 삭제",
        porta
    })
});
router.get('/airportname',async(req,res)=>{
    const portn = await selectSql.getAirportname();
    res.render('deleteAirportn',{
        title:"공항 이름 삭제",
        portn
    })
})

router.get('/flight',async(req,res)=> {
    const flight = await selectSql.getFlight();
    res.render('deleteFlight',{
        title:"항공편삭제",
        flight
    })
});

router.post('/airplane',async(req,res)=> {
    const data = {
        Airplane_id : req.body.delBtn
    };
    console.log(data.Airplane_id);
    await deleteSql.deleteAirplane(data);
    res.redirect('/delete/airplane')
})

router.post('/airportadd',async(req,res)=>{
    const data = {
        Airport_code : req.body.delBtn
    };
    await deleteSql.deleteAirportadd(data);
    res.redirect('/delete/airportadd');
})

router.post('/airportname',async(req,res)=> {
    const data = {
        Airport_code : req.body.delBtn
    }
    await deleteSql.deleteAirportn(data);
    res.redirect('/delete/airportname');
})
router.post('/flight',async(req, res)=>{
    const data = {
        Flight_number : req.body.delBtn
    };
    await deleteSql.deleteFlight(data);
    res.redirect('/delete/flight');
})

module.exports = router;