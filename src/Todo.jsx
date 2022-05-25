import React, { useEffect, useState } from 'react'
import "./todo.css"

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const[count,setCount] = useState(0)


    function handleSubmit(e) {
        e.preventDefault();
       
    
        const newTodo = {
          id: new Date().getTime(),
          text: todo,
        };
        setTodos([...todos].concat(newTodo));
        setTodo("");
      }
    console.log(todos)
  

   const deleteTodo= (id)=> {
            console.log(id)
            let updatedTodos = [...todos].filter((todo) => todo.id !== id);
            setTodos(updatedTodos);

            if(todos.length==1){
                setCount(0)
            }
  }



  const linethrough = (e)=>{
      if( e.target.style.textDecoration)
      {
        e.target.style.removeProperty('text-decoration');
        setCount(count-1);
      
    }else{
        e.target.style.setProperty('text-decoration',"line-through")
        setCount(count+1);
        
    }
   
  }


  return (
    <div>

        <div>

            <h1>Things to do</h1>
       
    
      <div className='text-box'> 
      {
          todos.map((e)=>{
           return <div className='list'>
               <div>
             
               <h3   onClick={linethrough}>   <input type="checkbox" />  {e.text}</h3>
               </div>
               <div>
               <div  className='delete-btn' onClick={() => deleteTodo(e.id)}> X</div>
               </div>
              
              
           </div>
       })
      }
      </div>

      <h2>Done:{count}</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
        className='input-tag'
          type="text"
          onChange={(e) => setTodo(e.target.value) }
          value={todo}
        
        />
        <button className='btn' type="submit">Add Todo</button>
      </form>
      
        </div>
    </div>
  )
}

export default Todo