import React, {useEffect, useState} from 'react';
import axios from "axios";
import {MainApi} from "../../api/index"
import {Button} from "antd";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";
import {toast} from "react-toastify";

function InfoComp(props) {
    const [data, setData] = useState(undefined)
    const [file, setFile] = useState(undefined)
    const {lang} = useSelector(state => state.lang)
    const {send,success,file_needed} = Language;

    const showModal = (a) => {
        window.location.replace(data?.find(i => i._id === a).photo[0])
    };

    useEffect(() => {
        axios.get(`${MainApi}/exel/all`).then(res => {
            setData(res?.data?.data)
        })
    }, [])

    const handleSubmit = () => {
        if (!!file) {
            const formData = new FormData
            formData.append("photo", file)
            axios.post(`${MainApi}/exel/add`, formData).then(res => {
               toast.success(success[lang])
            }).
                catch(err => toast.error("Error"))
        }
        else {
            toast.warn(file_needed[lang])
        }
    }

    return (
        <div className="excelWr">
            <input type="file" onChange={event => setFile(event?.target?.files[0])}/>
            <div>
                <Button type="primary" onClick={() => handleSubmit()}>
                    {send[lang]}
                </Button>
            </div>
            {
                data?.map((i, k) => {
                    return (
                        <div key={k} className="excelRow">
                            <Button onClick={() => showModal(i?._id)}>Yuklab olish</Button>
                            <div className="m-l-10">
                                {i?.photo[0]}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default InfoComp;
