import React, { ReactElement } from "react";
import styled from "styled-components";
import LinkMain from "./Button/LinkMain";
import Layout from "./Layout";

interface Props {
  children: string;
}

export default function NotFound({ children }: Props): ReactElement {
  return (
    <Layout title="404 | Not Found">
      <SNotFoundContainer>
        <h2>{children}</h2>
        <SContainer>
          <LinkMain href="/">Let's go back</LinkMain>
        </SContainer>
      </SNotFoundContainer>
    </Layout>
  );
}
const SNotFoundContainer = styled.div`
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    font-size: ${({ theme }) => theme.fontSize["2xl"]};
    font-weight: bold;
  }
`;
const SContainer = styled.div`
  max-width: 20rem;
  margin-top: 3rem;
`;
