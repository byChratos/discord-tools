import { Dispatch, SetStateAction } from "react";

function GenerateButton({result, setResult, onClick}: {result: string | null, setResult: Dispatch<SetStateAction<string | null>>, onClick: () => void}) {

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const textToCopy = (e.target as HTMLButtonElement).innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setResult("Copied to clipboard");
            });
    }

    return(
        <div className="flex flex-col items-center">
            <button className="bg-green-500 rounded-lg py-6 px-[60px] text-2xl" onClick={() => onClick()}>Generate</button>
            {result != null && <button className="w-fit h-fit bg-white rounded-md p-2 mt-[-20px] text-md" onClick={handleClick}>{result}</button>}
        </div>
    )
}

export default GenerateButton;