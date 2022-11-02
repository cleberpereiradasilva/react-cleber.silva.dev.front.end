import { Text as TextStyled } from "./styles"
import { TextProps } from "./types"

export const Text = ({ children, size }: TextProps) => <TextStyled size={size}>{children}</TextStyled>

