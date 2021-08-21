import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from './../../redux/Products/products.actions';
import Product from './Product';
import LoadMore from './../LoadMore';
import FormSelect from '../Forms/FormSelect';
import './styles.scss';

const mapState = ({ productsData }) => ({
    products: productsData.products
});

const ProductResults = ({ }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { filterType } = useParams();
    const { products } = useSelector(mapState);
    const { data, queryDoc, isLastPage } = products;


    useEffect(() => {
        dispatch(
            fetchProductsStart({ filterType })
        )
    }, [filterType]);

    const handleFilter = (e) => {
        const nextFilter = e.target.value;
        history.push(`/search/${nextFilter}`);
    };

    if (!Array.isArray(data)) return null;
    if (data.length < 1) {
      return (
            <div className="products">
                <p>
                    No search results.
                </p>
            </div>
        );
    }

    const configFilters = {
        defaultValue: filterType,
        options: [{
            name: 'Show all',
            value: ''
        }, {
            name: 'Airpod Cases',
            value: 'airpodcases'
        }, {
            name: 'Posters',
            value: 'posters'
        }, {
            name: 'iPhone Cases',
            value: 'iphonecases'
        }],
        handleChange: handleFilter
    };

    const handleLoadMore = () => {
        dispatch(
            fetchProductsStart({
                filterType,
                startAfterDoc: queryDoc,
                persistProducts: data
            })
        )
    };

    const configLoadMore = {
        onLoadMoreEvent: handleLoadMore,
    };

    return (
        <div className="products">
            <h1>
                Browse Products
            </h1>
            <FormSelect {...configFilters} />
            <div className="productResults">
                {data.map((product, pos) => {
                    const { productThumbnail, productName, productPrice } = product;
                    if (!productThumbnail || !productName ||
                        typeof productPrice === 'undefined') return (
                            <div>
                                <p className="errorText">
                                    There was an Error
                                    in loading the products because
                                    either the price, image or name is invalid
                                    in one or more product listings.<br /><br />
                                    <b>Please recheck all product listings.</b>
                                </p>
                            </div>
                        );
                    const configProduct = {
                        ...product
                    };

                    return (
                        <Product {...configProduct} />
                    );
                })}
            </div>
            {!isLastPage && (
                <LoadMore {...configLoadMore} />
            )}
        </div>
    );
};

export default ProductResults;
