import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <div className={'bg-darkAshColor py-1'}>
            <p className={'text-center text-xs md:text-sm text-primaryLightColor'}>
                <span>&copy; 2023 </span>
                <Link to={'/'} className={'font-bold text-dimLightColor'}>
                    XYZ-Engine
                </Link>
                <span> all rights reserved</span>
            </p>
        </div>
    )
}
