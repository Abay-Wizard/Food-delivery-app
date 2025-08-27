import express from 'express'
const app = express()

const logger = (req,res,next) =>{
  console.log('Hello there!')
  next()
}

app.use(logger)
app.get('/',(req,res,next)=>{
    console.log('homepage')
    res.send('Welcome to the homepage!')
    next()
})
app.get('/about',(req,res)=>{
    console.log('this is about')
    res.send('This is an about page!')
})


app.listen(5000,()=>{
    console.log('Server is running on port 5000 ...!')
})