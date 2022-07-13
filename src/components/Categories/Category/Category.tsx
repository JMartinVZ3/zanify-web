import * as React from 'react';

type CategoryProps = {
    category: {
        title: string
    },
}

const Category = ({ category }: CategoryProps) => {

    return (
        <div className='mt-4'>
            <h1 className='text-5xl font-semibold font-sans text-darkBlue'>{category?.title}</h1>
        </div>
            
    )

}

export default Category;