import { Card as CardStyled } from "./styles/Card.styles"
import { CardProps } from "./types"

export const Card = ({ title }: CardProps) => <CardStyled>{title}</CardStyled>

