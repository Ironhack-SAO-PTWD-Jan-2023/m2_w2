// import { useState } from "react";

function Task(props) {
  // const [taskCompleted, setTaskCompleted] = useState(true);

  // const toggleTask = () => {
  //   setTaskCompleted(!taskCompleted);
  // }

  return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{props.task.name}</h1>
        {props.task.isDone ? <span>FEITA</span> : <span>AGUARDANDO ⌛</span>}
      
        <h2>Descrição:</h2>
        <p>{props.task.description}</p>

        <button className="add" onClick={() => props.toggleTask(props.task._id)}>
          {props.task.isDone ? <span>DESFAZER</span> : <span>✔️</span>}
        </button>
      </div>
    </div>
  )
}

export default Task;