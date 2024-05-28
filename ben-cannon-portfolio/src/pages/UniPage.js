import { useOutletContext } from "react-router-dom";
import DescriptionBox from "../components/DescriptionBox";
import GridLayout from "../components/GridLayout";

function UniPage() {
  const [enabled] = useOutletContext();

  // const bgColor = enabled ? 'text-black ' : 'text-slate-300 '
  // const style = bgColor + ' grid md:grid-cols-1 auto-rows-[300px] flex flex-col h-screen gap-5 my-10 mx-10 md:mx-20 lg:mx-32'
 
  const data = [<DescriptionBox />,
    <DescriptionBox />,
    <DescriptionBox />,
    <DescriptionBox />,
    <DescriptionBox />,
    <DescriptionBox />,
    <DescriptionBox />,
    <DescriptionBox />]

  return (
    <div>
      {data && <GridLayout boxes={data} lightTheme={enabled} horizontalBoxes={[0,1,2,3,4,5,6,7]} verticalBoxes={[]} />}
    </div>
  );
}

export default UniPage;
