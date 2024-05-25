import DescriptionBox from "../components/DescriptionBox";
import GridLayout from "../components/GridLayout";

function HomePage() {
  const data = [<DescriptionBox title="about me." content="Hi my name is Ben Cannon. I'm a Computer Science student at the University of Sheffield."/>, 
  <div><a href="https://www.linkedin.com/in/ben-cannon04" rel="noopener noreferrer" target="_blank">linkedin</a></div>,
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
