//不需要 将 icon 一个个导入，只需要写下面的代码，再导入进去

let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('./icons/', true, /\.svg$/))
} catch (error) {
    console.log(error)
}
