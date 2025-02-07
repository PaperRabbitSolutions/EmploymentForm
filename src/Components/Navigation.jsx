import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = ({ isDisable,generatePDF }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const formRoutes = [
    "/",
    "/contact",
    "/education",
    "/health",
    "/bank",
    "/upload",
    "/agreements",
    "/declarations",
  ];

  const currentIndex = formRoutes.indexOf(location.pathname);
  const isLastPage = currentIndex === formRoutes.length - 1;

  const goToNext = () => {
    if (currentIndex < formRoutes.length - 1) {
      navigate(formRoutes[currentIndex + 1]);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      navigate(formRoutes[currentIndex - 1]);
    }
  };

  return (
    <div className="w-full max-w-[900px] bg-white px-10 py-10 bottom-0 fixed flex items-center justify-between">
      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className={`px-4 py-2 rounded-lg ${
          currentIndex > 0
            ? "bg-gray-500 text-white hover:bg-gray-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={currentIndex === 0}
      >
        Previous
      </button>

      {/* Next Button */}
      {currentIndex !== formRoutes.length - 1 ? (
        <button
          onClick={goToNext}
          className={`px-4 py-2 text-white rounded-lg ${
            currentIndex < formRoutes.length - 1
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={currentIndex === formRoutes.length - 1}
          title={
            currentIndex === formRoutes.length - 1
              ? "Cannot go next on the last page"
              : ""
          }
        >
          Next
        </button>
      ) : (
        <button
          onClick={generatePDF} 
          className={`px-4 py-2 text-white rounded-lg ${
            isDisable
              ? "bg-red-500 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
          disabled={isDisable}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Navigation;
