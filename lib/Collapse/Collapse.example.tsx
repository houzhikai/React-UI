import React from 'react'
import {Collapse, Panel} from './Collapse'

const CollapseExample = () => {

    function callback(key:string) {
        console.log(key);
        return key
    }

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    return (
        <Collapse defaultActiveKey={'1'} onChange={callback}>
            <div className='collapse'>
                <h2>Collapse 组件 </h2>
                <Panel header="This is panel header 1" mKey="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" mKey="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" mKey="3">
                    <p>{text}</p>
                </Panel>
            </div>
        </Collapse>
    )
}
export {CollapseExample}