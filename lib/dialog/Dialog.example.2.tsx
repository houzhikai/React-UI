import React, {useState} from 'react'
import Dialog from './Dialog'

const DialogExample2 = () => {

    const [Y, setY] = useState(false)
    return (
        <div className='wrapper'>
            <div className='dialog-example'>
                <h3>example 2</h3>
                <button onClick={() => setY(!Y)}>click</button>
                <Dialog visible={Y} clickOnCloseMask={true} buttons={
                    [
                        <button onClick={() => {setY(false)}}>ok</button>,
                        <button onClick={() => {setY(false)}}>cancel</button>
                    ]
                } onClose={() => {setY(false)}}>
                    <strong>这是一段话</strong>
                </Dialog>
            </div>
        </div>
    )
}
export default DialogExample2