import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import ComboBox from '../components/ComboBox';
import GridLayout from '../components/GridLayout';
import SkillsBox from '../components/SkillsBox';

function ExtraCurricular() {
  const [enabled] = useOutletContext();
  const [selectedYear, setSelectedYear] = useState('Year 1');

  const yearOptions = ['Year 1', 'Year 2', 'Year in Industry', 'Year 3'];

  const modulesByYear = {
    'Year 1': [
      <SkillsBox
        skills={['Ruby', 'Git', 'Agile Methodology']}
        title={'Introduction to Software Engineering'}
        content={
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaa'
        }
        key={0}
      />,
      <SkillsBox title={'Foundations of Computer Science'} key={1} />,
      <SkillsBox
        skills={['Java', 'Object Object Oriented Programming']}
        title={'Java Programming'}
        key={2}
      />,
      <SkillsBox
        skills={['Miro Code']}
        title={'Machines and Intelligence'}
        key={3}
      />,
      <SkillsBox title={'Devices and Networks'} key={4} />,
      <SkillsBox
        skills={['HTML', 'CSS', 'javaScript']}
        title={'Web and Internet Technology'}
        key={5}
      />,
      <SkillsBox
        title={'Introduction to Algorithms and Data Structures'}
        key={6}
      />,
      <SkillsBox
        skills={['Team Work', 'Presenting']}
        title={'Gloabl Engineering Challenge Week'}
        key={7}
      />,
    ],
    'Year 2': [
      <SkillsBox
        skills={['python', 'SciPy', 'Numpy']}
        title={'Data Driven Computing'}
        key={8}
      />,
      <SkillsBox
        skills={['Java', 'UML Diagrams']}
        title={'System Design and Security'}
        key={9}
      />,
      <SkillsBox skills={['Python', 'ROS']} title={'Robotics'} key={10} />,
      <SkillsBox title={'Logic in Computer Science'} key={0} />,
      <SkillsBox
        skills={['Haskell']}
        title={'Functional Programming'}
        key={11}
      />,
      <SkillsBox title={'Automata, Computation and Complexity'} key={12} />,
      <SkillsBox
        skills={['React', 'React-router', 'Agile Methodology']}
        title={'Software Hut'}
        key={13}
      />,
      <SkillsBox
        skills={['Team work', 'Presenting']}
        title={"Engineering - You're Hired"}
        key={14}
      />,
    ],
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-xl mx-auto mb-8">
        <ComboBox
          title="Select University Year"
          options={yearOptions}
          lightTheme={enabled}
          onChange={e => setSelectedYear(e.target.value)}
          value={selectedYear}
        />
      </div>

      <GridLayout
        boxes={modulesByYear[selectedYear] || []}
        lightTheme={enabled}
        horizontalBoxes={modulesByYear[selectedYear]?.map((_, i) => i) || []}
        verticalBoxes={[]}
      />
    </div>
  );
}

export default ExtraCurricular;
