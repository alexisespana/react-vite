import React from 'react'

export const GifItem = ({ id, url, title }) => {
    return (
        <div className='card text-black bg-primary'>
            <img className='card-img-top' src={url} alt={title} />
            <div className="card-body">
                <div className="card-title">
                    {title}
                </div>
            </div>
        </div>
    )
}
