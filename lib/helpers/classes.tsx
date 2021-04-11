function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ')
}

export default classes

interface Options {
    extra: string | undefined
}

interface ClassToggles {  //ClassToggles  开关的意思
    [k: string]: boolean  //K 只是一个占位符
}

const scopedClassMaker = (prefix: string) =>
    (name: string | ClassToggles, options?: Options) =>
        Object   //scoped 有前缀的
            .entries(name instanceof Object ? name : {[name]: name})
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            .map(name => [prefix, name]
                .filter(Boolean)
                .join('-'))
            .concat(options && options.extra || [])
            .join(' ')


export {scopedClassMaker}