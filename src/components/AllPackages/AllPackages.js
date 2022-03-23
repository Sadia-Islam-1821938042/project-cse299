import React from 'react';
import AllPackagesCards from '../AllPackagesCards/AllPackagesCards';
import Header from '../Header/Header';

const AllPackages = () => {
    return (
        <div>
            <Header></Header>
            <AllPackagesCards></AllPackagesCards>
        </div>
    );
};

export default AllPackages;

// const x = 5;
// const y = 6;

// const Sum = (x, y) => {
//     const sum = x+y;
//     const dif = x-y;
//     return {
//         sum,
//         dif
//     };
// }


