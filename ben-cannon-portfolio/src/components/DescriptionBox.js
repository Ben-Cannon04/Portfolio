function DescriptionBox({title, content, link}) {
    return (
      <div>
        <h2 className='text-3xl font-bold font-mono'>{title}</h2>
        <p className='text-sm font-mono'>{content}</p>
        {link && <a href={link} rel="noopener noreferrer" target="_blank">click here</a>}
      </div>
    );
  }
  
  export default DescriptionBox;
  