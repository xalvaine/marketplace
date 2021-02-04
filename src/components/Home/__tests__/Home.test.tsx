import React from "react";
import { render } from "@testing-library/react";

import Home from "../Home";

const renderHome = () => {
  return render(<Home />);
}

describe("<Home />", () => {
  test("should display a right string", async () => {
    const { getByText } = renderHome();

    expect(getByText('Главная страница на которой ничего нет')).toBeTruthy();
  });
});