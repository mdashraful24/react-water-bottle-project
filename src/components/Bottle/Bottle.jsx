import PropTypes from "prop-types";
import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {

    const {name, img, price} = bottle;

    return (
        <div className="bottle flex flex-col items-center space-y-2">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: {price}$</p>
            <button onClick={() => handleAddToCart(bottle)} className='bg-black text-white px-5 py-2 rounded-lg'>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isR
}

export default Bottle;