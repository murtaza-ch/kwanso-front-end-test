import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Heading = styled.h1`
  font-size: 3rem;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.main};
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  padding: 0.45rem;
  font-size: 2rem;
  cursor: pointer;
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
  padding: 10px;
  font-size: 1.5rem;
  border-color: ${(props) => props.theme.colors.main};
  border-radius: ${(props) => props.theme.borderRadius};
`;

interface Props {
  isLoading: boolean;
  task: string;
  error: string | undefined;
  setTask: (task: string) => void;
  handleSubmit: () => void;
}

function CCreateTask({ isLoading, setTask, task, handleSubmit, error }: Props) {
  return (
    <Container>
      <Heading>Create List</Heading>
      <Flex>
        <Input type={task} onChange={(e) => setTask(e.target.value)} />
        <Button disabled={isLoading} onClick={handleSubmit}>
          {isLoading ? "Creating..." : "Create"}
        </Button>
      </Flex>
      <p>{error}</p>
    </Container>
  );
}

export default CCreateTask;
