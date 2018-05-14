import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import http from 'http'
import Debug from 'debug'
import fs from 'fs'
import config from './config'

const debug = Debug('app:server')
const app = express()
const logger = morgan('combined')
// view engine setup
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))


fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
    //console.log(require('./routes/' + file))
    require('./routes/' + file)(app)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

console.log(config.PORT)
const port = config.PORT || 8005
app.listen(port, err => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    // connect db
    require('./db')
    console.log(
		`server is now running on port ${port}`
	)
})
export default app