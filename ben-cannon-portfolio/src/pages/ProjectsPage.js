import { useOutletContext } from 'react-router-dom';
import SkillsBox from '../components/SkillsBox';
import GridLayout from '../components/GridLayout';

function ProjectsPage() {
  const [enabled] = useOutletContext();

  const data = [
    <SkillsBox
      title={'Portfolio'}
      content={
        'Website hosted through Github pages. Using the libarys: React Router,gh-pages, UseLocalStorage, Material Icon UI'
      }
      skills={['react js', 'Tailwind css', 'Github pages']}
    />,
    <SkillsBox title={'Sheffjam 9'} />,
  ];

  return (
    <div>
      {data && (
        <GridLayout
          boxes={data}
          lightTheme={enabled}
          horizontalBoxes={[0, 1]}
          verticalBoxes={[]}
        />
      )}
    </div>
  );
}

export default ProjectsPage;
