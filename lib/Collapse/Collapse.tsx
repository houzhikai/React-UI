import React, {useState, useEffect, useContext} from 'react'
import './Collapse.example.scss'

interface CollapseProps {
    activeKey?: string;
    defaultActiveKey?: string;
    onChange?: (key: string) => void;
}
interface PanelProps {
    isActive?: boolean;
    header?: React.ReactNode;
    mKey: string;
}
const fatherContent = React.createContext<CollapseProps>({})
const Collapse: React.FC<CollapseProps> = (props) => {
    const [activeKey, setActiveKey] = useState(props.defaultActiveKey)
    function onPanelChange(mKey: string) {
        console.log('change')
        setActiveKey(mKey)
    }
    return (
        <div>
            <fatherContent.Provider value={{
                defaultActiveKey: props.defaultActiveKey,
                activeKey: activeKey,
                onChange: onPanelChange
            }}>
                {props.children}
            </fatherContent.Provider>
        </div>)
}
const Panel: React.FC<PanelProps> = (props) => {
    const [isActive, setActive] = useState(false)
    const fatherProps = useContext(fatherContent)
    useEffect(() => {
        setActive(props.mKey === fatherProps.activeKey ? true : false)
    }, [fatherProps.activeKey])
    function onClick() {
        setActive(true)
        if (fatherProps.onChange) {
            fatherProps.onChange(props.mKey)
        }
    }
    return (
        <div className="panel">
            <div className="header"
                 onClick={onClick}>
                {props.header}
            </div>
            {isActive && props.children}
        </div>)
}
export {Collapse, Panel}