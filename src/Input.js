import colorNames from 'colornames';
import isDark from './utilties';
const Input = ({ squareColor, setSquareColor, setSquareHex, setTextColor }) => {

    
  return (
    <form className="color-form" onSubmit={(e) => e.preventDefault()}>
        <input 
            type="text"
            id="square-color"
            placeholder="Add Color Name"
            value={squareColor}
            onChange={ (e)=> {
                setSquareColor(e.target.value);
                setSquareHex(colorNames(e.target.value));
                let textColor = colorNames(e.target.value);
                if(textColor) setTextColor(isDark(textColor) ? "#eee" : "#111");
            }}
        />
    </form>
  )
}

export default Input