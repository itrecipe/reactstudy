import styled from "styled-components";

export const StyledComponents = () => {
    return (
       
       
        /* 기존 코드
            <div>
                <p>styled components!</p>
                <button>Button</button>
            </div>
        */

        // 인기 있는 방식으로 변경한 코드
        <SContainer>
            <Stitle>styled components!</Stitle>
            <SButton>Button</SButton>
        </SContainer>
        )
    }
    const SContainer = styled.div`
        border: solid 1px #aaa;
        border-ratius : 20px;
        padding : 8px;
        margin : 8px;
        display : flex;
        justify-content : space-around;
        align-items : center;
    `;

    const Stitle = styled.p`
    margin : 0;
    color : #aaa;
    `;

    const SButton = styled.button`
    background-color: #ddd;
    border: none;
    padding: 8px;
    border-radius: 8px;
        &:hover {
            background-color: #aaa;
            color: #fff;
            cursor: pointer;
        }
    `;