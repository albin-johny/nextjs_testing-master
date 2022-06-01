
import errorMsgData from "./error_msg.js"





function textValidation(val) {
    val= val.trim();
    if((val == "") || (val.match(/\s/g))) {
        return {
            count: 1,
            msg: errorMsgData("empty")
        }
    }else {
        return {
            count: 0,
        }
    }
}


function emailValidation(val) {
    val= val.trim();
    var pattern = /^([a-z 0-9]+)@([a-z 0-9 \.]+)c([a-z]{1,20})(\d)?$/gi;
    if((val == "")) {
        return {
            count: 1,
            msg: errorMsgData("empty")
        }
    }else if(!pattern.test(val) || (val.match(/\s/g))) {
        return {
            count: 1,
            msg: errorMsgData("invalid_email")
        }
    }else {
        return {
            count: 0,
        }
    }
}

function phoneValidation(val) {
    val= val.trim();
    if((val == "") || (val.match(/\s/g))) {
        return {
            count: 1,
            msg: errorMsgData("empty")
        }
    }else if(val.length != 10) {
        return {
            count: 1,
            msg: errorMsgData("invalid_phone")
        }
    }else {
        return {
            count: 0,
        }
    }
}

function groupValidation(type, val) {
    let data={
        count: 1,
        msg: "This field cannot empty."
    };
    let validation;
    
    switch (type) {
        case "text":
            validation= textValidation(val);
            data= validation;
            break;
        case "phone_number":
            validation= textValidation(val);
            data= validation;
            break;
        case "email":
            validation= textValidation(val);
            data= validation;
            break;
        default:
            data=data;
            break;
    }

    return data;
}



export { textValidation, emailValidation, phoneValidation, groupValidation }