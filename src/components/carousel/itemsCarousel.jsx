export const ItemsCarousel = ({title, description, paragraphBtn, imgItem, linkItem}) => {

    return (
        <>
            <div className="carousel-item">
            <div className="container-fluid p-0 items-shalom-carousel">
            <img src={imgItem} className="img-fluid opacity-75 images-carousel" alt="" />
            <div className="carousel-caption text-start h-50 " >
                <div className="text-item-carousel">
                    <h1 className="">{title}</h1>
                    <p className="opacity-75">{description}</p>
                    
                </div>
                
            </div>
            </div>
            </div>
        </>
    )
}