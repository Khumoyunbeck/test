import React, {useEffect, useState} from "react";
import axios from "axios";
import {Language} from "../../lang/Languages";
import slide_one from "../../assets/img/slider/rauto-imgmn2.png";
import slide_two from "../../assets/img/slider/damas.png";
import slide_three from "../../assets/img/slider/infnexia-tinified.png";
import slide_four from "../../assets/img/slider/coba2-tinified.png";
import advantage_img1 from "../../assets/icons/ico1.png";
import advantage_img2 from "../../assets/icons/ico3.png";
import advantage_img3 from "../../assets/icons/ico4.png";

import {Swiper, SwiperSlide} from "swiper/react";
import "../style.css";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Navigation, Pagination} from "swiper";
import {Link} from "react-router-dom";
import CardCar from "../card_car/Card_car";
import {injectStyle} from "react-toastify/dist/inject-style";
import {useSelector} from "react-redux";
import {MainApi} from "../../api";
import {Col, Input, Row, Slider} from "antd";
import {StyledModal} from "./home.e";

if (typeof window !== "undefined") {
    injectStyle();
}

function Home({addCompare}) {
    const [num, setNum] = useState("");
    const [fCars, setFCars] = useState([]);
    const [cars, setCars] = useState([]);
    const [clients, setClients] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState({
        kuzov: "",
        yili: 2000,
        yurgani: 0,
        narxi: 0
    })

    const {lang} = useSelector((state) => state.lang);

    const {
        six,
        second,
        first,
        third,
        fourth,
        five,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve,
        thirdteen,
        Gacha,
        Kilometr,
        Narxi,
        NarxiniAniqlash,
        Marka,
        Model,
        Probeg,
        Aloqa,
        AFZALLIK,
        Minimal,
        pasport,
        Jozibador,
        BizdaFoydali,
        Ertaroq,
        IstalganSana,
        BIZNING_MIJOZLAR,
        AKSIYALAR_CHEGIRMALAR,
        Batafsil,
        BARCHA_TAKLIFLAR,
        yili
    } = Language;

    const handleOk = () => {
        setIsModalVisible(false);
        setFCars([])
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setFCars([])
    };


    const getCars = async () => {
        await axios
            .get(`${MainApi}/car/all`)
            .then((res) => setCars(res.data?.data))
            .catch((err) => new Error(err));
    };

    const getClients = async () => {
        await axios
            .get(`${MainApi}/client/all`)
            .then((res) => setClients(res?.data?.data))
            .catch((err) => new Error(err));
    };

    const onChange = (value) => {
        setData({...data, yili: value})
    };

    const onChange1 = (value) => {
        setData({...data, yurgani: value})
    };

    const onChange2 = (value) => {
        setData({...data, narxi: value})
    };

    useEffect(() => {
        getCars();
        getClients();
    }, []);

    const handleModal = async () => {
        await axios.get(`${MainApi}/car/v1?yili=${data.yili}&yurgani=${data.yurgani}&narxi=${data.narxi}&&madel=`).then(r => {
            setFCars(r?.data)
        }).catch(err => console.log("err", err))
    }

    cars.length > 0 &&
    cars.forEach((item) => !!!num && !!item.aksiya && setNum("aksiya"));


    useEffect(() => {
        if (!!fCars.length)
            setIsModalVisible(true);
    }, [fCars, data])

    return (
        <div className="wrapper">
            <>
                <StyledModal title="Saralangan moshinalar" visible={isModalVisible} onOk={handleOk}
                             onCancel={handleCancel}
                             className="w100" style={{width: "100%", resize: "auto"}}>
                    <Row style={{width: "100%"}}>
                        {fCars.length > 0 &&
                        fCars.map((car, index) => {
                                return (
                                    <Col xl={8} md={12} sm={24}>
                                        <CardCar key={index} car={car} addCompare={addCompare}/>
                                    </Col>
                                )
                            }
                        )}
                    </Row>
                </StyledModal>
            </>

            <main>
                <section className="slider">
                    <div className="slider__title">
                        <span>Sayt test rejimida ishlamoqda</span>
                        <span>Сайт работает в тестовом режиме</span>
                    </div>
                    <div className="row-slide">
                        <div className="slider__body">
                            <h2 className="slider__body-title">{first[lang]}</h2>
                            <div className="slider__body-descr">
                                {second[lang]}
                                <span>
                  <a href="/"> {third[lang]}</a>
                </span>
                                {fourth[lang]}
                            </div>
                            <button className="slider__body-button">
                                <a href="/">{five[lang]}</a>
                            </button>
                        </div>
                        <div className="slider__container">
                            <div className="swiper swiper-slide-big">
                                <Swiper
                                    spaceBetween={30}
                                    autoplay={{delay: 3000, disableOnInteraction: false}}
                                    loop={true}
                                    pagination={{clickable: true}}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="swiper-wrapper"
                                >
                                    <SwiperSlide className="swiper-slide">
                                        <a href="/">
                                            <img src={slide_one} alt="img"/>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <a href="/">
                                            <img src={slide_two} alt="img"/>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <a href="/">
                                            <img src={slide_three} alt="img"/>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <a href="/">
                                            <img src={slide_four} alt="img"/>
                                        </a>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="social__title">
                    <span></span>
                    <h2>{six[lang]}</h2> <span></span>
                </div>
                <section className="social">
                    <div className="container">
                        <div className="text">
                            <span>5</span>
                        </div>
                        <div className="text">
                            <span>8</span>
                        </div>
                        <div className="text">
                            <span>7</span>
                        </div>
                        <div className="text">
                            <span>7</span>
                        </div>
                    </div>
                </section>
                <section className="cards-avto">
                    <div className="social__title">
                        <span></span>
                        <h2>{seven[lang]}</h2>
                        <span></span>
                    </div>
                    <div className="cards__row">
                        <Row style={{width: "100%"}}>
                            {cars.length > 0 &&
                            cars.filter(y => y.aksiya === "").map((car, index) => {
                                    // if (!car.aksiya) {
                                    return (
                                        <Col xl={8} md={12} sm={24}>
                                            <CardCar key={index} car={car} addCompare={addCompare}/>
                                        </Col>
                                    )
                                    // }
                                }
                            )}
                        </Row>

                    </div>
                    <Link
                        to="/cars"
                        style={{width: "fit-content"}}
                        className="cards__button"
                    >
                        {eight[lang]}
                    </Link>
                </section>
                <section className="form-block">
                    <div className="container">
                        <div className="forms">
                            <div className="form">
                                <h3 className="form__title">{thirdteen[lang]}</h3>
                                <h4 className="form__item-name">{ten[lang]}</h4>
                                <div className="form__item">
                                    <select name="met"
                                            onChange={event => setData({
                                                ...data,
                                                kuzov: event.target.value
                                            })}
                                    >
                                        <option value="Хетчбек">Хетчбек</option>
                                        <option value="Кроссовер">Кроссовер</option>
                                        <option value="Седан">Седан</option>
                                        <option selected value="4">
                                            Универсал
                                        </option>
                                    </select>
                                </div>
                                <h4 className="form__item-name">{eleven[lang]}</h4>
                                <div>
                                    <div>
                                        {data.yili}
                                    </div>
                                    <Slider min={2000} max={2023} onChange={onChange} value={data?.yili}/>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <Input value={data?.yili} addonAfter='yil' onChange={value => setData({
                                                ...data,
                                                yili: value?.target?.value
                                            })}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <h4 className="form__item-name">{Kilometr[lang]}</h4>
                                <div className="renge-wrapper">
                                    <div>
                                        {data.yurgani}
                                    </div>
                                    <Slider min={0} max={1000000} onChange={onChange1} value={data.yurgani}/>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <Input value={data?.yurgani} addonAfter='km' onChange={value => setData({
                                                ...data,
                                                yurgani: value?.target?.value
                                            })}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <h4 className="form__item-name">{Narxi[lang]}</h4>
                                <div className="renge-wrapper">
                                    <div>
                                        {data.narxi} so'm
                                    </div>
                                    <Slider min={0} max={1000000000} onChange={onChange2} value={data.narxi}/>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <Input value={data?.narxi} addonAfter="so'm" onChange={value => setData({
                                                ...data,
                                                narxi: value?.target?.value
                                            })}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <div style={{marginTop: "50px"}}>
                                    <button className="form__button" onClick={() => handleModal()}>{nine[lang]}</button>
                                </div>
                            </div>
                            <div className="form">
                                <h3 className="form__title">{NarxiniAniqlash[lang]}</h3>
                                <h4 className="form__item-name">{Marka[lang]}</h4>
                                <div className="form__item">
                                    <input type="text" placeholder="Марка вашего автомобиля"/>
                                </div>
                                <h4 className="form__item-name">{Model[lang]}</h4>
                                <div className="form__item">
                                    <input type="text" placeholder="Модель вашего автомобиля"/>
                                </div>
                                <h4 className="form__item-name">{eleven[lang]}</h4>
                                <div className="form__item">
                                    <input
                                        type="text"
                                        placeholder="Год выпуска вашего автомобиля (цифрами). Например: 2007"
                                    />
                                </div>
                                <h4 className="form__item-name">{Probeg[lang]}</h4>
                                <div className="form__item">
                                    <input
                                        type="text"
                                        placeholder="Пробег в км. вашего автомобиля (цифрами). Например: 25000"
                                    />
                                </div>
                                <h4 className="form__item-name form__item-name-row">
                                    {Aloqa[lang]}
                                </h4>
                                <div className="form__list">
                                    <div className="form__item">
                                        <input type="text" placeholder="Ваше Имя"/>
                                    </div>
                                    <div className="form__item">
                                        <input type="text" placeholder="Ваш Телефон"/>
                                    </div>
                                    <div className="form__item">
                                        <input type="text" placeholder="Ваш Email"/>
                                    </div>
                                </div>
                                <button className="form__button">{Narxi[lang]}</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cards-slider">
                    <div className="container">
                        <div className="cards-slider__title">
                            <span></span>
                            {!!num && <h2>{AKSIYALAR_CHEGIRMALAR[lang]}</h2>} <span></span>
                        </div>
                        <div className="swiper cards-swiper-slide">
                            <Swiper
                                breakpoints={{
                                    200: {
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    1100: {
                                        slidesPerView: 2,
                                    },
                                    1300: {
                                        slidesPerView: 4,
                                    },
                                }}
                                spaceBetween={30}
                                modules={[Pagination]}
                                pagination={{clickable: true}}
                                className="cards-slider__cadrs swiper-wrapper"
                            >
                                {cars?.length &&
                                cars?.map(
                                    (item, index) => {
                                        if (!!item.aksiya)
                                            return (
                                                <SwiperSlide className="swiper-slide" key={index}>
                                                    <div className=" cards-slider__card card">
                                                        <div className="card__img">
                                                            <img src={item.photo[0]} alt="img" className="img"/>
                                                        </div>
                                                        <a href=" " className="card__title">
                                                            {item.madel}
                                                        </a>
                                                        <ul className="card__info"></ul>
                                                        <div className="card__line"></div>
                                                        <div className="card__price">
                                                            <strong className="red">
                                                                {Number(item.narxi)
                                                                    .toLocaleString()
                                                                    .replace(/,/g, " ")}
                                                            </strong>{" "}
                                                            <span>UZS</span>
                                                        </div>
                                                        <div className="card__buttons">
                                                            <Link
                                                                to={`more/${item._id}`}
                                                                className="card__button-mini"
                                                            >
                                                                {Batafsil[lang]}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                    }
                                )}
                            </Swiper>
                        </div>
                        {!!num && (
                            <Link to="/cars" className="cards-swiper__button">
                                {BARCHA_TAKLIFLAR[lang]}
                            </Link>
                        )}
                    </div>
                </section>
                <section className="advantages">
                    <div className="container">
                        <div className="advantages__title cards-slider__title">
                            <span></span>
                            <h2>{AFZALLIK[lang]}</h2> <span></span>
                        </div>
                        <div className="advantages__row">
                            <div className="advantages__item">
                                <div className="advantages__img">
                                    <img src={advantage_img1} alt="icons"/>
                                </div>
                                <div className="advantages__name">{Minimal[lang]}</div>
                                <div className="advantages__descr">{pasport[lang]}</div>
                            </div>
                            <div className="advantages__item">
                                <div className="advantages__img">
                                    <img src={advantage_img2} alt="icons"/>
                                </div>
                                <div className="advantages__name">{Jozibador[lang]}</div>
                                <div className="advantages__descr">{BizdaFoydali[lang]}</div>
                            </div>
                            <div className="advantages__item">
                                <div className="advantages__img">
                                    <img src={advantage_img3} alt="icons"/>
                                </div>
                                <div className="advantages__name">{Ertaroq[lang]}</div>
                                <div className="advantages__descr">{IstalganSana[lang]}</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="clients">
                    <div className="container">
                        <div className="clients__title cards-slider__title">
                            <span></span>
                            <h2>{BIZNING_MIJOZLAR[lang]}</h2> <span></span>
                        </div>
                        <div className=" swiper clients-swiper-slide">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                modules={[Pagination]}
                                pagination={{clickable: true}}
                                className="swiper-wrapper"
                            >
                                {clients.length &&
                                clients?.map((item, index) => (
                                    <SwiperSlide className="swiper-slide" key={index}>
                                        <div className="clients__item">
                                            <div className="clients__img">
                                                <img src={item?.photo} alt="icons"/>
                                            </div>
                                            <div className="clients__name">{item?.name}</div>
                                            <div className="clients__name">{item?.region}</div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
                <div className="map-address">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.7857496774095!2d69.22942246066775!3d41.26222225640503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0218265ee3%3A0x1aee9d99385c1d80!2srauto.uz!5e0!3m2!1suz!2s!4v1657195601167!5m2!1suz!2s"
                        width="100%"
                        height="330"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default Home;
