import { useState } from "react"

export const Form = ({ addToList }) => {
  const [value, setValue] = useState('')

  const handleSumbit = (event) => {
    event.preventDefault()
    addToList(value)
    return setValue('')
  }

  return (
    <form onSubmit={(event) => handleSumbit(event)} className='d-flex flex-column align-items-center mt-3'>
      <div className="mb-3">
        <input
          placeholder="Задача"
          value={value}
          required
          name='onetodo'
          onChange={(event) => setValue(event.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  )
}
