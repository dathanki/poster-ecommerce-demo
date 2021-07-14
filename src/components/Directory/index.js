import React from 'react';
import ShopPosters from './../../assets/shopPoster.jpg';
import ShopPhonecases from './../../assets/shopPhonecases.jpg';
import ShopAirpodcases from './../../assets/shopAirpodcases.jpg';
import './styles.scss';


const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopAirpodcases})`
                    }}
                >
                    <a>
                        Shop Airpod cases
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopPosters})`
                    }}
                >
                    <a>
                        Shop Posters
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopPhonecases})`
                    }}
                >
                    <a>
                        Shop Phone cases
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Directory;