module.exports = {
    isEmail: function (str) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(str);
    },
    // 手机：仅中国手机适应；以 1 开头，第二位是 3-9，并且总位数为 11 位数字
    isMobile: function (str) {
        return /^1[3-9]\d{9}$/.test(str);
    },
    // 座机：仅中国座机支持；区号可有 3、4位数并且以 0 开头；电话号不以 0 开头，最 8 位数，最少 7 位数
    //  但 400/800 除头开外，适应电话，电话本身是 7 位数
    // 0755-29819991 | 0755 29819991 | 400-6927972 | 4006927927 | 800...
    isTel: function (str) {
        return /^(?:(?:0\d{2,3}[- ]?[1-9]\d{6,7})|(?:[48]00[- ]?[1-9]\d{6}))$/.test(str);
    },
    isAllEnglish: function (str) {
        return /^[a-zA-Z]+$/.test(str);
    },
    isAllChinese: function (str) {
        return !/[^\u4e00-\u9fa5]/.test(str);
    },

}
