export default function ContactCard() {
    return (
        <div className='flex'>
            <div className='p-3 m-3 bg-midtone rounded-lg text-dark bg-opacity-85'>
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
    )
}