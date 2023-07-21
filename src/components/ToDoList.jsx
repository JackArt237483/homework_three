import React, { Component } from 'react'


export default class ToDoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      text: ''
    }
  }

  handleChangeInput = (event) => {
    this.setState({text: event.target.value})
  }

  handleAddTask = () => {
    if(this.state.text.trim() === '') return
    const newTasks = [...this.state.tasks, this.state.text]
    this.setState({tasks: newTasks, text: '' })
  }

  render() {
    return (
      <div className='text_some'>
         <input
         type="text"
         value={this.state.text}
         onChange={this.handleChangeInput}
         className='input'
         />
         <button
         className='button'
         onClick={this.handleAddTask}>Add link</button>
         <ul>
          {
            this.state.tasks.map((tasks,index)=>(
              <li
              style={{marginTop: "20px"}}
              className='li_list'
              key={index}>{tasks}</li>
            ))}
         </ul>
      </div>
    )
  }
}
