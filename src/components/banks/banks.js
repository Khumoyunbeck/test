import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Modal, Table} from "antd";
import {Link} from "react-router-dom";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {MainApi} from "../../api";
import axios from "axios";

function Banks({dataSource, getBanks, deleteApplication}) {
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
    }, [])

    const onChange = (e, id) => {
        if (type === "bank") {
            Modal.confirm({
                centered: true,
                title: "Rostan ham status o'zgartirmoqchimisiz",
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                    axios
                        .put(`${MainApi}/bank/active/${id}`)
                        .then((res) => {
                            getBanks()
                        })
                        .catch((err) => console.log(err));
                },
            })
        }
    };

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
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Father name',
            dataIndex: 'father_name',
            key: 'father_name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Qarindoshini nomeri',
            dataIndex: 'relative_number',
            key: 'relative_number',
        },
        {
            title: 'Uyini nomeri',
            dataIndex: 'house_number',
            key: 'house_number',
        },
        {
            title: 'Qarindoshini nomeri 2',
            dataIndex: 'relative_number2',
            key: 'relative_number2',
        },
        {
            title: 'Maosh',
            dataIndex: 'maosh',
            key: 'maosh',
        },
        {
            title: 'Status',
            dataIndex: 'data',
            key: 'data',
            render: (value) => {
                if (type === "admin") {
                    return (
                        <Button>
                            {value?.pending ? "Active" : "Inactive"}
                        </Button>
                    )
                } else
                    return (
                        <Checkbox onChange={e => onChange(e, value?._id)} checked={value?.pending}
                                  disabled={value?.pending}/>
                    )
            }
        },
        {
            title: 'Batafsil',
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="primary">
                        <Link to={`/admin/applications/${props}`}>
                            Batafsil
                        </Link>
                    </Button>
                )
            }
        },
        {
            title: "O'chirish",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => deleteApplication(props)}>O'chirish</Button>
                )
            }
        },
    ];
    console.log(dataSource)
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} scroll={{x: "max-content"}}/>
        </div>
    );
}

export default Banks;
