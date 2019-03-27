module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
},
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${__dirname}/src/assets/images`,
      name: "images",
    },
  }
