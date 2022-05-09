import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import AllPackagesCards from '../AllPackagesCards/AllPackagesCards';
import Header from '../Header/Header';
import './AllPackages.css';

const AllPackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    if (packages.length !== 0) {
        return (
            <div className="packages-container">
                {
                    packages.map(singlePackage => <AllPackagesCards
                        key={singlePackage._id}
                        singlePackage={singlePackage}
                    ></AllPackagesCards>)
                }
            </div>
        );
    }
    else {
        return (
            <div>
                <Spinner style={{ marginTop: "100px", width: "100px", height: "100px" }} animation="grow" />
            </div>
        )
    }
};

export default AllPackages;


