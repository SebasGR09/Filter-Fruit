export default function Product({nameFruit, price}: {nameFruit:string, price: string}){
    return (
        <>
        <tr>
            <td>{nameFruit}</td>
            <td>{price}</td>
        </tr>
            
        </>
    )
}