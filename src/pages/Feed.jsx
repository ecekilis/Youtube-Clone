import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { VideoContext } from "../context/videoContext";
import Loader from '../components/Loader';
import ErrorDisplay from '../components/ErrorDisplay';
import VideoCard from '../components/VideoCard';

function Feed() {
    const { videos, error, isLoading } = useContext(VideoContext);

    return (

        <div className='flex'>
            <Sidebar />
            <div className='videos'>
                {isLoading ? (
                    <Loader />
                ) : error ? (
                    <ErrorDisplay />
                ) : (
                    videos?.map((item) =>
                        item.type === 'video' && (
                            <VideoCard key={item.videoId}
                                video={item} />
                        )
                    )
                )}
            </div>
        </div>
    );
}

export default Feed;