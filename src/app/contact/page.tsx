import '@/app/globals.css';
import { stat } from "fs/promises";
import { join } from "path";
import { NavBar } from '../common/nav_bar';
import ContactCard from '../common/contact_card';

import headshot from "../../img/cool_headshot.jpg";

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

export default async function ContactPage() {
  const resumeHref = await resumeDownloadHref();

  return (
    <div>
      <NavBar />
      <div className="max-w-6xl mx-auto sm:my-20 font-catamaran pb-20">

        <div className="text-lightest font-catamaran mx-10">
          <div className="p-3 m-0 mb-0">
            <h1 className="font-neuton text-lg sm:text-xl">Contact Me</h1>
            <span className="inline-flex items-center gap-2 text-light">
              <span className="text-bright" aria-hidden>
                ⚲
              </span>
              <p className="text-sm">Chicago, IL</p>
            </span>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row sm:items-stretch p-3 m-3 mb-0 gap-6 sm:gap-0">
          <div className="min-w-0 sm:flex-[4]">
            <img
              className="rounded-2xl w-full h-auto"
              src={headshot.src}
              alt="Rachel Townson"
            />
          </div>

          <div className="min-w-0 sm:flex-[3] flex flex-col justify-between gap-6 sm:gap-0 sm:pl-6 pb-3 sm:pb-4">
            <ContactCard />
            <a
              href={resumeHref}
              className="w-full max-w-[calc(100%-1.5rem)] sm:max-w-[calc(100%-2.5rem)] self-center inline-flex items-center justify-center rounded-xl bg-light px-6 py-3 font-catamaran text-md text-dark ring-1 ring-dark/15 transition-colors hover:bg-bright hover:text-lightest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright"
            >
              Download My Resume ↓
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
