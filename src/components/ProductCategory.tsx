import React from "react";
import type { Fruit } from "../db/Fruit";
import Product from "./Product";

export default function ProductCategory({listFruits} : {listFruits: Fruit[]}) {
    const categories = listFruits.map((fruit) =>{
        return fruit.category;
    })

    const uniqueCategory = [...new Set(categories)];

    const fruits = uniqueCategory.map((category)=>{
        const products = listFruits.filter((fruit) => {
            return fruit.category == category;
        }) 

        return(
            <React.Fragment key={category}>
                <tr>
                    <th>{category}</th>
                </tr>

                {products.map((fruit, index)=> {
                    return <Product key={index} nameFruit={fruit.name} price={fruit.price}/>
                })}

            </React.Fragment>
        )
    })
    
    return(
        <>
            {fruits}
        </>
    )
}