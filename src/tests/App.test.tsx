import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import App from "../App.tsx";
import "@testing-library/jest-dom/vitest";
import {MemoryRouter, Route, Routes} from "react-router";


describe("App", () => {
    it('checkout_library_working', () => {
        render(<MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route path="/" element={<App />}/>
            </Routes>
        </MemoryRouter>);
      expect(screen.getByText('/')).toBeInTheDocument();
    });
})