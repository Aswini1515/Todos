import React from 'react';
import './App.css';
import TodoForm from './js/TodoInput'
import TodoList from './js/TodoList'




export default class App extends React.Component {

state ={
    todos : [] ,
    todosToShow:"all"
}
addTodo = (todo) =>{
    this.setState ({
    todos : [todo , ...this.state.todos]
})
}

toggleComplete = (id) => {
 this.setState({
  todos : this.state.todos.map (todo => {
      if (todo.id === id ) {
        return {

            ...todo,
            complete: !todo.complete
             }
      }
      else
      {
      return todo
      }

    })

 })


}

updateTodoToShow = (s) =>{
this.setState({
    todosToShow : s
})
}

removeAllTheCompletedTodos = () =>{

    this.setState({
        todos : this.state.todos.filter(todo => !todo.complete)
    })
}


render(){

let todos =[];
    if (this.state.todosToShow === "all"){
    todos=this.state.todos;
    }
    else if(this.state.todosToShow === "active"){
    todos=this.state.todos.filter (todo => !todo.complete)}
    else if (this.state.todosToShow === "complete"){
    todos=this.state.todos.filter (todo => todo.complete)

    }

return <div className="App">

    <h2 > Todo App </h2>  <hr />
    <br />
    <TodoForm onSubmit={this.addTodo}/>
    <br />

     <div> Todos Left : { this.state.todos.filter (todo => !todo.complete).length}
        </div>
        <br />
    {todos.map(todo => (
    <TodoList key={todo.id}
    toggleComplete={() => this.toggleComplete(todo.id)}

    todo={todo} />
    )
    )}
   <br />


    <div>
    <button onClick ={() => this.updateTodoToShow("all")}> All </button>{'  '}
    <button onClick ={() => this.updateTodoToShow("active")}> Active </button>{'  '}
    <button onClick ={() => this.updateTodoToShow("complete")}> Completed </button> </div>

    {this.state.todos.some (todo => todo.complete)? (
    <div>
    <button onClick={this.removeAllTheCompletedTodos}> Remove</button>
    </div>) : null }
</div>
}}

