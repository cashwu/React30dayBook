
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test('has css class', () => {
    render(<Footer/>)

    const footerElement = screen.getByText(/Copyright/i);

    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass('app-footer')

})