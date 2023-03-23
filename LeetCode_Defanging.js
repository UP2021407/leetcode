let defangIPaddr = function(address) {
    let replacedStr = address.replace(/\./g, "[.]");
    return replacedStr;
};

defangIPaddr("1.4.3.1.5");