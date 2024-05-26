import { useOutletContext } from "react-router-dom";
import DarkModeBox from "../components/DarkModeBox";
import DescriptionBox from "../components/DescriptionBox";
import GridLayout from "../components/GridLayout";
import IconBox from "../components/IconBox";
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function HomePage() {
  const [enabled, setEnabled] = useOutletContext();
  
  const data = [<DescriptionBox title="about me." content="Hi my name is Ben Cannon. I'm a Computer Science student at the University of Sheffield."/>, 
  <IconBox link="https://www.linkedin.com/in/ben-cannon04" icon={<LinkedInIcon fontSize="inherit"/>}/>,
  <DescriptionBox title="work" link="/Portfolio/work"/>,
  <DarkModeBox enabled={enabled} setEnabled={setEnabled}/>,
  <DescriptionBox title="extracurricular" link="/Portfolio/extracurricular"/>,
  <DescriptionBox title="university" link="/Portfolio/uni"/>,
  <DescriptionBox />]

  return (
    <div>
      {data && <GridLayout boxes={data} lightTheme={enabled} />}
    </div>
  );
}

export default HomePage;
