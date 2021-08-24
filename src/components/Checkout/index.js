import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import Button from './../Forms/Button';
import Item from './Item';
import './styles.scss';


const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const errMsg = 'You have no items in your cart.';


const Checkout = ({ }) => {
    const { cartItems, total } = useSelector(mapState);
    const history = useHistory();
    return (
        <div className="checkout" >
            <h1>
                Checkout
            </h1>
            <div className="cart">
                {cartItems.length > 0 ? (
                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                                <tbody>
                                    <tr>
                                        <th>
                                            Product
                                        </th>
                                        <th>
                                            Description
                                        </th>
                                        <th>
                                            Quantity
                                        </th>
                                        <th>
                                            Price
                                        </th>
                                        <th>
                                            Remove
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </tr>

                        <tr>
                            <table border="0" cellPadding="0" cellSpacing="0">
                                <tbody>
                                    {cartItems.map((item, pos) => {
                                        return (
                                            <tr key={pos}>
                                                <td>
                                                    <Item {...item} />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </tr>
                        <tr>
                            <table align="right" border="0" cellSpacing="0" cellPadding="10">
                                <tr align="left">
                                    <td>
                                        <h3>
                                            Total: C${total}
                                        </h3>
                                    </td>
                                </tr>
                                <tr>
                                    <table border="0" cellPadding="10" cellSpacing="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Button onClick={() => history.goBack()}>
                                                        Continue Shopping
                                                    </Button>
                                                </td>
                                                <td>
                                                    <Button onClick={() => history.push('/Payment')}>
                                                        Checkout
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </tr>
                            </table>
                        </tr>

                    </tbody>
                </table>
                ) : (
                    <p>
                        {errMsg}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Checkout;