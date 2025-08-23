import '@/app/globals.css';
import React from 'react';
import Link from 'next/link';
import { NavMenu } from './nav_menu';

export function NavBar() {
    const button_style = 'text-lg px-5';

    return (
        <div className='font-neuton '>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

            {/* Mobile Navigation Dropdown Menu */}
            <div className='sm:hidden'>
                <NavMenu/>
            </div>

            {/* Desktop Navigation Buttons */}
            <nav className='hidden sm:block font-neuton sticky top-0 px-5 py-5 bg-black bg-opacity-20'>
                <div className='flow-root'>
                    <Link href={`/`}>
                        <h1 className='text-lg float-left'>Rachel Townson</h1>
                    </Link>

                    <div className='float-right'>
                        <Link href={`/career`}>
                            <button className={`${button_style}`}> CAREER </button>
                        </Link>
                        
                        <Link href={`/projects`}>
                            <button className={`${button_style}`}> PROJECTS </button>
                        </Link>
                        
                        <Link href={`/contact`}>
                            <button className={`${button_style}`}> CONTACT </button>
                        </Link>
                    </div>
                </div>
            </nav>

        </div>
      );
}