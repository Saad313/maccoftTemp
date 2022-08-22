import ImageSlider from "../ImageSlider/ImageSlider";
import {VIDEOS, IMAGES } from "./data";

const cards =

       {
           id:1,
           renderMe: false,
       }
    


export const DemoSlider = () =>{
    return(
        <>
        <div style={{background:"#111827"}}>
        <ImageSlider images={VIDEOS} />
        <ImageSlider images={IMAGES}  />

        </div>
        </>
    )
}