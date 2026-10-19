import {EventEmitter} from 'node:events'

export class OrderService extends EventEmitter{

    createOrder(orderData) {
        //create oder logic

        //if success -> Announcement
        this.emit('order:created',orderData)

        return {id:Date.now().toString(),...orderData}

    }
}