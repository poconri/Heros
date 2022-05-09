import styledComponents from 'styled-components';

export const Container = styledComponents.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 285px;
    height: 174px;
    border-radius: 16px;
    gap:16px;
    color: white;
    background: rgba( 17, 7, 47, 0.45 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    cursor: pointer;
`;

export const HeroPicture = styledComponents.img`
    width: 105px;
    height: 140px;
    border-radius: 12px;
    margin-left: 16px;
    margin-top: 16px;
    position: relative;
`;

export const HearthContainer = styledComponents.img`
    width: 17px;
    height: 20px;
    background-color: #6a4dbc;
    border-radius: 30px;
    padding: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    left: 31%;
    bottom: 7%;
`;

export const ContainerBackground = styledComponents.div`
    width: 285px;
    height: 174px;
    border-radius: 16px;
    background-repeat: no-repeat;
`;

export const HeroDescription = styledComponents.div`
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.273085px;
    color: rgba(255, 255, 255, 0.49);
    gap: 4px;

    h2 {
        margin-top: 16px;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 143%;
        letter-spacing: 0.300393px;
        color:white;
    }

    div {
        display: flex;
        text-align: center;
        gap: 4px;

        img {
            margin:0;
            height: 14.68px;
            width: 14.08px;
        }
    }
`;

export const BoldParagraph = styledComponents.div`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.273085px;
    color: #FFFFFF;
`;