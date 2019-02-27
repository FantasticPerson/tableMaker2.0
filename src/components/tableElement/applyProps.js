export function applyProps(){
    let args = Array.prototype.slice.call(arguments,0)
    let type = args[0]
    let propNames = Object.getOwnPropertyNames(args[1])
    propNames.forEach(item=>{
        this[item] = args[1][item]
    })

}