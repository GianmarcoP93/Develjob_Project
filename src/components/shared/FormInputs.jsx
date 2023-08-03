export const FormInputs = ({type,name,value,func,checked}) => {
    return (
        <>
            {type === "checkbox" ? <input type={type} name={name} checked={checked} onChange={func}  required /> : 
            <input type={type} name={name} value={value} onInput={func} className="rounded-lg  h-8 pl-2 min-w-[300px] outline-none" required /> }
        </>
    )
}