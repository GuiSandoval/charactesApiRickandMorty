import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px 0 0;
    width: 100%;
    
    > ul {
        display: flex;
        flex-direction: row;
        user-select: none;
        > li {
            display: flex;
            flex-direction: row;
            margin: 0 5px;
            &.selected > a {
                background: #37f0d3;
                color: black;
            }
            &:hover > a {
                background-color: #f3f3f3;
                color: black;
            }
            > a {
                border-radius: 4px;
                cursor: pointer;
                color: #fff;
                text-decoration: none;
                padding: 0 5px;
                min-height: 18px;
                min-width: 18px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`;