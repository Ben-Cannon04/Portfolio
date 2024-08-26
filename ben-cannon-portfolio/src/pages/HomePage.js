import { useOutletContext } from "react-router-dom";
import DarkModeBox from "../components/DarkModeBox";
import DescriptionBox from "../components/DescriptionBox";
import GridLayout from "../components/GridLayout";
import IconBox from "../components/IconBox";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function HomePage() {
  const [enabled, setEnabled] = useOutletContext();

  const data = [<DescriptionBox title="about me." content="Hi my name is Ben Cannon. I'm a Computer Science student at the University of Sheffield."/>, 
  <IconBox link="https://www.linkedin.com/in/ben-cannon04" icon={<LinkedInIcon fontSize="inherit"/>}/>,

  <DescriptionBox title="work experience"  content={"I have worked as a software intern at Yunex Traffic, where I was able to "
    +"use python, javascript and java. I'm starting my role as junior developer at Certara on June 10th."
  } link="/Portfolio/work"/>,

  <DarkModeBox enabled={enabled} setEnabled={setEnabled}/>,
  <DescriptionBox title="extracurricular" content={"In my spare time I have competed in multiple Hackathons and GameJams."
    +" I have also been the treasurer of the Game Development Society at the University of Sheffield"}
   link="/Portfolio/extracurricular"/>,
  <DescriptionBox title="university" content={"I'm currently partaking in my placement year of my computer science degree at the University of Sheffield."
    + " During these two years I have learnt java, javascript, haskell and ruby as well as improving my problem solving ability."
  } link="/Portfolio/uni"/>,
  <DescriptionBox title="projects"  content={""}
   link="/Portfolio/projects"/>,
  <IconBox link="https://github.com/Ben-Cannon04" icon={<GitHubIcon fontSize="inherit"/>}/>]

  return (
    <div>
      {data && <GridLayout boxes={data} lightTheme={enabled} />}
    </div>
  );
}

export default HomePage;
