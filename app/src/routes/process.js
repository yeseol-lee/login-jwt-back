"use strict";

const User = require('../models/index.js').User;

const register = (req, res) => {
    //우선 이미 존재하는 이메일인지 확인하기
    User.findOne ({
        raw: true,
        where :{
            u_email: req.body.u_email
        }   
    })
    .then((data) => {
        //데이터가 이미 존재할 때
        if(data) {
            res.send("이미 존재하는 이메일 주소입니다");
        } else {
            writeData(req, res);
        }
        
    })
}

const writeData = (req, res) => {
    console.log("데이터 작성중");
    //유저정보 작성
    User.create({
        u_email: req.body.u_email,
        u_nm: req.body.u_nm,
        u_pwd: req.body.u_pwd,
        u_mobile_no: req.body.u_mobile_no
    })
    .then(() => {
        res.send("유저정보 작성 완료");
    })
    .catch((err) => console.error(err));

}

const getUser = (u_id, res) => {
    User.findAll({
        raw: true,
        where: {
            id: u_id
        }
    })
    .then((data) => {
        res.send(data);
    })
}

const updatePwd = (req, res) => {
    const u_id = req.u_id;

    User.update({
        u_pwd : req.body.u_pwd,
    }, {
        where: { id: u_id },
    })
    .then(() => {
        res.send("패스워드 수정 완료");
    })
    .catch((error) => console.error);
}

const getPage = (page, limit, res) => {
    User.findAll ({
        raw: true,
        attributes: ['u_id', 'u_email', 'u_nm', 'u_mobile_no', 'reg_dt', 'mod_dt', 'last_login_dt'],
        limit: parseInt(limit),
        offset: (page - 1) * parseInt(limit),
    })
    .then((data) => {
        console.log("hello");
        console.log(data);
        res.send(data);
    })
    .catch((error) => console.error);
}

const getFilteredPage = (page, limit, filter, res) => {

    User.findAll({
        raw: true,
        attributes: filter,
        limit: parseInt(limit),
        offset: (page - 1) * parseInt(limit)
    })
    .then((data) => {
        res.send(data);
    })
    .catch((error) => console.error);
}

module.exports = {
    register,
    getUser,
    updatePwd,
    getPage,
    getFilteredPage,

}
