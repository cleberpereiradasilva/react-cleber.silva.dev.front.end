import { styled } from 'themes';
import { Photo as PhotoStyled, Inside, Slide } from "./styles"
import { PhotoProps } from "./types"

export const Photo = ({images, dataTestid} : PhotoProps) => {
    
    const ImageZero = styled(Slide, {
        backgroundImage: `url(${images[0]})`,
        marginTop: '0',
        zIndex: -1
    })

    return (
        <PhotoStyled>
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
        </PhotoStyled>
    )
}

