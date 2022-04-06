
//receives a hex color string as either #eee or #ffee88 format and returns true if it is a dark color
const isDark = (hexColor) => {
    if (hexColor.length === 4){
        return (parseInt(hexColor.substring(1,1),16) + parseInt(hexColor.substring(2,1),16) + parseInt(hexColor.substring(3,1),16)) < 17;
    }else if(hexColor.length === 7){
        return (parseInt(hexColor.substring(1,2),16) + parseInt(hexColor.substring(3,4),16) + parseInt(hexColor.substring(5,6),16)) < 17;
    }
}

export default isDark;