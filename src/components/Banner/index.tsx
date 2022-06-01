import { useState } from "react"
import Image from 'next/image'
import Link from "next/link"






const Banner = ({...props}) => {
    const [propsData, setPropsData] = useState(props.passData)

    return (
        <>
            <div className={`${propsData.additional_class} banner-wrapper`}>
                <span className="circle circle--type-1 circle-yellow"></span>
                <span className="circle circle--type-2 circle-pink"></span>
                <span className="circle circle--type-3 circle-yellow"></span>
                <span className="circle circle--type-4 circle-yellow"></span>
                <div className="container-md">
                    <div className="banner-wrapper__controller">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 order-2 order-md-1">
                                <div className="h-100 d-flex justify-content-start align-items-center">
                                    <div className={`banner-wrapper-data`}>
                                        <h2 className="content-title mb-4">{propsData.header_title}</h2>
                                        <p className="content-description mb-0">{ propsData.description }</p>
                                        <Link href={`${propsData.btn_data.link}`}><a type="button" className="btn btn-blue mt-5">{ propsData.btn_data.txt }</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-4 order-1 order-mdd-2">
                                <div>
                                    <figure className="d-flex justify-content-end mb-0 banner-img-group-right">
                                        <Image
                                            src={`${process.env.SITE_URL}${propsData.banner_right_side_image}`}
                                            alt="Dat Tiens"
                                            width={393}
                                            height={600}
                                            layout='intrinsic'
                                            className="banner-img"
                                            priority
                                        />
                                        {
                                            (propsData.addittional_banner_img_type == 'home_banner') ?
                                                <img 
                                                    src={`${process.env.SITE_URL}images/tree.png`}
                                                    alt="banner tree image"
                                                    className="banner-tree-img"
                                                /> 
                                            : ''
                                        }
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
