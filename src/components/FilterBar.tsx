import { useState } from "react"

export default function FilterBar({filter}: {filter: (nameFilter: string, stockProducts: boolean)=> void}){
    
    const [searchFruit, searchFruitSet ] = useState("");
    const [stockProducts, stockProductsSet] = useState(false);

    return (
        <>
            <input 
                type="text" 
                placeholder="Search..." 
                name="filter" 
                id="filter"
                value={searchFruit}
                onChange={(Event: React.ChangeEvent<HTMLInputElement>) => {searchFruitSet(Event.target.value); filter(Event.target.value, stockProducts)}}
            /> 
            <br />
            <input 
                type="checkbox" 
                name="productsStock" 
                id="productsStock"
                checked={stockProducts}
                onChange={(Event: React.ChangeEvent<HTMLInputElement>) => {stockProductsSet(Event.target.checked); filter(searchFruit, Event.target.checked)}}
            /> 
            <label htmlFor="productsStock">Only show products in stock</label>

            <p>{searchFruit}</p>
        </>
    )
}