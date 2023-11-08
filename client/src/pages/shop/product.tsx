import { useContext } from "react";
import { IShopContext, ShopContext } from "../../context/shop-context"
import { IProduct } from "../../models/interfaces"

interface Props {
    product: IProduct
}

export const Product = (props: Props) => {
    const { _id, productName, description, price, stockQuantity, imageURL } = props.product;

    const { addToCart, getCartItemCount } = useContext<IShopContext>(ShopContext);

    const count = getCartItemCount(_id);

    return (
        <div className="product">
            <div className="imageFixed">
                <img src={imageURL} alt="imageURL" />
            </div>
            <div className="description">
                <h3>{productName}</h3>
                <p>{description}</p>
                <p>${price}</p>
            </div>

            {/* <button className="addToCartBtn">Add To Cart</button> */}

            <div>
                {/* {stockQuantity === 0 && <h1>OUT OF STOCK</h1>} */}
                {stockQuantity === 0 ?
                    <p className="outOfStock">OUT OF STOCK</p>
                    :
                    <button className="addToCartBtn" onClick={() => addToCart(_id)}>Add To Cart {count > 0 && <>({count})</>}</button>}
            </div>
        </div>
    )
}