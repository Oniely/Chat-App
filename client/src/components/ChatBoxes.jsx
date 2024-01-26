import { Link } from "react-router-dom";

export default function ChatBoxes() {
  return (
    <div className="px-4 pt-6">
      {/* sent chat */}
      <Link className="mb-5 flex items-center p-2 shadow-sm">
        <div className="w-16 shrink-0 p-1">
          <img
            className="aspect-square rounded-lg object-cover object-center"
            src="/angry animal.jpg"
            alt="profile"
          />
        </div>
        <div className="flex w-full flex-col gap-1 px-3">
          <div className="flex justify-between">
            <h2 className="font-medium capitalize">Angry Animal</h2>
            <h3 className="text-sm tracking-wide text-grey">1:33am</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="truncate text-sm text-grey">
              You: Hello, what are you up to?
            </p>
            {/* prettier-ignore */}
            <div className="rounded-full bg-[#faeaea] p-1 font-semibold text-[#ae3e3e]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
          </div>
        </div>
      </Link>
      {/* unread chat */}
      <Link className="mb-5 flex items-center p-2 shadow-sm">
        <div className="w-16 shrink-0 p-1">
          <img
            className="aspect-square rounded-lg object-cover object-center"
            src="/angry animal.jpg"
            alt="profile"
          />
        </div>
        <div className="flex w-full flex-col gap-1 px-3">
          <div className="flex justify-between">
            <h2 className="font-medium capitalize">Angry Animal 2</h2>
            <h3 className="text-sm tracking-wide text-grey">1:33am</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="truncate text-sm font-medium text-black">
              Hello, what are you up to?
            </p>
            <span className="rounded-full bg-[#faeaea] px-3 py-1 text-sm font-semibold text-[#ae3e3e]">
              1
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
