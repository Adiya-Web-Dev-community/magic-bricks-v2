import { ImSpinner9 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="w-full flex justify-center">
      <ImSpinner9 className="animate-spin text-9xl text-gray-200 mt-10" />
    </div>
  );
};

export default Loader;
