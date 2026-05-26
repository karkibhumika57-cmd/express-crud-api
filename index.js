const express = require('express');
const app = express();
app.use(express.json());

let student=[
    
        {id:1, name:"Bhumika"},
        {id:2,name:"Sarawati"}
    
];
app.get('/student', (req,res)=>{
    res.send(student);
});

app.post('/student',(req,res)=>{
    const newstudent=req.body;
    student.push(newstudent);
     res.send("Student added");

});

app.put('/student/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    const students= student.find(s=>s.id ===id);
    if(students){
        students.name =req.body.name;
        res.send("student updated")
    }
    else{
        res.send("No such record found")
    }
});

app.delete('/student/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    student= student.filter(s=>s.id !==id);
    res.send("student delete")
})


const port =9000;
app.listen(port,()=>{
console.log(`Server running on port ${port}`);
})