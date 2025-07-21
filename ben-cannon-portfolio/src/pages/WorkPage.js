import { useOutletContext } from 'react-router-dom';
import { useComponentData } from '../services/JsonToComponentConverterService';
import LargeBox from '../components/LargeBox';
import Loading from '../components/Loading';

function WorkPage() {
  const [isDarkMode] = useOutletContext();

  const { loading, error } = useComponentData('work-data');

  return (
    <Loading loading={loading} error={error} isDarkMode={isDarkMode}>
      <div className="min-h-screen py-6 px-3 sm:py-12 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1
              className={`text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
            >
              Work
            </h1>
          </div>

          <div className="relative">
            <LargeBox
              title="Software Intern"
              subtitle="Yunex Traffic"
              description=""
              isDarkMode={isDarkMode}
              skills={[
                'Java',
                'Python',
                'CI/CD Pipelines',
                'FFmpeg',
                'JavaScipt',
              ]}
              timePeriod="June - September 2023"
              expandedByDefault={true}
              key={0}
            >
              <h1>What Yunex Traffic Do?</h1>
              <p>stuff...</p>
              <h1>What I worked on?</h1>
              <p>stuff...</p>
            </LargeBox>

            <LargeBox
              title="Juniour Software Engineer"
              subtitle="Certara"
              description=""
              isDarkMode={isDarkMode}
              skills={['C# wpf', 'C++', 'Design Patterns', 'Git']}
              timePeriod="June 2024 - July 2025"
              expandedByDefault={true}
              key={1}
            >
              <h1>What Certara Do?</h1>
              <p>stuff...</p>
              <h1>What I worked on?</h1>
              <p>stuff...</p>
            </LargeBox>
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default WorkPage;
