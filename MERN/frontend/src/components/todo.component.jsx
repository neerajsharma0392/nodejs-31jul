import {Link} from "react-router-dom";
import { Component } from "react";
import axios from "axios";

export class TodoComponent extends Component {
    render() {
        return (<tr>
            <td className={
                this.props.todo.isCompleted ? "completed" : ""
            }> {
                this.props.todo.description
            } </td>
            <td className={
                this.props.todo.isCompleted ? "completed" : ""
            }> {
                this.props.todo.responsible
            } </td>
            <td className={
                this.props.todo.isCompleted ? "completed" : ""
            }> {
                this.props.todo.priority
            } </td>
            <td>
                <Link to={
                    "/edit/" + this.props.todo._id
                }>Edit</Link>
                <Link style={
                        {marginLeft: "10px"}
                    }
                    to='/'
                    onClick={
                        () => axios.delete(`http://localhost:3001/todos/${
                            this.props.todo._id
                        }`).then(() => window.location.reload())
                }>
                    Delete
                </Link>
            </td>
        </tr>);
    }
}