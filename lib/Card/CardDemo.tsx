import React from 'react'
import { Demo } from 'lib/demo'
import {CardExample} from './Card.example'

const x: React.FC = () => {
    return (
        <Demo code={require('!raw-loader!./Card.example')}>
            <CardExample/>
        </Demo>
    )
}
export {x}

