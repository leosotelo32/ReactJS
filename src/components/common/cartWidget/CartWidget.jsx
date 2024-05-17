import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const CartWidget = () => {
  return (
    <ShoppingCartIcon ShoppingCartIconContent={0} color="primary">
      <ShoppingCartCheckoutIcon size="30px" color="beige" />
    </ShoppingCartIcon>
  );
};

export default CartWidget;
