import GridLayout from "../components/GridLayout";

function HomePage() {
  const data = [<div><h2>Hello</h2></div>, <div>
  <a href="https://www.linkedin.com/in/ben-cannon-4b0310256/" target="_blank">linkedin</a></div>,<div><p>About me</p></div>,
  <div><h2>Image</h2></div>, <div><h2>Hello</h2></div>, <div><h2>Hello</h2></div>]

  return (
    <>
      <h1 className='text-3xl font-bold font-mono'>Hi, i'm Ben</h1>
      <h2 className='font-mono'>Computer Science student at the University of Sheffield</h2>
      <GridLayout boxes={data} />
    </>
  );
}

export default HomePage;
