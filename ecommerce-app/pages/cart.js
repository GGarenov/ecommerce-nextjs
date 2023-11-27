import { useCart } from "@/context/cart-context";
import { Button } from "@/components/elements/Button";

const Cart = () => {
  const { state } = useCart();
  if (!state.products || state.product.length == 0) {
    return (
      <div className="flex justify-center">
        <p>Your Cart is Empty!</p>
      </div>
    );
  }
  return <div></div>;
};
