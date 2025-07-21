import { useOutletContext } from 'react-router-dom';
import { useComponentData } from '../services/JsonToComponentConverterService';
import SchoolIcon from '@mui/icons-material/School';
import LargeBox from '../components/LargeBox';
import SkillsBox from '../components/SkillsBox';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Loading from '../components/Loading';

function EducationPage() {
  const [isDarkMode] = useOutletContext();

  const { loading, error } = useComponentData('education-data');

  return (
    <Loading loading={loading} error={error} isDarkMode={isDarkMode}>
      <div className="min-h-screen py-6 px-3 sm:py-12 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1
              className={`text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
            >
              Education
            </h1>
          </div>

          <div className="relative">
            <LargeBox
              title="A-Levels"
              subtitle="Ashby School"
              description="Learnt fundamentals of maths, physics and computer science in peperation for university"
              isDarkMode={isDarkMode}
              skills={['Computer Science', 'Mathematics', 'Physics']}
              grade="A*AA"
              timePeriod="2020-2022"
              icon={<SchoolIcon />}
              child={
                <>
                  <SkillsBox
                    title="Computer Science"
                    content="Provided the foundational knowledge of Computer Science"
                    skills={['C#', 'Unity', ' Algorithms and Data Structures']}
                    isDarkMode={isDarkMode}
                  />
                  <SkillsBox
                    title="Mathematics"
                    content="Maths stuff"
                    skills={['Calculus', 'Squares']}
                    isDarkMode={isDarkMode}
                  />
                  <SkillsBox
                    title="Physics"
                    content="Einstein"
                    skills={['F=ma', 'E=mc^2']}
                    isDarkMode={isDarkMode}
                  />
                </>
              }
              key={0}
            />

            <LargeBox
              title="Year 1"
              subtitle="University of Sheffield"
              description=""
              isDarkMode={isDarkMode}
              skills={['Java', 'Algorithms and Data Structures', 'Team Work']}
              grade="71% - First Class Pass"
              timePeriod="2022-2023"
              icon={<SchoolIcon />}
              child={
                <>
                  <SkillsBox
                    title="Introduction to Software Engineering"
                    content="Robots and stuff"
                    skills={['Ruby', 'Git', 'Agile Methodology']}
                    isDarkMode={isDarkMode}
                  />
                  <SkillsBox
                    title="Foundations of Computer Science"
                    content=""
                    skills={[]}
                    isDarkMode={isDarkMode}
                  />
                  <SkillsBox
                    title="Java Programming"
                    content=""
                    skills={['Java', 'Object Object Oriented Programming']}
                    isDarkMode={isDarkMode}
                  />
                  <SkillsBox
                    title="Machines and Intelligence"
                    content=""
                    skills={['Miro Code']}
                    isDarkMode={isDarkMode}
                  />
                  <SkillsBox
                    title="Devices and Networks"
                    content=""
                    skills={[]}
                    isDarkMode={isDarkMode}
                  />
                  <SkillsBox
                    title="Web and Internet Technology"
                    content=""
                    skills={['HTML', 'CSS', 'javaScript']}
                    isDarkMode={isDarkMode}
                  />
                  <SkillsBox
                    title="Introduction to Algorithms and Data Structures"
                    content=""
                    skills={['HTML', 'CSS', 'javaScript']}
                    isDarkMode={isDarkMode}
                  />
                  <SkillsBox
                    title="Gloabl Engineering Challenge Week"
                    content=""
                    skills={['Team Work', 'Presenting']}
                    isDarkMode={isDarkMode}
                  />
                </>
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
              grade="Pass"
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
    </Loading>
  );
}

export default EducationPage;
