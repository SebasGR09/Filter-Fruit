import { useEffect, useState } from "react"

export default function FilterBar({filter, clean}: {filter: (nameFilter: string, stockProducts: boolean)=> void, clean:boolean}){
    
    const [searchFruit, searchFruitSet ] = useState("");
    const [stockProducts, stockProductsSet] = useState(false);

    useEffect(() => {
        searchFruitSet("");
        stockProductsSet(false);
    }, [clean]);

    return (
        <>
            <input 
                type="text" 
                placeholder="Search..." 
                className="inputSearch"
                name="filter" 
                id="filter"
                maxLength={15}
                value={searchFruit}
                onChange={(Event: React.ChangeEvent<HTMLInputElement>) => {searchFruitSet(Event.target.value); filter(Event.target.value, stockProducts)}}
            /> 
            <br />
            <input 
                type="checkbox" 
                className="input"
                name="productsStock" 
                id="productsStock"
                checked={stockProducts}
                onChange={(Event: React.ChangeEvent<HTMLInputElement>) => {stockProductsSet(Event.target.checked); filter(searchFruit, Event.target.checked)}}
            /> 
            <label htmlFor="productsStock">Only show products in stock</label>
        </>
    )
}