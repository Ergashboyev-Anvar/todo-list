const AppFilter = ({ filter, setFilter }) => {
	return (
		<div className='d-flex mt-4 btn btn-group p-0'>
			<button
				onClick={() => setFilter('all')}
				className={`btn ${
					filter === 'all' ? 'btn-secondary' : 'btn-outline-secondary'
				}`}
			>
				All
			</button>
			<button
				onClick={() => setFilter('completed')}
				className={`btn ${
					filter === 'completed' ? 'btn-success' : 'btn-outline-success'
				}`}
			>
				Completed
			</button>
			<button
				onClick={() => setFilter('uncompleted')}
				className={`btn ${
					filter === 'uncompleted' ? 'btn-danger' : 'btn-outline-danger'
				}`}
			>
				Uncompleted
			</button>
		</div>
	)
}

export default AppFilter
