import React, { Dispatch, SetStateAction } from "react";

function GenerateButton({result, setResult, onClick}: {result: string | null, setResult: Dispatch<SetStateAction<string | null>>, onClick: () => void}) {

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const textToCopy = (e.target as HTMLButtonElement).innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setResult("Copied to clipboard");
            });
    }

    return(
        <div className="flex flex-col items-center mt-5">
            <button className="bg-[#0cfa3a] rounded-2xl py-5 px-[60px] text-2xl border border-solid border-black shadow-l" onClick={() => onClick()}>Generate</button>
            {result != null && <button className="w-fit h-fit bg-white rounded-md p-2 mt-[-20px] text-md" onClick={handleClick}>{result}</button>}
        </div>
    )
}

export default GenerateButton;