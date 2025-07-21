import { useOutletContext } from 'react-router-dom';
import { useComponentData } from '../services/JsonToComponentConverterService';
import LargeBox from '../components/LargeBox';
import SkillsBox from '../components/SkillsBox';
import Loading from '../components/Loading';

function WorkPage() {
  const [isDarkMode] = useOutletContext();

  const {  loading, error } = useComponentData('work-data');

  return (
    <Loading loading={loading} error={error} isDarkMode={isDarkMode}>
      <div className="relative">
        <LargeBox
          title="A-Levels"
          subtitle="Ashby School"
          description="Learnt fundamentals of maths, physics and computer science in peperation for university"
          isDarkMode={isDarkMode}
          skills={['Computer Science', 'Mathematics', 'Physics']}
          grade="A*AA"
          timePeriod="2020-2022"
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
      </div>
    </Loading>
  );
}

export default WorkPage;
