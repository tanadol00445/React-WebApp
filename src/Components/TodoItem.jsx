import { FaPen , FaRegTrashCan } from "react-icons/fa6";
import { useRef , useState } from "react";

function TodoItem(props) {
  const dialog = useRef()
  const [editing , setEditing] = useState(false)
  const [title , setTitle] = useState(props.todo.title)
  
  
  const submitFrom = (e) =>{
    e.preventDefault()
    if(editing){
      const task = {
        title : title,
        date: new Date().toLocaleString(),
      }
      console.log(task)
      props.updateTask(task , props.id)
    }else{
      props.deleteTask(props.id)
    }
    closeModal()
  }

  const openModal = (isEditing) => {
    isEditing ? setEditing(true) : setEditing(false)
    dialog.current.showModal()
  }

  const closeModal = () =>[dialog.current.close()]
  const clickOutside = (e) => {
    if(e.target === dialog.current){
      closeModal()
    }
  }
return (
    <>
      <li className="flex bg-white rounded shadow-sm p-4 mt-4 first:mt-0">
      <div className="flex gap-x-4 mr-auto items-center ">
        <div className="h-6 w-6 rounded-full shadow-sm text-white text-sm bg-teal-400 flex items-center justify-center leading-none">{props.id + 1}</div>   {/*การเอาค่า  props มาใส่เฉยๆ*/}
        <div>
          <p className="font-semibold">{props.todo.title}</p>
          <p className="text-sm text-gray-400">{props.todo.date}</p>-
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <button type="button " className="todo-btn" onClick={()=>openModal(true)}>
          <FaPen/>
          </button>
        <button type="button " className="todo-btn" onClick={()=>openModal(false)}>
          <FaRegTrashCan/>
          </button>
      </div>
    </li>
    <dialog ref={dialog} onClick={clickOutside} className="rounded-md w-[480px] fixed left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 z-50">
      <form onSubmit={submitFrom} className="p-6">
        <h3 className="font-semibold text-xl">
          {editing ? ("Edit Task") : ("Do you want to Delete")}
        </h3>
        <div className="mt-2">
          {editing ? (<input 
          id="title" 
          type="text" 
          className="focus:outline-none w-full border rounded py-2 px-3" 
          maxLength="30" 
          placeholder='Type Somthing here...' 
          autoFocus required     
          value={title} onChange={(e) => setTitle(e.target.value)}
                ></input> ):("This will delete the task permanently.")}
        </div>
        <div className="mt-2 text-end space-x-2">
          <button type="submit" className={editing 
          ? 
            "rounded bg-teal-500 px-3 py-2 text- white hover:bg-teal-600":
            "rounded bg-rose-500 px-3 py-2 text- white hover:bg-rose-600"}>
            {editing ? "Confirm" : "Delete"}
          </button>
          <button type="button" onClick={closeModal} className="reunded border border-gray-200 px-3 py-2 hover:bg-gray-50">
            Close
          </button>
          
        </div>
      </form>
    </dialog>
    </>
  );
}

export default TodoItem;
