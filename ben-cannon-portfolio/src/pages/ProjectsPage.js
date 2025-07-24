import { useOutletContext } from 'react-router-dom';
import { useComponentData } from '../services/JsonToComponentConverterService';
import Loading from '../components/Loading';
import LargeBox from '../components/LargeBox';
import SheffJam9Image from '../assets/images/SheffJam9.png';
import ChessImage from '../assets/images/chess.png';
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
              description="The Portfolio You're using now, I've created in my own time to help show my software expierence. I used react js to create the website
               and GitHub Pages to host it.  I've used Tailwind CSS for the styling, as it makes it quiker to implement as well as easier to remember what the stylings mean.
              React router provided a simple way to navigate the website.
              use-local-storage was used to cache the theme."
              isDarkMode={isDarkMode}
              skills={['ReactJS', 'Tailwind Css', 'GitHub Pages']}
              timePeriod="Ongoing"
              hide={filter != 'all' && filter != 'personal'}
              key={0}
            />

            <LargeBox
              title="Rogue-like Game"
              subtitle="SheffJam 9"
              description="My team competed in a GameJam, where we created a rougue-like game to fit the theme 'Villian'. 
              We used Unity and C# to implement this, as well as creating our own assets.
              We won the 'best interpretation of the theme'."
              isDarkMode={isDarkMode}
              skills={['Unity', 'C#']}
              timePeriod="July 2023"
              image={SheffJam9Image}
              hide={filter != 'all' && filter != 'personal'}
              key={1}
            />

            <LargeBox
              title="Finance Fate"
              subtitle="HackSheffield7"
              description="We created a guessing game using the data provided from Capital One's API. We used C# ASP.NET for the backend and Bootstrap for the frontend to achieve this.
              This won us the prize for 'best use of Capital One's API'."
              isDarkMode={isDarkMode}
              skills={['C# ASP.NET', 'Bootstrap']}
              timePeriod="July 2022"
              hide={filter != 'all' && filter != 'personal'}
              key={2}
            />

            <LargeBox
              title="Chess Game"
              subtitle="A-level Computer Science Project"
              description="For my A-level computer Sciience project I created a chess game with Player vs Player, Player vs Ai and a Statistics page.
              I used C# with unity to implement this. This was my introduction to both C# and Unity."
              image={ChessImage}
              isDarkMode={isDarkMode}
              skills={['Unity', 'C#']}
              timePeriod="January - May 2021"
              hide={filter != 'all' && filter != 'education'}
              key={3}
            />

            <LargeBox
              title="Simcyp Simulator V24"
              subtitle="Certara"
              description="I contributed to multiple documents, as well as fixing bugs in the C# Wpf Frontend. 
              I worked in an agile-like software team to implement these features. This included communicating within my team as well as to the scientists (clients),
              implementing the feature and creating unit tests."
              isDarkMode={isDarkMode}
              skills={['C# wpf', 'Design Patterns', 'Autofac', 'Automoq']}
              timePeriod="August - December 2024"
              hide={filter != 'all' && filter != 'work'}
              key={4}
            />

            <LargeBox
              title="Simcyp Simulator V25"
              subtitle="Certara"
              description="I worked on many different parts of the 2025 version of the Simcyp Simulator. I also in adition to implementing features and writing units,
               I wrote regression tests uing TestComplete with JavaScript. I also contributed to the backend on the simulator, expanding my C++ knowledge."
              isDarkMode={isDarkMode}
              skills={['C# wpf', 'C++', 'JavaScript', 'Test Complete']}
              timePeriod="January - July 2025"
              hide={filter != 'all' && filter != 'work'}
              key={4}
            />
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default ProjectsPage;
