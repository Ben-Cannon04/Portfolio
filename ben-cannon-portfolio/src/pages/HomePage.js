import DescriptionBox from "../components/DescriptionBox";
import GridLayout from "../components/GridLayout";
import IconBox from "../components/IconBox";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function HomePage() {
  const data = [<DescriptionBox title="about me." content="Hi my name is Ben Cannon. I'm a Computer Science student at the University of Sheffield."/>, 
  <IconBox link="https://www.linkedin.com/in/ben-cannon04" icon={<LinkedInIcon fontSize="inherit"/>}/>,
  <DescriptionBox title="work" link="/Portfolio/work"/>,
  <DescriptionBox title="dark mode toggle"/>, 
  <DescriptionBox title="extracurricular" link="/Portfolio/extracurricular"/>,
  <DescriptionBox title="university" link="/Portfolio/uni"/>,
  <DescriptionBox />]

  return (
    <>
      {data && <GridLayout boxes={data} />}
    </>
  );
}

export default HomePage;
