const express =require('express');
const app=express();
const port=3001;
let users=[{
    id:1,
    name:'saurabh',
    profile:'web'
},{
    id:2,
    name:'manoj',
    profile:'professore'
}];

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello');
});
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port);