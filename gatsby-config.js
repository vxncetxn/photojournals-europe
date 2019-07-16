module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `static/photos`
      }
    }
  ]
};
