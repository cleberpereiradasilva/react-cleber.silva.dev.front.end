import { H2 } from "components/typography"
import { Content as ContentStyled, Main as MainStyled, MainTopInside as MainTopInsideStyled, Left as LeftStyled, MainTop as MainTopStyled, Rigth as RigthStyled } from "./styles"
import { Separator as SeparatorStyled } from "./styles"
import { SeparatorProps } from "./types"



export const Separator = ({ children }: SeparatorProps) => (<>
    <SeparatorStyled>
        <LeftStyled />
        <MainStyled>
            <MainTopStyled>
                <MainTopInsideStyled />
            </MainTopStyled>
            <ContentStyled>
                <H2 variant="dark">{children}</H2>
            </ContentStyled>
        </MainStyled>
        <RigthStyled />
    </SeparatorStyled>
</>
)

