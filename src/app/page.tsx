import '@/app/globals.css';
import { NavBar } from './common/nav_bar';
import IntroCard from './home/intro_card';


export default function Home() {
  return (
      <div>
        <NavBar />
        <div className='max-w-4xl mx-auto my-20'>
          <IntroCard />
        </div>
      </div>
  );
}
