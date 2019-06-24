let pcaa = require('area-data')
const fs = require('fs')
let province = pcaa['86']
function getCascader(pro) {
    let area = []
    for (key in pro) {
        let obj = {
            code: key,
            label: pro[key],
            value: pro[key]
        }
        if (!!pcaa[key]) {
            obj.children = getCascader(pcaa[key])
        }
        area.push(obj)
    }
    return area
}
let provinces = getCascader(province)
let str = JSON.stringify(provinces,"","\t")

fs.writeFile('./eleAreaData.json', str, function (err) {
    if (err) { res.status(500).send('Server is error...') }
})