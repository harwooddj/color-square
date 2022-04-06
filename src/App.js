import { useState } from "react";
import Input from "./Input";
import Square from "./Square";

function App() {
  const [squareColor, setSquareColor] = useState('');
  const [squareHex, setSquareHex] = useState('');
  const [textColor, setTextColor] = useState('');
  return (
    <div className="App">
        <Square 
          squareColor={squareColor}
          squareHex={squareHex}
          textColor={textColor}
        />
        <Input 
          squareColor={squareColor}
          setSquareColor={setSquareColor}
          setSquareHex={setSquareHex}
          textColor={textColor}
          setTextColor={setTextColor}
        />
    </div>
  );
}

export default App;
