import React from 'react'
import { Helmet } from 'react-helmet'

const PageLayout = ({ children, title }) => {
     return (
          <div>
               <Helmet>
                    <meta charSet="utf-8" />
                    <title>{title} - FazlaGıda Case Study</title>
                    <meta name="description" content="FazlaGıda Case Study" />
                    <meta name="keywords" content="react, redux, tailwind, react-query" />
                    <meta name="author" content="Tuğrul" />
               </Helmet>
               <div className="max-w-6xl m-4 rounded-lg bg-gray-700 py-10 flex flex-col items-center mx-auto">
                    {children}
               </div>
          </div>
     )
}

export default PageLayout