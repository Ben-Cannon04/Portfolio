function GridLayout({ boxes }) {
  const style = 'bg-neutral-100 border-4 rounded-xl p-2 flex flex-col items-center justify-center';

  return (
    <div className='grid md:grid-cols-4 auto-rows-[300px] gap-5 m-10'>
      {boxes.map((item, i) => (
        <div
          key={i}
          className={`${style} ${
            i === 0 || i === 4 || i === 5 || i === 6 ? 'md:col-span-2' : ''
          } ${i === 2 ? 'md:row-span-2' : ''}`}
        >
          {boxes[i]}
        </div>
      ))}
    </div>
  );
};

export default GridLayout;