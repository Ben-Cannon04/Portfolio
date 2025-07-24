import { useOutletContext } from 'react-router-dom';
import Loading from '../components/Loading';
import TechBox from '../components/TechBox';

function TechnologiesPage() {
  const [isDarkMode] = useOutletContext();

  return (
    <Loading isDarkMode={isDarkMode}>
      <div className="min-h-screen py-6 px-3 sm:py-12 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1
              className={`text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
            >
              Software Technologies
            </h1>
          </div>

          <div className="relative">
            <TechBox
              title="Wpf"
              subtitle="C#"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Simcyp Simulator V24',
                  to: '/Portfolio/work',
                  isClickable: true,
                },
                {
                  text: 'Simcyp Simulator V25',
                  to: '/Portfolio/work',
                  isClickable: true,
                },
              ]}
              proficiency="Advanced"
              key={0}
            >
              <p>
                I&apos;ve used C# in a series of personal project as well as in
                industry .
              </p>
            </TechBox>
            <TechBox
              title="Unity"
              subtitle="C#"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Rogue-like Game',
                  to: '/Portfolio/projects',
                  isClickable: true,
                },
                {
                  text: 'Chess Game',
                  to: '/Portfolio/work',
                  isClickable: true,
                },
              ]}
              proficiency="Intermediate"
              key={1}
            >
              <p>
                I&apos;ve used C# in a series of personal project as well as in
                industry .
              </p>
            </TechBox>
            <TechBox
              title="ASP.Net"
              subtitle="C#"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Finanace Fate',
                  to: '/Portfolio/projects',
                  isClickable: true,
                },
              ]}
              proficiency="Beginner"
              key={2}
            >
              <p>
                I&apos;ve used C# in a series of personal project as well as in
                industry .
              </p>
            </TechBox>
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default TechnologiesPage;
