import express, { Application, Request, Response } from 'express'
import bookRouter from './routes/book.routes';
import bodyParser from 'body-parser';
import BookService from './services/book.services';

const app: Application = express()

const port: number = 8085

app.use(bodyParser.json())

app.get('/health', (_, res: Response) => {
    res.sendStatus(200)
})

app.use(bookRouter);

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})

setInterval(BookService.cancelBook, 5000)
