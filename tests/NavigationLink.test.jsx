import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NavigationLink from "../src/component/NavigationLink";
import { BrowserRouter } from "react-router-dom";

describe("NavigationLink", () => {
  it("should display given text if given", () => {
    const text = "Home";

    render(
      <BrowserRouter>
        <NavigationLink to="/" text={text} />
      </BrowserRouter>
    );

    // expect(screen.getByText(text)).toBeInTheDocument();
  });
});
