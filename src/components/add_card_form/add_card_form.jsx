import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {addCar, editCar, getCar} from '../../store/car/car'
import {Language} from './../../lang/Languages'
import {fields} from './fields'

function AddCardForm() {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {handleSubmit, register, setValue, reset} = useForm()
    const [data, setData] = useState(fields)

    const [file, setFile] = useState([])

    const {opisaniya, opisaniyaru, photo} = Language

    const handleFile = e => {
        setFile([...e.target.files])
    }

    let lang = localStorage.getItem('lang')

    const {car, code} = useSelector(state => state.car)

    useEffect(() => {
        if (!!code) navigate('/admin/cards')
    }, [code])

    useEffect(() => {
        if (!!car) Object.keys(car).forEach(key => setValue(key, car[key]))
    }, [car])

    useEffect(() => {
        if (!!id) dispatch(getCar(id))
        else reset()
    }, [id])

    const obSubmit = values => {
        const formData = new FormData()
        Object.keys(values).forEach(
            key =>
                key !== 'photo' &&
                key !== '_id' &&
                key !== '__v' &&
                key !== 'date' &&
                formData.append(key, values[key])
        )
        file.forEach(file => formData.append('photo', file))

        if (!!localStorage.getItem("user_id")) {
            formData.append("userId", localStorage.getItem("user_id"))
        }
        if (!!localStorage.getItem("admin_id")) {
            formData.append("adminId", localStorage.getItem("admin_id"))
        }
        if (!!id) dispatch(editCar(formData, id))
        else dispatch(addCar(formData))
    }

    useEffect(() => {
        if (!!localStorage.getItem("admin_token"))
            setData(fields)
        else setData(fields.filter(i => i.key !== "aksiya"))
    }, [fields])

    return (
        <div className='content'>
            <form
                autoComplete='off'
                encType='multipart/form-data'
                className='el_form page_form'
                onSubmit={handleSubmit(obSubmit)}
            >
                <div className='container-fluid'>
                    <div className='page-title-box'>
                        <div className='row align-items-center'>
                            <div className='col-sm-6'>
                                <h4>Yangi Avtomobil qo'shish</h4>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card-avto'>
                                <div className='card-avto-body'>
                                    <h4 className='mt-0 header-title'>Yangi Avtomobil qo'shish</h4>
                                    {
                                        data.map((field, index) => (
                                            <div className='form-group row' key={index}>
                                                <label
                                                    htmlFor='example-text-input'
                                                    className='col-sm-2 col-form-label'
                                                >
                                                    {field.label[lang]}
                                                </label>
                                                <div className='col-sm-5'>
                                                    {!!field.select ? (
                                                        <select
                                                            className='main_selector form-control'
                                                            {...register(field.key, {
                                                                required:
                                                                    field.key === 'aksiya'
                                                                        ? false
                                                                        : true,
                                                            })}
                                                        >
                                                            {field?.select?.map((select, index1) =>
                                                                !!select.label ? (
                                                                    <optgroup
                                                                        label={select.label}
                                                                        key={index1}
                                                                    >
                                                                        {select?.optgroup?.map(
                                                                            (opt, index2) => (
                                                                                <option
                                                                                    value={opt.value}
                                                                                    key={index2}
                                                                                >
                                                                                    {opt.name}
                                                                                </option>
                                                                            )
                                                                        )}
                                                                    </optgroup>
                                                                ) : (
                                                                    <option
                                                                        value={select.value}
                                                                        key={index1}
                                                                    >
                                                                        {select.name}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    ) : (
                                                        <input
                                                            type={field.type}
                                                            className='form-control page_title_uz'
                                                            {...register(field.key, {
                                                                required: true,
                                                                onChange: e => {
                                                                    let num = Number(e.target.value)
                                                                        .toLocaleString()
                                                                        .replace(/,/g, ' ')

                                                                    console.log(num)
                                                                    return num
                                                                },
                                                            })}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    <div className='pageBody' style={{display: 'flex'}}>
                                        <label className='col-sm-2 col-form-label'>
                                            {opisaniya[lang]}
                                        </label>
                                        <textarea {...register('opisaniya')} placeholder='Подробнее об автомобиле'/>
                                    </div>
                                    <div className='pageBody' style={{display: 'flex'}}>
                                        <label className='col-sm-2 col-form-label'>
                                            {opisaniyaru[lang]}
                                        </label>
                                        <textarea {...register('opisaniyaru')} placeholder='Подробнее об автомобиле'/>
                                    </div>
                                    <div className='m-5'>
                                        <div className='download'>
                                            <p>{photo[lang]}</p>
                                        </div>
                                        <div className='max_size'>
                                            <p>Max:10mb</p>
                                        </div>
                                        <div className='upload_button_3'>
                                            <form
                                                action='/profile'
                                                method='post'
                                                multiple='multiple'
                                            >
                                                <input
                                                    onChange={event => handleFile(event)}
                                                    type='file'
                                                    name='files'
                                                    multiple
                                                />
                                            </form>
                                        </div>
                                        <div className='btn-admin'>
                                            <a
                                                href='/admin/cards'
                                                className='button_sumbit_news btn btn-dark btn-sm float-right ml-3'
                                            >
                                                Orqaga
                                            </a>
                                            <input
                                                type='submit'
                                                className='button_sumbit_news btn btn-success btn-sm float-right ml-3'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddCardForm
