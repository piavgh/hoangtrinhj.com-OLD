import React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  LinkedinShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'
import urljoin from 'url-join'
import config from '../../../data/SiteConfig'
import './SocialLinks.css'

interface Props {
  postPath: string
  mobile?: string
}

const SocialLinks: React.FC<Props> = props => {
  const { postNode, postPath, mobile } = props
  const post = postNode.frontmatter
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath)
  const iconSize = mobile ? 36 : 48
  const filter = (count: number) => (count > 0 ? count : '')
  const renderShareCount = (count: number) => <div className="share-count">{filter(count)}</div>

  return (
    <div className="social-links">
      <RedditShareButton url={url} title={post.title}>
        <RedditIcon round size={iconSize} />
        <RedditShareCount url={url}>{(count: number) => renderShareCount(count)}</RedditShareCount>
      </RedditShareButton>
      <TwitterShareButton url={url} title={post.title}>
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={postNode.excerpt}>
        <FacebookIcon round size={iconSize} />
        <FacebookShareCount url={url}>
          {(count: number) => renderShareCount(count)}
        </FacebookShareCount>
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={post.title} description={postNode.excerpt}>
        <LinkedinIcon round size={iconSize} />
        <LinkedinShareCount url={url}>
          {(count: number) => renderShareCount(count)}
        </LinkedinShareCount>
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon round size={iconSize} />
      </TelegramShareButton>
    </div>
  )
}

export default SocialLinks
