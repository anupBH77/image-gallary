import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <HashLoader
        color={"#36d7b7"}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default Spinner;
