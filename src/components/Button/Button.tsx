import { Buttom as ButtonStyled } from "./styles"

type Props = {
    children: JSX.Element | string,
    };

export const Button = ({ children }: Props) => <ButtonStyled>{children}</ButtonStyled>

