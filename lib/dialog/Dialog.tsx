import React, {Fragment, ReactElement, ReactNode} from 'react'
import ReactDOM from 'react-dom'
import Icon from '../Icon'
import '../index.scss'
import './dialog.scss'

interface Props {
    visible: boolean,
    buttons?: Array<ReactElement>,
    onClose: React.MouseEventHandler,
    clickOnCloseMask?: boolean
}
const Dialog: React.FC<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    }
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.clickOnCloseMask) {
            props.onClose(e)
        }
    }
    const result = props.visible ?
        <Fragment>
            <div className='React-UI-dialog-mask' onClick={onClickMask}>
            </div>
            <div className='React-UI-dialog'>
                <header className='dialog-header'>
                    <h2>展示</h2>
                    <Icon name='danger' onClick={onClickClose}/>
                </header>
                <main className='dialog-main'>
                    <div>{props.children}</div>
                </main>
                {props.buttons && props.buttons.length > 0 &&
                <footer className='dialog-footer'>
                    {props.buttons && props.buttons.map((button, index) =>
                        React.cloneElement(button, {key: index}))}
                </footer>}
            </div>
        </Fragment>
        : null
    return (
        ReactDOM.createPortal(result, document.body)
    )
}
Dialog.defaultProps = {
    clickOnCloseMask: false
}
const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component =
        <Dialog
            visible={true}
            buttons={buttons}
            onClose={() => {
                close()
                afterClose && afterClose()  //如果有 afterClose 就调用它
            }}>
            {content}
        </Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
    return close
}
const alert = (content: string) => {
    const button = <button onClick={() => close()}>OK</button>
    const close = modal(content, [button])
}
const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        close()
        yes && yes()
    }
    const onNo = () => {
        close()
        no && no()
    }
    const buttons = [
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>
    ]
    const close = modal(content, buttons, no)
}
//ReactNode可以是 ReactChild | ReactFragment | ReactPortal | boolean | null | undefined
// const modal = (content: ReactNode | ReactFragment) => {
//     return modal(content)
// }

export {alert, confirm, modal}
export default Dialog