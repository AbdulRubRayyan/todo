import React, { Component } from 'react'
import uuid from 'uuidv4'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        
        this.props.createTodo({...this.state, id: uuid(), completed: false})
        this.setState({
            task: ""
        })
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit} >
                <label htmlFor="task"></label>
                <input type="text" id="task" name="task" value={this.state.task} onChange={this.handleChange} placeholder="New task"/>
                <button>Add Todo!</button>
            </form>
        )
    }

}

export default Form
