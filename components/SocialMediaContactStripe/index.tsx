
import { useEffect, useState } from 'react';
import Router from 'next/router'
import Image from "next/image";
import { textValidation, emailValidation, phoneValidation } from "@utility/js/form_validation.js";





const SocialMediaContactStripe= (props: any)=>{
    const [propsData, setPropsData]= useState(props.data);
    const [icon, setIcon]= useState();
    const [btnEnable, setBtnEnable]= useState(false);
    const [userData, setUserData]= useState({});
    const [responseData, setResponseData]= useState<any>();
    const [userDataError, setUserDataError]= useState({
        username: '',
        useremail: '',
        userphonenumber: '',
        usermessaage: ''
    });


    useEffect(()=>{
        if(propsData.icon_type == "3d_show") {
            var groupIcon= (propsData.icon_array).map((val: any,index:number)=>{
                return <img key={index} className={`${val.add_class}`} src={`${process.env.SITE_URL}${val.icon}`} alt={val.alt} />
            });
            setIcon(groupIcon);
        }
    },[])

    // useEffect(()=>{
    //     if(responseData == "success") {
    //         alert("Thanks for choosing the DATTIENS group. We are contacting you as soon as.");
    //         Router.reload();
    //     }else {
    //         console.log("test ", responseData)
    //         setBtnEnable(true);
    //     }
    // },[responseData]);
    
    const registerUser = async (event:any) => {
        event.preventDefault();
        // setBtnEnable(false);
        if(btnEnable == true) {
            return
        }else {
            setBtnEnable(true)
        }
    
        let userData:any= {
            'user_name': event.target.user_name.value,
            'phone_number': event.target.phone_number.value,
            'email': event.target.email.value,
            'message': event.target.user_message.value,
            'ip_address': ''
        }

        let options= {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }

        let responseDatas= await fetch("/api/createUser",options);
        let getResponseData:any= await responseDatas.json();

        if(getResponseData.status == "success") {
            alert("Thanks for choosing the DATTIENS group. We are contacting you as soon as.");
            Router.reload();
        }else {
            alert("Internal error");
            Router.reload();
        }
        

        return false
    }

    function handleUserData(passValue:string, passField:string) {
        let errorCountArray:any= [];
        let fill_user_data= {
            [passField]: passValue
        }
        if((passField == "user_name") || (passField == "all")) {
            errorCountArray= [...errorCountArray, textValidation(passValue)];
        }
        if((passField == "user_email") || (passField == "all")) {
            errorCountArray= [...errorCountArray, emailValidation(passValue)];
        }
        if((passField == "user_phone_number") || (passField == "all")) {
            errorCountArray= [...errorCountArray, phoneValidation(passValue)];
        }
        if((passField == "user_message") || (passField == "all")) {
            errorCountArray= [...errorCountArray, textValidation(passValue)];
        }

    }

    return(
        <>
            <div className={propsData.main_wrapper_class} id={propsData.id}>
                <div className="container-md">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 order-2 order-md-1">
                            <div className='h-100 d-flex justify-content-center flex-column align-items-center content-body'>
                                <div className='content-wrapper content-wrapper--max-width'>
                                    <h2 className={`content-title pt-2 ${propsData.main_heading_class}`}>{propsData.main_heading}</h2>
                                </div>
                                <div className='contact-form-box mx-auto mt-5 '>
                                    <form action="#" className="custom-form contact-form" method='POST' onSubmit={registerUser}>
                                        <div className='dat-tiens__input-group'>
                                            <input type="text" 
                                                onChange={(e)=>{handleUserData(e.target.value, 'user_name')}}
                                                className="dat-tiens__input-group__input" name="user_name"  id="user_name" required/>
                                            <label htmlFor="user_name" className="dat-tiens__input-group__label">Name*</label>
                                            <span className='error dat-tiens__input-group__error-msg'>{ userDataError.username}</span>
                                        </div>
                                        <div className='dat-tiens__input-group'>
                                            <input type="text" 
                                                onChange={(e)=>{handleUserData(e.target.value, 'user_email')}}
                                                className="dat-tiens__input-group__input" name="email"  id="email" required/>
                                            <label htmlFor="email" className="dat-tiens__input-group__label">Email*</label>
                                            <span className='error dat-tiens__input-group__error-msg'>{ userDataError.useremail}</span>
                                        </div>
                                        <div className='dat-tiens__input-group'>
                                            <input type="text" 
                                            onChange={(e)=>{handleUserData(e.target.value, 'user_phone_number')}}
                                            className="dat-tiens__input-group__input" name="phone_number"  id="phone_number" required/>
                                            <label htmlFor="phone_number" className="dat-tiens__input-group__label">Phone Number*</label>
                                            <span className='error dat-tiens__input-group__error-msg'>{ userDataError.useremail}</span>
                                        </div>
                                        <div className='dat-tiens__input-group'>
                                            <textarea className="dat-tiens__input-group__input dat-tiens__input-group__text-area" name="user_message"  id="user_message" required></textarea>
                                            <label htmlFor="user_message" className="dat-tiens__input-group__label">Message*</label>
                                            <span className='error dat-tiens__input-group__error-msg'>{ userDataError.usermessaage}</span>
                                        </div>
                                        <div className="submit mt-4">
                                            <button type='submit' className="btn btn-blue btn-full-w" >Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 order-1 order-md-2">
                            <div className={`text-center position-relative ${propsData.img_parent_additional_class}`}>
                                {
                                    (propsData.icon_type == "3d_show") ?
                                        icon
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
                    </div>
                </div>
            </div>
        </>
    )
}





export default SocialMediaContactStripe;