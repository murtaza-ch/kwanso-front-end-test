import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ITask } from "../../interfaces/task";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  justify-content: center;
  align-items: center;
`;

const TaskConteiner = styled.div`
  display: grid;
  padding: 10px;
  width: 100%;
  grid-template-columns: auto auto auto;
  gap: 1.5rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
`;

const CLink = styled(Link)`
  background-color: ${(props) => props.theme.colors.main};
  border-radius: ${(props) => props.theme.borderRadius};
  color: white;
  padding: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
`;

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

const Input = styled.input`
  border-color: ${(props) => props.theme.colors.main};
  border-radius: ${(props) => props.theme.borderRadius};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.gray[400]};
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  padding: 0.8rem;
  font-size: 2rem;
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

interface Props extends ITask {
  ids: string[] | [];
  handleId: (id: string) => void;
  onDeleteTasks: () => void;
  isLoading: boolean;
  error: string | undefined;
}

function CDeleteTask({
  tasks,
  handleId,
  ids,
  error,
  isLoading,
  onDeleteTasks,
}: Props) {
  return (
    <Container>
      <Heading>Delete Tasks</Heading>
      <Flex>
        <CLink to="/list-tasks">Go To List</CLink>
        <Button disabled={isLoading} onClick={onDeleteTasks}>
          {" "}
          {isLoading ? "Deleting..." : "Delete Selected"} ({ids.length})
        </Button>
      </Flex>
      <p>{error}</p>
      <TaskConteiner>
        {tasks?.map(({ name, _id }) => (
          <Card key={_id}>
            <p>Title</p>
            <Title>{name}</Title>
            <Input type="checkbox" onClick={() => handleId(_id)} />
            <span>Delete</span>
          </Card>
        ))}
      </TaskConteiner>
    </Container>
  );
}

export default CDeleteTask;
