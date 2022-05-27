import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import '../../Styles/SortTable.css'
import '../../App.css'
import RowList from './RowList'

const SortTable = () => {
    const rows = useSelector(state => state.products)
    const dispatch = useDispatch()

    const [sort, setSort] = useState('asc')

    const byField = (field, type) => { // сортировка массива объектов
        switch (type) {
            case 'asc': return (a, b) => a[field] > b[field] ? 1 : -1;
            case 'desc': return (a, b) => a[field] < b[field] ? 1 : -1;
            default:
        }
    }

    const sortTable = (e) => {
        let copy = Object.assign([], rows);
        let val = e.target.value
        let field

        switch (val) {
            case 'Row': field = 'id'; break
            case 'Name': field = 'name'; break
            case 'Price': field = 'price'; break
            case 'Count': field = 'count'; break
            case 'Discount': field = 'discount'; break
			default:
        }

        copy.sort(byField(field, sort))

        if(sort === 'asc') setSort('desc')
        else setSort('asc')

        dispatch({type:'CHANGE_PRODS', payload: copy})
    }

    return (
        <table className="productsTable">
            <caption>Products</caption>
            <thead>
                <tr>
                    <th><input type="button" value={'Row'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Name'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Price'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Count'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Image'} onClick={sortTable} disabled/></th>
                    <th><input type="button" value={'Description'} onClick={sortTable} disabled/></th>
                    <th><input type="button" value={'New'} onClick={sortTable} disabled/></th>
                    <th><input type="button" value={'Discount'} onClick={sortTable}/></th>
                </tr>
            </thead>
            <RowList rows={rows}/>
        </table>
    )
}

export default SortTable
