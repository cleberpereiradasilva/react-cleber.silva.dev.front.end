import { Active, Item as ItemStyled } from "./styles"
import { ItemProps } from "./types"

export const Item = ( {children, active, href}: ItemProps) => <ItemStyled 
    aria-label={children}
    href={href}
    >
        {children}{active && <Active/>}
    </ItemStyled>

