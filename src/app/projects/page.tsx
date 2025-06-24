import '@/app/globals.css';
import { NavBar } from '../common/nav_bar';
import PlaceHolder from '../common/placeholder';


export default function ProjectsPage() {
  return (
      <div>
        <NavBar />
        <div className='max-w-4xl mx-auto my-20 font-catamaran'>
          <PlaceHolder />
        </div>
        
      </div>
  );
}
