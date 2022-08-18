import { Layout } from 'antd'

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

    return (
        <div className="wcw">
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Parametrlar</th>
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
                    {compare.length > 0 && (
                        <tr>
                            <th></th>
                            {compare.map(car => (
                                <td>
                                    <button onClick={() => deleteItem(car._id)}>delete</button>
                                </td>
                            ))}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Compare
