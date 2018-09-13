import React, { Component } from 'react';


class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: '',
      isCompleted: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTask: event.target.value
    });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {newTask, isCompleted} = this.state;
    $.ajax ({
      url: '/taskslist', 
      method: 'POST',
      data: {
        newTask, 
        isCompleted
      },
      success: function(data) {
        console.log('Success! new Task is saved', data);
      },
      error: function(err) {
        console.log('Error - Task was not saved', err);
      }
    });
  }
    

  render() {
    return (
      <div className='header'> 
        <form className='taskForm'>
          <input onChange={this.handleChange} className='taskInput' placeholder='input task...'/>
          <button className='taskSubmit' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}





export default CreateTask;