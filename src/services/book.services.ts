import Queue from '../utils/queue';
import axios from 'axios';

class BookService {
   
    static async cancelBook() {
        if (Queue.queue.length > 0) {
            let bookingId = Queue.queue[0];
            try {
                await axios.post("http://localhost:8082/cancel-book", { bookingId: bookingId });
                Queue.queue.shift()
            } catch (exception) {
                console.log(exception); 
            }
        }
    }
}

export default BookService;