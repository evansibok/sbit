import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TASKS from "../../utils/tasks.json";
import PromptModal from "./AddTodo/PromptModal";
import AddTodoModal from "./AddTodo/AddTodoModal";
import TaskListModal from './TaskList/TaskListModal';

// import TodosPage from './TaskList/TodosPage';

const DHomePage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [pModal, setPModal] = useState(false);
  const [addTodosModal, setAddTodosModal] = useState(false);
  const [taskListModal, setTaskListModal] = useState(true);

  const togglePModal = () => setPModal(!pModal);
  const toggleAddTodosModal = () => setAddTodosModal(!addTodosModal);
  const toggleTaskListModal = () => setTaskListModal(!taskListModal);

  // const openModal = () => {
  //   const overlay = document.querySelector(".th-modal-overlay");
  //   overlay.classList.add("show");
  // };

  const onDateChange = (changedDate) => {
    setStartDate(changedDate);

    const filteredTasks = TASKS.filter(
      (task) =>
        task.start_time.substring(0, 10) ===
          changedDate.toISOString().substring(0, 10) ||
        task.end_time.substring(0, 10) ===
          changedDate.toISOString().substring(0, 10)
    );
    console.log("filteredTasks", filteredTasks);

    if (filteredTasks.length === 0) {
      setPModal(true);
    } else {
      setTaskListModal(true)
      console.log("filtered task is not empty");
    }

    // From Calendar (new Date())
    // convert .toISOString() before sending to the backend
  };

  // from the backend (ISO String)
  // console.log("first start time", TASKS[0].start_time);
  // convert to new Date()
  // let start_time = new Date(TASKS[0].start_time);
  // then to Readable date (Apr 03 2021) To display in the task list
  // start_time.toDateString(); --> ("Fri Apr 16 2021");

  return (
    <Wrapper className="">
      <p className="my-3 text-primary">Hello, Benjamin</p>
      <p className="my-3 text-dark font-weight-bold d-flex align-items-center justify-content-center">
        Select a Date from the Calendar to view or add a task
      </p>

      <div className="pick-date">
        <DatePicker
          selected={startDate}
          onChange={(date) => onDateChange(date)}
          inline
        />
      </div>

      <PromptModal
        className="prompt-modal"
        modal={pModal}
        toggle={togglePModal}
        setAddTodosModal={setAddTodosModal}
      />

      <AddTodoModal
        buttonLabel="Add Todo"
        startDate={startDate}
        toggle={toggleAddTodosModal}
        modal={addTodosModal}
        setPModal={setPModal}
      />

      <TaskListModal
        className="task-list-modal"
        startDate={startDate}
        toggle={toggleTaskListModal}
        modal={taskListModal}
      />

      {/* <TodosPage /> */}


      {/* <img
        src="/images/plus-icon.svg"
        onClick={openModal}
        className="plus-icon openModal c-hand"
        alt=""
        height="70"
        width="70"
      /> */}
    </Wrapper>
  );
};

export default DHomePage;

const Wrapper = styled.div`
  position: relative;
  .plus-icon {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }
  .home-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-size: 2rem;
    }
  }

  .pick-date {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* SUPPOSE TO INCREASE THE WIDTH OF THE MODAL BUT NOT WORKING YET */
  /* &.task-list-modal .modal-content {
    width: 800px;
  } */

`;
