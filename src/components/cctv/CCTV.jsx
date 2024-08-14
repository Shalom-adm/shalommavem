import { SlickerMuebleria } from "../muebleria/slick/slickerMuebleria"

export const CCTV = () => {
    return (
    
    
    <>
        <section id="simple-list-item-2" >
        <div className="container-fluid container-CCTV" >
        <div className="row justify-content-center text-break h-auto opacity-100 ">
            <div className="col-md-10 col-lg-8 ">
                {/* <img src="/src/img/Imagen1.png" style={{objectFit:"cover", width:"100%"}} alt="" /> */}
                <SlickerMuebleria
                    img1={"https://i.postimg.cc/RZ6HBJZT/454028263-3416411878662864-1920420366820969112-n.jpg"}
                    img2={"https://i.postimg.cc/Zn89HV3s/img2-videovigilancia.jpg"}
                    img3={"https://i.postimg.cc/mgDJKSyt/im3-videovigilancia.jpg"}
                    img4={"https://i.postimg.cc/fyYSzX7d/img4-videovigilancia.jpg"}
                    img5={"https://i.postimg.cc/Nj4WQFC5/454168493-484693934503491-3862324993883471387-n.jpg"}
                
                />
            </div>
             <div className="col-lg-4 align-self-center d-flex flex-column justify-content-center mt-4">
                <div className="w-auto h-auto container-paragraph-CCTV  p-4">
                    <h1 className="fw-bold text-center fs-1 title-CCTV">Videovigilancia</h1>
                    <p className="text-center">Asegurate con nosotros con nuestras profesionales instalaciones en de sistemas de videovigilancia</p>
                </div>
            </div>
           
           

        </div>
        </div>

        </section>
        
    
    </>)



}