import { useState, useEffect } from "react";
import { groupValidation } from "@utility/js/form_validation.js";










const InputTag= (props:any)=> {

    const[inputData, setInputData]= useState({
                                        data: '',
                                        store_data: '',
                                        isValid: false,
                                        validType:"",
                                    });
    
    const[finalVal, setFinalVal]= useState<any>();
    const[errorMsg, setErrorMsg]= useState<any>("");


    useEffect(()=>{
        if(inputData.isValid == true) {
            // if (inputData.data )
            // let checkUserData= {
            //     [inputData.store_data]: inputData.data
            // }
            // let checkFormDetail= handleCommonFormValidation( checkUserData, )
            let output= groupValidation(inputData.validType, inputData.data);
            if(output.count > 0) {
                setErrorMsg(output.msg)
            }else {
                setFinalVal({
                    [inputData.store_data]: inputData.data
                })
            }
            // switch (inputData.validType) {
            //     case "text":
                    
            //         break;
            //     case "phone_number":
                    
            //         break;
            //     case "email":
                    
            //         break;
            
            //     default:
            //         break;
            // }
        }else {
            // props.dataPass(inputData);
        }
    },[inputData])


    useEffect(()=>{
        console.log(finalVal);

        props.dataPass(finalVal);
    },[finalVal]);

    return(
        <>
            <div className="dat-tiens__input-group">
                <input 
                    type={props.data.input_type} 
                    id={props.data.input_id} 
                    data-required={ props.data.is_required_field } 
                    className="dat-tiens__input-group__input" 
                    onChange={(e)=>{setInputData({data: e.target.value, store_data: props.data.input_store_data, isValid: props.data.is_required_field, validType: props.validatioType})}} 
                    autoComplete="off" 
                    required />
                <label htmlFor={props.data.input_id} className="dat-tiens__input-group__label">{ props.data.input_txt }</label>
                <span className={`dat-tiens__error dat-tiens__input-group__error-msg ${(errorMsg.length > 0) ? "dat-tiens__input-group__error-msg--show-error" : ''}`}> { errorMsg }</span>
            </div>
        </>
    )
}




export default InputTag;