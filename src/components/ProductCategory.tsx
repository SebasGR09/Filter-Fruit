import React from "react";
import type { Fruit } from "../db/Fruit";
import Product from "./Product";
import NoExist from "./NoExist";

export default function ProductCategory({listFruits, nameNoExist} : {listFruits: Fruit[], nameNoExist:string}) {
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
                    <th className={category == "Fruits" ? "fruit category": "vegetable category"} colSpan={2}>{category}</th>
                </tr>

                {products.map((fruit, index)=> {
                    return <Product key={index} nameFruit={fruit.name} price={fruit.price} stock={fruit.stocked}/>
                })}

            </React.Fragment>
        )
    })
    
    return(
        <>
            {fruits.length != 0 ?  fruits: <NoExist nameNoExist={nameNoExist}/>}
        </>
    )
}