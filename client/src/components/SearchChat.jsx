export default function SearchChat() {
  return (
    <div className="px-4 py-2">
      <label className="flex items-center rounded-2xl border bg-[#F7F7FC] has-[:focus]:border-gray-400">
        {/* prettier-ignore */}
        <button className="flex items-center p-3 rounded-full bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        <input
          className="border-none bg-transparent outline-none"
          type="text"
          placeholder="Search"
        />
      </label>
    </div>
  );
}