import { ICartItem } from "../store/modules/cart/types";

interface CartItemProps {
  item: ICartItem;
}

export function CartItem({ item }: CartItemProps) {
  return (
    <tr>
      <td style={{ borderTop: "1px solid #ccc" }}>{item.product.title}</td>
      <td style={{ borderTop: "1px solid #ccc" }}>{item.product.price}</td>
      <td style={{ borderTop: "1px solid #ccc" }}>{item.quantity}</td>
      <td style={{ borderTop: "1px solid #ccc" }}>
        {(item.product.price * item.quantity).toFixed(2)}
      </td>
    </tr>
  );
}
