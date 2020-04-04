var express = require('express');
var router = express.Router();
var ctrlHobby = require('../controllers/hobby');
var ctrlUser = require('../controllers/user');

/* GET Hobby page. */
router.get('/', ctrlHobby.homelist); //시작화면
router.get('/place', ctrlHobby.findplace); //장소 추천 첫화면
router.get('/place/inout', ctrlHobby.inout); //실내,실외 장소 선택
router.get('/place/inout/kind', ctrlHobby.kind) //취미 분야 선택 >> 장소 추천 진행!
router.get('/place/add', ctrlHobby.addplace); //장소 추가
router.get('/place/best', ctrlHobby.bestplace); //인기 장소

/* GET User pages */
router.get('/login', ctrlUser.login); //로그인
router.get('/join', ctrlUser.join); //회원가입
router.get('/like', ctrlUser.like); //즐겨찾기

/* 아직 디자인 안한 페이지 */
// 1. 검색화면
// 2. 시작화면-분야 하나 선택했을 때 화면

module.exports = router;
