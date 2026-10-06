import { dataFruit } from "../db/data";
import ProductCategory from "./ProductCategory";

export default function ProductTable({nameFilter, stockProducts}: {nameFilter:string, stockProducts: boolean}) {
    
    const filterProduct = dataFruit.filter((fruit)=> {
        return fruit.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase()) && (!stockProducts || fruit.stocked);
    })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductCategory listFruits={filterProduct} nameNoExist={nameFilter}/>
                </tbody>
                
            </table>
        </>
    )
}