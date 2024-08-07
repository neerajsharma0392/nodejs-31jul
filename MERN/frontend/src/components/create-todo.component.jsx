import { useState } from "react"
import axios from "axios";

export function CreateTodoComponent(){
    const [description,setDescription]=useState();
    const [responsible,setresponsible]=useState();
    const [priority,setpriority]=useState();
  
    
    const onSubmit=(e)=>{
         e.preventDefault();
        let newTodo={
            description,
            responsible,
            priority,
            isCompleted:false
        }
        console.log(newTodo);
        axios.post("http://localhost:3001/todos",newTodo).then(res=>{
            console.log(res.data);
        })
       
        setDescription("");
        setresponsible("");
        setpriority("");
    }

    return(
       <div style={
            {marginTop: 20}
        }>
            <h3>Create New Todo</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Description:
                    </label>
                    <input type="text" className="form-control"
                        value={
                            description
                        }
                        onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Responsible:
                    </label>
                    <input type="text" className="form-control"
                        value={
                            responsible
                        }
                        onChange={
                           (e)=>setresponsible(e.target.value)
                        }/>
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="priorityOptions" id="priorityLow" value="Low"
                            checked={
                                priority === 'Low'
                            }
                            onChange={
                               (e)=>setpriority(e.target.value)
                            }/>
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="priorityOptions" id="priorityMedium" value="Medium"
                            checked={
                                priority === 'Medium'
                            }
                            onChange={
                                (e)=>setpriority(e.target.value)
                            }/>
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="priorityOptions" id="priorityHigh" value="High"
                            checked={
                                priority === 'High'
                            }
                            onChange={
                                (e)=>setpriority(e.target.value)
                            }/>
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}