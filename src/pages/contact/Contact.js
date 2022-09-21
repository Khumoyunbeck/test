import React from 'react';
import {Button, Divider, Form, Input} from "antd";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function Contact(props) {
    const {lang} = useSelector(state => state.lang)
    const {Kontaktlar, req, name, desc, send, mail, phone,adres,f3} = Language;

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const {TextArea} = Input;

    return (
        <div>
            <div>
                <Divider className="divider">
                    {Kontaktlar[lang]}
                </Divider>
            </div>
            <div className="w-box">
                <div className="w-b1">
                    <div className="t1">
                        Kontak malumotlar
                    </div>
                    <div className="n1">
                        {f3[lang]}
                    </div>
                    <ul className="tr1">
                        <li>
                            {adres}
                        </li>
                    </ul>
                    <div className="n1">
                        Ishlash grafigi
                    </div>
                    <ul className="tr1">
                        <li>
                            Пн.-Пт. 9:00-18:00
                        </li>
                        <li>
                            Cб. 9:00-17:00
                        </li>
                        <li>
                            Dam olish kuni
                        </li>
                    </ul>
                    <div className="n1">
                        Telefonlar
                    </div>
                    <ul className="tr1">
                        <li>
                            +38 (096) 097-7-888
                        </li>
                        <li>
                            +38 (099) 097-7-888
                        </li>
                        <li>
                            +38 (044) 334-5-727
                        </li>
                    </ul>
                    <div className="n1">
                        Bog'lanish uchun email
                    </div>
                    <ul className="tr1">
                        <li>
                            info@tmotors.com.ua
                        </li>
                    </ul>
                </div>
                <div className="w-b1">
                    <Form
                        name="basic"
                        labelCol={{span: 24}}
                        wrapperCol={{span: 24}}
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout="vertical"
                    >
                        <Form.Item
                            label={name[lang]}
                            name="username"
                            rules={
                                [
                                    {
                                        required: true, message: req[lang]
                                    }
                                ]
                            }
                        >
                            <Input className="inp"/>
                        </Form.Item>

                        <Form.Item
                            label={phone[lang]}
                            name="phone"
                            rules={[{required: true, message: req[lang]}]}
                        >
                            <Input className="inp"/>
                        </Form.Item>

                        <Form.Item
                            label={mail[lang]}
                            name="email"
                            rules={[{required: true, message: req[lang]}]}
                        >
                            <Input className="inp"/>
                        </Form.Item>

                        <Form.Item
                            label={desc[lang]}
                            name="email"
                            rules={[{required: true, message: req[lang]}]}
                        >
                            <TextArea rows={4}/>
                        </Form.Item>

                        <Form.Item className="sub">
                            <Button type="primary" htmlType="submit" style={{float: "right"}}>
                                {send[lang]}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className="map-address">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.7857496774095!2d69.22942246066775!3d41.26222225640503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0218265ee3%3A0x1aee9d99385c1d80!2srauto.uz!5e0!3m2!1suz!2s!4v1657195601167!5m2!1suz!2s"
                    width="100%"
                    height="330"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Contact;
