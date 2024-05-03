export const ItemsBtnCarousel = ({n_slide}) => {
    return (
        <>
             <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={ n_slide - 1} aria-label={'Slide ' + n_slide} className=""></button>
        
        </>
    )
}