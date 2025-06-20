import '@/app/globals.css';
import { NavBar } from './common/nav_bar';
import IntroCard from './home/intro_card';
import BioCard from './home/bio_card';


export default function Home() {
  return (
      <div>
        <NavBar />
        <div className='max-w-4xl mx-auto my-20 font-catamaran'>
          <IntroCard />
          <BioCard />
        </div>
      </div>
  );
}
