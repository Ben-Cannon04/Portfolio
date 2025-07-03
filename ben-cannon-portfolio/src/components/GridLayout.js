function GridLayout({ boxes, lightTheme, horizontalBoxes, verticalBoxes }) {
  if (!horizontalBoxes) {
    horizontalBoxes = [0, 4, 5];
  }
  if (!verticalBoxes) {
    verticalBoxes = [2];
  }

  const bgColor = lightTheme
    ? 'bg-neutral-100 text-black '
    : 'bg-zinc-800 text-slate-300 ';
  const style =
    bgColor +
    'border-4 rounded-xl p-2 flex flex-col items-center justify-center';

  return (
    <div className="grid md:grid-cols-4 auto-rows-[300px] gap-5 my-10 mx-10 md:mx-10 lg:mx-32">
      {boxes.map((item, i) => (
        <div
          key={i}
          className={`${style}
            ${horizontalBoxes.includes(i) ? 'md:col-span-2' : ''}
            ${verticalBoxes.includes(i) ? 'row-span-2' : ''} `}
        >
          {boxes[i]}
        </div>
      ))}
    </div>
  );
}

export default GridLayout;
