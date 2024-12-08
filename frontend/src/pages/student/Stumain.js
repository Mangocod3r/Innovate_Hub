import Carousel from 'react-bootstrap/Carousel'
import Footer from '../../components/footer'
import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import fetchWithAuth from '../../api/fetchWithAuth'
export default function Stumain() {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetchWithAuth(`${process.env.REACT_APP_API_HOST}/posts_main`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json(); 
            })
            .then((jsonRes) => {
                setCats(jsonRes); 
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        console.log(cats);
    }, []);

    const renderCard = (card, index) => {
    return (
        <div className="col-sm-4" key={index} style={{ paddingBottom: '20px' }}>
            <Link to={`/stu_vm/${card.title}`} style={{ textDecoration: 'none' }}>
                <div className="card-container shadow-lg p-4 mb-5 bg-white rounded box">
                    <div className="img-wrapper">
                        <img
                            src={card.img}
                            className="img-fluid"
                            alt={card.title}
                            style={{ borderRadius: '10px', maxHeight: '200px', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="card-body text-center" style={{ padding: '20px 0' }}>
                        <h5 style={{ fontWeight: '600', color: '#333' }}>
                            {card.title}
                        </h5>
                        <p style={{ fontSize: '14px', color: '#555' }}>
                            {card.description ? card.description : "Learn more about this category"}
                        </p>
                        <button className="btn btn-primary" style={{ marginTop: '10px' }}>
                            Explore
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};


    return (
        <>

            <div className="container-fluid main" style={{ paddingTop: 32 }}>
                {}
                <Carousel >
                    <Carousel.Item >
                        <img
                            className="d-block w-100 mx-auto"
                            src="https://media.istockphoto.com/id/817972136/photo/education-and-business-background.jpg?s=612x612&w=0&k=20&c=GTVoTrSKzFiptpCaccBoDLBkE-80AUwXkUsqkjyToOU="
                            alt="First slide"

                        />
                        <Carousel.Caption>
                            <h5>CLOUD COMPUTING</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 mx-auto"
                            src="https://media.istockphoto.com/id/925425860/photo/in-laboratory-scientist-wearing-virtual-reality-headset-sitting-in-a-chair-interacts-with.jpg?s=612x612&w=0&k=20&c=H6F3YaSVso1qpZuExxJEui1zsc1vUePtsSlF690YYD0="
                            alt="Second slide"

                        />

                        <Carousel.Caption>
                            <h5>VIRTUAL REALITY</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 mx-auto"
                            src="https://media.istockphoto.com/id/1205195628/photo/3d-illustration-technology-hexagon-background-and-data-artificial-intelligence-algorithms.jpg?s=612x612&w=0&k=20&c=ez1zrD17SO_XmYdpGqylhMDO1MteJX4DY9GX3rEjcrw="
                            alt="Third slide"

                        />

                        <Carousel.Caption>
                            <h5>DATA SCIENCE</h5>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h1
                    className="text-center"
                    style={{ paddingTop: "15%", paddingBottom: "5%", fontWeight: 600 , color:'#0056D2'}}
                >
                    AVAILABLE CATEGORIES
                </h1>
                <div className="row">
                    {cats.map(renderCard)}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
