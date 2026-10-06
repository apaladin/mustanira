import type { Metadata } from "next";
import OrderList from "@/components/OrderList";

export const metadata: Metadata = {
  title: "Your order list",
  description: "Review your items and send your order list to the Mustanira team.",
};

export default function CartPage() {
  return <OrderList />;
}
