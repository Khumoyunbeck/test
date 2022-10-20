import { Layout } from 'antd'
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

const Compare = ({ compare, setCompare }) => {
    const lists = [
        { text: 'Narxi', key: 'narxi' },
        { text: 'Brend', key: 'marka' },
        { text: 'Model', key: 'madel' },
        { text: 'Rang', key: 'color' },
        { text: 'Yili', key: 'yili' },
        { text: 'Dvigatel hajmi', key: 'divigitel' },
        { text: "Yoqilg'i", key: 'yoqilgi' },
        { text: 'Kuzov turi', key: 'kuzuv' },
        { text: 'Привод', key: 'perevod' },
        { text: "Yurgan yo'li", key: 'yurgani' },
    ]

    function deleteItem(id) {
        compare.forEach((item, index) => {
            if (item._id === id) {
                compare.splice(index, 1)
            }
        })
        setCompare([...compare])
    }

    const {lang} = useSelector(state => state.lang)
    const {params,del} = Language;

    return (
        <div className="wcw">
            <div className="w456">
                <table className='table table-hover ertw'>
                    <thead>
                    <tr>
                        <th>{params[lang]}</th>
                        {compare.map(car => (
                            <th className="thw">
                                <img
                                    src={car.photo[0]}
                                    alt='rasm'
                                    className="cimg"
                                />
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {lists.map(list => (
                        <tr>
                            <th>{list.text}</th>
                            {compare.map(car => (
                                <td>{car[list.key]}</td>
                            ))}
                        </tr>
                    ))}
                    <br/>
                    {compare.length > 0 && (
                        <tr>
                            <th></th>
                            {compare.map(car => (
                                <td>
                                    <button onClick={() => deleteItem(car._id)}>{del[lang]}</button>
                                </td>
                            ))}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Compare
