function IconBox({ icon, link }) {
  return (
    <div
      className="text-9xl cursor-pointer"
      onClick={() => link && window.open(link, '_blank')}
    >
      {icon}
    </div>
  );
}

export default IconBox;
