import React from 'react'
import {modal} from './Dialog'
'./dialog.scss'

const DialogExample4 = () => {
    const openModal = () => {
     const close= modal(
         <h1>你好
            <button onClick={()=>close()}>点击关闭</button>
        </h1>)
    }
    return (
        <div className='wrapper'>
            <div className='dialog-example'>
                <h3>example 4</h3>
                <button onClick={openModal}> modal</button>
            </div>
        </div>
    )
}
export default DialogExample4