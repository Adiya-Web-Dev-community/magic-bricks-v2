import { BiLogoLinkedin } from "react-icons/bi";
import { leadershipTeam } from "../configs/leadershipTeam.config";

const About = () => {
  return (
    <>
      <section
        style={{ backgroundImage: "url(/world-map.png)" }}
        className="relative w-full h-[calc(100vh-4rem)] bg-cover bg-center"
      >
        <section className="absolute top-0 w-full h-full bg-gradient-to-b from-yellow-50/75 to-cyan-50/25 grid place-items-center">
          <section className="text-center -mt-0 md:-mt-16 flex flex-col items-center">
            <h1 className="text-cyan-500 font-serif text-3xl md:text-4xl mx-5 mb-5 animate-pulse">
              Learn more about DuoFraction!
            </h1>
            <h1 className="text-slate-500 text-lg md:text-xl mx-5 mb-7">
              We’re creating a world where real estate is fully digital,
              accessible, borderless and liquid!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10">
              <p className="flex flex-col items-center shadow border border-slate-100 py-2.5 px-5 rounded-md bg-white/50">
                <span className="text-cyan-500 text-2xl">2021</span>
                <span className="text-slate-500 font-serif">Launch date</span>
              </p>
              <p className="flex flex-col items-center shadow border border-slate-100 py-2.5 px-5 rounded-md bg-white/50">
                <span className="text-cyan-500 text-2xl">32</span>
                <span className="text-slate-500 font-serif">Team members</span>
              </p>
              <p className="flex flex-col items-center shadow border border-slate-100 py-2.5 px-5 rounded-md bg-white/50">
                <span className="text-cyan-500 text-2xl">17</span>
                <span className="text-slate-500 font-serif">
                  Employee nationalities
                </span>
              </p>
              <p className="flex flex-col items-center shadow border border-slate-100 py-2.5 px-5 rounded-md bg-white/50">
                <span className="text-cyan-500 text-2xl">
                  <span className="text-base">INR</span> 175M+
                </span>
                <span className="text-slate-500 font-serif">
                  Value of properties funded
                </span>
              </p>
            </div>
          </section>
        </section>
      </section>

      <section className="w-full h-auto grid place-items-center mb-[75px] lg:mb-[100px]">
        <section className="flex flex-col items-center">
          <h1 className="text-3xl font-serif text-slate-600 mb-2">
            Leadership team
          </h1>
          <p className="w-auto md:w-[700px] text-sm md:text-base mx-5 md:mx-0 text-center mb-7 text-slate-600 leading-snug">
            Our team has decades of leadership experience at market leaders in
            the real estate, technology, financial services, consulting and
            creative sectors.
          </p>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {leadershipTeam.map((i, j) => (
              <div className="group w-[250px] h-[275px]">
                <div
                  key={j}
                  className="w-[250px] h-[275px] rounded-lg overflow-hidden border border-slate-100 shadow group-hover:-mt-3 duration-100"
                >
                  <div
                    style={{ backgroundImage: `url(${i.img})` }}
                    className="relative w-full h-[65%] bg-cover"
                  >
                    <span className="group/icon absolute top-1.5 right-1.5 bg-white hover:bg-cyan-400 p-1 rounded-full border border-white cursor-pointer">
                      <BiLogoLinkedin className="text-slate-500 group-hover/icon:text-white text-sm" />
                    </span>
                  </div>
                  <div className="flex flex-col justify-center h-[35%] text-slate-500 bg-slate-50 pl-2.5">
                    <p className="font-serif mb-1.5">{i.name}</p>
                    <p className="mb-2.5 font-serif text-sm">{i.designation}</p>
                    <img className="w-14" src={i.company} alt="logo-company" />
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
