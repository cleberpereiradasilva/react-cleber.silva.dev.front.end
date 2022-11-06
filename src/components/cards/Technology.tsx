import { Technology as TechnologyStyled, TechInside as Inside, Description } from "./styles"
import { TechnologyProps } from "./types"

export const Technology = ({children, description} : TechnologyProps) => (
    <TechnologyStyled>
        <Inside>
         {children}
         <Description>
            {description}
         </Description>
        </Inside>
    </TechnologyStyled>
)

