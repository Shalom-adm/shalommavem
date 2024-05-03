import { useEffect, useState } from "react"
import { ItemsBtnCarousel } from "./carousel/btnCarousel/itemsBtnCarousel"
import { FirstItemCarousel } from "./carousel/firstItemCarousel"
import { ItemsCarousel } from "./carousel/itemsCarousel"
import { NavBarShalom } from "./navbar-shalom/navbarShalom"
import { useRef } from "react"


export const HeaderShalom = () => {

    const heightRef = useRef(null)
    const [heightCarousel, setHeightCarousel] = useState(0)



    useEffect(() => {
      window.addEventListener("resize",()=>{
    
        setHeightCarousel(()=>(heightRef.current.clientHeight==undefined)?0:heightRef.current.clientHeight)
        

      }),
      window.removeEventListener("resize",()=>{
        // console.log(window.innerHeight)
      })
    },[heightCarousel])
    
 

    return (
        <>
        <div id="myCarousel" className="carousel slide mb-6 carousel-fade" data-bs-ride="carousel">
            <NavBarShalom heightCarousel={heightCarousel}/>
        
            
       

            <div className="carousel-indicators"  >

            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
            <ItemsBtnCarousel n_slide={2}/>
            <ItemsBtnCarousel n_slide={3}/>

            </div>
            {/* Items carousel */}
            <div className="carousel-inner bg-black" ref={heightRef}>
            
            <FirstItemCarousel 
                title={"Soldaduras"} 
                description={"Trabajos a Medida"} 
                imgItem={'https://i.postimg.cc/gjJzSRFf/image8-carousel.jpg'}
            />


            <ItemsCarousel 
                title={"Muebleria"} 
                description={"Variedad de Muebles y Unicos"} 
                imgItem={'https://i.postimg.cc/GhRtnBPT/image5-carousel.jpg'}
            />

            <ItemsCarousel 
                title={"Videovigilancia"} 
                description={"Vigilancia Especializada"} 
                imgItem={'https://i.postimg.cc/NfC37S0G/image7-carousel.jpg'}
            />

            {/* <ItemsCarousel 
                title={"Hola no si se como estas"} 
                description={"si se lo quee sta pasando"} 
                paragraphBtn={"No hagas click"} 
                imgItem={'/src/img/img1.png'}
            />

            <ItemsCarousel 
                title={"Hola como andas"} 
                description={"si se lo quee sta pasando"} 
                paragraphBtn={"No hagas click"} 
                imgItem={'/src/img/img1.png'}
            /> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>

        </>

    )
}



