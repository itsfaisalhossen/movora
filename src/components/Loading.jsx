import { BeatLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="text-white text-center my-24 md:my-36">
      <BeatLoader color="#f43f5e" size={14} speedMultiplier={1} />
    </div>
  );
};
export default Loading;
