export class OrderController{
    constructor(orderService){
        this.orderService=orderService
    }

    create(req,res){
        const order=this.orderService.createOrder(req.body)
        return res.status(201).json({message:'Order created',order})
    }
}