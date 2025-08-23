'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='flow-root'>
            <div className='flow-root sticky top-0 px-5 py-5 bg-black bg-opacity-20'>
                <Link className='float-left' href={`/`}>
                    <h1 className='text-'>Rachel Townson</h1>
                </Link>

                {/* Menu Button */}
                <div className='float-right'>
                    <button onClick={toggleDropdown}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>

            {/* Open dropdown menu on click */}
            {isOpen && (
                <div className='flex flex-col items-end bg-black bg-opacity-10 px-5 py-5'>
                    <Link href={`/career`}>
                        <button className='block text-lg px-5'> CAREER </button>
                    </Link>
                    
                    <Link href={`/projects`}>
                        <button className='block text-lg px-5'> PROJECTS </button>
                    </Link>
                    
                    <Link href={`/contact`}>
                        <button className='block text-lg px-5'> CONTACT </button>
                    </Link>
                </div>
            )}

        </nav>

        
    )
}