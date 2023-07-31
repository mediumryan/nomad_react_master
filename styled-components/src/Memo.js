// 1. styled-components를 사용하는 이유

// - UUID와 같이 클래스명의 충돌을 방지해준다.
// - props값을 이용해 코드의 재사용이 용이하다.
// - css의 문법과 유사하다.

// 2. 설치 및 설정

// - 터미널에 npm install --save styled-components 입력
// - 사용하고자 하는 컴포넌트에 import styled from 'styled-components'로 불러오기
// - 컴포넌트 밖에 사용하고자 하는 컴포넌트 생성 후 사용

// 3. props
// - props 값은 정의한 곳에서도, 사용하는 태그에서도 원하는 값을 넣어 활용가능

// 4. as
// - as 속성값을 이용하면 해당 태그를 원하는 태그로 바꿀 수 있음.
// - 예를 들어 span으로 만든 태그를 as='div'라고 속성값을 넣어주면 그 태그는 div태그가 됨.

// 5. animation
// - animation기능을 구현하기 위해서는 keyframes라는 헬퍼를 사용해야함.
// - import styled, { keyframes } from 'styled-components' 와 같이 불러와야함.
// - 기능 구현을 위해서는 변수값으로 animation을 따로 작성해야함.
// - 작성된 애니메이션은 animation: ${rotate} 3s linear infinite; 와 같이 불러와서 사용.

// 6. theme
// - dark theme, light theme 등 사용자가 원하는 조건에 맞게 테마를 바꾸어 주는 기능.
// - index.js 파일 내부에 import { ThemeProvider } from "styled-components";
// - App 컴포넌트를 ThemeProvider 로 감싸주기.
// - ThemeProvider는 theme이라는 속성값을 적용받음. 그 속성값에는 사용자가 정의한 theme 값을 넣을 수 있다.
// - 위 준비가 모두 끝났다면 사용하고자 하는 styled-components 내부에 props값으로 사용 가능해짐.

// const MainContainer = styled.main`
//   background-color: ${(props) => props.theme.bgColor}; <-- theme 값을 적용했다. 색을 직접 넣는 것이 아닌 참조만 할 뿐.
//   color: ${(props) => props.theme.textColor};<-- 위 bg값과 같다.
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   div {
//     font-size: 48px;
//   }
// `;

import styled, { keyframes } from "styled-components";
import React from "react";

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const Box = styled.div`
  background-color: ${(props) => props.bg};
  animation: ${rotate} 3s linear infinite;
`;

export default function Memo() {
  return (
    <div>
      <Box bg="tomato" />
      <Box bg="blue" />
    </div>
  );
}
