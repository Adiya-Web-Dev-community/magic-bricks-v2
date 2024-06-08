import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
  return (
    <main className="absolute w-full h-full overflow-y-scroll grid place-items-center">
      <ImSpinner9 className="text-gray-800 text-9xl animate-spin -mt-10" />
    </main>
  );
};

export default Loading;
