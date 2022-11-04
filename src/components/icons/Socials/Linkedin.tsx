import { Social } from "./Social"
import { SvgProps } from "./types"

export const Linkedin = ({ href, ariaLabel }: SvgProps) => (
    <Social href={href} ariaLabel={ariaLabel}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM7.125 7.98031C6.22418 7.98031 5.5 7.27166 5.5 6.39018C5.5 5.50869 6.22418 4.80005 7.125 4.80005C8.02582 4.80005 8.75 5.50869 8.75 6.39018C8.73234 7.27166 8.00815 7.98031 7.125 7.98031ZM8.52193 17.549H5.78509V9.56598H8.52193V17.549ZM18.5 17.8L18.4841 17.549H15.82V13.7917C15.82 12.7944 15.5921 11.5192 14.4907 11.5192C13.2259 11.5192 13.0915 12.5982 13.0915 13.7263V17.549H10.3465V9.56615H13.0769V10.722C13.3399 10.1005 14.3377 9.37516 15.3925 9.37516C17.1316 9.37516 18.5 10.8537 18.5 12.388V17.8Z" fill="#303030"/>
        </svg>
    </Social>
)