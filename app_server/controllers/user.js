/* 로그인 */
module.exports.login = function(req, res) {
    res.render('login', { title: 'login' }); //app_server-views-login-로그인화면
};

/* 회원가입 */
module.exports.join = function(req, res) {
    res.render('joinus', { title: 'join us' });
};

/* 즐겨찾기 */
module.exports.like = function(req, res) {
    res.render('like', { title: '즐겨찾기' });
};