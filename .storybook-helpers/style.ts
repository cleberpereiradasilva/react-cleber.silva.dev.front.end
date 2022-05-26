import { styled } from "../stitches.config"

export const Source = styled("div", {
    backgroundColor: "rgb(43, 43, 43);",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "0 0 8px 8px",
    boxShadow: "rgb(0 0 0 / 10%) 0px 2px 5px 0px",
})

export const Panel = styled("div", {
  backgroundColor: "#f6f9fc",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  
  borderRadius: "8px 8px 0 0 ",
  boxShadow: "rgb(0 0 0 / 10%) 0px 2px 5px 0px",
  padding: '16px'
})
  
export const Button = styled("button", {
    height: "22px",
    width: "80px",
    background: "#000",
    color: "#e9e9e9",
    marginLeft: "auto",
    borderRadius: "5px 0px 5px",
    borderWidth: "1px 0px 0px 1px",
    borderColor: "#9e9e9e",
    borderStyle: "solid",
    fontSize: "12px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "4px",
    transition: "background 0.1s ease-in",
    outline: "none",
    ":hover": {
      cursor: "pointer",
      borderBottom: "3px solid #272727ec",
      background: "#272727ec",
    },
    ":focus": {
      borderBottomColor: "#645ad7",
    },
})