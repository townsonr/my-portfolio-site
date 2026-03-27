import { ReactNode } from "react";
import mailIcon from "../../img/mail.png";
import linkedinIcon from "../../img/linkedin.png";
import githubIcon from "../../img/github.png";

type ContactLinkRowProps = {
  href: string;
  leading: ReactNode;
  children: ReactNode;
};

function ContactLinkRow({ href, leading, children }: ContactLinkRowProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-5 sm:gap-6 py-5 sm:py-6 border-b border-light/20 last:border-b-0 text-lightest no-underline group transition-colors hover:text-bright"
    >
      <span className="shrink-0 w-10 h-10 flex items-center justify-center text-lightest/90 group-hover:text-bright transition-colors">
        {leading}
      </span>
      <span className="text-sm sm:text-md break-all min-w-0 leading-snug">
        {children}
      </span>
    </a>
  );
}

export default function ContactCard() {
  const iconImg = (src: string) => (
    <img
      src={src}
      alt=""
      width={40}
      height={40}
      className="w-10 h-10 object-contain"
    />
  );

  return (
    <div className="w-full px-2 sm:px-4 py-4 font-catamaran">
      <ContactLinkRow href="mailto:townsonr@msu.edu" leading={iconImg(mailIcon.src)}>
        townsonr@msu.edu
      </ContactLinkRow>
      <ContactLinkRow
        href="https://www.linkedin.com/in/rachel-townson/"
        leading={iconImg(linkedinIcon.src)}
      >
        linkedin.com/in/rachel-townson
      </ContactLinkRow>
      <ContactLinkRow href="https://github.com/townsonr" leading={iconImg(githubIcon.src)}>
        github.com/townsonr
      </ContactLinkRow>
    </div>
  );
}
