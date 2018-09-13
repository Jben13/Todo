import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import TasksList from './components/tasksList.jsx';
import CreateTask from './components/createTask.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks:[],
      inputText:'',
      mode:'view'
    };
    this.getSavedTasks = this.getSavedTasks.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  getSavedTasks() {
    $.get('/taskslist', (data) => {
      console.log(data);
      this.setState({
        tasks: data
      });
    });
  }

  componentDidMount () {
    this.getSavedTasks();
  };


  changeMode(option) {
    this.setState({
      mode: option
    })
  }

  onView() {
    const {mode} = this.state;

    if (mode === 'view') {
      return <TasksList tasks={this.state.tasks} />
    } else if (mode === 'create') {
      return <CreateTask />
    }
  };

  render() {
   
    return (
      <div>
      <h2>JBen's Task List</h2>
      <div>
          <button onClick={() =>this.changeMode('create')}>New Task</button>
        </div> 
        <br />
      <div className='view'>
        {this.onView()}
      </div>
      </div>
    );
  }
};


ReactDOM.render(<App />, document.getElementById('app'));

