import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <section className='flex h-screen' >
            <Sidebar />
            <div className='flex-1 bg-gray-800 '>{children}</div>
        </section>
    )
}

export default Layout