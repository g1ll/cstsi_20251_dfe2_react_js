import { render } from 'vitest-browser-react'
import { test, expect } from "vitest";
import { SearchBar } from "../src/components/SearchBar/SearchBar";

test("SearchBar: Teste simples de renderização!", async () => {

    const { getByText } = render(
        <SearchBar filterFunction={() => { }} />
    )

    await expect.element(getByText('Pesquisar')).toBeInTheDocument()

});
