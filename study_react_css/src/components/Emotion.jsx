//Emotion은 인기 많은 CSS-in-JS 라이브러리, 다양한 사용법을 제공하는것이 특징!

/** 컴포넌트 파일 안에 CSS를 기술 하는 방법 */
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
// import styled from "styled-components";
import styled from "@emotion/styled";

export const Emotion = () => {
    // scss 기술 방법을 그대로 사용할 수 있는 기술 방법
    const containerStyle = css`
        border: solid 1px #aaa;
        border-ratius : 20px;
        padding : 8px;
        margin : 8px;
        display : flex;
        justify-content : space-around;
        align-items : center;
    `;
    
    // 인라인 스타일 기술 방법
    const titleStyle = css ({
        margin: 0,
        color: "#aaa"
    });
    
    return (

        /* 기존 코드 
        <div>
            <p>Emotion!</p>
            <button>Button</button>
        </div>
        */

        // Emotion으로 변경한 코드
       <div css={containerStyle}>
            <p css={titleStyle}>Emotion!</p>
            <SButton>Button</SButton>
       </div>
    );
};

// styled-Components 기술 방법
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