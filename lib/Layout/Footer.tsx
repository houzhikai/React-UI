import React from 'react'
import {scopedClassMaker} from '../helpers/classes'

interface Props extends React.HTMLAttributes<HTMLElement> {}
const sc = scopedClassMaker('React-UI-Layout')
const Footer: React.FC<Props> = (props) => {
    const {className, ...rest} = props
    return (
        <div className={sc('footer', {extra: className})}
             {...rest}>
            {props.children}
        </div>
    )
}
export {Footer}

