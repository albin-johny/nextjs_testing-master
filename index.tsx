import type { NextPage } from "next";
import SeoHeadTag from '@layouts/SeoHeadTag';
import HeaderTag from '@layouts/HeaderTag';
import CopyRightTag from '@layouts/CopyRightTag';
import Banner from '@comp/Banner';
import CommonImgContentStripe from "@comp/CommonImgContentStripe";
import AttractiveDataShowStripe from "@comp/AttractiveDataShowStripe";
import SocialMediaContactStripe from "@comp/SocialMediaContactStripe";
import { useState } from 'react';
import {home_json} from "@json/home/home_json.js";






export async function getStaticProps() {
  // const res = await fetch(`${process.env.SITE_URL}api/home`);
  // const posts: any = await res.json();

  return {
    props: {
      // posts
      home_json
    },
  }
  
}





const Home: NextPage = ( props:any) => {
  const [propsData, setPropsData]= useState(props.home_json);
  const [navCallBack, setNavCallBack]= useState(false);

  function navToggleCallback(callBackData:boolean) {
    setNavCallBack(callBackData);
  }

  return (
    <>
      <SeoHeadTag  seoData={propsData.seo} />
      <section className={`Dat_controller ${navCallBack ? 'show-shadow': ''}`}>
        <HeaderTag parentCallback={navToggleCallback}/>
        <Banner passData={ propsData.banner_stripe }/>
        {
          (propsData.page_stripes).map((val: any,index: number)=>{
            return (
              (val.layout_type == "first_stripe") ?
                <CommonImgContentStripe key={index} data={val} />
              : (val.layout_type == "secound_stripe") ?
                <CommonImgContentStripe key={index} data={val} />
              : (val.layout_type == "third_stripe") ?
                <CommonImgContentStripe key={index} data={val} />
              : (val.layout_type == "fourth_stripe") ?
                <AttractiveDataShowStripe key={index} data={val} />
              : (val.layout_type == "fifth_stripe") ?
                <SocialMediaContactStripe key={index} data={val} />
              : ""
            )
          })
        }
        <CopyRightTag />
      </section>
    </>
  )
}







export default Home;