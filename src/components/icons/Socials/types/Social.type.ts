export type SocialProps = {
    children: JSX.Element,
    href: string,
    ariaLabel: string
};

export type SvgProps = Omit<SocialProps, "children">
