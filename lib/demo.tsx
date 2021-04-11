import React, {useState} from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import './demo.scss'

interface Props {
    code: string;
}

const Demo: React.FC<Props> = (props) => {
    const [codeVisible, setCodeVisible] = useState(false)
    const code = (
        <Highlight {...defaultProps} code={props.code} language="jsx">
            {({className, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} >
              {tokens.map((line, i) => (
                  <div {...getLineProps({line, key: i})}>
                      {line.map((token, key) => (
                          <span {...getTokenProps({token, key})} />
                      ))}
                  </div>
              ))}
            </pre>
            )}
        </Highlight>
    )
    return (
        <div>
            {/*项目介绍*/}
            <div>项目介绍</div>
            {/*上面的图标*/}
            <div className='demo-example'>
                {props.children}
                <button className='demo-button' onClick={() => setCodeVisible(!codeVisible)}>
                    查看代码
                </button>
            </div>
            {codeVisible && code}
        </div>
    )
}
export {Demo}