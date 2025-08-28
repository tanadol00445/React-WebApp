import React, { useState } from 'react'
import NewTask from '../Components/NewTask'
import TodoItem from '../Components/TodoItem'
import Spinner from "../Components/Spinner"
import { toast } from 'react-toastify'

function HomePage() {
  const [todos,setTodos] = useState([]) //เก็บตัวแปรเป็น array 
  const [loading , setLoading] = useState(false)
  function delay(){
    return new Promise((resolve) => setTimeout(resolve,300))
  }

  const addTask = async (task) => {
    setLoading(true)
    setTodos((preventTodos) => [...preventTodos, task]) //เพิ่มงานใหม่ลงใน array ของ todos และคัดลอกงานเก่าๆ มาไว้ด้วย
    await delay()
    setLoading(false)
    toast.success("Successfully Added Task")
  
  }

  const deleteTask = async (id) => {
    setLoading(true)
    setTodos((prevTodos) => prevTodos.filter((_,i)=> i !== id)) // กรองเอางานที่ไม่ตรงกับ id ที่ส่งมาออกจาก array ของ todos
    await delay()
    setLoading(false)
    toast.error("Successfully Delete Task")
  }
  const updateTask = async (task, id) => {
    setLoading(true)
    setTodos((prevTodos) => prevTodos.map((t, i) => (i === id ? task : t)))
    await delay()
    setLoading(false)
    toast.info("Successfully Update Task")
  }

  return (
    <>
      <NewTask addTask={addTask}/>
      {/*ส่งฟังก์ชัน addTask ไปยังคอมโพแนนต์ NewTask เพื่อให้ NewTask สามารถเพิ่มงานใหม่ได้*/}
      { loading ? (<Spinner />) : (todos.length > 0 && (<ul className='bg-gray-200 rounded-md shadow-sm p-4'>
        {
          todos.map((todo, i)=>( //วนลูปผ่าน array ของ todo
            <TodoItem key={i} id={i} todo={todo} deleteTask = {deleteTask} updateTask = {updateTask}/> // ส่งค่า todo และดัชนี i ไปยังคอมโพแนนต์ TodoItem
          ))
        }
      </ul>
    )) }
      
    </>
  )
}

export default HomePage