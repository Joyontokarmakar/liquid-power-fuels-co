import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className={'bg-darkColor px-12 py-3 shadow-header'}>
            <Link to="/">
                <img src="/logo.png" alt="" className={'w-20'}/>
            </Link>
        </div>
    )
}
