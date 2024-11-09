const DisplayWindow = ({ expression, result }) => {
    return (
      <div className="displaywindow">
        <p className="expression">{expression}</p>
        <p className="result">{result}</p>
      </div>
    );
  };
  
  export default DisplayWindow;
  