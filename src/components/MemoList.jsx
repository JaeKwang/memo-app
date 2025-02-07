import { useState } from "react";
import useLocalStorage from "../hooks/useLocalstorage";
import MemoCard from "./MemoCard";
import Memofilter from "./Memofilter";

function MemoList() {
    const [memos, setMemos] = useLocalStorage("memos", []);
    const [keyword, setKeyword] = useState("");

    const addMemo = () => {
        const newMemo = { id: Date.now(), title: "New Memo", content: "" };
        setMemos([...memos, newMemo]);
    };

    const deleteItem = (id) => {
        setMemos(memos.filter((v) => v.id !== Number(id)));
    }

    const filteredMemos = memos.filter((memo) =>
        memo.title.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <div  className="max-w-3xl mx-auto mt-10 bg-gray-100 p-2 rounded">
            <Memofilter onFilter={setKeyword} />
            <div className="flex flex-col gap-4">
                {filteredMemos.length === 0 
                ?<p>검색 결과가 없어요ㅠ</p>
                : filteredMemos.map((memo) => (
                    <MemoCard
                        key={memo.id}
                        memoId={memo.id}
                        title={memo.title}
                        content={memo.content}
                        deleteItem={deleteItem}
                    />
                ))}
            </div>
            {keyword
            ? <></>
            : <button 
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                onClick={addMemo}
            >
                새 메모 추가
            </button>}
        </div>
    );
}

export default MemoList;