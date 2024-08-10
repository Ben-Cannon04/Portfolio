import { useOutletContext } from "react-router-dom";
import SkillsBox from "../components/SkillsBox";
import GridLayout from "../components/GridLayout";

function ProjectsPage() {
  const [enabled] = useOutletContext();

  const bgColor = enabled ? 'text-black ' : 'text-slate-300 '
  const style = bgColor + ' grid md:grid-cols-1 auto-rows-[300px] flex flex-col h-screen gap-5 my-10 mx-10 md:mx-20 lg:mx-32'
 
  const data = [
    <SkillsBox title={"Portfolio"} content={"Website hosted through Github pages. Using the libarys: React Router, UseLocalStorage, Material Icon UI"} 
    skills={["react js", "Tailwind css", "Github pages"]}/>,
    <SkillsBox title={"Sheffjam 9"} />
    ]

  return (
    <div className={style}>
      {data && <GridLayout boxes={data} lightTheme={enabled} horizontalBoxes={[0, 1]} verticalBoxes={[]} />}
    </div>
  );
  }
  
  export default ProjectsPage;
  