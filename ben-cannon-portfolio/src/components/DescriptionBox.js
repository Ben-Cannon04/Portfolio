import { Link } from "react-router-dom";

function DescriptionBox({title, content, link}) {
    return (
      <div className="text-pretty">
        <h2 className='text-3xl font-bold font-mono pt-4'>{title}</h2>
        <p className='text-sm font-mono pb-1'>{content} {link && <i><Link to={link}>Read more...</Link></i>}</p>
      </div>
    );
  }
  
  export default DescriptionBox;
  