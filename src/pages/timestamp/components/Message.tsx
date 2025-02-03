
export default function Message({message}: {message: String}) {
    return(
        <div className="bg-gray-700 p-5 rounded-xl">
            <p className="text-white">{message}</p>
        </div>
    )
}