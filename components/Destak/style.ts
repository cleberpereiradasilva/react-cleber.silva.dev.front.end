import { keyframes } from "@stitches/react"
import { styled } from '../../stitches.config'

export const External = styled('div',{
  width: "416px",
  height: "617px",
  border: "0",
  borderRadius: "245.5px",
  margin: "auto",
  background: "$linear",
  backgroundOrigin: "padding-box, border-box",
  backgroundRepeat: "no-repeat",
  display: "flex", 
  padding: "2px"
})

export const Internal = styled('div',{
  width: "100%",
  height: "100%",
  borderRadius: "245.5px",
  background: "$white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  
   
 
})


//3 images
// const cf4FadeInOut = keyframes({
//   "0%": { opacity: "1" },
//   "25%": { opacity: "1" },
//   "45%": { opacity: "0" },
//   "70%": { opacity: "0" },
//   "100%": { opacity: "1" },
// })


const cf4FadeInOut = keyframes({
  "0%": { opacity: "1" },
  "17%": { opacity: "1" },
  "25%": { opacity: "0" },
  "92%": { opacity: "0" },
  "100%": { opacity: "1" },
})


export const Image = styled('div',{
  position: "absolute",
  width: "calc(100% - 24px)",
  height: "calc(100% - 24px)",
  borderRadius: "245.5px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  animationName: `${cf4FadeInOut}`,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite",  
})


export const ImageBg = styled('div',{
  width: "calc(100% - 24px)",
  height: "calc(100% - 24px)",
  borderRadius: "245.5px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
})