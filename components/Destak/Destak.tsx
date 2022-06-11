import React from "react"
import { styled } from "../../stitches.config"
import * as Styled from "./style"

type destakProps = {
  images: string[]
  dataTestid?: string
  duration?: number
}

export const Destak = ({ images, dataTestid, duration = 10 }: destakProps) => {
  const ImageCenterBg = styled(Styled.ImageBg, {
    backgroundImage: `url(${images[1]})`,
  })

  const imagesComponent = images.map((image, index) => {
    const Img = styled(Styled.Image, {
      backgroundImage: `url(${image})`,
      animationDuration: `${images.length * duration}s`,
      "-webkit-animation-delay": `${index * duration}s`,
      "-moz-animation-delay": `${index * duration}s`,
      "-o-animation-delay": `${index * duration}s`,
      "animation-delay": `${index * duration}s`,
    })
    return <Img key={`ebk-io-oz-${index + 1}`} />
  })

  return (
    <Styled.External data-testid={`${dataTestid || ""}`}>
      <Styled.Internal>
        <ImageCenterBg key={`ebk-io-oz-0`} />
        {imagesComponent}
      </Styled.Internal>
    </Styled.External>
  )
}
