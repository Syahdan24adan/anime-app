import { getAnimeResponse } from '/src/app/libs/api-libs';

const Page = async ({params: {id}}) => {

    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime)
    return (
        <div>
            <h1 className='text-white text-2xl'>{anime.data.title}</h1>
        </div>
    )
}

export default Page