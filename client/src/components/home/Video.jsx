import { FaWindowClose } from "react-icons/fa";

const Video = ({ setShowVideo }) => {
  return (
    <main className="fixed top-0 left-0 z-10 w-full h-full bg-black/90 grid place-items-center">
      <section className="w-11/12 md:w-2/3">
        <h1 className="text-slate-300 mb-3 text-3xl font-extralight text-center">
          How it works
        </h1>
        <div className="rounded-xl overflow-hidden">
          <video controls src="/how-it-works.mp4"></video>
        </div>
      </section>
      <FaWindowClose
        className="absolute top-7 right-7 text-3xl cursor-pointer text-slate-300 hover:text-slate-500 duration-200"
        onClick={() => setShowVideo(false)}
      />
    </main>
  );
};

export default Video;
