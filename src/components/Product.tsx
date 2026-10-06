export default function Product({nameFruit, price, stock}: {nameFruit:string, price: string, stock:boolean}){
    return (
        <>
        <tr>
            <td className={!stock ? "red name": "name"}>{nameFruit}</td>
            <td className={!stock ? "red price": "price"}>{price}</td>
        </tr>
            
        </>
    )
}