export const CustomSlide =({index, src}) => {
    return (
        <div  className="container-fluid item-slider-muebleria container-fluid ">
            {/* <img src="/src/img/imag2-carousel.jpg" alt="" style={{objectFit: "cover"}} /> */}
            
           
            <img src={src} alt="" className="img-slick-muebleria img-fluid" />

            
        </div>

    )
}