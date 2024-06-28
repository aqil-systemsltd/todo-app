


interface TodoInputProps{
    todoData:todo[];
    setTodoData:(x:todo[])=>void
}

interface todo{
    id:number ;
    description:string;
    status: string

}
function TodoList({todoData,setTodoData}:TodoInputProps) {


    const deleteTodo=(id:number)=>{
        let temp=todoData.filter(ob=>ob.id!==id)
        setTodoData(temp);
    }
    const markComplete=(id:number)=>{
        let temp=todoData.map(ob=>{
            if(ob.id===id){
                ob.status="Completed"
            }
            return ob
        })
        setTodoData(temp);
    }
  return (
    <ul className="table">
        {todoData.map(ob=>{

            return(
                <li className="card">
                <p>Description:   {ob.description}</p>
                <p>Status :    {ob.status}</p>
                {ob.status==="InProgress"? <button onClick={()=>markComplete(ob.id)}>Mark Complete</button>:null}
                
                <button onClick={()=>deleteTodo(ob.id)}>Delete</button>
            </li>
    
            )
        })}
    </ul>
  )
}

export default TodoList