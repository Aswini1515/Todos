import React from 'react';
import '../App.css';
import shortid from 'shortid';


export default class TodoForm extends React.Component {

state ={
text : ""
}
// To Handle the change in input
handleChange = (e) => {
this.setState({ [e.target.name] : e.target.value})
}

// To Handle submit
handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
    id : shortid.generate(),
    text : this.state.text,
    complete : false

    })

    this.setState ({
    text : ""
    })
}




render(){
return (

<form onSubmit={this.handleSubmit}>
        <input
        name= "text"
        value={this.state.text}
        onChange={this.handleChange}
        placeholder="Enter todo" />

        <br /> <br />

        <button onClick= {this.handleSubmit}> Add todo </button>
        </form>
)}}

