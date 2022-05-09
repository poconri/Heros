import styledComponents from 'styled-components';

export const SearchBox = styledComponents.div`
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    @media (max-width: 1600px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
`;

export const SubtitleBox = styledComponents.h2`
    padding-left: 10px;
    display: inline;
    white-space: nowrap;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px; 
    letter-spacing: 0.725381px;
    @media (max-width: 1600px) {
        padding-top: 30px;
    }
`;

export const SearchContainer = styledComponents.div`

border-radius: 20px;
position: relative;
width: 30%;
    img {
        padding-top: 10px;
        padding-left: 10px;
        position: absolute;
    }

    input {
        border: none;
        background-color: #281f43;
        height: 100%;
        width: 85%;
        border-radius: 20px;
        padding-left: 40px;
        color: #fff;
        font-size: 16px;
    }
    @media (max-width: 1600px) {
        width: 65%;
        height: 45px;
        margin-right: 30px;
        input {
            width: 100%;
        }
    }
`;