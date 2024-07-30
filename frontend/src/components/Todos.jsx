export function Todos({todos}) {
    return (
        <div style={{margin:5}}>
            {todos.map(function (todo){
                return (
                    <div>
                        <h2>{todo.title}</h2>
                    <h2>{todo.description}</h2>
                    <button onClick={()=>{
                        fetch("http://localhost:3000/comleted",{
                            method:"PUT",
                            body:JSON.stringify({
                                id:todo._id
                            }),
                            headers:{
                                "content-type":"application/json"
                            }
                        })
                    }}>{todo.completed?"Completed":"Mark as Completed"}</button>
                    </div>
                )
            })}
        </div>
    )
}