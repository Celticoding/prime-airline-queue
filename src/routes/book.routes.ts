import express from 'express';
import { Request, Response } from 'express';
import Queue from '../utils/queue';
import Queues from '../dtos/dictionnary'

const router = express.Router();

router.post('/cancel-book',  async (req: Request, res: Response) => {

  console.log('hello')
  try {
    let bookingId = req.body.bookingId;
    if (!req.headers['x-api-key']) {
      Queue.queue.push(bookingId);
      res.status(400)
      res.send({})
      return
    }

    if (!Queues.has(req.headers['x-api-key'])) {
      Queues.set(req.headers['x-api-key'], [])
    }
    console.log(Queue.queue)

    res.status(202); //Sending code 202 because the action has been queued
    res.send({})
  } catch (e) {
    res.send({
      'code': 'ERROR_CANCEL',
      'message': 'Could not cancel this book with id :' + req.body.bookingId
    });
  }
});

export default router;