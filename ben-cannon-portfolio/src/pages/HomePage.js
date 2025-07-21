import {
  renderComponent,
  useComponentData,
} from '../services/JsonToComponentConverterService';
import { useOutletContext } from 'react-router-dom';

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useOutletContext();

  const homePageData = useComponentData('home-page-data');
  if (homePageData.loading)
    return (
      <div>
        <h1 className={isDarkMode ? 'text-primary-dark' : 'text-primary-light'}>
          Loading...
        </h1>
      </div>
    );

  if (homePageData.error)
    return (
      <div>
        <h1 className={isDarkMode ? 'text-primary-dark' : 'text-primary-light'}>
          Error!
        </h1>
      </div>
    );

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}
    >
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 ${
              isDarkMode ? 'text-primary-dark' : 'text-primary-light'
            }`}
          >
            Ben Cannon
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Computer Science Student & Software Engineer
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {homePageData.data.boxes.map((box, index) =>
            renderComponent(box, index, { isDarkMode, setIsDarkMode })
          )}
        </div>

        <div className="text-center mt-16">
          <p
            className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
          >
            © 2025 Ben Cannon. Built with React
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
