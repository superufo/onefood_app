export function  validateMobile (mobile) {
    var phoneReg =  /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
    return phoneReg.test(mobile);
}

export   function validateEmail (email) {
    var reg  = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    return reg.test(email);
}

export  function noSpecialSymbols(str) {
    var ssReg =  /^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/;
    return ssReg.test(str);
}