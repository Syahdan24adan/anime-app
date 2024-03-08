import Image from 'next/image'
import Link from 'next/link'

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-8 sm:grid-cols-4 grid-cols-3 gap-4 gap-y-7 px-2 py-2">
            {api.data?.map((anime, index) => {
                const limitedTitle = anime.title.length > 35 ? anime.title.substring(0, 35) : anime.title
                return (
                    <Link href={`/anime/${anime.mal_id}`} className=" p-1 cursor-pointer shadow-md rounded-md bg-auto bg-yellow-500" key={index}>
                        <Image
                            className=" rounded-md"
                            src={anime.images.webp.image_url}
                            alt={anime.url}
                            width={800}
                            height={800} />
                        <h3
                            className=" font-bold md:text-base text-xs p-1 text-center object-cover hover:text-white"
                        >
                            {`${limitedTitle}`}
                        </h3>
                    </Link>
                )
            })}
        </div>

    );
}

export default AnimeList