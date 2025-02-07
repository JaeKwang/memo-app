import MemoCard from "./MemoCard";
import Memofilter from "./Memofilter";

function MemoList() {

    return (
        <div  className="max-w-3xl mx-auto mt-10 bg-amber-100">
            <Memofilter />
            <div className="flex flex-col gap-4">
                <MemoCard memoId={1} />
                <MemoCard memoId={2} />
                <MemoCard memoId={3} />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
                새 메모 추가
            </button>
        </div>
    );
}

export default MemoList;