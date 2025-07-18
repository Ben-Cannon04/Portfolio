import { useOutletContext } from 'react-router-dom';
import { useComponentData } from '../services/JsonToComponentConverterService';
import SchoolIcon from '@mui/icons-material/School';
import LargeBox from '../components/LargeBox';
import SkillsBox from '../components/SkillsBox';
import EngineeringIcon from '@mui/icons-material/Engineering';

function EducationPage() {
  const [isDarkMode] = useOutletContext();

  const homePageData = useComponentData('education-data');
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
    <div className='min-h-scree py-6 px-3 sm:py-12 sm:px-4'>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1
            className={`text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
          >
            Education
          </h1>
        </div>

        <div className="relative">
          <div
            className={`absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 ${isDarkMode ? 'bg-border-dark' : 'bg-border-light'}`}
          />

          <LargeBox
            title="A-Levels"
            subtitle="Ashby School"
            description="Learnt fundamentals of maths, physics and computer science in peperation for university"
            isDarkMode={isDarkMode}
            skills={['Mathematics', 'Physics', 'Computer Science']}
            grade="A*AA"
            timePeriod="2020-2022"
            icon={<SchoolIcon />}
            child={<SchoolIcon />}
            key={0}
          />
          
          <LargeBox
            title="Year 1"
            subtitle="University of Sheffield"
            description=""
            isDarkMode={isDarkMode}
            skills={['Java', 'Algorithms and Data Structures', 'Team Work']}
            grade="71% - First Class Pass"
            timePeriod="20202-2023"
            icon={<SchoolIcon />}
            child={
              <div>
                <SkillsBox title='Machines and Inteligence' content='Robots and stuff' skills={['Miro', 'History']}/>
                <SkillsBox title='Machines and Inteligence' content='Robots and stuff' skills={['Miro', 'History']}/>
                <SkillsBox title='Machines and Inteligence' content='Robots and stuff' skills={['Miro', 'History']} />
              </div>
            }
            key={1}
          />
          
          <LargeBox
            title="Year 2"
            subtitle="University of Sheffield"
            description=""
            isDarkMode={isDarkMode}
            skills={['System Design', 'Big O', 'Functional Programming']}
            grade="71% - First Class Pass"
            timePeriod="2023-2024"
            icon={<SchoolIcon />}
            key={2}
          />

          <LargeBox
            title="Year in Industry"
            subtitle="Certara"
            description=""
            isDarkMode={isDarkMode}
            skills={['C#', 'C++', 'Communication']}
            timePeriod="2024-2024"
            grade='Pass'
            icon={<EngineeringIcon />}
            key={3}
          />

          <LargeBox
            title="Year 3"
            subtitle="University of Sheffield"
            description=""
            isDarkMode={isDarkMode}
            skills={['System Design', 'Big O', 'Functional Programming']}
            grade="In Progress"
            timePeriod="2025-Present"
            icon={<SchoolIcon />}
            key={4}
          />
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
