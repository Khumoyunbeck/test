import React, {useEffect, useState} from 'react';
import {Button, Table} from "antd";
import {useNavigate} from "react-router";

function Clients({dataSource, deleteClient}) {
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
            title: 'photo',
            dataIndex: 'photo',
            key: 'photo',
            render: (props) => {
                return (
                    <img src={props[0]} alt="props" className="s-img" width={25} height={25}/>
                )
            }
        },
        {
            title: 'Ism',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Viloyati',
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'date',
        },
        {
            title: "Batafsil",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => navigate(`/admin/clients/${props}`)}>Batafsil</Button>
                )
            }
        },
        !(type === "moderator") ? {
            title: "O'chirish",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => deleteClient(props)}>O'chirish</Button>
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

export default Clients;
