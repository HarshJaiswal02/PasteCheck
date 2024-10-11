import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const pasteId = searchParams.get("pasteId");

  const createPaste = (e) => {
    e.preventDefault();
    const note = {
      title: title,
      content: content,
      _id: pasteId || Date.now().toString(32),
      createdAt: new Date().toISOString(),
    };
    console.log(note);
    if (pasteId) {
      // update
      dispatch(updateToPastes(note));
    } else {
      //create
      dispatch(addToPastes(note));
    }

    setTitle("");
    setContent("");
    setSearchParams({});
  };
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-lg">
        {/* Title Section */}
        <form className="flex gap-1 items-center mb-8" onSubmit={createPaste}>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter the title of note"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <button
            className={`flex items-center px-2 py-2 text-white bg-slate-600 hover:bg-blue-700 rounded-lg`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 2H15C15.5523 2 16 2.44772 16 3V5C16 5.55228 15.5523 6 15 6H9C8.44772 6 8 5.55228 8 5V3C8 2.44772 8.44772 2 9 2Z" />
              <path d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V7Z" />
            </svg>
          </button>
        </form>

        {/* Notes Section */}
        <div className="mt-1">
          <label htmlFor="Notes" className="sr-only">
            Notes
          </label>
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
            <textarea
              id="OrderNotes"
              className="w-full  border-none align-top focus:ring-0 sm:text-sm p-4"
              rows="4"
              placeholder="Enter your notes here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <div className="flex items-center justify-end gap-2 bg-white p-3">
              <button
                type="button"
                className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
              >
                Clear
              </button>

              <button
                onClick={createPaste}
                type="button"
                className="rounded bg-slate-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
