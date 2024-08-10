import { useOutletContext } from "react-router-dom";
import GridLayout from "../components/GridLayout";
import SkillsBox from "../components/SkillsBox";

function UniPage() {
  const [enabled] = useOutletContext();

  // const bgColor = enabled ? 'text-black ' : 'text-slate-300 '
  // const style = bgColor + ' grid md:grid-cols-1 auto-rows-[300px] flex flex-col h-screen gap-5 my-10 mx-10 md:mx-20 lg:mx-32'
  const firstYearData = 
  [
    <SkillsBox skills={["Ruby", "Git", "Agile Methodology"]} title={"Introduction to Software Engineering"}/>,
    <SkillsBox title={"Foundations of Computer Science"}/>,
    <SkillsBox skills={["Java", "Object Object Oriented Programming"]} title={"Java Programming"}/>,
    <SkillsBox skills={["Miro Code"]} title={"Machines and Intelligence"}/>,
    <SkillsBox title={"Devices and Networks"}/>,
    <SkillsBox skills={["HTML", "CSS", "javaScript"]} title={"Web and Internet Technology"}/>,
    <SkillsBox title={"Introduction to Algorithms and Data Structures"}/>,
    <SkillsBox skills={["Team Work", "Presenting"]} title={"Gloabl Engineering Challenge Week"}/>,
  ]

  const seconfYearData = 
  [
    <SkillsBox skills={["python", "SciPy", "Numpy"]} title={"Data Driven Computing"}/>,
    <SkillsBox skills={["Java", "UML Diagrams"]} title={"System Design and Security"}/>,
    <SkillsBox skills={["Python", "ROS"]} title={"Robotics"}/>,
    <SkillsBox title={"Logic in Computer Science"}/>,
    <SkillsBox skills={["Haskell"]} title={"Functional Programming"}/>,
    <SkillsBox title={"Automata, Computation and Complexity"}/>,
    <SkillsBox skills={["React", "React-router", "Agile Methodology"]} title={"Software Hut"}/>,
    <SkillsBox skills={["Team work", "Presenting"]} title={"Engineering - You're Hired"}/>,

  ]

  const data = firstYearData.concat(seconfYearData)

  return (
      <div>
        {data && <GridLayout boxes={data} lightTheme={enabled} horizontalBoxes={[0,1,2,3,4,5,6,7]} verticalBoxes={[]} />}
      </div>
  );
}

export default UniPage;
