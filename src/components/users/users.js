import React, {useEffect, useState} from 'react';
import {Button, Table} from "antd";

function Users({dataSource, isbank = false, deleteBank, updateBank}) {
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
        isbank ? {
            title: 'Bank nomi',
            dataIndex: 'bank',
            key: 'bank'
        } : {
            title: 'Region',
            dataIndex: 'region',
            key: 'region'
        },
        isbank ? {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        } : {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        isbank ? {
            title: "O'zgartirish",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => updateBank(props)}>Edit</Button>
                )
            }
        } : {},
        !(type === "moderator") ? {
            title: "O'chirish",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => deleteBank(props)}>O'chirish</Button>
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

export default Users;
