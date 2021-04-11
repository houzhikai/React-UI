import React, { Fragment } from 'react'
import {Demo} from '../demo'
import IconExample1 from './icon.example1'
import IconExample2 from './icon.example2'
import IconExample3 from './icon.example3'
import IconExample4 from './icon.example4'
//const x = require(`!!raw-loader!${props.path}`)
// const x = require('!!raw-loader!./Icon.example.tsx')
const IconDemo = () => {
    return (
        <Fragment>
            <Demo code={require('!raw-loader!./icon.example1.tsx').default}>
                <IconExample1/>
            </Demo><Demo code={require('!raw-loader!./icon.example2.tsx').default}>
                <IconExample2/>
            </Demo><Demo code={require('!raw-loader!./icon.example3.tsx').default}>
                <IconExample3/>
            </Demo><Demo code={require('!raw-loader!./icon.example4.tsx').default}>
                <IconExample4/>
            </Demo>
        </Fragment>

    )
}
export {IconDemo}

