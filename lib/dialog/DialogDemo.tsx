import React, { Fragment } from 'react'
import {Demo} from '../demo'
import DialogExample1 from './Dialog.example.1'
import DialogExample2 from './Dialog.example.2'
import DialogExample3 from './Dialog.example.3'
import DialogExample4 from './Dialog.example.4'

const DialogDemo: React.FC = () => {
    return (
        <Fragment>
            <Demo code={require(`!raw-loader!./Dialog.example.1`).default}>
                <DialogExample1 />
            </Demo>
            <Demo code={require(`!raw-loader!./Dialog.example.2`).default}>
                <DialogExample2 />
            </Demo><Demo code={require(`!raw-loader!./Dialog.example.3`).default}>
                <DialogExample3 />
            </Demo><Demo code={require(`!raw-loader!./Dialog.example.4`).default}>
                <DialogExample4 />
            </Demo>
        </Fragment>

    )
}
export {DialogDemo}

