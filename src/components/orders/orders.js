import React, {useEffect, useState} from 'react';
import {Button, Table} from "antd";
import {useNavigate} from "react-router";

function Orders({dataSource, deleteOrder}) {
    const navigate = useNavigate()
    const [type, setType] = useState(null)


    useEffect(() => {
        if (!!localStorage.getItem("user_token")) {
            setType("user")
        }
        if (!!localStorage.getItem("bank_token")) {
            setType("bank")
        }
        if (!!localStorage.getItem("admin_token")) {
            setType("admin")
        }
        if (!!localStorage.getItem("moderator_token")) {
            setType("moderator")
        }
    }, [])

    const columns = [
        {
            title: 'Nomi',
            dataIndex: 'name',
            key: 'name',
        },
        // {
        //     title: 'Buyurtirilgan moshina id',
        //     dataIndex: 'carId',
        //     key: 'carId',
        // },
        {
            title: 'Telefon',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: "Batafsil",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => navigate(`/admin/orders/${props}`)}>Batafsil</Button>
                )
            }
        },
        !(type === "moderator") ? {
            title: "O'chirish",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => deleteOrder(props)}>O'chirish</Button>
                )
            }
        } : {},
    ];
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} scroll={{x: "max-content"}}/>
        </div>
    );
}

export default Orders;
