export const FooterShalom = () => {

    const fechaActual = new Date();
    return (
        <>
        <footer className="footer bg-black py-3 mt-auto footerShalom">
            <hr className="w-100"/>
            <div className="d-flex flex-column text-center h-100 justify-content-center">
                <p className=""> {`© ${fechaActual.getFullYear()} Shalom. Todos los derechos reservados`}  </p>

            </div>
            


        </footer>
        </>
    )


}