import PropTypes from "prop-types";

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div className="space-y-3">
            <h4 className="font-bold">Cart: {cart.length}</h4>
            <div className="grid grid-cols-5 lg:grid-cols-11 gap-3">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img className="w-[100px]" src={bottle.img}></img>
                        <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;