let date = null
let offsetTime = 60 * 1000 * (new Date(0)).getTimezoneOffset()

let week = {
    '0': '日',
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六',
}
let RegExpObj = {
    chsName: /^[\u4e00-\u9fff]([\u4e00-\u9fff]{0,4})[\u4e00-\u9fff]$/,
    chsNick: /^[a-zA-Z0-9\u4e00-\u9fff]([a-zA-Z0-9\u4e00-\u9fff]{0,4})[a-zA-Z0-9\u4e00-\u9fff]$/,
    mobile: /^1(3|5|7|8)[0-9]{9}$/,
    email: /^(\w)+[(\.\w+)|(\-\w+)]*@(\w)+(([\.|\-]\w+)+)$/, // 邮箱
    picType: /image\.(jpg|jpeg|png|bmp)$/i,
    passWord: /^(?=.*[a-zA-Z]+)(?=.*\d+)(?=.*[\~\!\@\#\$%\^&\*\(\)_\+\{\}\:\;\"\"\'\/\`\?\<\>\.\,\[\]\-\=\\\|]+)[a-zA-Z0-9\x21-x7e]{8,16}$/
}
export default {
    mamagetor (date) {
        if (date) {
            date = new Date(date)
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()
            return year + '-' + month + '-' + day
        } else {
            return '---'
        }
    },
    dateFormatter (dateTime, fmt, gtzo) {
        let offset = gtzo ? offsetTime : 0
        date = new Date(dateTime + offset)
        let fmtObj = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        }
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        if (/(E+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? '周' : '星期' + week[date.getDay() + ''] )
        }
        for(var k in fmtObj) {
            if (new RegExp('('+ k +')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? fmtObj[k] : ('00' + fmtObj[k]).substr(('' + fmtObj[k]).length))
            }
        }
        return fmt
    },
    toRegExp(data, key) {
        return RegExpObj[key].test(data)
    }
}





