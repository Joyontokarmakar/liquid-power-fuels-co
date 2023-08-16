import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className={'bg-white py-3 shadow-header app-padding'}>
            <Link to="/">
                <img src="/logo.png" alt="" className={'w-20'}/>
            </Link>
        </div>
    )
}
