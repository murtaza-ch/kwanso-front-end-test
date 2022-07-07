import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ITask } from "../../interfaces/task";
import Task from "../Task";

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

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function CListTasks(data: ITask) {
  return (
    <Container>
      <Heading>Tasks List</Heading>
      <Flex>
        <CLink to="/create-task">Create Task</CLink>
        <CLink to="/bulk-delete">Delete Task</CLink>
      </Flex>
      <TaskConteiner>
        {data?.tasks?.map(({ name, _id }) => (
          <Task key={_id} name={name} />
        ))}
      </TaskConteiner>
    </Container>
  );
}

export default CListTasks;
