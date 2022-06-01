import Head from "next/head";
import { useState } from 'react';







const SeoHeadTag = (props:any) => {
  const [seoData, setSeoData]= useState(props.seoData);


  return (
      <>
        <Head>
            <title>{`${seoData?.title ? seoData.title+' | ' : ''} ${seoData?.siteTitle}`}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1" />
            <meta name="description" content={seoData?.description} />
            <meta name="keywords" content={seoData?.description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={seoData?.title} />
            <meta property="og:description" content={seoData?.description} />
            <meta property="og:site_name" content={seoData?.siteTitle} />
            <meta property="og:image" content="https://dattiensgroup.site/images/og/DAT.png" />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:creator" content={seoData?.config?.social?.twitter} />
            <meta property="twitter:title" content={seoData?.title} />
            <meta property="twitter:description" content={seoData?.description} />
            <meta name="twitter:url" content="https://dattiensgroup.site/" />
            <meta name="twitter:image" content="https://dattiensgroup.site/images/og/DAT.png" />
            <link rel="icon" href="https://dattiensgroup.site/images/favicon/favicon-16x16.png" />
        </Head>
      </>
  )
}

export default SeoHeadTag
