import { useState } from "react"
import { AddCategory, Gifcard } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Ponch']);


    const onAddCategory = (newValue) => {
        if (categories.includes(newValue)) return;
        setCategories([newValue, ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>

            {/* IMPUT DEL COMPONENTE CATEGORY.JSX    */}
            <AddCategory onNewValue={(value) => onAddCategory(value)} />

            {
                categories.map((category) => (
                    <Gifcard  key={category} category={category}></Gifcard>
                    //   <GifGrid key={category} category={category}></GifGrid>
                   
                )

                )
            }
        </>
    )
}
