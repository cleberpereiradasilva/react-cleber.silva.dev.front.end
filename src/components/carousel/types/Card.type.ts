
export type CardProps = {
    tag: string,
    href: string,
    title: string,
    cover?: string,
};

export type CardListProps = {
    contents: CardProps[]
};
