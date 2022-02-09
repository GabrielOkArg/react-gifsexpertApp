import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";




export const useFecthGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        lodading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setstate({
                    data: imgs,
                    lodading: false
                })
            })
    }, [category])



    return state;
}