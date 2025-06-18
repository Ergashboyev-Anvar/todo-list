import { useState } from 'react'

const AppForm = ({ onAdd }) => {
	const [text, setText] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		
		if (!text.trim())	return

		onAdd(text)
		setText('')
	}

	return (
		<form className='d-flex align-items-center gap-2 mb-4' onSubmit={handleSubmit}>
			<input
				className='form-control w-75'
				type='text'
				placeholder='Enter a task...'
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			<button
				className='btn btn-outline-primary w-25'
				type='submit'
				onClick={handleSubmit}
			>
				Add
			</button>
		</form>
	)
}

export default AppForm
