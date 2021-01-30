import { Avatar } from '@material-ui/core'
import { CheckCircleOutlineOutlined } from '@material-ui/icons'
import React from 'react'
import "./ChannelRow.css"

function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
    return (
        <div className="channelrow">
            <Avatar 
              src={image} 
              alt={channel}
              className="channelrow__image"
            />
            <div className="channelrow__info">
                <h4>{channel} {verified && <CheckCircleOutlineOutlined/>}</h4>                
                <p>{subs} subscribers • {noOfVideos} videos</p> 
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
