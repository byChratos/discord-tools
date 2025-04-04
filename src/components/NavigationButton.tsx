import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function NavigationButton({ name, link, className }: { name: string, link: string, className?: string }) {

    const navigate = useNavigate();

    return(
        <button onClick={() => navigate(link)} className={twMerge(className, "w-full bg-green-400 rounded-[24px]")}>
            {name}
        </button>
    )

}

export default NavigationButton;