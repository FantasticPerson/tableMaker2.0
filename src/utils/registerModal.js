let overLayMap = {}

export function registerModal(name, component) {
    if (overLayMap[name]) {
        console.warn('该名字已经注册过了')
    }
    overLayMap[name] = component
}

export function OverLayMap(){
    return overLayMap
}