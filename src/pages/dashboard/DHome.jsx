import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DHomePage = () => {
  const [startDate, setStartDate] = useState(new Date());

  const openModal = () => {
    const overlay = document.querySelector(".th-modal-overlay");
    overlay.classList.add("show");
  };

  const onDateChange = (date) => {
    setStartDate(date);
    console.log('date', date)
  }


  return (
    <Wrapper className="">
      <p className="my-3 text-primary">Hello, Benjamin</p>

      <div className="pick-date">
        <DatePicker
          selected={startDate}
          onChange={(date) => onDateChange(date)}
          inline
          className="calendar"
        />
      </div>

      <img
        src="/images/plus-icon.svg"
        onClick={openModal}
        className="plus-icon openModal c-hand"
        alt=""
        height="70"
        width="70"
      />
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
`;
