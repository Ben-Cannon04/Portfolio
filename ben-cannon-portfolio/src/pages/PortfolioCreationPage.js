import { useOutletContext } from "react-router-dom";

function PortfolioCreation() {
  const [enabled] = useOutletContext();

  const bgColor = enabled ? 'text-black ' : 'text-slate-300 '
  const style = bgColor + ' grid md:grid-cols-1 auto-rows-[300px] flex flex-col h-screen gap-5 my-10 mx-10 md:mx-20 lg:mx-32'
  return (
    <div className={style}>
      <ul>
        <li>GitHub Pages</li>
        <li>React</li>
        <li>Tailwind css</li>
        <li>React Router</li>
        <li>UseLocalStorage</li>
        <li>Material Icon UI</li>
      </ul>
    </div>
  );
  }
  
  export default PortfolioCreation;
  