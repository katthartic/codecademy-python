// YOUR CODE BELOW
function myMnemonic(str1,str2,str3,str4) {
    let mnemonic = ''
    if (str1) {
        mnemonic += str1.charAt(0);
    }
    if (str2) {
        mnemonic += str2.charAt(0);
    }
    if (str3) {
        mnemonic += str3.charAt(0);
    }
    if (str4) {
        mnemonic += str4.charAt(0);
    }
    return mnemonic;
}