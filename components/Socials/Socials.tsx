import React from "react"
import * as Styled from "./style"
import { Facebook, Instagram, LinkedIn, Twitter, Youtube } from "./svg"

export type SocialProps = {
  dataTestid?: string
  urlLinkedIn?: string
  urlYoutube?: string
  urlInstagram?: string
  urlFacebook?: string
  urlTwitter?: string
}

export const Socials = (socialProps: SocialProps) => {
  const {
    dataTestid,
    urlLinkedIn,
    urlYoutube,
    urlInstagram,
    urlFacebook,
    urlTwitter,
  } = socialProps
  return (
    <Styled.Socials data-testid={`${dataTestid || ""}`}>
      {urlLinkedIn && (
        <a
          aria-label="Link to my LinkedIn profile"
          target="_blank"
          href={urlLinkedIn}
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      )}
      {urlYoutube && (
        <a
          aria-label="Link to my Youtube profile"
          target="_blank"
          href={urlYoutube}
          rel="noreferrer"
        >
          <Youtube />
        </a>
      )}
      {urlInstagram && (
        <a
          aria-label="Link to my Instagram profile"
          target="_blank"
          href={urlInstagram}
          rel="noreferrer"
        >
          <Instagram />
        </a>
      )}
      {urlFacebook && (
        <a
          aria-label="Link to my Facebook profile"
          target="_blank"
          href={urlFacebook}
          rel="noreferrer"
        >
          <Facebook />
        </a>
      )}
      {urlTwitter && (
        <a
          aria-label="Link to my Twitter profile"
          target="_blank"
          href={urlTwitter}
          rel="noreferrer"
        >
          <Twitter />
        </a>
      )}
    </Styled.Socials>
  )
}
