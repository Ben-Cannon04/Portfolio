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
              Work
            </h1>
          </div>

          <div className="relative">
            <TechBox
              title="C#"
              subtitle=""
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Simcyp Simulator V24',
                  to: '/Portfolio/work',
                  isClickable: true,
                },
                { text: 'Simcyp Simulator V25', link: '/Portfolio/work' },
                { text: 'Finance Fate', link: '/Portfolio/projects' },
              ]}
              proficiency="Advanced"
              key={0}
            >
              <p>
                I&apos;ve used C# in a series of personal project as well as in
                industry . I&apos;ve used it with unity and wpf.
              </p>
            </TechBox>
            <TechBox
              title="React"
              subtitle=""
              description="I've used React in a series of ***personal projects*** as well as at ***university***. I've also begun learning react native with expo."
              isDarkMode={isDarkMode}
              grade="Intermediate"
              key={0}
            />
            <TechBox
              title="Java"
              subtitle=""
              description="I've used Java at ***university***. I would like to learn java Spring boot"
              isDarkMode={isDarkMode}
              grade="In Progress"
              key={0}
            />
            <TechBox
              title="Haskell"
              subtitle=""
              description="Uni"
              isDarkMode={isDarkMode}
              grade="Beginner"
              key={0}
            />
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default TechnologiesPage;
