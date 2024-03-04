
export const getAnimeResponse = async (resource, qwery) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${qwery}`)
    const anime = await response.json()
    return anime;
}