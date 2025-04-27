import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the SSR products page
  redirect("/products");
}
