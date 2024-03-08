"use client"
import React from 'react';
import Youtube from 'react-youtube';
import { XCircle } from '@phosphor-icons/react';

const VideoPlayer = ({ youtubeId }) => {
    const opotions = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <div className='items-center bg-white'>
            <div className='items-center m-10 justify-center'>
                <button><XCircle size={32} /></button>
                <Youtube
                    videoId={youtubeId}
                    onReady={(even) => even.target.pauseVideo()}
                    opts={opotions}
                    className='text-center justify-center items-center'
                />
            </div>
        </div>
    );
}
export default VideoPlayer;