import { getAnimeResponse } from "/src/app/libs/api-libs";
import AnimeList from "/src/components/AnimeLists";
import Header from "/src/components/AnimeLists/Header";

const Page = async ({ params }) => {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)


    return (
        <>
            <section>
                <Header title={`Hasil Pencarian Untuk ${decodedKeyword}...`} linkTitle={""} linkHref={""} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    );
}

export default Page;
