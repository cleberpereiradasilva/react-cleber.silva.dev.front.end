import { Active, Item as ItemStyled } from "./styles"
import { Props } from "./types"

export const Item = ({ children, href, active }: Props) => (
    <ItemStyled href={href}>
        {children}
        {active && <Active />}
    </ItemStyled>
)

