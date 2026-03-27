import { ReactElement } from "react";

type TextBoxProps = {
  children: ReactElement | Iterable<ReactElement>;
  /** Tailwind margin-top classes (default matches previous spacing). */
  marginTopClass?: string;
};

export default function TextBox({
  children,
  marginTopClass = "mt-10 sm:mt-20",
}: TextBoxProps) {
  return (
    <div
      className={`bg-light rounded-xl mx-10 ${marginTopClass} px-7 py-7 text-dark text-sm space-y-5`}
    >
      {children}
    </div>
  );
}
