import { useOutletContext } from 'react-router-dom';
import { useComponentData } from '../services/JsonToComponentConverterService';
import Loading from '../components/Loading';
import LargeBox from '../components/LargeBox';
import SheffJam9Image from '../assets/images/SheffJam9.png';
import { useState } from 'react';
import Filter from '../components/Filter';

function ProjectsPage() {
  const [isDarkMode] = useOutletContext();
  const [filter, setFilter] = useState('all');
  const { loading, error } = useComponentData('work-data');

  return (
    <Loading loading={loading} error={error} isDarkMode={isDarkMode}>
      <div className="min-h-screen py-6 px-3 sm:py-12 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1
              className={`text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
            >
              Projects
            </h1>
          </div>

          <Filter
            filter={filter}
            setFilter={setFilter}
            filters={['all', 'personal', 'education', 'work']}
            isDarkMode={isDarkMode}
          />

          <div className="relative">
            <LargeBox
              title="Portfolio"
              subtitle="Personal"
              description="The Portfolio You're using now I've created in my own time to help show my software expierence."
              isDarkMode={isDarkMode}
              skills={['ReactJS', 'Tailwind Css', 'GitHub Pages']}
              timePeriod="Ongoing"
              hide={filter != 'all' && filter != 'personal'}
              key={0}
            />

            <LargeBox
              title="Rogue-like Game"
              subtitle="SheffJam 9"
              description="My team created a rougue like game to fit the theme 'Villian'. We won the 'best interpretation of the theme' We created our own Assets."
              isDarkMode={isDarkMode}
              skills={['Unity', 'C#']}
              timePeriod="July 2023"
              image={SheffJam9Image}
              hide={filter != 'all' && filter != 'education'}
              key={1}
            />

            <LargeBox
              title="Finance Fate"
              subtitle="HackSheffield7"
              description="We created a guessing game using the data provided from Capital One's API, this won us the prize for 'best use of Capital One's API'. We used C# ASP.NET and Bootstrap to achieve this."
              isDarkMode={isDarkMode}
              skills={['C# ASP.NET', 'Bootstrap']}
              timePeriod="July 2022"
              hide={filter != 'all' && filter != 'education'}
              key={2}
            />

            <LargeBox
              title="Chess Game"
              subtitle="A-level Computer Science Project"
              description="Player vs player and Player vs Ai chess game. Can look at stats afterwards."
              isDarkMode={isDarkMode}
              skills={['Unity', 'C#']}
              timePeriod="January - May 2021"
              hide={filter != 'all' && filter != 'education'}
              key={3}
            />
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default ProjectsPage;
