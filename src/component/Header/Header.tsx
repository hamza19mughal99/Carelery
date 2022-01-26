import React, {useEffect, useState} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import * as FiIcon from "react-icons/fi";
import * as MdIcon from "react-icons/md";
import * as AiIcon from "react-icons/ai";
import * as BsIcon from "react-icons/bs";
import * as RiIcon from "react-icons/ri";
import BrandLogo from "../../assets/img/logo.png";
import MessageBox from "./MessageBox/MessageBox";
import NavProfileBox from "./NavProfileBox/NavProfileBox";
import SearchBar from "./SearchBar/SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import NotificationBox from "./NotificationBox/NotificationBox";
import "./Header.scss";
import Avatar from "../../assets/img/avatar.png";

interface INavItem {
  path: string;
  title: string;
  icon: JSX.Element;
}

enum MessageBoxClasses {
  MESSAGE_SHOW = "message_show",
  MESSAGE_HIDE = "message_hide",
}

enum NotificationBoxClasses {
  NOTIFICATION_SHOW = "notification_show",
  NOTIFICATION_HIDE = "notification_hide",
}

enum ProfileDropDownToggle {
  DROPDOWN_HIDE = "profile_dropdown_hide",
  DROPDOWN_SHOW = "profile_dropdown_show",
}

const Header = () => {



  const navItems: INavItem[] = [
    {
      path: "/home",
      title: "Activity Feed",
      icon: <FiIcon.FiActivity />,
    },
    {
      path: "/calorie-tracker",
      title: "Calorie Tracker",
      icon: <MdIcon.MdOutlineFastfood />,
    },
    {
      path: "/food-detail",
      title: "Calorie Tracker",
      icon: <RiIcon.RiPagesLine />,
    },
    {
      path: "/queries",
      title: "Question/Answers",
      icon: <AiIcon.AiOutlineQuestionCircle />,
    },
  ];

  const [notificationClasses, setNotificationClasses] = useState(
    NotificationBoxClasses.NOTIFICATION_HIDE
  );
  const [messageClasses, setMessageClasses] = useState(
    MessageBoxClasses.MESSAGE_HIDE
  );

  const [profileDropdownClasses, setProfileDropdownClasses] = useState(
    ProfileDropDownToggle.DROPDOWN_HIDE
  );

  const location = useLocation();

  const onMessageClickHandler = () => {
    if (messageClasses === MessageBoxClasses.MESSAGE_SHOW) {
      setMessageClasses(MessageBoxClasses.MESSAGE_HIDE);
    } else {
      setMessageClasses(MessageBoxClasses.MESSAGE_SHOW);
      setNotificationClasses(NotificationBoxClasses.NOTIFICATION_HIDE);
      setProfileDropdownClasses(ProfileDropDownToggle.DROPDOWN_HIDE);
    }
  };

  const onNotificationClickHandler = () => {
    if (notificationClasses === NotificationBoxClasses.NOTIFICATION_SHOW) {
      setNotificationClasses(NotificationBoxClasses.NOTIFICATION_HIDE);
    } else {
      setNotificationClasses(NotificationBoxClasses.NOTIFICATION_SHOW);
      setMessageClasses(MessageBoxClasses.MESSAGE_HIDE);
      setProfileDropdownClasses(ProfileDropDownToggle.DROPDOWN_HIDE);
    }
  };

  const onDropdownClickHandler = () => {
    if (profileDropdownClasses === ProfileDropDownToggle.DROPDOWN_SHOW) {
      setProfileDropdownClasses(ProfileDropDownToggle.DROPDOWN_HIDE);
    } else {
      setProfileDropdownClasses(ProfileDropDownToggle.DROPDOWN_SHOW);
      setMessageClasses(MessageBoxClasses.MESSAGE_HIDE);
      setNotificationClasses(NotificationBoxClasses.NOTIFICATION_HIDE);
    }
  };

  const getActiveClass = (path: string) => {
    if (path === location.pathname) {
      return "nav_active";
    }
    return "";
  };

  let ref = React.useRef(null);



  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        setNotificationClasses(NotificationBoxClasses.NOTIFICATION_HIDE);
        setProfileDropdownClasses(ProfileDropDownToggle.DROPDOWN_HIDE);
        setMessageClasses(MessageBoxClasses.MESSAGE_HIDE);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#home">
        <img className={"img-fluid"} width={65} alt="brand" src={BrandLogo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="w-100 ">
          <Container
              ref={ref}
            fluid
            className={"w-100 d-flex justify-content-around align-items-center"}
          >
            {navItems.map((navItem, index) => (
              <NavLink
                key={index}
                to={navItem.path}
                className={`${getActiveClass(navItem.path)} nav_link`}
              >
                <div className={'nav_icon'}>
                  {navItem.icon}
                </div>
                <p className={"nav_item"}>{navItem.title}</p>
              </NavLink>
            ))}

            <SearchBar />

            <Nav.Link className={"notify_item ml-5"}>
              <div
                className={"notification_icon"}
                onClick={onMessageClickHandler}
              >
                <BsIcon.BsChat />
                <span className={"badge"}>3</span>
              </div>
              <MessageBox extraClasses={messageClasses} />
            </Nav.Link>

            <Nav.Link className={"notify_item"}>
              <div
                className="notification_icon"
                onClick={onNotificationClickHandler}
              >
                <RiIcon.RiNotification3Line />
                <span className={"badge"}>3</span>
              </div>
              <NotificationBox extraClasses={notificationClasses} />
            </Nav.Link>
            <div className={"nav_link ml-3"} onClick={onDropdownClickHandler}>
              <div className={"nav_profile"}>
                <p>Obaid Aqeel</p>
                <RiIcon.RiArrowDropDownLine />
                <img
                  width={70}
                  alt={"avatar"}
                  src={Avatar}
                  className={"ml-2"}
                />
              </div>
              <NavProfileBox extraClasses={profileDropdownClasses} />
            </div>
          </Container>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
