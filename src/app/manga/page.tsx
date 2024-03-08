
import AnimeList from "../../components/AnimeLists";
import Header from "../../components/AnimeLists/Header";
import { getAnimeResponse } from "../libs/api-libs";


const Page = async () => {

    const anime = await getAnimeResponse(`top/manga/`)

    return (
        <>
            <section>
                <Header title={"MANGA"} linkTitle={""} linkHref={""} />
                <AnimeList api={anime} />
            </section>
        </>
    );
}

export default Page;