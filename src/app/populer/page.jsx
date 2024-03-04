'use client'

import AnimeList from '/src/components/AnimeLists'
import HeaderMenu from "/src/components/Utilities/HeaderMenu"
import Pagination from "/src/components/Utilities/Pagination"
import React, { useEffect, useState } from "react"
import { getAnimeResponse } from '../libs/api-libs'

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fecthData = async () => {
        const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(populerAnime)
    }

    useEffect(() => {
        fecthData()
    }, [page])


    return (
        <>
            <HeaderMenu title={`PALING POPOULER ${page}`} />
            <AnimeList api={topAnime} />
            <Pagination
                page={page}
                lastPage={topAnime.pagination?.last_visible_page}
                setPage={setPage}
            />
        </>
    )
}

export default Page