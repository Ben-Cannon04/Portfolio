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
        <h1>Loading...</h1>
      </div>
    );

  if (homePageData.error)
    return (
      <div>
        <h1>Error!</h1>
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
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1
            className={`text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Ben Cannon
          </h1>
          <p
            className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Computer Science Student & Software Engineer
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
