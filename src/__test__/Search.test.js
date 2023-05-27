import { Provider } from "react-redux";
import Body from "./../components/Body";
import store from "./../store";
import { StaticRouter } from "react-router-dom/server";
import Restaurants from "./mocks/Restaurants.json";
import { render, waitFor } from "@testing-library/react";
import {toBeInTheDocument} from "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Restaurants);
    },
  });
});

const setupComponent = (
  <StaticRouter>
    <Provider store={store}>
      <Body />
    </Provider>
  </StaticRouter>
);

test("Render Search", async () => {
  const bodyComponent = render(setupComponent);

//   await waitFor(()=>expect(bodyComponent.getAllByTestId('someCompId_afterloadingShimmer')))

  const offerCarousel=bodyComponent.getByTestId("offerCarousel");
  expect(offerCarousel).toBeInTheDocument();
});
