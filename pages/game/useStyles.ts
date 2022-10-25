import { CSSProperties } from "react";
const useStyles = () => {
    const containerStyle: CSSProperties = {
        margin: "30px"
    };
    const buttonStyle: CSSProperties = {
        fontSize: "50px"
    };
    const individualAmountStyle = {
        border: "1px solid black",
        padding: "3px",
        marginRight: "5px",
        display: "inline"
    };
    return {
        containerStyle,
        buttonStyle,
        individualAmountStyle
    }
}
export default useStyles;