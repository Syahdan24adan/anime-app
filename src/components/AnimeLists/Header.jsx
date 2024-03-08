import Link from 'next/link'

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="py-4 justify-between px-4 items-center">
            <h1 className="text-white font-bold text-2xl py-4 text-center">{title}</h1>
            <Link
                href={linkHref}
                className="
            md:text-20 text-md 
            text-white font-extrabold 
            hover:text-yellow-500 
            transition-all
            "
            >
                {linkTitle}
            </Link>
        </div>
    )
}
export default Header