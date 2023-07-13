import React from 'react'
import TodoCard from './TodoCard'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
const ProgressContainer = () => {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            className="my-masonry-grid m-20"
        >
            <Masonry gutter='20px'>
                <TodoCard Title='This is Title' Desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,  Sed malesuada felis non purus fringilla' Date='July 07, 2023' Priority='High' Progress={true} Completed={false} />
                <TodoCard Title='This is Title' Desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada felis non purus fringilla' Date='July 07, 2023' Priority='High' Progress={true} Completed={false} />
                <TodoCard Title='This is Title' Desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Sed malesuada felis non purus fringilla' Date='July 07, 2023' Priority='High' Progress={true} Completed={false} />
                <TodoCard Title='This is Title' Desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada felis non purus fringilla' Date='July 07, 2023' Priority='High' Progress={true} Completed={false} />
                <TodoCard Title='This is Title' Desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada felis non purus fringilla' Date='July 07, 2023' Priority='High' Progress={true} Completed={false} />
                <TodoCard Title='This is Title' Desc='Lorem ipsum dolor sit amet' Date='July 07, 2023' Priority='High' Progress={true} Completed={false} />
                <TodoCard Title='This is Title' Desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada felis non purus fringilla' Date='July 07, 2023' Priority='High' Progress={true} Completed={false} />
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default ProgressContainer