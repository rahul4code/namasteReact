import { render } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "./../store";
import { StaticRouter } from "react-router-dom/server";

const setupComponent = (
  <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
  </StaticRouter>
);

test("Header component should  contain the logo", () => {
  const component = render(setupComponent);
  const headerLogo = component.getByTestId("header__logo");
  expect(headerLogo.src).toBe("http://localhost/logoSwiggy.png");
});

test("Cart item should be zero initially", () => {
  const component = render(setupComponent);
  const cartId = component.getByTestId("cart__id");
  expect(cartId.innerHTML).toBe("0");
});

// test("")
