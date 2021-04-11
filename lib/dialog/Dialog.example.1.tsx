import React, {useState} from 'react'
import Dialog from './Dialog'

const DialogExample1 = () => {
    const [X, setX] = useState(false)
    return (
        <div className='wrapper'>
            <div className='dialog-example'>
                <h3>example 1</h3>
                <button onClick={() => setX(!X)}>click</button>
                <Dialog visible={X} buttons={
                    [
                        <button onClick={() => {setX(false)}}>ok</button>,
                        <button onClick={() => {setX(false)}}>cancel</button>
                    ]
                } onClose={() => {setX(false)}}>
                    <strong>这是一段话</strong>
                </Dialog>
            </div>
        </div>
    )
}
export default DialogExample1