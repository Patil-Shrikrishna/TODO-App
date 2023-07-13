import React from 'react'
import { Link } from 'react-router-dom'
import randomColor from './randomColor';
const Sidebar = () => {
    const cardColor = randomColor()
    return (
        <section className={`flex flex-col  gap-10 w-96 p-10 ${cardColor}`}>
            <h2 className='bg-clip-text font-extrabold  text-3xl text-center'>Todo Task</h2>
            <ul className='text-xl space-y-5'>
                <li className=' border-b-2 border-gray-400 pb-2 '><Link to='/createtodo'>Create TODO</Link></li>
                <li className=' border-b-2 border-gray-400 pb-2 '><Link to='/dashboard'>Dashboard</Link></li>
                <li className=' border-b-2 border-gray-400 pb-2 '><Link to='/todo'>Todo</Link></li>
                <li className=' border-b-2 border-gray-400 pb-2 '><Link to='/completed'>Completed</Link></li>
                <li className=' border-b-2 border-gray-400 pb-2 '><Link to='/progress'>In Progress</Link></li>
                <li className=' border-b-2 border-gray-400 pb-2 '><Link to='/calender'>Calender</Link></li>
            </ul>

        </section>
    )
}
export default Sidebar