'use client'
import { getAnimeResponse } from '/src/app/libs/api-libs';
import Image from 'next/image';
import { Star, Heart } from '@phosphor-icons/react';
import VideoPlayer from '/src/components/Utilities/VideoPlayer';

const Page = async ({ params: { id } }) => {

    const anime = await getAnimeResponse(`anime/${id}`)

    const rating = anime.data.rank
    const startIcon = [];
    for (let i = 0; i < rating; i++) {
        startIcon.push(<Star className='text-yellow-500' key={i} size={14} />)
    }

    return (
        <>
            <div className='gap-4 pt-4 pb-4 text-center'>
                <h1 className='text-white text-2xl gap-4'>{anime.data.title}</h1>
            </div>
            <div className='pt-10 px-4 flex bg-yellow-500 rounded-3xl gap-4 mr-10 ml-10 py-4 text-justify text-black'>
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={300}
                    height={300}
                    className='rounded-xl text-xl h-100 w-auto'
                />
                <p>{anime.data.synopsis}</p>
            </div>
            <div className='bg-white p-4 m-4 rounded-lg flex gap-4 text-center justify-center mr-10 ml-10'>
                <div className=' border-2 border-spacing-10 border-black p-2 rounded items-center justify-center'>
                    <h3>RATTING</h3>
                    <p className='flex justify-center p-1'>{startIcon}</p>
                </div>
                <div className=' border-2 border-spacing-10 border-black p-2 rounded'>
                    <h3>SCORE</h3>
                    <p>{anime.data.score}</p>
                    
                </div>
                <div className=' border-2 border-spacing-10 border-black p-2 rounded'>
                    <h3>EPISODE</h3>
                    <p>{anime.data.episodes}</p>
                </div>
                <div className=' border-2 border-spacing-10 border-black p-2 rounded'>
                    <h3>DURATION</h3>
                    <p>{anime.data.duration}</p>
                </div>
                <div className=' border-2 border-spacing-10 border-black p-2 rounded'>
                    <h3>POPULARITY</h3>
                    <p>{anime.data.popularity}</p>
                </div>
                <div className=' border-2 border-spacing-10 border-black p-2 rounded'>
                    <h3>STATUS</h3>
                    <p>{anime.data.status}</p>
                </div>
                <div className=' border-2 border-spacing-10 border-black p-2 rounded'>
                    <h3>FAVORITE</h3>
                    <p className='flex items-center gap-1 '><Heart className='text-red-500' size={16} /> {anime.data.favorites} </p>
                </div>
            </div>
            <div className=' items-center justify-center align-middle m-10 text-center'>
                <h3>BACKGROUND</h3>
                <p>{anime.data.background}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </>
    )
}

export default Page