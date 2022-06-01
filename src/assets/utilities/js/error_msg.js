


function errorMsgData(prop, insertData=""){
    let errorData= "";

    switch (prop) {
        case "empty":
            errorData= "This field cannot empty."
            break;
        case "invalid":
            errorData= `Invalid ${insertData}`
            break;
        case "invalid_email":
            errorData= `Invalid email address.`
            break;
        case "invalid_phone":
            errorData= `Phone number is not valid.`
            break;
        case "password_length_min_8":
            errorData= `Password should contain at least 8 characters.`
            break;
        case "requird":
            errorData= `This field is required`
            break;
    
        default:
            break;
    }

    return errorData;
}



export default errorMsgData;