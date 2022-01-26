import React from 'react';
import * as FiIcon from "react-icons/fi";
import * as CgIcon from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import './NavProfileBox.scss'


const NavProfileBox = (props: {extraClasses: string}) => {

    const navigation = useNavigate();

    const onGoToProfilePage = () => {
        navigation("/profile")
    }

    return (
        <div className={`profile_dropdown ${props.extraClasses}`}>
            <div>
                <div className={'profile_dropdown_item'} onClick={onGoToProfilePage}>
                    <CgIcon.CgProfile />
                    <p>Profile</p>
                </div>
                <div className={'profile_dropdown_item'}>
                    <FiIcon.FiSettings />
                    <p>Settings</p>
                </div>
                <div className={'profile_dropdown_item'}>
                    <FiIcon.FiLogOut />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    );
};
export default NavProfileBox;
