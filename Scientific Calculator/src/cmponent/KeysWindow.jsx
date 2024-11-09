const KeysWindow = ({ HandelBtn }) => {
  const scikey = ["sin", "cos", "tan", "log", "ln", "π", "!", "e", "^", "√"];
  const basickey = [
    "7",
    "8",
    "9",
    "*",
    "/",
    "4",
    "5",
    "6",
    "-",
    "(",
    "1",
    "2",
    "3",
    "+",
    ")",
    ".",
    "0",
    "DEL",
    "AC",
    "=",
  ];

  return (
    <div className="KeysWindow">
      <div className="key-scientific">
        {scikey.map((item, index) => (
          <button key={index}           onClick={() => HandelBtn(item)}>{item}</button>
        ))}
      </div>
      <div className="line"></div>
      <div className="key-basic">
        {basickey.map((item, index) => (
          <button
            key={index}
            className={`${item >= "0" && item <= "9" ? "number" : ""} ${
              item === "=" ? "equal" : ""
            }`}
            onClick={() => HandelBtn(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeysWindow;
