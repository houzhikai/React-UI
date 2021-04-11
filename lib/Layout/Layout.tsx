import React, {ReactElement} from 'react'
import {scopedClassMaker} from '../helpers/classes'
import {Aside} from './Aside'
import './Layout.scss'

const sc = scopedClassMaker('React-UI-Layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

// type Props = {
//     style: CSSProperties  //需要找到一个 可以添加style 属性的标签，然后寻找style 的属性
//     className: string
// }

const Layout: React.FC<Props> = (props) => {
    const {className, ...rest} = props
    const children = props.children as Array<ReactElement>
    const hasAside = 'length' in children && children.reduce((result, node) => {
        return result || node.type === Aside
    }, false)   //花括号 可以省略   不省略花括号 就必须
    return (
        <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
            {props.children}
        </div>
    )
}
export {Layout}

