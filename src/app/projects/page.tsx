import '@/app/globals.css';
import { NavBar } from '../common/nav_bar';
import TextBox from '../common/text_box';

export default function ProjectsPage() {
  return (
    <div>
      <NavBar />
      <div className="max-w-4xl mx-auto sm:my-20 font-catamaran pb-20">
        <div className="mx-10 p-3 m-3 mb-0 flex items-center justify-between gap-4">
          <h1 className="font-neuton text-lg sm:text-xl text-lightest">Projects</h1>
          <a
            href="https://github.com/townsonr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-light px-5 py-2 font-catamaran text-sm text-dark ring-1 ring-dark/15 transition-colors hover:bg-bright hover:text-lightest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright"
          >
            See More on GitHub →
          </a>
        </div>

        <TextBox marginTopClass="mt-4 sm:mt-8">
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-semibold text-dark text-md">
                Collaborative Audio/Video Editor (CAVE)
              </h3>
              <p className="text-dark/80 shrink-0">2023</p>
            </div>
            <p className="text-dark/90 italic">Software Developer</p>
            <p className="text-dark/90">
              ★{" "}
              <a
                href="http://www.capstone.cse.msu.edu/2023-01/design-day/awards/"
                className="text-bright hover:underline font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon Sigma Award
              </a>{" "}
              — Best Overall Winner
            </p>
            <p className="text-dark/90">
              Collaborated with Team TechSmith to develop a multi-platform web application enabling
              multiple users to synchronously edit audio/video projects. Developed a ReactJS front
              end, Node.js API, and deployed the app using Microsoft Azure. Leveraged FFmpeg for
              WebAssembly to process media and export projects. Integrated synchronous editing
              capabilities using WebSockets.
            </p>
          </div>
        </TextBox>

        <TextBox>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-semibold text-dark text-md">Intra-Building Navigator</h3>
              <p className="text-dark/80 shrink-0">2022</p>
            </div>
            <p className="text-dark/90 italic">Project Lead</p>
            <p className="text-dark/90">
              ★ Second Prize at{" "}
              <a
                href="https://devpost.com/software/intra-building-navigator?ref_content=my-projects-tab&ref_feature=my_projects"
                className="text-bright hover:underline font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Green hackathon
              </a>
            </p>
            <p className="text-dark/90">
              Worked with a team to build a Flutter web and mobile app that uses AI image
              processing (OpenCV) and pathfinding algorithms to guide a user between spaces in a
              building. Managed the Github repository, Trello board, and weekly meetings.
            </p>
          </div>
        </TextBox>
      </div>
    </div>
  );
}
