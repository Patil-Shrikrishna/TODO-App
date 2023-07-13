import React from 'react'
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import randomColor from './randomColor';
const TodoCard = ({ Title, Desc, Date, Priority, Progress, Completed }) => {
    
    const cardColor = randomColor()

    return (
        <div className={`flex flex-col ${cardColor} rounded-lg p-4 gap-2`}>
            <div className='flex justify-between '>
                <p className='text-2xl'>{Title}</p>
                <div className='flex gap-4'>
                    <button className='text-xl'>
                        <BiEdit/>
                    </button>
                    <button className='text-xl'>
                        <MdDelete/>
                    </button>
                </div>
            </div>
            <div className='flex justify-between'>
                <p className='text-lg'>{Desc}</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-xl'>{Date}</p>
                <p className='text-xl'>{Priority}</p>
            </div>
        </div>
    )
}
export default TodoCard