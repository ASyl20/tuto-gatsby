import React from "react"
import Link from 'gatsby-link'
import Container from '../components/Container'

export default ({data}) => 

<div>
    <h1>About</h1>
    <p> J'aime le Javascript </p>
    <p>{data.allFile.edges[0].node.prettySize}</p>
    <Link to="/">Home</Link>
    <br/>
    <Link to="/tableDeMultiplication">Table</Link>
</div>
 export const query = graphql `
 query AboutQuery{
    allFile {
      edges {
        node {
          size
          prettySize
        }
      }
    }
   }
 `