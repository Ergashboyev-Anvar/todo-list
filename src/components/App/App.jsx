import { useEffect, useState } from 'react'
import AppForm from '../AppForm/AppForm'
import AppList from '../AppList/AppList'
import AppFilter from '../AppFilter/AppFilter'

const App = () => {
	const [data, setData] = useState([])
	const [filter, setFilter] = useState('all')

	// useEffect(() => {
	// 	fetch('https://dummyjson.com/todos')
	// 		.then(res => res.json())
	// 		.then(data => setData(data.todos))
	// }, [])

	const handleAddTodo = text => {
		const newTodo = {
			id: Date.now(),
			todo: text,
			completed: false,
		}
		setData(prevState => [newTodo, ...prevState])
	}

	const handleToggle = id => {
		setData(prevState =>
			prevState.map(item =>
				item.id === id ? { ...item, completed: !item.completed } : item
			)
		)
	}

  const filteredData = data.filter(todo => {
    if (filter == 'completed') {
      return todo.completed
    }

    if (filter == 'uncompleted') {
      return !todo.completed
    }

    return true
  })

	return (
		<div className='container w-50 my-5 bg-light rounded p-4'>
			<h1 className='text-center mb-4'>Todo List</h1>
			<AppForm onAdd={handleAddTodo} />
      <AppList todos={filteredData} onToggle={handleToggle} />
      <AppFilter filter={filter} setFilter={setFilter} />
		</div>
	)
}

export default App
