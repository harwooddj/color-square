const Square = ({ squareColor, squareHex, textColor}) => {

  return (
    <div 
        className="square"
        style={{ 
            backgroundColor: squareColor,
            color: textColor
        }}
    >
        <p>{ squareColor ? squareColor : "Empty Value" }</p>
        <p>{ squareHex ? squareHex : null }</p>
    </div>
  )
}


export default Square