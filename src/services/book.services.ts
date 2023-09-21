import Queue from '../utils/queue';
import axios from 'axios';

class BookService {
  
    
  static async cancelBook() {

    if (Queue.queue[0] !== undefined) {
        let bookingId = Queue.queue[0];
        try {
            const params = { params: {
                bookingId: bookingId
            }}
            const response = await axios.post("http://localhost:8082/cancel-book", params);
            Queue.queue.shift()
            console.log(response.data);
        } catch (exception) {
            console.log(exception);
        }
    }
 }

}

export default BookService;