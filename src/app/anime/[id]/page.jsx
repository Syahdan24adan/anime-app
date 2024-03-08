import { getAnimeResponse } from '/src/app/libs/api-libs';
import Image from 'next/image';

const Page = async ({ params: { id } }) => {

    const anime = await getAnimeResponse(`anime/${id}`)

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
                    className='w-full rounded-xl text-xl h-100 w-auto'
                />
                <p>{anime.data.synopsis}</p>
            </div>
            <div className='bg-white p-4 m-4 rounded flex gap-4 text-center'>
                <div className=' border-2 border-spacing-10 border-black p-2 rounded items-center'>
                    <h3>RATTING</h3>
                    <p>{anime.data.rank}</p>
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
                    <h3>TYPE</h3>
                    <p>{anime.data.type}</p>
                </div>
            </div>
        </>
    )
}

export default Page