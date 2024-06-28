import { useEffect, useState } from "react"
import TodoInput from "../molecules/TodoInput/TodoInput"
import TodoList from "../molecules/TodoList/TodoList"


interface TodoInputProps{
    todoData:todo[];
    setTodoData:(x:todo[])=>void
}

interface todo{
    id:number ;
    description:string;
    status: string

}

function TodoComponent() {
    const [todoData,setTodoData]=useState<todo[]>([])

    useEffect(()=>{
        console.log("todoData",todoData)
    },[todoData])
  return (
    <>
    <TodoInput todoData={todoData} setTodoData={setTodoData}/>
    <TodoList todoData={todoData} setTodoData={setTodoData}/>
    </>
  )
}

export default TodoComponent