import { H2 as H2Styled } from "./styles"
import { H2Props } from "./types"

export const H2 = ({ children, variant }: H2Props) => <H2Styled variant={variant}>{children}</H2Styled>

