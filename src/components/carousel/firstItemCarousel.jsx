export const FirstItemCarousel = ({title, description, paragraphBtn, imgItem, linkItem}) => {

    return (
        <>
            <div className="carousel-item active">
            <div className="container-fluid p-0 items-shalom-carousel" >
            <img src={imgItem} className=" img-fluid opacity-75 images-carousel" alt="Responsive image" />
            <div className="carousel-caption text-start h-50">
                <h1>{title}</h1>
                <p className="opacity-75">{description}</p>
                
            </div>
            </div>
            </div>
        </>
    )
}