import { ReactElement} from "react";

export default function TextBox(props: { children: ReactElement | Iterable<ReactElement>; }) {
    return (
        <div className="bg-light rounded-xl mx-10 mt-10 sm:mt-20 px-7 py-7 text-dark text-sm space-y-5">
            {props.children}
        </div>
    )
}