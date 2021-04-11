import React, {useState} from 'react'
import Dialog, {alert, confirm, modal} from './Dialog'
import './dialog.scss'

const Exam = () => {

    const [X, setX] = useState(false)
    const [Y, setY] = useState(false)
    const openModal = () => {
     const close= modal(<h1>你好
            <button onClick={()=>close()}>这里也可以关闭哦</button>
        </h1>)
    }
    return (
        <div>
            <div className='dialog-example'>
                <div>点击空白页 不返回</div>
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

            <div className='dialog-example'>
                <div>点击空白页 返回</div>
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

            <div className='dialog-example'>
                <div>alert 操作 </div>
                <button onClick={() => alert('这是 alert')}>alert</button>
                <button onClick={() => confirm('这是 confirm ',
                    () => {console.log('您点击了yes')},
                    () => {console.log('您点击了no')}
                )}>confirm
                </button>
            </div>

            <div className='dialog-example'>
                <div>modal</div>
                <button onClick={openModal}> modal</button>
            </div>

        </div>


    )
}
export default Exam