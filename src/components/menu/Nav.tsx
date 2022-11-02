import { Nav as NavStyled, Ul } from "./styles"
import { NavProps } from "./types"

export const Nav = ({ children }: NavProps) => (
    <NavStyled aria-label='Nav bar'>
        <Ul>
            {children.map( (Item, i) => <li key={`menu-item-${i}`}>{Item}</li>)}
        </Ul>
    </NavStyled>
)

