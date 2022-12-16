import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Language} from "../../lang/Languages";
// Import images
import header_icon from "../../assets/icons/location.svg";
import header_icon_two from "../../assets/icons/smartphone.svg";
import header_icon_three from "../../assets/icons/email.svg";
import search_icon from "../../assets/icons/search.svg";
import search_icon_two from "../../assets/icons/search.svg";
import ruFlag from "../../images/ru.png";
import uzFlag from "../../images/uz.png";
import logo_icon from "../../assets/img/logo-rauto.png";
import close_i from "../../assets/icons/close.png";
import arrow_i from "../../assets/icons/arrow.png";
import phone_i from "../../assets/icons/phone.png";
import mail_i from "../../assets/icons/mail.png";
import facebook_icon from "../../assets/icons/facebook.png";
import telegram_i from '../../images/telegram_i.png'
import icon_location from "../../assets/icons/location_white.png";
import instagram_icon from "../../assets/icons/instagram.png";
import {changeLang} from "../../store/language";
import "../style.css";
import {TbHeartHandshake} from "react-icons/tb";
import {AiOutlineCar, AiOutlineInfoCircle} from "react-icons/ai";
import {IoStorefrontOutline} from "react-icons/io5";
import {MdPhoneEnabled} from "react-icons/md";
import {HiUser} from "react-icons/hi";

