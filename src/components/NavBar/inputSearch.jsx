'use client'

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const InputSearch = () => {

    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        if (!keyword) return
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }


    return (
        <div className="relative">
            <input
                placeholder="Cari Anime..."
                className=" rounded font-extralight w-full px-3 transition-all p-2"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={28} className="text-yellow-500" />
            </button>
        </div>
    )
}
export default InputSearch