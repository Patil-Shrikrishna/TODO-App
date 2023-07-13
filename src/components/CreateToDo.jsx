import React from 'react'

const CreateToDo = () => {
  // const [todo, setTodo] = useState({});

  // const handleChange = (event) => {
  //   setTodo(({ name, value }) => {
  //     return {
  //       name,
  //       value
  //     }
  //   })
  // }
  return (
    <form className='flex flex-col w-2/4 m-auto align-middle '>

      <input className='text-black border m-2 rounded-full p-4'
        placeholder='Title' type="text" id="title" name="title"/>
        {/* onChange={handleChange} /> */}

      <input className='text-black border m-2 rounded-full p-4'
        placeholder='Description' type="text" id="desc" name="desc"/>
         {/* onChange={handleChange}  */}

      <input className='text-black border m-2 rounded-full p-4'
        placeholder='Select Date' type="date" id="date" name="date"/>
        {/* onChange={handleChange}  */}


      {/* Radio buttons for priority selection */}
      <div className="flex gap-20">
        <label className='text-xl ' >Priority :</label>
        <div className='flex flex-col'>
          <label className='text-xl '>
            <input
              type="radio"
              value="low"
              name="low"
              // checked={priority === 'low'}
              // onChange={handleChange}
            />
            Low
          </label>
          <label className='text-xl '>
            <input
              type="radio"
              value="medium"
              name="medium"
              // checked={todo.priority === 'medium'}
              // onChange={handleChange}
            />
            Medium
          </label>
          <label className='text-xl '>
            <input
              type="radio"
              value="high"
              name="high"
              // checked={priority === 'high'}
              // onChange={handleChange}
            />
            High
          </label>
        </div>
      </div>
      {/* Radio buttons for progress selection */}
      <div className="flex gap-20">
        <label className='text-xl ' >Progress:</label>
        <div className='flex flex-col'>
          <label className='text-xl'>
            <input
              type="radio"
              value="inprogress"
              name="inprogress"
              // checked={progress === 'inprogress'}
              // onChange={handleProgressChange}
            />
            In Progress
          </label>
          <label className='text-xl '>
            <input
              type="radio"
              value="completed"
              name="completed"
              // checked={progress === 'completed'}
              // onChange={handleProgressChange}
            />
            Completed
          </label>
        </div>
      </div>
    </form>
  )
}

export default CreateToDo