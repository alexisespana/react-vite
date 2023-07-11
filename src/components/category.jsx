import { useState } from "react"

export const AddCategory = ({onNewValue}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChage = (event) => {
        // console.log(event.target.value);
        setInputValue(event.target.value);
    };
    const submit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <=1 ) return;
        // console.log(inputValue);
        // setCategories (categories => [inputValue, ...categories]);
        onNewValue(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={ (event) => submit(event) }>

            <input type="text"
                name=""
                id=""
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChage(event)}

            />
        </form>
    )
}
