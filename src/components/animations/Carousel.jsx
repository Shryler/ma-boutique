import React from 'react';

const CarouselPrincipal = () => {
    
    React.useEffect(() => {
        const myCarousel = document.getElementById('carouselExampleFade');
        myCarousel.addEventListener('slide.bs.carousel', e => {
            const newBackgroundColor = e.relatedTarget.attributes[1].value;
            document.body.style.backgroundColor = newBackgroundColor;
        });
    }, []);

    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="10000">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" color="#bdbebf">
                    <img src="/img/carousel/slider1.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" color="#375572">
                    <img src="/img/carousel/slider2.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item" color="#861a93">
                    <img src="/img/carousel/slider3.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselPrincipal;