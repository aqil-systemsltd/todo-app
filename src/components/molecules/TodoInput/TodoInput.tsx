import { useState } from "react";

interface TodoInputProps{
    todoData:todo[];
    setTodoData:(x:todo[])=>void
}

interface todo{
    id:number ;
    description:string;
    status: string

}

function TodoInput({todoData,setTodoData}:TodoInputProps) {
    const [description,setDescription]=useState("")

    const addTodo=()=>{
        if(description.length>0)
            {
                let lastTodo=todoData[todoData.length-1]
                let lastId=lastTodo?lastTodo.id+1:1
                setTodoData([...todoData,{
                    id:lastId,
                    description:description,
                    status:"InProgress"
                }])
                setDescription("");

            }
    }

  return (
    <div>
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
        <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoInput