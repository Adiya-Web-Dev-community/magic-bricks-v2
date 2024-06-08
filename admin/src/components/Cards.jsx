import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <main className="absolute w-full h-full overflow-y-scroll capitalize overflow-hidden">
      <main className="w-fit py-5 grid place-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {data.map((i, j) => (
          <section
            key={i._id}
            className="w-[22rem] h-52 border rounded-lg shadow bg-gray-800 border-gray-700 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-around h-full relative">
              <div className="flex items-center justify-between px-10 w-full">
                <p className="text-sm font-semibold text-gray-400">Type</p>
                <span className="w-10 h-px bg-slate-200 absolute mx-auto left-0 right-0"></span>
                <p className="text-sm text-gray-400">
                  {i.propertyType || "---"}
                </p>
              </div>
              <div className="flex items-center justify-between px-10 w-full relative">
                <p className="text-sm font-semibold text-gray-400">Ad Type</p>
                <span className="w-10 h-px bg-slate-200 absolute mx-auto left-0 right-0"></span>
                <p className="text-sm text-gray-400">
                  {i.propertyAdType || "---"}
                </p>
              </div>
              <div className="flex items-center justify-between px-10 w-full relative">
                <p className="text-sm font-semibold text-gray-400">Posted On</p>
                <span className="w-10 h-px bg-slate-200 absolute mx-auto left-0 right-0"></span>
                <p className="text-sm text-gray-400">{i.postedOn || "---"}</p>
              </div>
              <div className="flex items-center justify-between px-10 w-full relative">
                <p className="text-sm font-semibold text-gray-400">Status</p>
                <span className="w-10 h-px bg-slate-200 absolute mx-auto left-0 right-0"></span>
                <p className="text-sm text-gray-400">
                  {i.isVerified ? "Verified" : "Unverified"}
                </p>
              </div>
              <div className="flex space-x-3">
                <Link
                  to={`/home/view/${i._id}`}
                  href="#"
                  className="px-4 py-1 text-sm font-medium text-center border rounded-md focus:ring-4 focus:outline-none bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-700 focus:ring-gray-700"
                >
                  View
                </Link>
              </div>
            </div>
          </section>
        ))}
      </main>
    </main>
  );
};

export default Cards;
