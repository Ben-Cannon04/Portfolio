import { useOutletContext } from "react-router-dom";
import ComboBox from "../components/ComboBox";

function ExtraCurricular() {
  const [enabled] = useOutletContext();

  return (
    <div>
      <ComboBox title={"Uni Year"} options={["1", "2"]} lightTheme={enabled}/>
    </div>
  );
  }
  
  export default ExtraCurricular;
  