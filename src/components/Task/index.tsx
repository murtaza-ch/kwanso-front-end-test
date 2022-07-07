import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.gray[50]};
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadow.sm};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.gray[600]};
`;

function Task({ name }: { name: string }) {
  return (
    <Card>
      <p>Title</p>
      <Title>{name}</Title>
    </Card>
  );
}

export default Task;
