import React from 'react'
import  {alert, confirm} from './Dialog'

const DialogExample3 = () => {
    return (
        <div className='wrapper'>
            <div className='dialog-example'>
                <h3>example 3</h3>
                <button onClick={() => alert('这是 alert')}>alert</button>

                <button onClick={() => confirm('这是 confirm ',
                    () => {alert('您点击了yes')},
                    () => {alert('您点击了no')}
                )}>confirm
                </button>
            </div>

        </div>
    )
}
export default DialogExample3