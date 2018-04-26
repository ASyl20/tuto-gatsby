const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')


// Permet de générer toutes les pages qu'on va envoyer en ligne
exports.onCreateNode = ({ node,getNode,boundActionCreators }) =>{
    const { createNodeField } = boundActionCreators
    if( node.internal.type === "MarkdownRemark"){
        console.log(createFilePath({node,getNode,basePath: 'pages'}))
        // transformer une adresse en chaine de caracteres c'est un slug
        const slug = createFilePath({node,getNode,basePath: 'pages'})
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

exports.createPages = async ({ graphql , boundActionCreators }) => {
    const { createPage } = boundActionCreators

    // tant que la function est pas finie , il ne passera pas à la suite
    const res = await graphql(`
    {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
    }
    `)
    console.log(res)
    res.data.allMarkdownRemark.edges.map(({node})=>{
        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/page.js'),
            context: {
                slug: node.fields.slug
            }
        })
    })
}