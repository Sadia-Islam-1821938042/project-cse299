import React from 'react';
import "./ReviewsCard.css";


const ReviewsCard = () => {
  return (
    <div className='container'>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card h-100 d-flex justify-content-center align-items-center pt-4">
            <img src="https://i.ibb.co/km1sCvR/mahid.jpg" height="150px" width="150px" class="" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">Mahid Abir</h5>
              <div className='d-flex justify-content-center align-items-center golden-color'>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
              </div>
              <p class="card-text m-4 justified-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quibusdam doloremque, blanditiis quidem facere consequatur a sint necessitatibus ratione veritatis expedita libero odit non minima cumque cum quae, laborum quos architecto praesentium. Iusto velit provident quas delectus non, cumque dolore.</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 d-flex justify-content-center align-items-center pt-4">
            <img src="https://i.ibb.co/JrJ05TN/messi-2.jpg" height="150px" width="150px" class="" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">Lionel Messi</h5>
              <div className='d-flex justify-content-center align-items-center golden-color'>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
              </div>
              <p class="card-text m-4 justified-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quibusdam doloremque, blanditiis quidem facere consequatur a sint necessitatibus ratione veritatis expedita libero odit non minima cumque cum quae, laborum quos architecto praesentium. Iusto velit provident quas delectus non, cumque dolore.</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 d-flex justify-content-center align-items-center pt-4">
            <img src="https://i.ibb.co/wCzQPNj/ricky.jpg" height="170px" width="170px" class="" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">Ricky</h5>
              <div className='d-flex justify-content-center align-items-center golden-color'>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
              </div>
              <p class="card-text m-4 justified-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quibusdam doloremque, blanditiis quidem facere consequatur a sint necessitatibus ratione veritatis expedita libero odit non minima cumque cum quae, laborum quos architecto praesentium. Iusto velit provident quas delectus non, cumque dolore.</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 d-flex justify-content-center align-items-center pt-4">
            <img src="https://i.ibb.co/jMpj2yY/nadir.jpg" height="150px" width="150px" class="" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">Nadir The Go</h5>
              <div className='d-flex justify-content-center align-items-center golden-color'>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
              </div>
              <p class="card-text m-4 justified-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quibusdam doloremque, blanditiis quidem facere consequatur a sint necessitatibus ratione veritatis expedita libero odit non minima cumque cum quae, laborum quos architecto praesentium. Iusto velit provident quas delectus non, cumque dolore.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewsCard;