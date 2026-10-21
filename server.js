import express from 'express'
import { OrderController } from './orderController.js';
import { OrderService } from './orderService.js';
import { EmailService } from './emailService.js';
import { InventoryService } from './inventoryService.js';


const app=express();
app.use(express.json());

/**
  Dependency Initialization
 */
const emailService=new EmailService();
const inventoryService=new InventoryService();

const orderService=new OrderService()
const orderController=new OrderController(orderService)

/*
Register listeners(subscribers)
 */
//First mail listeners
orderService.on('order:created',async (orderData)=>{
    try{
        await emailService.sendEmail(orderData)
    }
    catch(err){
        console.log('Email Failed',err.message)
    }
  
})

//Second inventory listenrs
orderService.on('order:created',async (orderData)=>{
   try {
     await inventoryService.updateInventory(orderData)
   } catch (err) {
      console.log('Update failed',err.message)
   }
})



/* Routes */
app.get("/",(req,res)=>{
    res.send('Event Driven Architecture')
})

app.post("/orders",(req,res)=>orderController.create(req,res))

app.listen(4900,()=>{
    console.log(`Server is running on port 4900')
})



