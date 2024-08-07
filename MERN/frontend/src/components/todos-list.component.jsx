import { TodoComponent } from "./todo.component";
import { Component } from "react";
import axios from "axios";

export class TodosListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    todoList() {
        return this.state.todos.map(function (currentTodo, i) {
            return <TodoComponent todo={currentTodo}
                key={i}/>;
        });
    }

    render() {
        return (<div>
            <h3>Todos List</h3>
            <table className="table table-striped"
                style={
                    {marginTop: 20}
            }>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody> {
                    this.todoList()
                } </tbody>
            </table>
        </div>)
    }

    componentDidMount() {
        axios.get('http://localhost:3001/todos/').then(response => {
            this.setState({todos: response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }

    componentDidUpdate() {
        axios.get("http://localhost:3000/todos/").then(response => {
            this.setState({todos: response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }
}