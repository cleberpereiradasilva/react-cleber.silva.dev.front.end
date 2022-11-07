import { Tag, Title } from "components/typography"
import { H4 } from "components/typography/styles"
import { styled } from "./../../themes"
import { Card as CardStyled, Content, Cover, Link } from "./styles/Card.styles"
import { CardProps } from "./types"

export const Card = ({ tag, title, cover, href }: CardProps) => {
    const CoverStyled = styled(Cover, {
        background: `url(${cover})`,
    })
    return (
        <CardStyled>
            <CoverStyled />
            <Tag>{tag}</Tag>
            <Content>
                <Title>{title}</Title>
            </Content>
            <Link href={href}>
                <H4>Veja mais</H4>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 11.5858 0.335786 11.25 0.75 11.25H23.25C23.6642 11.25 24 11.5858 24 12C24 12.4142 23.6642 12.75 23.25 12.75H0.75C0.335786 12.75 0 12.4142 0 12Z" fill="#222222"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.2197 0.96967C12.5126 0.676777 12.9874 0.676777 13.2803 0.96967L23.7803 11.4697C24.0732 11.7626 24.0732 12.2374 23.7803 12.5303L13.2803 23.0303C12.9874 23.3232 12.5126 23.3232 12.2197 23.0303C11.9268 22.7374 11.9268 22.2626 12.2197 21.9697L22.1893 12L12.2197 2.03033C11.9268 1.73744 11.9268 1.26256 12.2197 0.96967Z" fill="#222222"/>
                </svg>
                </Link>
        </CardStyled>
    )
}

