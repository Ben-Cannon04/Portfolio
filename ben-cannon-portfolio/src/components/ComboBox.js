function ComboBox({ title, options, lightTheme, onChange, value }) {
  return (
    <div className="w-full">
      <label
        className={`block mb-2 font-medium ${lightTheme ? 'text-gray-800' : 'text-gray-200'}`}
      >
        {title}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 rounded-md border shadow-sm focus:outline-none
          ${
            lightTheme
              ? 'bg-neutral-100 text-black'
              : 'bg-zinc-800 text-slate-300'
          }`}
      >
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ComboBox;
