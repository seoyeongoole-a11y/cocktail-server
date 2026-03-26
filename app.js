import express from "express"; //ES문법 (자바스크립트 최신 문법)
//const express = require("express");

mysql.createPool({
    host:"localhost",
    port: 3306,
    user: "root",
    password:"qwer1234",
    database:"cocktail",
});

const app = express();

app.get("/",(req,res)=>{
    //send : 문자열, HTML, 객체 등 여러 타입을 보낼 수 있음
    res.send("Hello,Word");
});

//DB에 값을 추가
app.post("/recipes",(req,res)=>{
    const {name,image,description} =req.body;
    pool.query("INSERT INTO recipes(name,image,description")
    [name,image,description],

res.status(201),json({name,image,description});

} catch (error) {
    console.error
    res.status(500).json({name,image,description});
});
//INSERT INTO recipes(user_id, name, image, description)
//VALUES(1, '모히또', '모히또.jpg', '상큼하고 청량한 쿠바식 칵테일');
app.post("/recipes",(req,res)=>{
    console.log(req.body);
    PoolConnection.query(
        "INSERT INTO recipes(user_id, name, image, description) VALUES(?, ?, ?)",
    );
});

//DB에 있는 칵테일 레시피들 조회 : get
app.get("")

app.listen(4000, ()=> {
    console.log("4000번 포트번호로 서버 실행 중");
});