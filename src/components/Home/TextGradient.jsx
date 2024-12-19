
function GradientText(props) {
    const { text } = props;
    return (
      <div className="flex items-center justify-center">
        <h1 className=" font-bold text-gradient">
          { text }
        </h1>
      </div>
    );
};

export default GradientText;