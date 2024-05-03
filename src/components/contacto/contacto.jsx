import { BsInstagram } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { GrFacebook } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
export const Contactos = () => {

    return(
        <>
        <section id="simple-list-item-4" className="section-contacto align-content-center">
        <div  className="d-flex container-contacto justify-content-center">
        <div className="card mb-3 h-100 card-contacto" >
            <div className="row g-0  h-100">
                <div className="col-md-4 align-content-center">
                    <img src="https://i.postimg.cc/wB7ttKmT/Imagen1.png" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8 align-content-center">
                    <div className="card-body">
                        <span className="card-text">
                            <a className="text-decoration-none card-link card-text text-light" href="https://www.facebook.com/profile.php?id=61558231736069&mibextid=ZbWKwL" target="_blank" style={{color: "#c0c0c0;"}}><SiFacebook size={'25px'} /> Shalom soldadura . artesania rústico moderno . video vigilancia </a>
                        </span>
                        <p className="card-text">
                            {/* <a className="text-decoration-none card-link card-text" href=""><BsInstagram size={'25px'}/>  </a>  */}
                        </p>
                        <span className="card-text ">
                            <a className="text-decoration-none card-link card-text text-light" href="mailto:shalommavem@gmail.com"><IoIosMail size={'25px'} target="_blank"/> shalommavem@gmail.com</a>
                        </span>
                        
                        
                    </div>
                </div>
            </div>
            </div>

        </div>

    </section>
        
        
        
        </>

    )
    
}