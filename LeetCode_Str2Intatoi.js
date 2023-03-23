let myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let num = 0;
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;

    // Step 1: Ignore leading whitespace
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // Step 2: Check for sign
    if (i < s.length && (s[i] === '-' || s[i] === '+')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: Read in digits and convert to integer
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + parseInt(s[i]);
        i++;

        // Clamp the integer to the 32-bit signed integer range
        if (num * sign > INT_MAX) {
            return INT_MAX;
        } else if (num * sign < INT_MIN) {
            return INT_MIN;
        }
    }

    return num * sign;
}