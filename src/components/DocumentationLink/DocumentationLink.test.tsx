import { render, screen } from "@testing-library/react";

import { DocumentationLink } from "./DocumentationLink";

describe(DocumentationLink.name, () => {
  it("renders correctly text and link", () => {
    render(<DocumentationLink />);
    const docLink = screen.getByRole("link");

    expect(screen.getByText("Documentation")).toBeInTheDocument();
    expect(docLink).toHaveAttribute(
      "href",
      "https://github.com/urbint/fe-app-project#fe-template-app"
    );
  });
});
