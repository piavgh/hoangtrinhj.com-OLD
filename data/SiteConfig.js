const config = {
  siteTitle: 'Hoang Trinh - Developer & Startup Founder',
  siteTitleShort: 'Hoang Trinh', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Hoang Trinh - Developer & Startup Founder', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://hoangtrinhj.com', // Domain of your website without pathPrefix.
  repo: 'https://github.com/piavgh/hoangtrinhj.com',
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'This is my blog, I write about many things include tech, startup, philosophy, ...', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-103046645-5', // GA tracking ID.
  disqusShortname: 'https-hoangtrinhj-com', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'MMM Do, YYYY', // Date format for display.
  userName: 'Hoang Trinh', // Username to display in the author segment.
  userEmail: 'hoang.trinhj@gmail.com', // Email used for RSS feed's author segment
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Ha Noi, Viet Nam', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  menuLinks: [
    {
      title: 'About Me',
      link: '/me/',
    },
    {
      title: 'Articles',
      link: '/blog/',
    },
    {
      title: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
