import { styled } from 'themes';
import { Slider as SliderStyled, Inside, Slide } from "./styles"
import { SliderProps } from "./types"

export const Slider = ({images, dataTestid} : SliderProps) => {
    
    const ImageZero = styled(Slide, {
        backgroundImage: `url(${images[0]})`,
        marginTop: '0',
        zIndex: -1
    })

    return (
        <SliderStyled>
            <Inside data-testid={dataTestid}>
                <ImageZero />
                {
                    images.map((image, i) => {
                        const Image = styled(Slide, {
                            backgroundImage: `url(${image})`,
                            animationDelay: `${(images.length - i) * 10}s`,
                        })
                        return <Image key={`slide-image-id-${i}`}/>
                    })
                }               
            </Inside>
        </SliderStyled>
    )
}

