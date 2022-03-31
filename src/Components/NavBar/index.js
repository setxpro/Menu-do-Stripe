import React from 'react';

import * as C from './styles';
import { Products, Developers, Company } from '../Content';
import { DropdownProvider, DropdownOption, DropdownRoot } from '../Dropdown';

function Navbar() {
  return (
    <DropdownProvider>
        <C.DropdownStyles>
          <C.Container>
              <ul>
                  <li>
                      <DropdownOption
                        name="Produtos"
                        content={Products}
                        backgroundHeight={260}
                      />
                  </li>
                  <li>
                      <DropdownOption
                        name="Desenvolvedores"
                        content={Developers}
                        backgroundHeight={167}
                      />
                  </li>
                  <li>
                      <DropdownOption
                        name="Empresa"
                        content={Company}
                        backgroundHeight={215}
                      />
                  </li>
              </ul>
            </C.Container>
            <DropdownRoot/>
          </C.DropdownStyles>
      </DropdownProvider>
  );
}

export default Navbar;