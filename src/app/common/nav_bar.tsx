import '@/app/globals.css';
import React from 'react';

export function NavBar() {
    const button_style = 'text-lg px-5';

    return (
        <nav className='font-neuton sticky top-0 px-5 py-5 bg-black bg-opacity-20'>
            <div className='flow-root'>
                <h1 className='text-lg float-left'>Rachel Townson</h1>
                <div className='float-right'>
                    <button className={`${button_style}`}> CAREER </button>
                    <button className={`${button_style}`}> PROJECTS </button>
                    <button className={`${button_style}`}> CONTACT </button>
                </div>
                
            </div>
        </nav>
      );
}