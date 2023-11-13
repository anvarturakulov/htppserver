import express, {Request, Response, NextFunction} from 'express'
import { userRouter } from './users/users'


const port = 8000
const app = express()

app.use((req, res, next) => {
    // res.send('Server zaproslarni qabul qilishni boshladi')
    console.log('Time '+Date.now())
    next()
})

app.get('/hello', (req, res)=> {
    res.send('Uziga shukr!')
})

app.use('/users', userRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message)
    res.status(401)
})

app.listen(port, ()=> {
    console.log(`Сервер запущен на http://localhost:${port}`)
})