const Header = (props) => {
    const dispatch = useDispatch();
    const [collapseOneOpen, setCollapseOneOpen] = useState(false);
    const [collapseTwoOpen, setCollapseTwoOpen] = useState(false);
    const [collapseThreeOpen, setCollapseThreeOpen] = useState(false);

    const {lang} = useSelector((state) => state.lang);

    const {
        asosiy,
        adres,
        contacts,
        aksia,
        foydali,
        Avtomobillar,
        Xizmatlar,
        Kompaniya,
        Kontaktlar,
        Kirish,
        komissia,
        vikup,
        otsenka,
        tradein,
        insurance,
        credit,
        autonumber,
        autotanlov,
        photosale,
        ishVaqt1,
        ishVaqt2,
        ishVaqt3,
        a1,
        a2,
        a3,
        a4,
        a5,
        a6,
        a7,
        BIZNING_MIJOZLAR,
        a8,
        f4,
        f5,
        f6,
        f7,
        f10,
        f11,
        f12
    } = Language;

    function search() {
        const searchBtns = document.querySelectorAll(".search");
        const searchInput = document.querySelector(".search-input");
        const closeSearch = document.querySelector(".close-search");

        if (searchBtns.length > 0) {
            for (let index = 0; index < searchBtns.length; index++) {
                const searchBtn = searchBtns[index];
                if (!searchInput.classList.contains("_open")) {
                    searchBtn.addEventListener("click", function (e) {
                        searchInput.classList.add("_open");
                    });
                }
            }
        }
        if (closeSearch) {
            if (!searchInput.classList.contains("_open")) {
                closeSearch.addEventListener("click", function (e) {
                    searchInput.classList.remove("_open");
                });
            }
        }
    }

    function OPEN() {
        const menuOpen = document.querySelectorAll(".menu__open");
        const menu = document.querySelector(".menu");
        if (menuOpen.length > 0) {
            for (let index = 0; index < menuOpen.length; index++) {
                const btn = menuOpen[index];
                btn.addEventListener("click", function (e) {
                    menu.classList.add("_open");
                });
            }
        }
        const menuClose = document.querySelectorAll(".menu__close");
        for (let index = 0; index < menuClose.length; index++) {
            const btn = menuClose[index];
            btn.addEventListener("click", function (e) {
                if (menu.classList.contains("_open")) {
                    menu.classList.remove("_open");
                }
            });
        }
    }

    useEffect(() => {
        if (!lang) localStorage.setItem("lang", 0);
    }, [lang]);

    return (
        <React.Fragment>
            <header className="headers">
                <div className="headers__info">
                    <div className="containers">
                        <div className="headers__location">
                            <img src={header_icon} className="headers__icon" alt="location"/>
                            <span>{adres[lang]}</span>
                            <div className="dropdown dropdown_time">
                                <button className="dropbtn">
                                    <span className="material-symbols-outlined">schedule</span>
                                    {ishVaqt1[lang]}
                                </button>
                                <div className="dropdown-content">
                  <span>
                    <span className="material-symbols-outlined">schedule</span>
                      {ishVaqt1[lang]}
                  </span>
                                    <br/>
                                    <span>
                    <span className="material-symbols-outlined">schedule</span>
                                        {ishVaqt2[lang]}
                  </span>
                                    <br/>
                                    <span>
                    <span className="material-symbols-outlined">schedule</span>
                                        {ishVaqt3[lang]}
                  </span>
                                </div>
                            </div>
                        </div>
                        <div className="headers__connection">
                            <div className="dropdown">
                                <button className="dropbtn">
                                    <img
                                        src={header_icon_two}
                                        className="headers__icon"
                                        alt="location"
                                    />
                                    {contacts[lang]}
                                </button>
                                <div className="dropdown-content">
                                    <a href="tel: +998951690988">+998 95 169-09-88</a>
                                    <a href="tel: +998974500988">+998 97 450-09-88</a>
                                    <a href="tel: +998971250988">+998 97 125-09-88</a>
                                </div>
                            </div>
                            <a href="mailto:info@rauto.uz" className="headers__email">
                                <img
                                    src={header_icon_three}
                                    className="headers__icon"
                                    alt="icon"
                                />
                                info@rauto.uz
                            </a>
                        </div>
                        <div className="headers__icons">
                            <button
                                className="translator mr-3"
                                onClick={() => dispatch(changeLang("0"))}
                            >
                                <img src={uzFlag} alt="translator" width="20px"/>
                            </button>
                            <button
                                className="translator mr-3"
                                onClick={() => dispatch(changeLang("1"))}
                            >
                                <img src={ruFlag} alt="translator" width="20px"/>
                            </button>
                            <Link to="/compare" className="headers__icons-item">
                                <button
                                    onClick={props.showCompare}
                                    className="material-symbols-outlined"
                                >
                                    balance
                                </button>
                            </Link>
                            <a href="/" onClick={search} className="headers__icons-item">
                                <div className="search-input">
                                    <input type="text"/>
                                    <span className="close-search"></span>
                                </div>
                                <button className="search">
                                    <img
                                        src={search_icon}
                                        className="headers__icon"
                                        alt="location"
                                    />
                                </button>
                            </a>
                        </div>
                        <div className="headers__respons">
                            <div>
                                <button className="search headers__item">
                                    <img
                                        src={search_icon_two}
                                        className="headers__icon"
                                        alt="icon"
                                    />
                                </button>
                            </div>
                            <Link to="/compare" className="headers__icons-item">
                                <button
                                    onClick={props.showCompare}
                                    className="material-symbols-outlined"
                                >
                                    balance
                                </button>
                            </Link>
                            <div className="dropdown">
                                <button className="dropbtn">
                                    <img
                                        src={header_icon_two}
                                        className="headers__icon"
                                        alt="location"
                                    />
                                    {contacts[lang]}
                                </button>
                                <div className="dropdown-content">
                                    <a href="tel: +998951690988">95 169-09-88</a>
                                    <a href="tel: +998974500988">97 450-09-88</a>
                                    <a href="tel: +998971250988">97 125-09-88</a>
                                </div>
                            </div>
                            <a onClick={OPEN} className="menu__icon nav-icon menu__open">
                                <span></span>
                            </a>
                        </div>
                        <div className="menu headers__item">
                            <div className="menu__body">
                                <h2 className="menu__title">Меню</h2>
                                <a className="menu__close">
                                    <img
                                        src={close_i}
                                        className="headers_close_icon"
                                        alt="cross"
                                    />
                                </a>
                                <div className="menu__block menu__block-1">
                                    <div className="menu__link">
                                        <a
                                            type="button"
                                            onClick={() => setCollapseOneOpen(!collapseOneOpen)}
                                        >
                                            {asosiy[lang]}
                                        </a>
                                        <div className="menu__link-arrow">
                                            <img
                                                src={arrow_i}
                                                className="headers___icon"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    {collapseOneOpen ? (
                                        <>
                                            <div className="menu__link">
                                                <p>{aksia[lang]}</p>
                                            </div>
                                            <div className="menu__link">
                                                <Link to="/useful">
                                                    <p>{foydali[lang]}</p>
                                                </Link>
                                            </div>
                                        </>
                                    ) : (
                                        ""
                                    )}
                                    <div className="menu__link">
                                        <p>{Avtomobillar[lang]}</p>
                                        <div className="menu__link-arrow">
                                            <img
                                                src={arrow_i}
                                                className="headers___icon"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="menu__link"
                                        onClick={() => setCollapseTwoOpen(!collapseTwoOpen)}
                                    >
                                        <p>{Xizmatlar[lang]}</p>
                                        <div className="menu__link-arrow">
                                            <img
                                                src={arrow_i}
                                                className="headers___icon"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    {collapseTwoOpen ? (
                                        <>
                                            <div className="menu__link">
                                                <a href="/komissia">{komissia[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/vikupAvto">{vikup[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/otsenka">{otsenka[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/trade_in">{tradein[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/insurance">{insurance[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/creditauto">{credit[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="https://avtoraqam.uzex.uz/ru" target={"blank"}>
                                                    {autonumber[lang]}
                                                </a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/autopodbor">{autotanlov[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/photosale">{photosale[lang]}</a>
                                            </div>
                                        </>
                                    ) : (
                                        ""
                                    )}
                                    <div
                                        className="menu__link"
                                        onClick={() => setCollapseThreeOpen(!collapseThreeOpen)}
                                    >
                                        <a>{Kompaniya[lang]}</a>
                                        <div className="menu__link-arrow">
                                            <img
                                                src={arrow_i}
                                                className="headers___icon"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    {collapseThreeOpen ? (
                                        <>
                                            <div className="menu__link">
                                                <a href="/ourteam">{f4[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/qualitypolicy">{f5[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/vacancy">{f6[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/ourclients">{BIZNING_MIJOZLAR[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/aboutus">{f7[lang]}</a>
                                            </div>
                                        </>
                                    ) : (
                                        ""
                                    )}
                                    <div className="menu__link">
                                        <a>{Kontaktlar[lang]}</a>
                                        <div className="menu__link-arrow">
                                            <img
                                                src={arrow_i}
                                                className="headers___icon"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="menu__link">
                                        <Link to={"/user"}>{Kirish[lang]}</Link>
                                    </div>
                                    <div className="menu__link">
                                        <button
                                            className="translator mr-3"
                                            onClick={() => dispatch(changeLang("0"))}
                                        >
                                            <img src={uzFlag} alt="translator" width="20px"/>
                                        </button>
                                        <button
                                            className="translator mr-3"
                                            onClick={() => dispatch(changeLang("1"))}
                                        >
                                            <img src={ruFlag} alt="translator" width="20px"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="menu__block">
                                    <div className="dropdown ">
                                        <button className="dropbtn dropbtn_color">
                      <span className="material-symbols-outlined">
                        schedule
                      </span>
                                            {ishVaqt1[lang]}
                                        </button>
                                        <div className="dropdown-content">
                      <span>
                        <span className="material-symbols-outlined">
                          schedule
                        </span>
                          {ishVaqt1[lang]}
                      </span>
                                            <br/>
                                            <span>
                        <span className="material-symbols-outlined">
                          schedule
                        </span>
                                                {ishVaqt2[lang]}
                      </span>
                                            <br/>
                                            <span>
                        <span className="material-symbols-outlined">
                          schedule
                        </span>
                                                {ishVaqt3[lang]}
                      </span>
                                        </div>
                                    </div>
                                    <a href="#" className="headers__link">
                                        <img
                                            src={phone_i}
                                            className="headers____icon"
                                            alt="location"
                                        />{" "}
                                        +99895 169 09 88
                                    </a>
                                    <a href="#" className="headers__link">
                                        <img src={mail_i} className="headers____icon" alt="icon"/>
                                        info@rauto.uz
                                    </a>
                                </div>
                                <div className="menu__block menu__social">
                                    <a href="https://www.facebook.com/Retailauto.uz/" className="menu__social-icon">
                                        <img
                                            src={facebook_icon}
                                            className="headers_social_icon"
                                            alt="icon"
                                        />
                                    </a>
                                    <a href="https://www.instagram.com/rauto.uz/" className="menu__social-icon">
                                        <img
                                            src={instagram_icon}
                                            className="headers_social_icon"
                                            alt="icon"
                                        />
                                    </a>
                                    <a href="http://t.me/ooo_rauto" className="menu__social-icon">
                                        <img
                                            src={telegram_i}
                                            className="headers_social_icon_tg"
                                            alt="icon"
                                        />
                                    </a>
                                </div>
                                <div className="menu__block menu__block-location">
                                    <img
                                        src={icon_location}
                                        className="headers__icon"
                                        alt="location"
                                    />
                                    <address>{adres[lang]}</address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headers__main">
                    <div className="container">
                        <div className="headers__logo">
                            <Link to="/">
                                <img src={logo_icon} alt="logo"/>
                            </Link>
                        </div>
                        <nav className="headers__nav nav">
                            <p className="headers__nav-item">
                <span className="headers__nav-icon">
                    <IoStorefrontOutline className="iconCol"/>
                </span>
                                <p className="headers__nav-link tooltips">
                                    {asosiy[lang]}
                                    <ul className="tooltipstext">
                                        <li className="menu-item">{aksia[lang]}</li>
                                    </ul>
                                    <ul className="tooltipstexttwo">
                                        <Link to="/useful">
                                            <li className="menu-item">{foydali[lang]}</li>
                                        </Link>
                                    </ul>
                                </p>
                            </p>
                            <Link to="/cars" className="headers__nav-item">
                <span className="headers__nav-icon">
               <AiOutlineCar  className="iconCol"/>
                </span>
                                <span className="headers__nav-link">{Avtomobillar[lang]}</span>
                            </Link>
                            <p className="headers__nav-item">
                <span className="headers__nav-icon">
                <TbHeartHandshake  className="iconCol"/>
                </span>
                                <p className="headers__nav-link tooltips">
                                    {Xizmatlar[lang]}
                                    <ul className="tooltipstextt">
                                        <Link to="/komissia">
                                            <li className="menu-item">{komissia[lang]}</li>
                                        </Link>
                                        <Link to="/vikupAvto">
                                            <li className="menu-item">{vikup[lang]}</li>
                                        </Link>
                                        <Link to="/otsenka">
                                            <li className="menu-item">{otsenka[lang]}</li>
                                        </Link>
                                        <Link to="/trade_in">
                                            <li className="menu-item">{tradein[lang]}</li>
                                        </Link>
                                        <Link to={"/insurance"}>
                                            <li className="menu-item">{insurance[lang]}</li>
                                        </Link>
                                        <Link to={"/creditauto"}>
                                            <li className="menu-item">{credit[lang]}</li>
                                        </Link>
                                    </ul>
                                    <ul className="tooltipstexttwot">
                                        <a href="https://avtoraqam.uzex.uz/ru" target={"blank"}>
                                            <li className="menu-item">{autonumber[lang]}</li>
                                        </a>
                                        <Link to={"/autopodbor"}>
                                            <li className="menu-item">{autotanlov[lang]}</li>
                                        </Link>
                                        <Link to={"/photosale"}>
                                            <li className="menu-item">{photosale[lang]}</li>
                                        </Link>
                                    </ul>
                                </p>
                            </p>
                            <a href="" className="headers__nav-item">
                <span className="headers__nav-icon">
                <AiOutlineInfoCircle  className="iconCol"/>
                </span>
                                <p className="headers__nav-link tooltips">{Kompaniya[lang]}
                                    <ul className="tooltipstexttt">
                                        <Link to="/aboutus">
                                            <li className="menu-item">{f7[lang]}</li>
                                        </Link>
                                        <Link to="/qualitypolicy">
                                            <li className="menu-item">{a5[lang]}</li>
                                        </Link>
                                        <Link to={"/vacancy"}>
                                            <li className="menu-item">{a6[lang]}</li>
                                        </Link>
                                    </ul>
                                    <ul className="tooltipstexttwott">
                                        <Link to="/ourclients">
                                            <li className="menu-item">{BIZNING_MIJOZLAR[lang]}</li>
                                        </Link>
                                        <Link to="/ourteam">
                                            <li className="menu-item">{a4[lang]}</li>
                                        </Link>
                                    </ul>
                                </p>
                            </a>
                            <a href="" className="headers__nav-item">
                <span className="headers__nav-icon">
               <MdPhoneEnabled  className="iconCol"/>
                </span>
                                <span className="headers__nav-link">{Kontaktlar[lang]}</span>
                            </a>
                            <Link to={"/user"} className="headers__nav-item">
                <span className="headers__nav-icon">
           <HiUser  className="iconCol"/>
                </span>
                                <span className="headers__nav-link tooltips">
                                    {Kirish[lang]}
                </span>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            <div style={{height: 170}}/>
        </React.Fragment>
    );
};

export default Header;
