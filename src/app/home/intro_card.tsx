import headshot from "../../img/linkedin_headshot.jpeg";

export default function IntroCard() {
    return (
        <div className='text-lightest font-catamaran mx-10'>
            <div className='grid grid-cols-3 items-center'>

                <div className='hidden sm:block mr-10'>
                    <img className='rounded-full' src={headshot.src} />
                </div>

                <div className='p-3 m-3 mb-0 col-span-3 sm:col-span-2'>

                    <h1 className='font-neuton text-lg sm:text-xl'>Hello!</h1>
                    <h1 className='font-neuton text-lg sm:text-xl'>I&apos;m Rachel Townson.</h1>

                    <div className="flex flex-wrap items-center text-light mt-10 sm:mt-0">
                        <p className="text-sm mr-4">Software Engineer</p>

                        <div className="flex items-center">
                            <p className="text-md text-bright">⚲</p>
                            <p className="text-sm ml-2">Chicago, Illinois</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}