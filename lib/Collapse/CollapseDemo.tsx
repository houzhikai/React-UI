import React, {Fragment} from 'react'
import {Demo} from '../demo'
import {CollapseExample} from './Collapse.example'

const CollapseDemo: React.FC = () => {
    return (
        <Fragment>
            <Demo code={require(`!raw-loader!./Collapse.example`).default}>
                <CollapseExample/>
            </Demo>
        </Fragment>
    )
}
export {CollapseDemo}

