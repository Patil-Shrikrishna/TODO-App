import React, { useState } from 'react'
import randomColor from '../components/randomColor';
const btnColor = randomColor()
const CreateToDo = () => {
  const [todo, setTodo] = useState({
    Title: "",
    Description: "",
    Select_Date: "",
    Priority: "",
    Progress: ""
  });

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setTodo({ ...todo, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(todo)
  }

  // console.log(todo)
  return (
    <form className='flex flex-col w-2/4 my-40 mx-auto justify-center '>

      <input className='text-black border m-2 rounded-full p-4'
        placeholder='Title' type="text" id="title" name="Title" onChange={handleChange} />

      <input className='text-black border m-2 rounded-full p-4'
        placeholder='Description' type="text" id="desc" name="Description" onChange={handleChange} />

      <input className='text-black border m-2 rounded-full p-4'
        placeholder='Select Date' type="date" id="date" name="Select_Date" onChange={handleChange} />



      {/* Radio buttons for priority selection */}
      <div className="flex gap-10 justify-start mt-10 ">
        <label className='text-xl w-1/6 ml-5' >Priority :</label>
        <div className='flex gap-10 w-full flex-wrap'>
          <label className='text-xl w-fit flex gap-3'>
            <input
              type="radio"
              value="low"
              name="Priority"

              checked={todo.Priority === 'low'}
              onChange={handleChange}
            />
            Low
          </label>
          <label className='text-xl w-fit flex gap-3'>
            <input
              type="radio"
              value="medium"
              name="Priority"

              checked={todo.Priority === 'medium'}
              onChange={handleChange}
            />
            Medium
          </label>
          <label className='text-xl w-fit flex gap-3'>
            <input
              type="radio"
              value="high"
              name="Priority"

              checked={todo.Priority === 'high'}
              onChange={handleChange}
            />
            High
          </label>
        </div>
      </div>
      {/* Radio buttons for progress selection */}
      <div className="flex gap-10 justify-start my-10">
        <label className='text-xl w-1/6 ml-5' >Progress:</label>
        <div className='flex w-full gap-10 flex-wrap'>

          <label className='text-xl w-fit flex gap-3'>
            <input
              type="radio"
              value="inprogress"
              name="Progress"
              checked={todo.Progress === 'inprogress'}
              onChange={handleChange}
            />
            In Progress
          </label>

          <label className='text-xl w-fit flex gap-3'>
            <input
              type="radio"
              value="completed"
              name="Progress"
              checked={todo.Progress === 'completed'}
              onChange={handleChange}
            />
            Completed
          </label>

        </div>
      </div>
      <button
        type='submit'
        class={`${btnColor} hover:rounded-full text-white text-2xl font-normal py-3 px-4 rounded`}
        onClick={e => handleSubmit(e)}
      >
        Create Todo
      </button>
    </form>
  )
}

export default CreateToDo