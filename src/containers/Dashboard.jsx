import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import DashboardCard from '../components/DashboardCard'

const Dashboard = () => {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 1 }}
            className="my-masonry-grid m-20 "
        >
            <Masonry gutter={'20px'} >
                <DashboardCard Title='Total Tasks ' Data='21' />
                <DashboardCard Title='Tasks in Progress ' Data='3' />
                <DashboardCard Title='Tasks Completed ' Data='10' />
                <DashboardCard Title='Tasks Completed on schedule' Data='5' />
                <DashboardCard Title='Tasks Completed before schedule ' Data='2' />
                <DashboardCard Title='Tasks Completed after schedule' Data='1' />
            </Masonry>
        </ResponsiveMasonry>



    )
}
export default Dashboard