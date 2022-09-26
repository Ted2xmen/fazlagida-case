import React from 'react'
import { Helmet } from 'react-helmet'

const PageLayout = ({children, title}) => {
  return (
    <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>{title} - FazlaGıda Case Study</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="max-w-6xl bg-gray-500 flex flex-col items-center mx-auto">
                 {children}
            </div>
       </div>
  )
}

export default PageLayout