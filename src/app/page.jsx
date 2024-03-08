import AnimeList from "../components/AnimeLists";
import Header from "../components/AnimeLists/Header";
import { getAnimeResponse } from "./libs/api-libs";


const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  const anime = await getAnimeResponse(`top/manga/`, "limit=8")

  return (
    <>
    {/*Anime Paling Populer*/}
      <section>
        <Header title={"PALING POPULER"} linkTitle={""} linkHref={"/populer"} />
        <AnimeList api={topAnime} />

        <Header title={"MANGA"} linkTitle={""} linkHref={"/manga"} />
        <AnimeList api={anime} />
        
      </section>
    </>
  );
}

export default Page;