
import React from 'react';
import Link from 'next/link';

const Menu = () => {
    return (
        <div className='gap-4 flex text-white font-semibold '>
            <Link href="/" className='hover:text-green-700'><h2>HOME</h2></Link>
            <Link href="/populer" className='hover:text-green-700'><h2>POPULER</h2></Link>
            <Link href="/manga" className='hover:text-green-700'><h2>MANGA</h2></Link>
        </div>
    );
}

export default Menu;