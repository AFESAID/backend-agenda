const { Router } = require('express')
const userRouter = require('./users.routes')
const areaRouter = require('./areas.routes')
const agendaRouter = require('./agendas.routes')

function routerApi(app) {
    const router = Router()

    app.use('/api/v1', router)
    router.use('/users', userRouter)
    router.use('/areas', areaRouter)
    router.use('/agendas', agendaRouter)
}

module.exports = routerApi