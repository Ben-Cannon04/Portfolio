import { useOutletContext } from "react-router-dom";
import DescriptionBox from "../components/DescriptionBox";

function ExtraCurricular() {
  const [enabled, setEnabled] = useOutletContext();

  const bgColor = enabled ? 'text-black ' : 'text-slate-300 '
  const style = bgColor + ' grid md:grid-cols-1 auto-rows-[300px] gap-5 my-10 mx-10 md:mx-20 lg:mx-32'
  return (
    <div className={style}>
      <DescriptionBox />
      <DescriptionBox />
      <DescriptionBox />
    </div>
  );
  }
  
  export default ExtraCurricular;
  