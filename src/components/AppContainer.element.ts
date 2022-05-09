import styledComponents from "styled-components";

export const ContainerBox = styledComponents.div`
    background-color: #11072f;
    color: white;
    width: 75vw;
    height: 120%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media (max-width: 800px) {
        width: 100vw;
        height: 140vh;
    }    
`;

export const LogoContainer = styledComponents.img`
    padding-top: 60px;
    padding-bottom: 30px;
    height: 73px;
    width: 65px;
`;
