export default function IntroCard() {
    return (
        <div>
            <div className='grid grid-cols-3'>
                <div className='p-3 m-3 col-span-2'>
                    <h1 className='font-neuton text-xl'>Hello!</h1>
                    <h1 className='font-neuton text-xl'>I&apos;m Rachel Townson.</h1>
                </div>
            </div>

            <div className='grid grid-cols-4 flex items-center'>
                <p className='p-3 m-3 col1 text-sm'>Software Developer</p>
                <div className='p-3 m-3 col2'>
                    <div className='flex items-center'>
                        <p className='text-lg'>⚲</p>
                        <p className='text-sm ml-2'>Chicago, Illinois</p>
                    </div>
                </div>
                
            </div>

            <div className='flex'>
                <div className='p-3 m-3 bg-midtone rounded-lg'>
                    <a href='mailto:townsonr@msu.edu'>
                        <div className='flex items-center mr-5 ml-2'>
                            <p className='text-lg'>✉</p>
                            <p className='text-sm ml-2'>townsonr@msu.edu</p>
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/rachel-townson/' target="_blank" rel="noopener noreferrer">
                        <div className='flex items-center mr-5 ml-2'>
                            <p className='text-lg'>ⓘ</p>
                            <p className='text-sm ml-2'>LinkedIn</p>
                        </div>
                    </a>
                    <a href='https://github.com/townsonr' target="_blank" rel="noopener noreferrer">
                        <div className='flex items-center mr-5 ml-2'>
                            <p className='text-lg'>👾</p>
                            <p className='text-sm ml-2'>GitHub</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}