import React from 'react'
import "./VideoRow.css"

function VideoRow({views,subs,description,image,title,timestamp,channel}) {
    return (
        <div className="videorow">
            <img src={image} alt={title} className="videorow__image"/>
            <div className="videorow__info">
                <h3>{title}</h3>
                <p className="videorow__headline">{channel} • <span className="videorow__subs"><span className="videorow__subsNumber"> {subs}</span> subscribers </span> • {views} views • {timestamp}</p>
                <p className="videorow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
