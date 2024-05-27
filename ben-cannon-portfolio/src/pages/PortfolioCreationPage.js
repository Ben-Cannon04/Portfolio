import { useOutletContext } from "react-router-dom";
import DescriptionBox from "../components/DescriptionBox";

function PortfolioCreation() {
  const [enabled] = useOutletContext();

  const bgColor = enabled ? 'text-black ' : 'text-slate-300 '
  const style = bgColor + ' grid md:grid-cols-1 auto-rows-[300px] flex flex-col h-screen gap-5 my-10 mx-10 md:mx-20 lg:mx-32'
  return (
    <div className={style}>
      <DescriptionBox />
      <DescriptionBox />
      <DescriptionBox />
    </div>
  );
  }
  
  export default PortfolioCreation;
  