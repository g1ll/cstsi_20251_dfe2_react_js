/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { mount } from 'cypress/react'
import "../../src/styles/main.css"
import RouterStub from './RouterStub';
import { NavLinks } from '../../src/components/NavLinks/NavLinks';

describe("NavLink Teste", () => {
    test("Teste dos links da barra superior de navegação!", async () => {
        const { getByText } = render(<RouterStub component={<NavLinks />} />)
        await expect.element(getByText('Log in')).toBeInTheDocument()

    });

    test("Teste com usuário!", async () => {
        const user = {name:"User Test"}
        const { getByText } = render(<RouterStub component={<NavLinks user={user}/>}/>)
        await expect.element(getByText('Dashboard')).toBeInTheDocument()
    });
});