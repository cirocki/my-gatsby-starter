module.exports = {
  siteMetadata: {
    title: `My Gatsby Starter`,
    description: `My custom starter in Gatsby.js`,
    author: `CIROCKI.PL`,
    authorWebsite: `https://cirocki.pl/`,
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "My Gatsby Starter",
        short_name: "GStarter",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#111111",
        display: "standalone",
        icon: "src/img/favicon/mondello-favicon-white.svg",
      },
    },

    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
