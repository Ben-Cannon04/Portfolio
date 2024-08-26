function ComboBox({title, options, lightTheme}) {
    const bgColor = lightTheme ? 'bg-neutral-100 text-black ' : 'bg-zinc-800 text-slate-300 '
    const style = bgColor + 'p-2 flex flex-col items-center justify-center';

    return (
        <div className={style}>
            <label for="cars">{title}</label>
            <select id="cars" name="cars">
            {options?.map((skill, index) => (
                <option key={index}>
                {skill}
                </option>
            ))}
            </select>
        </div>
    );
  }
  
  export default ComboBox;
  