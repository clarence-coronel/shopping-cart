import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import NavigationLink from "../src/component/NavigationLink";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

describe("NavigationLink", () => {
  it("should display given text if given", () => {
    const text = "Home";

    render(
      <BrowserRouter>
        <NavigationLink to="/" text={text} />
      </BrowserRouter>
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should display child node instead of text if given", () => {
    const attrText = "Home";
    const childText = "Child Div";

    render(
      <BrowserRouter>
        <NavigationLink to="/" text={attrText}>
          <div>{childText}</div>
        </NavigationLink>
      </BrowserRouter>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
    expect(screen.queryByText(attrText)).not.toBeInTheDocument();
  });

  it("should point href to given route", () => {
    const attrText = "Home";
    const route = "/test-route";

    render(
      <BrowserRouter>
        <NavigationLink to={route} text={attrText} />
      </BrowserRouter>
    );

    const linkElement = screen.getByText(attrText).closest("a");

    // Assert that the link element has the correct href attribute
    expect(linkElement).toHaveAttribute("href", route);
  });
});
