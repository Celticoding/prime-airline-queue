import express from 'express';
import { Request, Response } from 'express';
import Queue from '../utils/queue';
import BookService from '../services/book.services';
//import bookService from '../services/book.services';

const router = express.Router();

router.post('/cancel', async (req: Request, res: Response) => {

  try {
    let bookingId = req.body.bookingId;
    console.log(bookingId)
    Queue.queue.push(bookingId);
    res.sendStatus(202); //Sending code 202 because the action has been queued
  } catch (e) {
    res.send({
      'code': 'ERROR_CANCEL',
      'message': 'Could not cancel this book with id :' + req.body.bookingId
    });
  }
});

export default router;