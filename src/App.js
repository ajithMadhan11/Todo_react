
import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
 
const [text, settext] = useState('');
const [todos, settodos] = useState(JSON.parse(localStorage.getItem("todos") || "[]"));
const [value, setValue] = useState(0); // integer state


  const addTodo =()=>{
    if(text=='') alert("It is empty");
    else{
      var etodos=todos ;
      console.table(etodos)
      let todo={
        'id':Date.now(),
        'text':text,
        'done':false
      }
      
      etodos.unshift(todo);
      console.table(todos)
      localStorage.setItem("todos", JSON.stringify(etodos))
      settext('');
    }

     }

const deleteBtn=(e)=>{
let d_id=e.target.name;
let new_list=todos.filter((todo)=>todo.id!=d_id);
localStorage.setItem("todos", JSON.stringify(new_list))
settodos(new_list)
 }

const doneBtn =(e)=>{
let d_id =e.target.name;
console.log(d_id);
for(let i=0;i<todos.length;i++){
  if(todos[i].id==d_id){
    todos[i].done=true;
    localStorage.setItem("todos", JSON.stringify(todos))
    
    
   setValue(value => value + 1); 
  }
}
 }

  return (
    <div className="App">
    <h1>Simple todo App</h1>
    <div className="container">
    <div className="form-group">
    <input type="email" className="form-control" placeholder="What next?" value={text || ''} onChange={(e)=>settext(e.target.value)}/>
    
  </div>
  <button className="btn btn-primary addbtn" onClick={addTodo}>Add new todo</button>
    </div>
  <div className="container">

    <table className="table">
    <tbody>
    {
  todos.map((to)=>(
      <tr key={to.id}>
        <td colSpan="2" className={to.done?'lineup':'nolineup'}>{to.text}</td>
        <td><button  name={to.id} onClick={doneBtn} className={to.done?'btn-danger btn':'btn-success btn'}>M</button></td>
        <td><button  name={to.id} onClick={deleteBtn} className="btn-info btn"><i className="fa fa-trash"></i></button></td>
      </tr>
      ))
}
    </tbody>
  </table>



  </div>
    </div>
  );
}

export default App;
