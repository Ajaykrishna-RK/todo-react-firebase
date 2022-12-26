import { Avatar, Button, FormControl, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Modal, Paper, TextField } from '@mui/material';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../../firebase/Firebase'; 
import "./Todo.css"


function Todo(props) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }

    const deleteTodo = async(id) =>{
        const remove = doc(db, 'todos', id)
        await deleteDoc(remove)
    }

    const [input,setInput] = useState("")

const handleChange = (e)=>{
    setInput(e.target.value)
} 

    const handleEdit = async (e) => {
        e.preventDefault()
        await updateDoc(doc(db, "todos",props.todo.id), { todo: input })
        
      };

  return (
    <>
    
    <Modal
                open={open}
                onClose={e => setOpen(false)}
                className="todo__modal"
                >
                <div >
                    <h4>update todo</h4>
                    <FormControl className="todo__modalForm">
                        <form>
                            <TextField
                          
                            placeholder={props.todo.todo}
                           onChange={handleChange}
                            variant="outlined"
                            size="small"/>
                            <Button type="submit" color="primary" variant="contained" size="small" className="todo__submit" onClick={handleEdit} >update</Button>
                        </form>
                    </FormControl>
                </div>
            </Modal>



    <Grid container spacing={3} justify="center">
                <Grid item xs={10} sm={10} md={6} lg={6}>
                    <Paper>
                        <List >
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                folder
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                            primary={props.todo.todo}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" color="primary" aria-label="edit" onClick={handleOpen}>
                                       Edit
                                 </IconButton>
                                    <IconButton
                                       
                                        edge="end"
                                        color="secondary"
                                        aria-label="delete" 
                                       
                                        onClick={()=>deleteTodo(props.todo.id)}
                                     
                                        >
                                    Delete
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
    
    </>
  )
}

export default Todo