export default function ButtonReset({reset}: {reset:()=>void}){
    return(
        <>
            <button onClick={reset} className="resetBtn">Reset</button>
        </>
    )
}