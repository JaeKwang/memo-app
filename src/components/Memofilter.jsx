
function Memofilter({onFilter}) {
    return (
        <div className="pb-4">
            <input
                type="text"
                placeholder="Search by title"
                className="w-full p-2 border rounded border-blue-400"
                onChange={(e) => onFilter(e.target.value)}
            />
        </div>
    );
}

export default Memofilter;