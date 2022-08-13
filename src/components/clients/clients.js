import React from 'react';
import {Button, Table} from "antd";
import {useNavigate} from "react-router";

function Clients({dataSource, deleteClient}) {
    const navigate = useNavigate()
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
            title: "O'chirish",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => deleteClient(props)}>O'chirish</Button>
                )
            }
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
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} scroll={{x: "max-content"}}/>
        </div>
    );
}

export default Clients;
