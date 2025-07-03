import { useOutletContext } from 'react-router-dom';
import SkillsBox from '../components/SkillsBox';
import GridLayout from '../components/GridLayout';

function WorkPage() {
  const [enabled] = useOutletContext();

  const data = [
    <SkillsBox
      title="Yunex Traffic"
      content={
        'During my internship I worked as part of a fully agile software development team, participating in daily standups, ' +
        'planning, show/tell and retrospectives. I have developed application features using JavaScript, Java, and Python,' +
        'and worked on DevOps tasks to improve the CI/CD pipeline. The main support tools used were Jira, GitLab and ' +
        'Confluence. As well as improving my development skills directly, I have learnt a great deal working with Senior ' +
        'Developers through for example code reviews. The internship has also given me significant experience working ' +
        'and communicating within a professional team environment.'
      }
      skills={['Java', 'Python', 'FFmpeg', 'Jira rest api', 'JavaScript']}
    />,
  ];

  return (
    <div>
      {data && (
        <GridLayout
          boxes={data}
          lightTheme={enabled}
          horizontalBoxes={[1, 2, 3, 4, 5, 6, 7]}
          verticalBoxes={[0]}
        />
      )}
    </div>
  );
}

export default WorkPage;
