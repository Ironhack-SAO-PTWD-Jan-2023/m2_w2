function Summary(props) {
  return(
    <div>
      <h1>TAREFAS CONCLUÍDAS</h1>
      <p className="tasks-completed">{props.tasksCompleted}</p>
    </div>
  )
}

export default Summary;