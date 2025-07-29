import { useOutletContext } from 'react-router-dom';
import LargeBox from '../components/LargeBox';
import Loading from '../components/Loading';

function WorkPage() {
  const [isDarkMode] = useOutletContext();

  return (
    <Loading loading={false} isDarkMode={isDarkMode}>
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
              description="Yunex Traffic is a global leader in Intelligent Transport Systems (ITS) and Smart Mobility solutions,
                 operating in over 40 countries and serving more than 600 cities worldwide. I worked in the traffic enforcement section"
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
              <p
                className={`${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
              >
                I worked on multiple internal tools, as well as creating a
                program to create different test cases. I used core Java, python
                and react to create the tools.
              </p>
            </LargeBox>

            <LargeBox
              id="Certara"
              title="Juniour Software Engineer"
              subtitle="Certara"
              description="Certara is a global leader in biosimulation and model-informed drug development, providing software, scientific expertise,
               and services to accelerate and optimize the drug development process. I worked on the The Simcyp Simulator which is used to predict how drugs behave in the human body."
              isDarkMode={isDarkMode}
              skills={['C# wpf', 'C++', 'Design Patterns', 'Git']}
              timePeriod="June 2024 - July 2025"
              expandedByDefault={true}
              key={1}
            >
              <p
                className={`${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
              >
                During my placement, I worked on multiple versions of the Simcyp
                Simulator using an agile-inspired development process to
                implement features, fix bugs, and address technical debt. I
                developed using C# with WPF for the frontend and C++ for the
                backend. I gained experience with AutoMock and Autofac for unit
                testing and dependency injection, and used TestComplete with
                JavaScript to maintain regression tests. I also worked with
                NuGet packages and followed a used feature-branches. This role
                enhanced my full-stack development skills and exposed me to
                enterprise-grade software engineering practices.
              </p>
            </LargeBox>
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default WorkPage;
