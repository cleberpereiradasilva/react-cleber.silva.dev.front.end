import { Social } from "./Social"
import { SvgProps } from "./types"

export const Facebook = ({ href, ariaLabel }: SvgProps) => (
    <Social href={href} ariaLabel={ariaLabel}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.9524 12H15.219L15.4857 8.95238H13.1429V7.80952C13.1429 7.21905 13.5048 7.04762 13.7714 7.04762H15.4286V4.51429H13.0857C10.5143 4.51429 9.90476 6.4381 9.90476 7.65714V8.95238H8.57143L8.57143 12H10.0952L10.0952 19.4286H12.9524L12.9524 12Z" fill="#303030"/>
        </svg>
    </Social>
)
