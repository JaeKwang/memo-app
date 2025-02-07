import { Link } from "react-router-dom";

function MemoCard({memoId, title, content, deleteItem}) {
    return (
        <div className="p-4 border border-blue-400 rounded shadow-md hover:shadow-lg transition flex flex-row items-center justify-between bg-white">
            <Link
                to={`/memo/${memoId}`}
                className="flex-1 p-4 border-r hover:bg-gray-300"
            >
                <h3 className="font-bold text-lg truncate max-w-[200px] text-gray-800">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm truncate max-w-[300px]">{content}</p>
            </Link>
            <button
                className="ml-4 px-3 py-2 bg-red-400 text-white rounded-lg hover:bg-red-600 transition"
                onClick={() => deleteItem(memoId)}
            >
                ❌ 삭제
            </button>
        </div>
    );
}

export default MemoCard;