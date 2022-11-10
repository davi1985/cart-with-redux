import { useSelector } from "react-redux";
import { IState } from "../store";
import { ICartItem } from "../store/modules/cart/types";
import { CartItem } from "./CartItem";

export function Cart() {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  console.log(cart);

  return (
    <table style={{ width: "100%", textAlign: "center" }}>
      <thead style={{ background: "#161616" }}>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        {cart.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}
