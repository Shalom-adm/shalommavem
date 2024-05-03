import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomSlide } from "./customItemSlick";

export const SlickerMuebleria = ({img1, img2, img3, img4, img5})=> {
    const settings = {
      className: "center",
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      nextArrow: false,
      prevArrow: false,
      speed: 700,
      cssEase: "ease-in"
     
      
        };
      return (
        <div className="slider-container slider-muebleria ">
          <Slider {...settings} >
            <CustomSlide index={1} src={img1} />
            <CustomSlide index={2} src={img2}/>
            <CustomSlide index={2} src={img3}/>
            <CustomSlide index={2} src={img4}/>
            <CustomSlide index={2} src={img5}/>
            
          </Slider>
        </div>
      );
    }