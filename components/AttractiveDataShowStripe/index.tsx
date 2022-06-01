
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';






const AttractiveDataShowStripe= (props: any)=>{
    const [propsData, setPropsData]= useState(props.data);
    const [icon, setIcon]= useState('');
    var groupIcon: string;


    // useEffect(()=>{
    //     if(propsData.icon_type == "cicrle_type") {
    //         groupIcon= `
    //             <span className="circle circle--type-1 circle-blue"></span>
    //             <span className="circle circle--type-2 circle-blue"></span>
    //             <span className="circle circle--type-3 circle-pink"></span>
    //             <span className="circle circle--type-4 circle-pink"></span>
    //         `

    //         setIcon(groupIcon);
    //     }
    // },[])
    




    return(
        <>
            <div className={propsData.main_wrapper_class} id={propsData.id}>
                <div className="container-md">
                    <div className={`attractive-data-show-wrapper__inner-box ${propsData.main_controller_bg_class}`}>
                        <div className={`attractive-data-show-wrapper__inner-box__bg`}>
                            <div className="row">
                                <div className="col-md-6 order-2 order-md-1">
                                    <div className='h-100 d-flex justify-content-center align-items-center content-body'>
                                        <span className="circle circle--type-1 circle-pink"></span>
                                        <div className='content-wrapper content-wrapper--max-width'>
                                            <h2 className={`content-title pt-2 ${propsData.stripe_content_inner_data.title_class}`}>{propsData.stripe_content_inner_data.title}</h2>
                                            <Link href={`${propsData.stripe_content_inner_data.btn_link}`}>
                                                <a type="button" className={`btn mt-5 ${propsData.stripe_content_inner_data.btn_class}`}>{propsData.stripe_content_inner_data.btn_txt}</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 position-relative d-flex justify-content-center align-items-center order-1 order-md-2">
                                    <div className={`${propsData.img_parent_additional_class} text-center`}>
                                        {
                                            (propsData.icon_type == "cicrle_type") ?
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
                                            width={369}
                                            height={510}
                                            priority
                                        />
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







export default AttractiveDataShowStripe;