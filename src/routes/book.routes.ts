import express from 'express';
import { Request, Response } from 'express';
import Queue from '../utils/queue';

const router = express.Router();

router.post('/cancel-book', async (req: Request, res: Response) => {

  try {
    let bookingId = req.body.bookingId;
    
    Queue.queue.push(bookingId);
    res.status(200); //Sending code 202 because the action has been queued
    res.send({})
  } catch (e) {
    res.send({
      'code': 'ERROR_CANCEL',
      'message': 'Could not cancel this book with id :' + req.body.bookingId
    });
  }
});

export default router;