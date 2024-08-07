import React, {Component} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from "axios";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    const navigate = useNavigate();

    return <WrappedComponent {...props} params={params} navigate={navigate} />;
};

 class EditTodoComponent extends Component {
   state = {
        description: '',
        responsible: '',
        priority: '',
        isCompleted: false
    }

    componentDidMount() {
        axios.get('http://localhost:3001/todos/' + this.props.params.id).then(response => {
            this.setState({description: response.data[0].description, responsible: response.data[0].responsible, priority: response.data[0].priority, isCompleted: response.data[0].isCompleted})
        }).catch(function (error) {
            console.log(error);
        })
    }

    onChangeTodoDescription(e) {
        this.setState({description: e.target.value});
    }

    onChangeTodoResponsible(e) {
        this.setState({responsible: e.target.value});
    }

    onChangeTodoPriority(e) {
        this.setState({priority: e.target.value});
    }

    onChangeTodoCompleted(e) {
        this.setState({
            isCompleted: !this.state.isCompleted
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            description: this.state.description,
            responsible: this.state.responsible,
            priority: this.state.priority,
            isCompleted: this.state.isCompleted
        };
        console.log(obj);
        axios.put('http://localhost:3001/todos/' + this.props.params.id, obj).then(res => console.log(res.data));

        this.props.navigate('/');
    }

    render() {
        return (<div>
            <h3 align="center">Update Todo</h3>
            <form onSubmit={
              (e)=>  this.onSubmit(e)
            }>
                <div className="form-group">
                    <label>Description:
                    </label>
                    <input type="text" className="form-control"
                        value={
                            this.state.description
                        }
                        onChange={
                           (e)=> this.onChangeTodoDescription(e)
                        }/>
                </div>
                <div className="form-group">
                    <label>Responsible:
                    </label>
                    <input type="text" className="form-control"
                        value={
                            this.state.responsible
                        }
                        onChange={
                          (e)=>  this.onChangeTodoResponsible(e)
                        }/>
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="priorityOptions" id="priorityLow" value="Low"
                            checked={
                                this.state.priority === 'Low'
                            }
                            onChange={
                              (e)=>  this.onChangeTodoPriority(e)
                            }/>
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="priorityOptions" id="priorityMedium" value="Medium"
                            checked={
                                this.state.priority === 'Medium'
                            }
                            onChange={
                               (e)=> this.onChangeTodoPriority(e)
                            }/>
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="priorityOptions" id="priorityHigh" value="High"
                            checked={
                                this.state.priority === 'High'
                            }
                            onChange={
                             (e)=>   this.onChangeTodoPriority(e)
                            }/>
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-check">
                    <input className="form-check-input" id="completedCheckbox" type="checkbox" name="completedCheckbox"
                        onChange={
                           (e)=> this.onChangeTodoCompleted(e)
                        }
                        checked={
                            this.state.isCompleted
                        }
                        value={
                            this.state.isCompleted
                        }/>
                    <label className="form-check-label" htmlFor="completedCheckbox">
                        Completed
                    </label>
                </div>

                <br/>

                <div className="form-group">
                    <input type="submit" value="Update Todo" className="btn btn-primary"/>
                </div>
            </form>
        </div>)
    }
}

export default withRouter(EditTodoComponent);