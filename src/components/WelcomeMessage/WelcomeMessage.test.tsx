import { render, screen } from "@testing-library/react";

import { WelcomeMessage } from "./WelcomeMessage";

describe(WelcomeMessage.name, () => {
  it("renders component correctly", () => {
    render(<WelcomeMessage />);
    const message = screen.getByText("Welcome to Urbint FE App");
    const logoImage = screen.getByAltText("Urbint Logo");

    expect(message).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
  });
});
