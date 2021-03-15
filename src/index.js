module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 === 0) {
        for (let i = str.length; i >= 0; i--) {

            for (let k = 0; k < bracketsConfig.length; k++) {

                if (str[i] === bracketsConfig[k][0]) {
                 str = str.replace(bracketsConfig[k].join(''), '')
                }

            }

        }

    }
    return str === '';
}
