import { TuneOutlined } from '@material-ui/icons'
import React from 'react'
import ChannelRow from './ChannelRow'
import "./SearchPage.css"
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage__filter">
                <TuneOutlined/>
                <p>FILTER</p>
            </div>
            <hr/>
            <ChannelRow
            image = "//yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel = "Clever Programmer"
            verified
            subs = "886k"
            noOfVideos = "526"
            description ="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />
            <hr/>
            <VideoRow
            views = "28K"
            subs = "660k"
            description = "Join the epic Free Training that shows you how to become a 6-figure JavaScript developer   ..."
            timestamp = "6 days ago"
            channel = "Clever Programmer"
            title = "Top 5 Programming Languages to Learn in 2021 to Get a Job Without a College Degree by Clever Programmer"
            image="https://i.ytimg.com/vi/jf3GdvAFHsE/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Lqe-gfSqaJ0OHWY6gieSkQ8Gnw"
            />
            <VideoRow
            views = "28K"
            subs = "660k"
            description = "Join the epic Free Training that shows you how to become a 6-figure JavaScript developer   ..."
            timestamp = "6 days ago"
            channel = "Clever Programmer"
            title = "Top 5 Programming Languages to Learn in 2021 to Get a Job Without a College Degree by Clever Programmer"
            image="https://i.ytimg.com/vi/jf3GdvAFHsE/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Lqe-gfSqaJ0OHWY6gieSkQ8Gnw"
            />
            <VideoRow
            views = "28K"
            subs = "660k"
            description = "Join the epic Free Training that shows you how to become a 6-figure JavaScript developer   ..."
            timestamp = "6 days ago"
            channel = "Clever Programmer"
            title = "Top 5 Programming Languages to Learn in 2021 to Get a Job Without a College Degree by Clever Programmer"
            image="https://i.ytimg.com/vi/jf3GdvAFHsE/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Lqe-gfSqaJ0OHWY6gieSkQ8Gnw"
            />
            <VideoRow
            views = "28K"
            subs = "660k"
            description = "Join the epic Free Training that shows you how to become a 6-figure JavaScript developer   ..."
            timestamp = "6 days ago"
            channel = "Clever Programmer"
            title = "Top 5 Programming Languages to Learn in 2021 to Get a Job Without a College Degree by Clever Programmer"
            image="https://i.ytimg.com/vi/jf3GdvAFHsE/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Lqe-gfSqaJ0OHWY6gieSkQ8Gnw"
            />
            <VideoRow
            views = "28K"
            subs = "660k"
            description = "Join the epic Free Training that shows you how to become a 6-figure JavaScript developer   ..."
            timestamp = "6 days ago"
            channel = "Clever Programmer"
            title = "Top 5 Programming Languages to Learn in 2021 to Get a Job Without a College Degree by Clever Programmer"
            image="https://i.ytimg.com/vi/jf3GdvAFHsE/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Lqe-gfSqaJ0OHWY6gieSkQ8Gnw"
            />
        </div>
    )
}

export default SearchPage
