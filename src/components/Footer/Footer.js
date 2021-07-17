import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-footer container row no-gutters mt-3"></div>
            <div className="bkrelojes-footer col-3">
            <ul>
            <p>BK RELOJES</p>
            <p className='nosotros'> Creamos este emprendimiento con mucho amor, pasión y dedicación. Gracias por confiar en nosotras!</p>
                        </ul>
            </div>
            <div className="shop-footer col-5">
            <p>REDES</p>
            <a href="https://www.instagram.com/bk.relojes/" rel="noreferrer" target="_blank">
                    <InstagramIcon className='iconoRs'/>
                    </a>
                    <a href="https://wa.me/+5492604687067/"
                    rel="noreferrer" target="_blank">
                    <WhatsAppIcon className='iconoRs'/>
                    </a>
                
                <div className="copyright col-12 text-center">
                    <p> &copy; 2021.BK Relojes. Esta página fue creada como proyecto de React</p>
                </div>
                </div>
            
        </footer>
    )
}