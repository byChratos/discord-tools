import { twMerge } from "tailwind-merge";

function ModeButton({ name, className }: { name: string, className?: string }) {

    return(
        <button className={twMerge(className, "w-fit h-fit px-10 py-5 rounded-xl bg-yellow-600")}>
            {name}
        </button>
    )

}

export default ModeButton;