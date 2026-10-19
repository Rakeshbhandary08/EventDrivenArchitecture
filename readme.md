# Event-Driven Architecture in Node.js ⚡

A small project showing how to build **loosely coupled services** with Node's built-in `EventEmitter`.

When an order is created, the `OrderService` simply announces `order:created`. It has no idea who is listening. The **Email** and **Inventory** services react on their own, so new features can be added without touching the order logic.

## Highlights
- Event-driven design with `EventEmitter` (publisher → listeners)
- Clean separation: Controller → Service → Listeners
- Dependency injection through constructors
- Async listeners with error handling
- ES Modules + Express

## Flow
POST /orders → Controller → OrderService → emits `order:created` → Email + Inventory react

## Run it
npm install
npm run dev