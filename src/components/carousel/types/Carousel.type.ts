import { MouseEventHandler } from "react";

export type CarouselProps = {
    children: Element[],
};


export type OnClickProps = {
    onClick? : MouseEventHandler<HTMLDivElement> | undefined
}