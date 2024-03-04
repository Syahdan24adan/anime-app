import AnimeList from "../components/AnimeLists";
import Header from "../components/AnimeLists/Header";
import { getAnimeResponse } from "./libs/api-libs";


const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/{id}/news`);
  const newAnime = await response2.json();

  return (
    <>
    {/*Anime Paling Populer*/}
      <section>
        <Header title={"PALING POPULER"} linkTitle={"LIHAT SEMUA>>"} linkHref={"/populer"} />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
}

export default Page;