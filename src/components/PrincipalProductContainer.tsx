import { useState } from "react";
import FilterBar from "./FilterBar";
import ProductTable from "./ProductTable";

export default function PrincipalProductContainer(){
    
    const [nameFilter, nameFilterSet] = useState("");
    const [stock, stockSet] = useState(false);


    function Filtrado(nameFilter: string, stockProducts: boolean): void{
        nameFilterSet(nameFilter);
        stockSet(stockProducts);
        console.log(nameFilter)
    }
    
    return (
        <>
            <FilterBar filter={Filtrado}/>
            <ProductTable  nameFilter={nameFilter} stockProducts={stock}/>
        </>
    )
}