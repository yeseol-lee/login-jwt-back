"use strict";

const express = require("express");
const router = express.Router();
const authJwt = require("../middleware/authJwt");

const ctrl = require("./ctrl");

router.get("/", (req, res) => {
    res.send("hello");
})

//회원가입 API
router.post("/register", ctrl.register );

//사용자 조회 API
router.get("/user", [authJwt.verifyToken], ctrl.getUser);

//사용자 정보 수정 API
//json타입으로 수정칼럼, 새로운 데이터를 받아옴
//ex) { "u_pwd": "1234" }
router.post("/update", [authJwt.verifyToken], ctrl.updateUser);

//관리자 회원목록 조회 API
router.get("/admin", [authJwt.isAdmin], ctrl.adminPage);
// router.get("/admin", )

module.exports = router;