import styled from 'styled-components';

export const Container = styled.nav`
    background: linear-gradient(150deg, #53F 15%, #05D5FF);

    > ul {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0 21px;
    }
`;

export const DropdownStyles = styled.div`
    .dropdown-option {
        padding: 20px 25px;
        outline: 0;
        color: #ffff;
        font-size: 18px;


        transition: 0.2s;

        &:hover, &:focus {
            opacity: 0.55;
        }
    }
`;