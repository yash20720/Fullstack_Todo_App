import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    return (
        <div>
            <input style={{margin:5}} type="text" placeholder="Title" onChange={function(e){
                setTitle(e.target.value);
            }}></input><br></br>
            <input style={{margin:5}} type="text" placeholder="Description" onChange={function(e){
                setDescription(e.target.value)
            }}></input><br></br>
            <button style={{margin:5}} onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),
                    headers:{
                        "content-type":"application/json"
                    }
                })
                .then(async function (res){
                    const json=await res.json();
                    alert("todo added")
                })
            }}>Add a Todo</button>
        </div>
    )
}