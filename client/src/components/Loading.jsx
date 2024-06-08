const Loading = () => {
  return (
    <>
      <main className="group w-[330px] sm:w-[400px] h-[450px]">
        <main className="w-[330px] sm:w-[400px] h-[450px] shadow group-hover:-mt-3 duration-100 rounded-xl overflow-hidden cursor-default">
          <div className="w-full h-[45%] mySwiper bg-slate-300 animate-pulse"></div>
          <section className="relative w-full h-[55%] p-3 space-y-3 bg-white">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 rounded py-1 px-1.5 w-[60.88px] h-[25.6px] bg-slate-300 animate-pulse"></div>
              <div className="flex items-center space-x-1 bg-slate-300 rounded py-1 px-1.5 w-[73.95px] h-[25.6px] animate-pulse"></div>
            </div>
            <address className="w-[192.94px] h-[24px] bg-slate-300 rounded animate-pulse"></address>
            <div className="flex items-center justify-between">
              <p className="text-xs bg-slate-300 font-semibold w-[102.61px] h-[28px] rounded animate-pulse"></p>
              <p className="text-xs bg-slate-300 font-semibold w-[81.93px] h-[28px] rounded animate-pulse"></p>
            </div>
            <div className="bg-slate-300 rounded-md p-2.5 space-y-2.5 w-[376px] h-[100px] animate-pulse"></div>
            <button className="absolute -top-1 right-2 bg-slate-300 duration-200 rounded px-3 pt-0.5 pb-1 w-[57.75px] h-[30px] animate-pulse"></button>
          </section>
        </main>
      </main>
    </>
  );
};

export default Loading;
