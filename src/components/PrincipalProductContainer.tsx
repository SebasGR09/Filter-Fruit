import { useState } from "react";
import FilterBar from "./FilterBar";
import ProductTable from "./ProductTable";
import ButtonReset from "./ButtonReset";

export default function PrincipalProductContainer(){
    
    const [nameFilter, nameFilterSet] = useState("");
    const [stock, stockSet] = useState(false);
    const [cleanInput, cleanInputSet] = useState(false);


    function Filtrado(nameFilter: string, stockProducts: boolean): void{
        nameFilterSet(nameFilter);
        stockSet(stockProducts);
    }

    function clearAll(){
        cleanInputSet(!cleanInput);
        nameFilterSet("");
        stockSet(false)
    }
    
    return (
        <>
            <FilterBar filter={Filtrado} clean={cleanInput}/>
            <ButtonReset reset={clearAll}/>
            <ProductTable  nameFilter={nameFilter} stockProducts={stock}/>
        </>
    )
}