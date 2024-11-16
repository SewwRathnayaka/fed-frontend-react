function Button(props){
    const handleClick=(e)=>{
        console.log(e);
    }
    return(
    <button 
    type="button"
    onClick={handleClick} 
    className="text-white bg-black rounded-md w-fit block font-medium py-2 px-4">{props.text}</button>
    );
}

export default Button;