import React,{ useRef, useState } from 'react'

function NewTask({addTask}) {
//    const [title, setTitle] = useRef("");
    const title = useRef();  // ประกาศตัวแปร title เพื่ออ้างอิงถึง input field 
    const form = useRef(); // ประกาศตัวแปร form เพื่ออ้างอิงถึง form element
    const submitForm = (e) => { //ฟังก์ชันจัดการการ submit form 
        e.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็ปเมื่อ submit form 
        
        const task ={       //สร้างอ๊อบเจ็กต์ task ใหม่    
                title: title.current.value ,
                date: new Date().toLocaleString(),
            
            };
            addTask(task)               //เรียกใช้ฟังก์ชัน addTask
            form.current.reset();       //รีเซ็ตฟอร์มโดยการล้างค่าทั้งหมดในฟอร์ม
    };
    return (
    <>
        <form ref={form} onSubmit={submitForm}>
            <label htmlFor="title" className="text-lg text-gray-400">
            Add new New Task
            </label>
            <div className='flex gap-x-2 bg-white rounded-md shadow-sm p-2 pl-3 mt-2'>
                <input id="title" type="text" className="focus:outline-none w-full" maxLength="30" placeholder='Type Somthing here...' autoFocus required ref={title}  //คือการเชื่อมโยง input กับตัวแปรข้างบน     
                //value={title} onChange={(e) => setTitle(e.target.value)}
                ></input>
                <button type='submit' className='w-40 px-3 py-2 rounded font-semibold bg-blue-500 text-white hover:bg-blue-700'>NewTask</button>
            </div>
        </form>
    </>
  )
}

export default NewTask