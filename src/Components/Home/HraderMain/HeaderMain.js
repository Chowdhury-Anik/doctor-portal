import React from 'react';
import Mask from '../../../images/Mask Group 1.png';
const HeaderMain = () => {
    return (
        <main style={{ height: "600px" }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: "3d3a3a" }}>Your New Smile <br /> Start Here</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos blanditiis tempora id dicta explicabo!
                </p>
                <button className="btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={Mask} alt="" className="img-fluid" />
            </div>


        </main>
    );
};

export default HeaderMain;