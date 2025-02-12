import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update, remove } from "../store/slices/memoSlice";

function MemoDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { memos } = useSelector((state) => state.memos);
  const { id } = useParams();
  const [memo, setMemo] = useState(memos.filter((v) => v.id === Number(id))[0]);

  const saveMemo = () => {
    if (!memos.find((v) => v.id === Number(id))) {
      alert("잘못된 접근입니다");
      return;
    }

    dispatch(update(memo));

    alert("저장 되었습니다");
    navigate("/");
  };

  const deleteMemo = () => {
    if (!memos.find((v) => v.id === Number(id))) {
      alert("잘못된 접근입니다");
      return;
    }

    dispatch(remove(memo));
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-gray-100 rounded p-4">
      <input
        type="text"
        placeholder="Enter memo title"
        className="w-full p-2 rounded text-xl font-bold border border-blue-400"
        value={memo?.title || ""}
        onChange={(e) => setMemo({ ...memo, title: e.target.value })}
      />
      <textarea
        placeholder="Enter memo contents"
        className="w-full p-2 border border-blue-400 rounded h-48 mt-4"
        value={memo?.contents || ""}
        onChange={(e) => setMemo({ ...memo, contents: e.target.value })}
      />
      <div className="flex flex-row justify-between pt-4">
        <div className="flex gap-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={saveMemo}
          >
            저장
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={deleteMemo}
          >
            삭제
          </button>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => navigate("/")}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemoDetail;
