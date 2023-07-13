import React from 'react'
import randomColor from './randomColor';
const DashboardCard = ({ Title, Data }) => {

    const cardColor = randomColor()

    return (
        <div className={`flex justify-between px-10 ${cardColor} rounded-lg p-4 w-2/4 m-auto `}>
            <td ><p className='text-2xl'>{Title}:</p></td>
            <td ><p className='text-2xl pr-32'>{Data}</p></td>
        </div>
    )
}
export default DashboardCard