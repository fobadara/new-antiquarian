const Progress = () => {
  const chaptersCompleted = Math.round(25 * (Math.round(Math.random() * 50) / 100));
  return (
    <div id="progress">
      <div className="med-font" style={{ opacity: 0.5 }}>CURRENT CHAPTER</div>
      <div className="med-font">
        Chapter
        {' '}
        {chaptersCompleted}
      </div>
      <button className="blue-btn" type="submit">
        Update Progress
      </button>
    </div>
  );
};

export default Progress;
