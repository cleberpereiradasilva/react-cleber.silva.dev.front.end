import { Social } from "./Social"
import { SvgProps } from "./types"

export const Instagram = ({ href, ariaLabel }: SvgProps) => (
    <Social href={href} ariaLabel={ariaLabel}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM16.5576 4.6099H7.39485C5.85716 4.6099 4.6544 5.75571 4.56742 7.26648L4.56238 7.44238V16.6051C4.56238 18.1428 5.70819 19.3456 7.21896 19.4326L7.39485 19.4376H16.5576C18.0953 19.4376 19.2981 18.2918 19.3851 16.781L19.3901 16.6051V7.44238C19.3901 5.90469 18.2443 4.70193 16.7335 4.61494L16.5576 4.6099ZM7.88911 11.9857C7.88911 11.4345 8.00317 10.8451 8.19327 10.465H5.89307V16.5671L5.89948 16.6992C5.97151 17.4415 6.64079 18.0689 7.39485 18.0689H16.5576L16.6897 18.0625C17.432 17.9905 18.0594 17.3212 18.0594 16.5671V10.465H15.7592L15.8269 10.6176C15.976 10.996 16.0634 11.52 16.0634 11.9857C16.0634 14.2289 14.2384 16.0729 11.9762 16.0729C9.71406 16.0729 7.88911 14.2479 7.88911 11.9857ZM11.9762 9.34337C12.8507 9.34337 13.6301 9.78059 14.1053 10.4459C14.4095 10.8832 14.5996 11.4154 14.5996 11.9857C14.5996 13.4305 13.421 14.6091 11.9762 14.6091C10.5315 14.6091 9.35287 13.4305 9.35287 11.9857C9.35287 11.4154 9.54297 10.8832 9.84713 10.4459C10.3224 9.78059 11.1018 9.34337 11.9762 9.34337ZM17.6792 8.77307V6.22574L17.375 6.24475H15.1699V8.77307H17.6792Z" fill="#303030"/>
        </svg>
    </Social>
)