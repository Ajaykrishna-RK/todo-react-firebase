import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Createtodo.css"
import Todo from './Todo'
import { db } from '../../../firebase/Firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'

function Createtodo() {

const [input,setInput] = useState("")

const [todos,setTodos] = useState([])

const handleChange = (e) =>{
    setInput(e.target.value)
}

const fetchPost = async () => {
       
  await getDocs(collection(db, "todos"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setTodos(newData);                
          console.log(todos, newData);
      })
 
}
useEffect(()=>{
  fetchPost();
})

const createTodos = async (e)=>{
e.preventDefault()
 await addDoc(collection(db, "todos"), {
 todo:input
})
}

  return (
    <div>

<Grid container spacing={3}  className="App__grid">
<Grid item md={12}>
<div className='create-todo-main'>
  <TextField
    label="create todo"
    variant="outlined"
    size="small"
    value={input}
    onChange={handleChange}
  />
  <Button  type="submit" variant="contained" className="App_submitBtn"  onClick={createTodos} >SAVE</Button>
  </div>
</Grid>
</Grid>
{todos.map(todo=>(
  <Todo todo={todo}/>
))}

</div>
  
  )
}

export default Createtodo