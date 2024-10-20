import '@/app/globals.css';

export default function Home() {
  return (
    <body className='font-catamaran'>
      <div className='max-w-4xl mx-auto my-20'>
        <div className='grid grid-cols-3'>
          <div className='bg-midtone rounded-lg p-3 m-3 col-span-2'>
            <h1 className='font-neuton text-xl'>Rachel Townson</h1>
            <p className='text-sm'>Website coming soon...</p>
          </div>
          <div className='bg-midtone rounded-lg p-3 m-3'>
            <p> my email</p>
            <p> my linkedin</p>
            <p> my github </p>
          </div>
        </div>
      </div>
    </body>
  );
}
