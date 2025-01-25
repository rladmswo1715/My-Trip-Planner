import { BarLoader } from 'react-spinners';

type SpinnerProps = {
  isPageLoading?: boolean;
};

const Spinner = ({ isPageLoading = true }: SpinnerProps) => {
  return (
    <>
      {isPageLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <BarLoader width={150} height={10} color="#1C68FF" />
        </div>
      ) : (
        <div className="z-50 mt-[10rem] flex justify-center">
          <BarLoader width={150} height={10} color="#1C68FF" />
        </div>
      )}
    </>
  );
};

export default Spinner;
