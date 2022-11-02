import { Social as SocialStyled } from "./styles"
import { SocialProps } from "./types"

export const Social = ({ children, href,  ariaLabel }: SocialProps) => (
    <SocialStyled href={href} aria-label={ariaLabel} target='_blank'>
        {children}
    </SocialStyled>
)
