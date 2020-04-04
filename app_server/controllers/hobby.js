/* 시작화면 */
module.exports.homelist = function(req,res) {
    res.render('home', { title: '페이보릿'});
};

/* 장소추천 첫화면-실내 실외 물어보기*/
module.exports.findplace = function(req, res) {
    res.render('find', { title: '장소 추천' });
};

/* 장소추천 두번째-분야 선택하게하기 */
module.exports.inout = function(req, res) {
    res.render('find2_kind', { title: '취미 분야' });
};

/* 장소추천 제대로 시작-OPEN API랑 지도 가져오기 */
module.exports.kind = function(req, res) {
    res.render('find3_map', { title: '당신에게 맞는 취미는?' });
};

/* 장소추가 */
module.exports.addplace = function(req, res) {
    res.render('add', { title: '장소 추가' });
};

/* 인기장소 */
module.exports.bestplace = function(req, res) {
    res.render('best', { title: 'TOP 20' });
};