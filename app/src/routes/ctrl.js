"use strict";

const process = require("./process.js");

const register = (req, res) => {
    //email이 고유한지 확인
    process.register(req, res);
}

const getUser = (req, res) => {
    const u_id = req.u_id;
    //u_id 바탕으로 데이터 조회해서 보내주기
    process.getUser(u_id, res);
}

const updateUser = (req, res) => {
    //어디를 수정하는지 확인
    const updatedb = Object.keys(req.body);

    //pwd를 수정할 경우
    if(updatedb[0] === "u_pwd") {
        console.log("pwd 수정중");
        //req.u_id, req.body를 바탕으로 정보 수정하기
        process.updatePwd(req, res);
        console.log("수정완료");

    //다른곳 수정
    } else {
        res.send("프로그램이 준비되어있지 않습니다");
    }
    
}

const adminPage = (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    //filter쿼리가 존재할 경우 정보를 filter해서 보내줌
    if (req.query.filter) {
        console.log("필터된 프로세스");
        const filter = req.query.filter;
        process.getFilteredPage(page, limit, filter, res);
    } else {
        console.log("필터안된 프로세스");
        process.getPage(page, limit, res);
    }
    
    
}

module.exports = {
    register,
    getUser,
    updateUser,
    adminPage
};