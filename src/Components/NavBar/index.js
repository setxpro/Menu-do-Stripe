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
                      />
                  </li>
                  <li>
                      <DropdownOption
                        name="Desenvolvedores"
                        content={Developers}
                      />
                  </li>
                  <li>
                      <DropdownOption
                        name="Empresa"
                        content={Company}
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