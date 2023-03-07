const Main = ({ todos, deleteList, deleteOneTodo }) => {

  if (!todos.length) {
    return <p>TODO лист пока пуст...</p>
  }

  return (
    <main className="mt-3">
      <ul className="list-group">
        {todos.map((todo, index) => {
          return <li key={todo.id} className="list-group-item">
            {`${index + 1}.  `}<span>{todo.title}</span>
            <div data-actions>
              <button
                type="submit"
                onClick={() => deleteOneTodo(todo.id)}
                className="btn btn-danger mx-3"
              >
                Удалить
              </button>
              <button
                type="submit"
                onClick={() => console.log('изменить')}
                className="btn btn-warning mx-3"
              >
                Изменить
              </button>
            </div>
          </li>
        })}
      </ul>


      <button
        type="submit"
        onClick={deleteList}
        className="btn btn-danger mt-3"
      >
        Удалить все
      </button>
    </main>
  )
}

export default Main
