import {Subject} from 'rxjs';

class MessageService {
    constructor() {
        this.messageStream = new Subject();
    }
}

export default new MessageService();