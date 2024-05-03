import { useRef } from "react";
import { useEffect } from "react"
import { useState } from "react"



//I think to better is create some class for the atributtes of property 
export const NavBarShalom = ({heightCarousel}) => {

    //wait, is better than create a class when is more then 
    //Necesito el 
    const [y, setY] = useState({y: 0})
    const [heightNav, setHeightNav] = useState({
        'height': 11,
        'backgroundColor': '',
        'position':'absolute'
    })
    const heightNavs = useRef();
    
    

    useEffect(() => {
        const onScroll = () => (
            setY({y: window.scrollY}),
            
            (window.scrollY>=(window.innerHeight-(11*16)+35))?setHeightNav({height:7,backgroundColor:'rgb(11,11, 11)',position:'sticky'}):setHeightNav({
                'height': 11,
                'backgroundColor': '',
                'position': 'absolute'
            })

        );
        window.addEventListener('scroll', onScroll)
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }, [y, heightCarousel]);
    




    return (
        <>
        <nav className={`d-flex flex-column header-shalom overflow-hidden fixed-top navbar-shalom ${heightNav.position}`}  style={{height:`${heightNav.height}rem`, transition: "all .5s", transitionTimingFunction: 'ease-out',backgroundColor:heightNav.backgroundColor}} ref={heightNavs}>
            <div className=" align-self-lg-end align-self-md-end nav">
                <div id="simple-list-example" className="d-flex  p-2 nav-shalom">
                    <a className="text-decoration-none item-shalom" href="#simple-list-item-1">Soldaduras</a>
                    <a className="text-decoration-none item-shalom" href="#simple-list-item-2">Videovigilancia</a>
                    <a className="text-decoration-none item-shalom" href="#simple-list-item-3">Muebleria</a>
                    <a className="text-decoration-none item-shalom" href="#simple-list-item-4">Contacto</a>

                    {/* <a className="text-decoration-none item-shalom" href="">{JSON.stringify(y)}</a> */}

                   
                    
                </div>

            </div>
            <div className="container-img" >
        
                {/* <img src="/src/img/Imagen1.png" alt="" className="" /> */}
                
            </div>
            
        </nav>
       
        </>
    )


}