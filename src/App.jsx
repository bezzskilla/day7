import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer'
import Main from './components/Main';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LS_TOKEN } from './utils/constants';

// компонент ререндерится при ререндере родительского компонента
// компонент ререндерится при изменении внутреннего состояния
// компонент ререндерится при изменении props

function App() {
  const [todos, setTodos] = useState(() => {
    const todoList = localStorage.getItem(LS_TOKEN)

    return todoList ? JSON.parse(todoList) : []
  })

  // первый аргумент - колбек - ЧИСТАЯ функция
  // массив зависимостей отсуствует - срабатывает на каждый рендер компонента
  // массив зависимостей пустой - срабатает 1 раз при инициализации
  // массив зависимостей указан - срабатает 1 раз при инициализации, 
  //                              срабатывает при изменении значений в массиве
  useEffect(() => {
    localStorage.setItem(LS_TOKEN, JSON.stringify(todos))
  }, [todos])

  // не чистая функция
  const exFunc = (number) => {
    return number + Math.random()
  }

  // чистая функция
  const exFunc4 = (number) => {
    return number * 3
  }


  const addToList = (value) => {
    const newTodo = {
      id: uuidv4(),
      title: value,
      status: false
    }

    setTodos((prev) => [newTodo, ...prev])
  }

  const deleteList = () => {
    setTodos([])
  }

  const deleteOneTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  console.log('APP render');

  return (
    <div className="App">
      <Header addToList={addToList} />

      <Main todos={todos} deleteList={deleteList} deleteOneTodo={deleteOneTodo} />

      <Footer />
    </div>
  );
}

export default App;
