import AppItem from '../AppItem/AppItem'

const AppList = ({ todos, onToggle }) => {
	if (todos.length === 0) {
		return <p className='text-center text-muted'>No tasks found</p>
	}

	return (
		<ul className='list-group'>
			{todos.map(todo => (
				<AppItem todo={todo} onToggle={onToggle} />
			))}
		</ul>
	)
}

export default AppList
