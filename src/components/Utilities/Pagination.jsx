

const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handlePrefPage = () => {
        if (page > 1) {
            setPage((prefState) => prefState - 1);
            scrollTop();
        }
    }

    const handleNextPage = () => {
        if (page < lastPage) {
            setPage((nextState) => nextState + 1);
            scrollTop();
        }
    }


    return (

        <div className="flex justify-center items-center gap-4 text-white p-6">
            <button onClick={handlePrefPage} className=" transition-all hover:text-teal-500 hover:underline">Previous</button>
            <p>{page}  / {lastPage}</p>
            <button onClick={handleNextPage} className=" transition-all hover:text-teal-500 hover:underline">Next</button>
        </div>
    )
}
export default Pagination;