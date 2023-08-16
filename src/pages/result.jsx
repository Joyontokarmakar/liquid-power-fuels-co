import {useLocation} from "react-router-dom";

export const Result = () => {
    const location = useLocation();
    let propsData = location.state;
    return (
        <div>
            {propsData.enteredName}
            {propsData.enteredDes}
            {propsData.enteredClient}
            {propsData.enteredContractor}
            {propsData.minX}
            {propsData.maxX}
            {propsData.minY}
            {propsData.maxY}
            {propsData.minZ}
            {propsData.maxZ}
        </div>
    )
}
