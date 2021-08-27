import React from 'react';
import ShopPosters from './../../assets/shopPoster.png';
import ShopPhonecases from './../../assets/shopPhonecases.jpg';
import ShopAirpodcases from './../../assets/shopAirpodcases.jpg';
import { Link } from 'react-router-dom';
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
                    <Link to="/Search/airpodcases">
                        Shop Airpod cases
                    </Link>

                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopPosters})`
                    }}
                >
                    <Link to="/Search/posters">
                        Shop Posters
                    </Link>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopPhonecases})`
                    }}
                >
                    <Link to="/Search/iphonecases">
                        Shop Phone cases
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Directory;