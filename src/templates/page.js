import React from 'react'

export default ({data}) =>{
    const content = data.markdownRemark
    return <div dangerouslySetInnerHTML={{ __html: content.html}}/>
}

export const query = graphql`
query PageQuery($slug: String!){
    markdownRemark(fields:{slug:{eq:$slug}}){
        html
    }
}
`