import headshot from "../../img/linkedin_headshot.jpeg";

export default function IntroCard() {
    return (
        <div className='text-lightest font-catamaran'>
            <div className='grid grid-cols-3'>
                <div >
                    <img className='rounded-full' src={headshot.src} />
                </div>
                <div className='p-3 m-3 ml-16 mb-0 col-span-2'>
                    <h1 className='font-neuton text-xl'>Hello!</h1>
                    <h1 className='font-neuton text-xl'>I&apos;m Rachel Townson.</h1>
                    <div className='grid grid-cols-3 items-center text-light'>
                        <p className='col1 text-sm'>Software Engineer</p>
                        <div className='col2'>
                            <div className='flex items-center'>
                                <p className='text-lg text-bright'>⚲</p>
                                <p className='text-sm ml-2'>Chicago, Illinois</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}