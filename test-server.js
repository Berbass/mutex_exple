let orders_count = 997 // the app already registered 997 orders

async function get_orders_count() {
// will simulate the fetching of orders number into a database fo exemple
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('read done')

      resolve(orders_count)
    }, 100) // we assume the reading from the database will take about 100ms
  })
}

async function register_order() {
// will simulate data processing and writing into the database
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('write done')

      orders_count++

      resolve()
    }, 150) // we assume it'll take a bit longer than just reading the database for data
  })
}

async function process_new_order_n_get_result() {
// here we simulate the server side processing of the data and return the response after processing
  await register_order()

  const current_count = await get_orders_count()

  return (current_count == 1000
    ? 'Congrats! You made the 1000th order! Your goods are all free!'
    : 'Your order as been successfully registered'
  ) + ` - Order #${current_count}\n`
}

// http server definition
const express = require('express') // run npm install express
const app = express()

app.get('/make-order', async (req, res) => {
  res.send(await process_new_order_n_get_result())
})


app.listen(8080)
// as a result, the url "http://localhost:8080/make-order" will be exposed
// and requests to it will trigger the order registration process we just wrote
