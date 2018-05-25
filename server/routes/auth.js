import Auth from '../controllers/auth'

module.exports = app => {
    app.post('/auth/login', Auth.login)
    app.post('/auth/register', Auth.register)
    app.post('/auth/logout', Auth.logout)
}