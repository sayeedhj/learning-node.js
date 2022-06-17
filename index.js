const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())
app.get('/', (req, res) =>{
    res.send('Hello Node.js.... What is your n')
});

const users = [
    {id:1, name:'Sabana', email:"Sabana@gmail.com", phone:'01943246653'},
    {id:2, name:'Sabnur', email:"sabnur@gmail.com", phone:'01343246540'},
    {id:3, name:'Dighi', email:"dighi@gmail.com", phone:'01854346558'},
    {id:4, name:'Puja', email:"puja@gmail.com", phone:'01343246543'},
    {id:5, name:'Mahi', email:"mahi@gmail.com", phone:'01787246546'},
    {id:6, name:'Faria', email:"faria@gmail.com", phone:'01343246544'},
    {id:7, name:'Popi', email:"popi@gmail.com", phone:'01343243345'}
]

app.get('/users', (req, res)=>{
    // filtered by search query 
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user=> user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{

    }
});

app.get('/user/:id', (req, res)=>{
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res)=>{
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.listen(port,()=>{
    console.log('Listening to port', port)
});

