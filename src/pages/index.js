import React from "react"
import Link from 'gatsby-link'
import styles from './index.module.css'


export default ({data}) => 

<div>
    <h1 className={styles.titre}>Mon titre</h1>
    <p> Salut c'est du texte! </p>
    {data.allMarkdownRemark.edges.map(({node},index)=>{
        return <h2 key={index}><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
    })}
    <img src="https://picsum.photos/400/400?image=0" alt="Image"/>
    <br/>
    <Link to="/about/">About</Link>
</div>
export const query = graphql `
query IndexQuery{
    allMarkdownRemark {
      edges {
        node {
            fields{
                slug
            }
          id
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`