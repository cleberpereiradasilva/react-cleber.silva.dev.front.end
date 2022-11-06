import { Section as SectionStyled } from "./styles"
import { SectionProps } from "./types"

export const Section = ({ children, align }: SectionProps) => <SectionStyled align={align}>{children}</SectionStyled>

