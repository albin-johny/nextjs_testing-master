
import { useEffect, useState } from 'react';
import Image from 'next/image';





const CommonImgContentStripe= (props: any)=> {
    const [propsData, setPropsData]= useState(props.data);
    const [icon, setIcon]= useState();

    useEffect(()=>{
        if(propsData.icon_type == "3d_show") {
            var groupIcon= (propsData.icon_array).map((val: any,index:number)=>{
                return <img key={index} className={`${val.add_class}`} src={`${process.env.SITE_URL}${val.icon}`} alt={val.alt} />
            });

            setIcon(groupIcon);
        }
    },[])
    
    return(
        <>
            <div className={propsData.main_wrapper_class} id={propsData.id}>
                <div className="container-md">
                    {
                        (propsData.main_heading) ?
                            <h2 className='main-title pb-4'>{ propsData.main_heading }</h2>
                        : ""
                    }
                    <div className={`${propsData.main_controller_class}`}>
                        <div className={`${propsData.row_type == "reverse" ? "change-row-reverse": "" } row py-5`}>
                            <div className="col-md-4 col-lg-6 child-data d-flex justify-content-center align-items-center">
                                <div className={`text-center position-relative ${propsData.img_parent_additional_class}`}>
                                    {
                                        (propsData.icon_type == "3d_show") ?
                                            icon
                                        : (propsData.icon_type == "cicrle_type") ?
                                            <>
                                                <span className="circle circle--type-1 circle-blue"></span>
                                                <span className="circle circle--type-2 circle-blue"></span>
                                                <span className="circle circle--type-3 circle-pink"></span>
                                                <span className="circle circle--type-4 circle-pink"></span>
                                            </>
                                        : ""
                                    }
                                    <Image
                                        className=""
                                        src={`${process.env.SITE_URL}${propsData.stripe_img}`}
                                        alt="Picture of the author"
                                        width={propsData.stripe_img_data.width}
                                        height={propsData.stripe_img_data.height}
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-6 child-data">
                                <div className='h-100 d-flex justify-content-center align-items-center content-body'>
                                    {
                                        (propsData.additional_type == "img_show_bottom") ?
                                            <span className="circle circle--type-1 circle-pink"></span>
                                        : ""
                                    }
                                    <div className={`content-wrapper ${propsData.stripe_content_inner_data.additional_class}`}>
                                        <h3 className='content-sub-title'>{propsData.stripe_content_inner_data.sub_title}</h3>
                                        <h2 className='content-title pt-2'>{propsData.stripe_content_inner_data.title}</h2>
                                        <p className='content-description pt-3'>{propsData.stripe_content_inner_data.des}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





export default CommonImgContentStripe;