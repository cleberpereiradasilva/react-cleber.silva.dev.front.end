import { Active, Item as ItemStyled } from "./styles"
import { ItemProps } from "./types"

export const Item = ({ children, href, active }: ItemProps) => (
    <ItemStyled href={href} aria-label={`${children}`}>
        {children}
        {active && <Active />}
    </ItemStyled>
)

