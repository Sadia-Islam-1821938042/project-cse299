import React from 'react';

const AllPackagesCards = () => {
    return (
        <div>
            <div>
                <h2 className='text-center py-2'>Packages</h2>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/yFx2Kzq/Discover-sajek-valley.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Shajek Valley</h5>
                            <p class="card-text">
                                <ul>
                                    <li>3 days, 4 nights</li>
                                    <li>Dinner and breakfast included</li>
                                    <li>Transportation Not available</li>
                                    <li>BBQ party</li>
                                    <li>Tour Guide available</li>
                                </ul>
                                <h5 className='text-primary

'>Cost: 5500/-</h5>
                            </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/NpDcBF3/shada.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/3NCGNf2/163-gallary-7jpg.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPackagesCards;