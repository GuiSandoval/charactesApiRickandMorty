import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #1e1e1e;
border-radius: 4px;
height: 200px;
width: 100%;
max-width: 160px;
padding: 10px;


    img {
        width: 100%;
        max-width: 100px
    }

    h2{
        font-size: 1.4rem;
        text-align:center;
        color: #fff
    }
    p{
        font-size: 1rem;
        color: #b1b1b1
    }

`;