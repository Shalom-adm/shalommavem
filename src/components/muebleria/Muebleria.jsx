import { SlickerMuebleria } from "./slick/slickerMuebleria"

export const Muebleria = () => {
    return (
    
    
    <>
    <section id="simple-list-item-3">
    <div className="container-fluid container-muebleria" >
        
    <div className="row justify-content-center text-break h-auto opacity-100 ">
            <div className="col-md-10 col-lg-8 ">
                {/* <img src="/src/img/Imagen1.png" style={{objectFit:"cover", width:"100%"}} alt="" /> */}
                <SlickerMuebleria 
                    img1={"https://i.postimg.cc/X7fNP61s/img1-muebleria.jpg"}
                    img2={"https://i.postimg.cc/rps29BtZ/img2-muebleria.jpg"}
                    img3={"https://i.postimg.cc/3rXs5KsY/image3-muebleria.jpg"}
                    img4={"https://i.postimg.cc/Z5dP2qQL/image4-muebleria.jpg"}
                    img5={"https://i.postimg.cc/VsXdxCsv/image5-muebleria.jpg"}
                />
            </div>

            <div className="col-lg-4 align-self-center d-flex flex-column justify-content-center mt-4">
                <div className="h-auto w-auto p-4 container-paragraph-muebleria">
                    <h1 className="fw-bold text-center fs-1 title-muebleria">Muebleria</h1>
                    <p className="text-center">Encontrarás una amplia variedad de opciones para amueblar tu hogar, oficina o cualquier otro lugar.</p>
                </div>
                
            </div>

        </div>

    </div>

       
    </section>
        
    
    
    </>)



}