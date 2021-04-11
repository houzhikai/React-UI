import classes, {scopedClassMaker} from "../classes"

decribe('classes', () => {
    it('接受 1 个 className', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('接受 2 个 className', () => {
        const result = classes('a', 'b')
        expect(result).toEqual('a b')
    })
    it('接受 undefined 结果不会出现 undefined', () => {
        const result = classes('a', undefined)
        expect(result).toEqual('a')
    })
    it('接受各种奇怪的值', () => {
        const result = classes(
            'a', undefined, '中文', false, null
        )
        expect(result).toEqual('a 中文')
    })
    it('接受 0 个参数', () => {
        const result = classes()
        expect(result).toEqual('')
    })
})
decribe('scopedClassMaker',()=>{
    it('接受字符串和对象', () => {
        const sc = scopedClassMaker('React-UI-layout')
        expect(sc('')).toEqual('React-UI-layout')
        expect(sc('x')).toEqual('React-UI-layout-x')
        expect(sc({y:true,z:false})).toEqual('React-UI-layout-y')
        expect(sc({y:true,z:true})).toEqual('React-UI-layout-y React-UI-layout-z')
        expect(sc({y:true,z:false},{extra:'red'})).toEqual('React-UI-layout-y React-UI-layout-z red')
    })
})