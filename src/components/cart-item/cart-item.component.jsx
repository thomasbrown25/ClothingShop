import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ cartItem: { name, quantity, price, imageUrl } }) => {
    return (
        <CartItemContainer>
            <img
                src={imageUrl}
                alt={`${name}`}
                style={{ borderRadius: '5px', border: '1px solid black' }}
            />
            <ItemDetails>
                <span>{name}</span>
                <span>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
