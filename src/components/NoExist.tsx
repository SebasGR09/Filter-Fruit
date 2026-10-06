export default function NoExist({nameNoExist}: {nameNoExist:string}){
    return(
        <>
            <tr>
                <td colSpan={2} className="NoExist">No existen resultados para {nameNoExist}</td>
            </tr>
        </>
    )
}