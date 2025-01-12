import millify from 'millify';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function VideoCard({ video, isRow }) {


    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate();
    return (
        <div className={`${isRow ? "row" : ""} cursor-pointer`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => navigate(`watch?v=${video.videoId}`)}
        >


            <div>
                <img className="rounded-lg w-full h-full" src={
                    isHover && video?.richThumbnail ?
                        video?.richThumbnail[0].url :
                        video?.thumbnail[0].url
                }
                    alt="" />
            </div>


            <div className='flex gap-4 mt-5'>
                <img className="w-14 h-14 rounded-full c-pic" src={video?.channelThumbnail &&
                    video?.channelThumbnail[0].url
                } alt="" />
                <div>
                    <h4 className='font-bold line-clamp-2'>{video?.title}</h4>
                    <p>{video?.channelTitle}</p>
                    <div className='flex gap-3'>
                        <p className='flex gap-1'>
                            <span>{video?.viewCount}</span>
                            <span className='text'> Goruntulenme</span>
                        </p>
                        <p>{video?.publishedTimeText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard

