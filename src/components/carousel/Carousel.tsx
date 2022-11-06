import { Carousel as CarouselStyled, Card as CardStyled, CardContent, Arrow} from "./styles"
import { CardProps, OnClickProps, CardListProps } from "./types"
import Slider from "react-slick";
import { Card } from "./Card";

const NextArrow = ({ onClick }: OnClickProps) => (
    <Arrow  onClick={onClick} role='button' aria-label="Click to scroll Carusel to the next.">
        <svg width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.33333 1L15.6267 15.2933C15.8143 15.4807 15.9197 15.7349 15.9197 16C15.9197 16.2651 15.8143 16.5193 15.6267 16.7067L1.33333 31" stroke="#303030" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </Arrow>
)

const PrevArrow = ({ onClick }: OnClickProps) => (
    <Arrow  onClick={onClick} role='button' aria-label="Click to scroll Carusel to the preview.">
        <svg width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.6666 31L1.37329 16.7067C1.1857 16.5193 1.08029 16.2651 1.08029 16C1.08029 15.7349 1.1857 15.4807 1.37329 15.2933L15.6666 0.999999" stroke="#303030" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </Arrow>
)

const settings = {
    className: "center",
    centerMode: false,
    dots: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
    ]
  };
export const Carousel = ({ contents }: CardListProps) => (
    <CarouselStyled >
        <Slider {...settings}>
            {contents?.map((data: CardProps, i) => (
                <CardStyled key={`carousel-card-${i}`}>
                    <CardContent key={`carousel-card-content-${i}`}>
                        <Card {...data} key={`carousel-card-${i}`}/>
                    </CardContent>
                </CardStyled>
            ))}
        </Slider>
    </CarouselStyled>
)
