import { useState } from "react";
import useLocalStorage from "../hooks/useLocalstorage";
import MemoCard from "./MemoCard";
import Memofilter from "./Memofilter";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/slices/memoSlice";

function MemoList() {
  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();
  const { memos } = useSelector((state) => state.memos);
  console.log(memos);

  const addMemo = () => {
    const newMemo = { id: Date.now(), title: "New Memo", contents: "" };
    dispatch(add(newMemo));
  };

  const deleteItem = (id) => {
    dispatch(remove({ id: id }));
  };

  const filteredMemos = memos.filter((memo) =>
    memo.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-gray-100 p-2 rounded">
      <Memofilter onFilter={setKeyword} />
      <div className="flex flex-col gap-4">
        {filteredMemos.length === 0 ? (
          <p>검색 결과가 없어요ㅠ</p>
        ) : (
          filteredMemos.map((memo) => (
            <MemoCard
              key={memo.id}
              memoId={memo.id}
              title={memo.title}
              contents={memo.contents}
              deleteItem={deleteItem}
            />
          ))
        )}
      </div>
      {keyword ? (
        <></>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
          onClick={addMemo}
        >
          새 메모 추가
        </button>
      )}
    </div>
  );
}

export default MemoList;
