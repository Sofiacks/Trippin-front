import Carousel from 'react-bootstrap/Carousel';

export default function Caroussel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../assets/barcelone.jfif')}
                    alt="First slide"
                    height="100"
                />
                <Carousel.Caption>
                    <h3>Barcelone</h3>
                    <p>Mon premier voyage.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../assets/paris.jfif')}
                    alt="Second slide"
                    height="500"
                />

                <Carousel.Caption>
                    <h3>Paris</h3>
                    <p>Mon second voyage.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../assets/new-york.png')}
                    alt="Third slide"
                    heigt="500"
                />
                <Carousel.Caption>
                    <h3>New York</h3>
                    <p>
                        Mon troisième voyage.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../assets/rome.jfif')}
                    alt="Third slide"
                    heigt="500"
                />
                <Carousel.Caption>
                    <h3>Rome</h3>
                    <p>
                        Mon quatrième voyage.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
