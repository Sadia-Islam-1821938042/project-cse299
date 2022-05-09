import React from 'react';
import { Link } from 'react-router-dom';
import './AllPackagesCards.css';

const AllPackagesCards = props => {
    const { _id, name, description, img, cost } = props.singlePackage;
    return (
        <div className="package-body">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                    <h4 className="py-4 text-primary">Cost: ${cost}.00</h4>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>

                        <p className="card-text">{description}</p>
                        <Link to=""><button style={{ borderRadius: "20px" }} className="btn btn-outline-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPackagesCards;