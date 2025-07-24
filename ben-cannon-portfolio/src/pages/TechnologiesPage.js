import { useOutletContext } from 'react-router-dom';
import Loading from '../components/Loading';
import TechBox from '../components/TechBox';
import Filter from '../components/Filter';
import { useState } from 'react';

function TechnologiesPage() {
  const [isDarkMode] = useOutletContext();

  const [filter, setFilter] = useState('all');

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

          <Filter
            filter={filter}
            setFilter={setFilter}
            filters={['all', 'C#', 'JavaScript', 'C++', 'Java']}
            isDarkMode={isDarkMode}
          />

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
              hide={filter != 'all' && filter != 'C#'}
              key={0}
            >
              <p>
                I&apos;m expirenced in c# wpf, using it for 13 months in
                industry.
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
              hide={filter != 'all' && filter != 'C#'}
              key={1}
            >
              <p>
                I&apos;ve used unity in personal projects, school projects as
                well as at GameJams and Game development Society.
              </p>
            </TechBox>

            <TechBox
              title="React"
              subtitle="JavaScript"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Portfolio',
                  to: '/Portfolio/projects',
                  isClickable: true,
                },
                {
                  text: 'University',
                  to: '/Portfolio/education',
                  isClickable: true,
                },
              ]}
              proficiency="Intermediate"
              hide={filter != 'all' && filter != 'JavaScript'}
              key={2}
            >
              <p>
                I&apos;ve used React in industry as well as at university and in
                personal projects. I&apos;m also learning react native with Expo
                in my own time currently.
              </p>
            </TechBox>

            <TechBox
              title="Core Java"
              subtitle="Java"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'University',
                  to: '/Portfolio/education',
                  isClickable: true,
                },
                {
                  text: 'Yunex Traffic',
                  to: '/Portfolio/work',
                  isClickable: true,
                },
              ]}
              proficiency="Intermediate"
              hide={filter != 'all' && filter != 'Java'}
              key={3}
            >
              <p>
                I&apos;ve used Java throughout university, create console
                application and Java Swing Applications. I&apos;ve also used it
                in industry as a backend with FFmpeg. In the future I would be
                interested in learning Java Spring Boot.
              </p>
            </TechBox>

            <TechBox
              title="TypeScript"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Yunex Traffic',
                  to: '/Portfolio/work',
                  isClickable: true,
                },
              ]}
              proficiency="Intermediate"
              hide={filter != 'all' && filter != 'JavaScript'}
              key={2}
            >
              <p>
                I&apos;ve used TypeScript in industry. I&apos;m also using
                typescript in my own time
              </p>
            </TechBox>

            <TechBox
              title="C++"
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
              proficiency="Beginner"
              hide={filter != 'all' && filter != 'C++'}
              key={4}
            >
              <p>
                I&apos;ve used C++ in Industry for the backend of the Simcyp
                Simulator.
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
              hide={filter != 'all' && filter != 'C#'}
              key={6}
            >
              <p>
                I have a small expierence with Asp.Net and would be intersed in
                furthering my knowledge.
              </p>
            </TechBox>
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default TechnologiesPage;
