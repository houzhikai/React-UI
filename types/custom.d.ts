// 给所有 svg 添加了一个 默认导出
declare module '*.svg' {
    const content: any;
    export default content;
}
//  写一个 支持 png 格式的 默认导出
declare module '*.png' {
    const content: string;
    export default content
}