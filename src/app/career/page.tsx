import '@/app/globals.css';
import { stat } from "fs/promises";
import { join } from "path";
import { NavBar } from '../common/nav_bar';
import CareerResume from './career_resume';

export const dynamic = "force-dynamic";

async function resumeDownloadHref() {
  try {
    const path = join(process.cwd(), "public", "resume.pdf");
    const s = await stat(path);
    return `/api/resume?m=${s.mtimeMs}`;
  } catch {
    return "/api/resume";
  }
}

export default async function CareerPage() {
  const resumeHref = await resumeDownloadHref();

  return (
    <div>
      <NavBar />
      <div className="max-w-4xl mx-auto sm:my-20 font-catamaran pb-20">
        <div className="mx-10 p-3 m-3 mb-0 flex items-center justify-between gap-4">
          <h1 className="font-neuton text-lg sm:text-xl text-lightest">My Career</h1>
          <a
            href={resumeHref}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-light px-5 py-2 font-catamaran text-sm text-dark ring-1 ring-dark/15 transition-colors hover:bg-bright hover:text-lightest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright"
          >
            Download My Resume ↓
          </a>
        </div>
        <CareerResume />
      </div>
    </div>
  );
}
