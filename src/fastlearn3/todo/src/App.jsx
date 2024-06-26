import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
// import './index.css'

function App(){
  const [tasks, setTasks] = useState( [

    {   id :1,
        text : 'Doctors appointment',
        day : 'Feb 5th at 12:30pm',
        remender : true,
    },
    {
        id:2,
        text : 'Meeting at school',
        day : 'Feb 6th at 1:30pm',
        reminder : true,
    },
    {
        id:3,
        text : 'Food shopping',
        day : 'Feb 5th at 12:30pm',
        reminder : false,
    }

])
  return (
    <div className='container'>
      <Header/>
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App


