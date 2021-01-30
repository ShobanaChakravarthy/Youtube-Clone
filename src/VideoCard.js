import { Avatar } from '@material-ui/core'
import React from 'react'
import "./VideoCard.css"

function VideoCard({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div className="videocard">
            <img 
                src={image} 
                alt={title}
                className="videocard__thumbnail"
            />
            <div className="videocard__info">
                <Avatar
                    src={channelImage}
                    alt={channel}
                    className="videocard__avatar"
                />
                <div className="videocard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
