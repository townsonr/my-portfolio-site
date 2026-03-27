import TextBox from "../common/text_box";

export default function CareerResume() {
  return (
    <>
      <TextBox marginTopClass="mt-4 sm:mt-8">
        <div className="space-y-8">
          <h2 className="font-neuton text-md text-dark border-b border-dark/20 pb-2">
            Experience
          </h2>

          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="font-semibold text-dark">Shure Incorporated</h3>
                <p className="text-dark/90">System Verification Engineer · Niles, IL</p>
              </div>
              <p className="text-dark/80 shrink-0">2022 – Present</p>
            </div>

            <div className="space-y-3 pl-0 sm:pl-1">
              <p className="font-medium text-dark">Engineer II · 2024 – Present</p>
              <ul className="list-disc pl-5 space-y-3 text-dark/90">
                <li>
                  <strong className="text-dark">Test Automation for Embedded Firmware:</strong>{" "}
                  Engineered comprehensive audio and property tests in Python, accelerating product
                  testing and boosting automation test coverage to over 50%, while identifying 20+
                  defects across various products. Worked with a team of test engineers to develop a
                  UI-based testing framework using computer vision. Identified features to include
                  in CI/CT, smoke, and functional test plans.
                </li>
                <li>
                  <strong className="text-dark">Manual Testing of Embedded Firmware:</strong>{" "}
                  Conducted end-to-end, user workflow, and audio quality tests, collaborating with
                  cross-functional teams to resolve 5+ critical defects across four embedded
                  products and their mobile apps prior to release.
                </li>
                <li>
                  <strong className="text-dark">REST API Test Automation:</strong> Collaborated with
                  a team of 10+ developers to revamp legacy automated API tests within three weeks,
                  elevating test reliability to 100% and extending coverage to 20+ devices.
                  Developed two essential code utilities and uncovered one major bug during the
                  process.
                </li>
                <li>
                  <strong className="text-dark">Code Reviews, Source Control, and CI/CT:</strong>{" "}
                  Played an integral role in code reviews for 6+ developers, enhancing code
                  readability and reliability while enforcing coding standards. Assisted the team
                  with the transition from Quality Center ALM to Xray (Jira) test management and
                  helped develop new Jenkins pipelines for CI/CT.
                </li>
              </ul>
            </div>

            <div className="space-y-3 pl-0 sm:pl-1">
              <p className="font-medium text-dark">Engineer I · 2023 – 2024</p>
              <ul className="list-disc pl-5 space-y-3 text-dark/90">
                <li>
                  <strong className="text-dark">Functional Testing of Desktop App:</strong>{" "}
                  Executed automated and manual functional tests on Mac and Windows using Selenium,
                  then tracked test progress with QC ALM and documented defects in Jira. Revealed
                  over 20 software bugs in one month and helped the team achieve deadlines ahead of
                  schedule by effectively verifying bugs as fixes were released.
                </li>
                <li>
                  <strong className="text-dark">Mobile App Test Automation:</strong> Designed the
                  Page Object Model (POM) and Appium automation infrastructure for a new mobile app,
                  creating detailed documentation and UML diagrams in Confluence. Streamlined
                  tedious aspects of POM creation for use across multiple projects, facilitating test
                  code reuse across iOS and Android apps.
                </li>
              </ul>
            </div>

            <div className="space-y-3 pl-0 sm:pl-1">
              <p className="font-medium text-dark">Intern, Part-Time Associate · 2022 – 2023</p>
              <ul className="list-disc pl-5 space-y-3 text-dark/90">
                <li>
                  <strong className="text-dark">Innovative Testing Strategies:</strong> Implemented
                  new testing strategies using AI technologies like computer vision, establishing
                  infrastructure that accelerated the creation of 10+ automated test cases and
                  broadened automation coverage.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4 pt-2 border-t border-dark/10">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="font-semibold text-dark">AccumTech</h3>
                <p className="text-dark/90">Software Developer · Livonia, MI</p>
              </div>
              <p className="text-dark/80 shrink-0">2021 – 2022</p>
            </div>
            <ul className="list-disc pl-5 space-y-3 text-dark/90">
              <li>
                <strong className="text-dark">Front End:</strong> Created 5+ intuitive dashboards
                for a web app using ReactJS, enabling healthcare insurance providers to interact with
                their data efficiently. Developed 3+ reusable components that accelerated future UI
                development.
              </li>
              <li>
                <strong className="text-dark">Back End:</strong> Built 20+ new REST API endpoints
                in an existing codebase using C/.NET to access SQL databases.
              </li>
              <li>
                <strong className="text-dark">Cross-functional collaboration:</strong> Attended
                meetings with customers and business analysts, gaining valuable insights into the
                business side of the application.
              </li>
            </ul>
          </section>
        </div>
      </TextBox>

      <TextBox>
        <div className="space-y-4">
          <h2 className="font-neuton text-md text-dark border-b border-dark/20 pb-2">
            Leadership
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="font-semibold text-dark">
              <a
                href="https://www.msuaiclub.com/"
                className="text-dark hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Artificial Intelligence Club at MSU
              </a>
            </h3>
            <p className="text-dark/80 shrink-0">2021 – 2023</p>
          </div>
          <p className="text-dark/90 italic">Marketing Director</p>
          <p className="text-dark/90">
            Coordinated all social media campaigns for the club, orchestrated the planning of club
            events, supervised club finances, directed recruitment efforts for new members and
            sponsors, and designed and procured promotional materials.
          </p>
        </div>
      </TextBox>

      <TextBox>
        <div className="space-y-4">
          <h2 className="font-neuton text-md text-dark border-b border-dark/20 pb-2">
            Education
          </h2>
          <p className="text-dark font-semibold">Michigan State University</p>
          <p className="text-dark/90">
            B.S. Computer Science with Honor · Minor in Cognitive Science · Honors College
          </p>
        </div>
      </TextBox>

      <TextBox>
        <div className="space-y-4">
          <h2 className="font-neuton text-md text-dark border-b border-dark/20 pb-2">
            Skills &amp; interests
          </h2>
          <ul className="flex flex-wrap gap-2 text-sm text-dark/90 list-none pl-0">
            {[
              "Python",
              "C++/C",
              "JavaScript",
              "HTML/CSS",
              "C#/.NET",
              "SQL",
              "ReactJS",
              "Flask for Python",
              "Flutter SDK",
              "Selenium",
              "Appium",
              "OpenCV",
              "Git/SVN",
              "Jira/Trello",
              "Jenkins",
              "Audacity",
              "Pro Tools",
              "Canva Pro",
            ].map((skill) => (
              <li
                key={skill}
                className="px-3 py-1 rounded-lg bg-dark/5 text-dark border border-dark/10"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </TextBox>

      <TextBox>
        <div className="space-y-4">
          <h2 className="font-neuton text-md text-dark border-b border-dark/20 pb-2">
            Certifications
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-dark/90">
            <li>Scaled Agile Framework (SAFe)</li>
            <li>Dante Certification Levels 1 and 2</li>
            <li>Shure Academy</li>
          </ul>
        </div>
      </TextBox>
    </>
  );
}
