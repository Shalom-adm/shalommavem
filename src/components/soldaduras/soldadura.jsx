import { SlickerMuebleria } from "../muebleria/slick/slickerMuebleria"

export const Soldadura = () => {
    return (
    
    
    <>
    <section id="simple-list-item-1">
         <div className="container-fluid  container-soldadura">

         <div className="row justify-content-center text-break h-auto opacity-100 ">
             <div className="col-lg-4 align-self-center d-flex flex-column justify-content-center mb-4">
                <div className="w-auto h-auto p-4 container-paragraph-soldadura">
                    <h1 className="fw-bold text-center fs-1 title-soldadura">Soldadura</h1>
                    <p className="text-center<">Cotiza con nosotros servicios de creación de productos soldados a medida.</p> 
                </div>
                
            </div>
            <div className="col-md-10 col-lg-8 ">
                {/* <img src="/src/img/Imagen1.png" style={{objectFit:"cover", width:"100%"}} alt="" /> */}
                <SlickerMuebleria
                    img1={"https://i.postimg.cc/YCk5cY35/453475590-516928570711118-7532247393256992797-n.jpg"}
                    img2={"https://i.postimg.cc/bJGM0Tyt/453233907-1221530215943522-1827205498831614062-n.jpg"}
                    img3={"https://i.postimg.cc/90M684td/img4-soldadura.jpg"}
                    img4={"https://i.postimg.cc/Bb9hDX7Z/img3-soldadura.jpg"}
                    img5={"https://i.postimg.cc/G2QQBqDK/img5-soldadura.jpg"}
                
                />
            </div>
           

        </div>

    

        </div>
    </section>
       
    
    
    </>)



}