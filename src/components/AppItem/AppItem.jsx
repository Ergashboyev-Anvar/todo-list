const AppItem = ({ todo, onToggle }) => {
	return (
		<li
			key={todo.id}
			className={`list-group-item d-flex justify-content-between align-items-center ${
				todo.completed ? 'list-group-item-secondary' : ''
			}`}
		>
			<span className={todo.completed ? 'text-decoration-line-through' : ''}>
				{todo.todo}
			</span>
			<button
				onClick={() => onToggle(todo.id)}
				className={`btn ${
					todo.completed ? 'btn-outline-danger' : 'btn-outline-success'
				}`}
			>
				{todo.completed ? 'Undo' : 'Done'}
			</button>
		</li>
	)
}

export default AppItem
