import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <div className={'bg-blue-200 text-center '}>
            <p>© 2023 <Link to='/'>XYZ-Engine</Link> all rights reserved.</p>
        </div>
    )
}
