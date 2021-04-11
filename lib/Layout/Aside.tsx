import React from 'react'
import {scopedClassMaker} from '../helpers/classes'

interface Props extends React.HTMLAttributes<HTMLElement> {}
const sc = scopedClassMaker('React-UI-layout')
const Aside: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    return (
        <div className={sc('Aside', {extra: className})}
             {...rest}>
            {props.children}
        </div>
    )
}
export {Aside}
