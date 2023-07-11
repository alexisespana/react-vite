import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const obtenerImagenes = async () => {
        const newImagenes = await getGifs(category);
        setImagenes(newImagenes);
        setIsLoading(false);
    }

    useEffect(() => {
        obtenerImagenes();

    }, []);

    return {
        imagenes: imagenes,
        isLoading: isLoading
    }
}
