import { useEffect, useState } from 'react'
// import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from 'react-icons/ai';


function Container() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      console.log(todos)
      setTodos(todos)
    }  
  }, [])

  const saveTols = (params) =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) =>{
    setShowFinished(!showFinished)
  }

  const handleEdit =(e, id)=>{
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos);
    saveTols()
  }

  const handleDelete = (e, id) =>{
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos);
    saveTols()
  }

  const handleAdd = () =>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    saveTols()
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) =>{
    let id =e.target.name;
    let index = todos.findIndex(item => {
      return item.id===id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveTols()
  }


  return (
    <>

      <div className="container mx-auto my-5 md:rounded-xl p-5 md:w-1/2  bg-slate-500 min-h-[80vh]">
      <h2 className='text-center font-bold text-white underline text-lg'>Manage Your Todos</h2>
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add Your Todo</h2>
          <div className='flex h-full justify-center text-center md:flex-row flex-col'>
            <input type="text" onChange={handleChange} value={todo} className='w-2/3 m-3 rounded-md border-purple-600 border-2
             p-2 text-lg font-semibold ' placeholder='Bring Groceries' />
            <button onClick={handleAdd} disabled={todo.length<=3} className='bg-blue-950 add disabled:bg-slate-400 text-white font-semibold hover:bg-blue-800 m-4 px-2 h-full py-1 rounded-md text-lg'>Add</button>
          </div>
        </div>
        <input type="checkbox" onChange={toggleFinished} checked={showFinished} className='m-1'/>Show Finished
        <hr></hr>
          <h1 className='text-2xl font-bold mb-3 mt-2 '>YOUR TODOS</h1>
          <div className="todos">
            {todos.length ===0 && <div className='m-8 font-bold text-xl text-yellow-300 border-green-300 border-2 p-3 text-center' >You do not have any Task</div>}
            {todos.map(item =>{
              return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between m-4">
               <div className='flex gap-5'> 
                <input onChange={handleCheckbox} name={item.id} type="checkbox" id="" checked={item.isCompleted}/>
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
               </div> 
                <div className="buttons flex h-full">
                  <button onClick={(e)=>{handleEdit(e, item.id)}} className='bg-green-200 hover:bg-green-400 font-semibold px-3 py-1 rounded-md mx-4 text-lg'><FaEdit /></button>
                  <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-green-200 font-semibold hover:bg-green-400 px-3 py-1 rounded-md text-lg'><AiFillDelete /></button>
              </div>
             </div>
            })}
          </div>
      </div>
    </>
  )
}

export default Container
