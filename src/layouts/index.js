import React from 'react'

export default ({children,data}) => 
    <div style={{ margin:'auto',maxWidth:760}}>
    <h2>Formation JAMSTACK {data.site.siteMetadata.title}</h2>
        {children()}
        <footer>Copyright nibnain bnaibnai</footer>
    </div>
 
 export const query = graphql `
 query layoutQuery{
     site{
         siteMetadata{
             title
         }
     }
 }
 `