import { Link } from "react-router-dom";

function DescriptionBox({title, content, link}) {
    return (
      <div>
        <h2 className='text-3xl font-bold font-mono'>{title}</h2>
        <p className='text-sm font-mono'>{content} {link && <i><Link to={link}>Read more...</Link></i>}</p>
      </div>
    );
  }
  
  export default DescriptionBox;
  