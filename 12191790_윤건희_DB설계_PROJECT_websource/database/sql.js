import async from "hbs/lib/async";
import mysql from "mysql2";

//db연결

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'project',
        password: 'host4004',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit : 0
    }
);
//주석 X
const promisePool = pool.promise();

//async가 있으면 awiat가 끝날 때까지 기다려 주겠다는 것이다.
//database에서 select를 할 때, 즉 검색을 할 때 이용하는 함수입니다.
//query 안에는 실제 mysql의 문법대로 작성해 줍니다.
//example) select * from employee에서는 *은 all 을 의미하므로 getEmployee 함수를 실행하면 employee 테이블에 있는 모든 값들을 보여줍니다.
//외부에서 함수를 쓰기 위해서는 export를 붙여줘야 합니다.
export const selectSql = {
    getAirplane: async() => {
        const [rows] = await promisePool.query(`select * from airplane`);

        return rows;
    },
    getAirportname: async() => {
        const [rows] = await promisePool.query(`select * from airport_name`);

        return rows;
    },
    getAirportAdd: async() => {
        const [rows] = await promisePool.query(`select * from airport_add`);

        return rows;
    },
    getFlight: async() => {
        const [rows] = await promisePool.query(`select * from flight`);

        return rows;
    }
}
//외부에서도 함수를 쓰기 위해 export를 앞에 붙여줍니다.
export const insertSql = {
//데이터 입력을 위한 변수 data를 받아온다.
    
    setAirplane: async (data) => 
    {
        const sql = `insert into airplane values (${data.Airplane_id}, ${data.Total_number_of_seats}, "${data.Airplane_type}")`;
        console.log(data);
        await promisePool.query(sql);
    },
    setFlight: async(data) => {
        const sql = `insert into flight values (${data.Flight_number}, "${data.Airline}")`;
        console.log(data);
        await promisePool.query(sql);
    },
    setAirportname: async(data) => {
        const sql = `insert into airport_name values ("${data.Airport_code}","${data.Name}");`;
        console.log(data);
        await promisePool.query(sql);
    },
    setAirportadd: async(data) => {
        const sql = `insert into airport_add values ("${data.Airport_code}", "${data.City}", "${data.Country}")`;
        console.log(sql);
        await promisePool.query(sql);
    }

}
//조건을 설정해 줘야 함 
//update를 하기 위해서는 수정의 조건이 필요합니다.
//그 조건은 where로 넣어줍니다.
export const updateSql = {
   
    updateAirplane: async(data)=> {
        const sql = `update airplane set Airplane_type = "${data.Airplane_type}" where Airplane_id = 3 `;
        await promisePool.query(sql);
    },
    updateAirport: async(data) => {
        const sql = `update airport_name set Name = "${data.Name}" where Airport_code = "K01"`;
        await promisePool.query(sql);
    },
    updateFlight: async(data)=> {
        const sql = `update flight set Airline = "${data.Airline}" where Flight_number = 3`;
        await promisePool.query(sql);
    }
}

export const deleteSql = {
   
   
    deleteAirplane: async (data) => {
        console.log(`delete from where Airplane_id = "${data.Airplane_id}" `);
        const sql = `delete from airplane where Airplane_id = ${data.Airplane_id}`;
        await promisePool.query(sql);
    },
    deleteAirportadd: async(data) => {
        const sql = `delete from airport_add where Airport_code = "${data.Airport_code}"`;
        await promisePool.query(sql);
    },
    deleteAirportn: async(data) => {
        const sql = `delete from airport_name where Airport_code = "${data.Airport_code}"`;
        await promisePool.query(sql);
    },
    deleteFlight: async(data) => {
        const sql = `delete from flight where Flight_number = ${data.Flight_number} `;
        await promisePool.query(sql);
    }
  }