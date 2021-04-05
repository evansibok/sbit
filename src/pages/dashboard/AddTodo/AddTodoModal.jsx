import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Input } from "reactstrap";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const todoState = {
  task_name: "",
  details: "",
  status: "",
  start_time: "",
  end_time: "",
};

const AddTodoModal = (props) => {
  const { buttonLabel, className, startDate, modal, toggle, setPModal } = props;

  const [todoForm, setTodoForm] = useState(todoState);
  const [endDate, setEndDate] = useState(new Date());

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setTodoForm({
      ...todoForm,
      [name]: value,
    });
  };
  console.log("todoForm", todoForm);

  const onDateChange = (date) => {
    setEndDate(date);
    setTodoForm({
      ...todoForm,
      end_time: endDate.toISOString()
    })
  };

  const addTodo = (evt) => {
    evt.preventDefault();

    todoForm["start_time"] = startDate.toISOString();

    console.log("add todo clicked");
    if ("status" === "successful") {
      setPModal(false);
    }
  };

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        external={externalCloseBtn}
      >
        <ModalHeader>
          Please fill out the details below to add a new task
        </ModalHeader>

        <ModalBody>
          {/* Task Name, start_time, end_time, details, status */}
          <form>
            <div className="form-group mt-4">
              <label>Task Name</label>
              <Input
                type="text"
                placeholder="Enter Text"
                className="form-control"
                name="task_name"
                value={todoForm.task_name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-4">
              <label>Task Description</label>
              <Input
                type="textarea"
                name="details"
                value={todoForm.details}
                onChange={handleChange}
                className="form-control bg-gray"
                id=""
                placeholder="Enter Task Description Here"
                style={{
                  height: "150px",
                  background: "#F7F7F7",
                }}
              />
            </div>

            <DateCon className="form-group mt-4">
              <div>
                <p>Start Date *</p> {/* Populated from the startDate */}
                <DatePicker selected={startDate} disabled />
              </div>
              <div>
                <p>End Date *</p> {/* Use React Calendar to add this */}
                <DatePicker
                  selected={endDate}
                  onChange={(date) => onDateChange(date)}
                />
              </div>
            </DateCon>

            <div className="text-center mt-4">
              <button className="btn btn-primary mt-4" onClick={addTodo}>
                {buttonLabel}
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddTodoModal;

const DateCon = styled.div`
  display: flex;
  justify-content: space-between;
`;
