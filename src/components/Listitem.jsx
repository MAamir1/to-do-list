export default function Listitem(props) {
    return (
        <tr>
            <th scope="row">{props.index+1}</th>
            <td>{props.items}</td>
            <td><button onClick={()=>{props.ondelete(props.index)}} className="btn btn-danger me-2">Delete</button>
            <button onClick={()=>{props.edititem(props.index)} } className="btn btn-info" >Edit</button>
            </td>
        </tr>
    )
}