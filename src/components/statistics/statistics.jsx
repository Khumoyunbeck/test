import {useEffect, useState} from 'react'
import pageIcon from '../../images/landing-page.png'
import priceTag from '../../images/price-tag.png'
import order from '../../images/order.png'
import axios from 'axios'
import {MainApi} from "../../api";


function Statistics() {
    const [user, setUser] = useState(0)
    const [car, setCar] = useState(0)
    const [client, setClient] = useState(0)
    const [bank, setBank] = useState(0)
    const [mad, setMad] = useState(0)
    const [ord, setOrd] = useState(0)

    useEffect(() => {
        axios.get(`${MainApi}/user/all`)
            .then((data) => {
                setUser(data?.data?.data?.length)
            });

    }, [])


    useEffect(() => {
        axios.get(`${MainApi}/car/user/all`)
            .then((data) => {
                setCar(data?.data?.getAllmowin?.length)
            });
    }, [])


    useEffect(() => {
        axios.get(`${MainApi}/client/all`)
            .then((data) => {
                setClient(data?.data?.length)
            });
    }, [])

    useEffect(() => {
        axios.get(`${MainApi}/bank/all`)
            .then((data) => {
                setBank(data?.data?.bank?.length)
            });
    }, [])

    useEffect(() => {
        axios.get(`${MainApi}/maderator/all`)
            .then((data) => {
                setMad(data?.data?.data?.length)
            });
    }, [])

    useEffect(() => {
        axios.get(`${MainApi}/order/all`)
            .then((data) => {
                setOrd(data?.data?.length)
            });
    }, [])

    return (
        <>
            <div className="row pt-3 statistics_wrapper">
                <h3>Saytdagi kontentlar statistikasi</h3>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={priceTag} alt="" width={35}/>
                            </div>
                            <div>
                                <h5 className="font-16">Barcha Foydalanuvchilar</h5>
                            </div>
                            <h3 className="mt-4">
                                {user}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={car} alt="" width={35}/>
                            </div>
                            <div>
                                <h5 className="font-16">Barcha Avtomobillar</h5>
                            </div>
                            <h3 className="mt-4">
                                {car}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={order} alt="" width={35}/>
                            </div>
                            <div>
                                <h5 className="font-16">Barcha Klientlar</h5>
                            </div>
                            <h3 className="mt-4">
                                {client}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={pageIcon} alt="" width={25}/>
                            </div>
                            <div>
                                <h5 className="font-16">Barcha bankka tushgan arizalar</h5>
                            </div>
                            <h3 className="mt-4">
                                {bank}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={pageIcon} alt="" width={25}/>
                            </div>
                            <div>
                                <h5 className="font-16">Barcha Bank xodimi</h5>
                            </div>
                            <h3 className="mt-4">
                                {mad}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={pageIcon} alt="" width={25}/>
                            </div>
                            <div>
                                <h5 className="font-16">Barcha Buyurtmalar</h5>
                            </div>
                            <h3 className="mt-4">
                                {ord}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistics;
