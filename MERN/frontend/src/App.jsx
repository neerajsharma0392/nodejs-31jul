
import './App.css';
import {Link, Routes,Route} from "react-router-dom";
import logo from "./logo.png";
import { TodosListComponent } from './components/todos-list.component';
import  EditTodoComponent  from './components/edit-todo.compnent';
import { CreateTodoComponent } from './components/create-todo.component';

function App() {
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/" target="_blank">
            <img src={logo}
                width="30"
                height="30"
                alt=""/>
        </a>
        <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
        <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
            </ul>
        </div>
    </nav>
    <Routes>
                <Route path="/" exact
                    element={<TodosListComponent/>}/>
                <Route path="/edit/:id"
                    element={<EditTodoComponent/>}/>
                <Route path="/create"
                    element={<CreateTodoComponent/>}/>
            </Routes>
</div>);
}

export default App;
