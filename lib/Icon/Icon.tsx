import React from 'react'
import '../importIcons'
import './Icon.scss'
import classes from '../helpers/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, name, ...restProps} = props
    return (
            <div className='svg'>
                <svg className={classes('React-UI-icon', className)} {...restProps} >
                    <use xlinkHref={`#${name}`}/>
                </svg>
            </div>

        )
    }

export default Icon