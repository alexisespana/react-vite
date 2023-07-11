import axios from "axios";
import { getGifs } from "../helpers/GetGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem/GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
export const Gifcard = ({ category }) => {

    const { imagenes, isLoading } = useFetchGifs(category);


    return (
        <div className="row">
            <h3>{category}</h3>
            {isLoading && <h2>Cargando...</h2>}
            {
                imagenes.map((img) => {
                    return (


                        <div className="col-6 p-3">

                            <GifItem key={img.id}
                                {...img} />
                        </div>

                    )

                })
            }
        </div>
    )
}
