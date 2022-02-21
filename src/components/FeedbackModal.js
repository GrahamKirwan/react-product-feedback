import {
  FeedbackModalStyled,
  FeedbackModalContainer,
  BackBtn,
  FormContainer,
  PlusDiv,
  ContentContainer,
  FieldContainer,
  DropdownInput,
  DropdownOptions,
  ButtonsContainer,
  CancelButton,
  AddButton
} from "./styles/FeedbackModalStyled";

import { ReactComponent as BackSvg } from "../assets/shared/icon-arrow-left.svg";
import { ReactComponent as PlusSvg } from "../assets/shared/icon-new-feedback.svg";
import { ReactComponent as DownSvg } from "../assets/shared/icon-arrow-down.svg";
import { ReactComponent as CheckSvg } from "../assets/shared/icon-check.svg";

import { useState } from "react";

export default function FeedbackModal(props) {
  const [category, setCategory] = useState("Feature");
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  function backButtonHandler() {
    props.backButtonHandler();
  }

  function dropdownHandler() {
    if (categoryDropdown) {
      setCategoryDropdown(false);
    } else {
      setCategoryDropdown(true);
    }
  }

  function featureClickHandler() {
    setCategory('Feature');
    setCategoryDropdown(false);
  }
  function uiClickHandler() {
    setCategory('UI');
    setCategoryDropdown(false);
  }
  function uxClickHandler() {
    setCategory('UX');
    setCategoryDropdown(false);
  }
  function enhancementClickHandler() {
    setCategory('Enhancement');
    setCategoryDropdown(false);
  }
  function bugClickHandler() {
    setCategory('Bug');
    setCategoryDropdown(false);
  }

  return (
    <FeedbackModalStyled modalActive={props.modalActive}>
      <FeedbackModalContainer>
        <BackBtn onClick={backButtonHandler}>
          <BackSvg />
          <p>Go Back</p>
        </BackBtn>
        <FormContainer>
          <PlusDiv>
            <PlusSvg />
          </PlusDiv>
          <ContentContainer>
            <h2>Create New Feedback</h2>
            <FieldContainer>
              <h3>Feedback Title</h3>
              <p>Add a short, descriptive headline</p>
              <input type="text"></input>
            </FieldContainer>
            <FieldContainer>
              <h3>Category</h3>
              <p>Choose a category for your feedback</p>
              <DropdownInput
                categoryDropdown={categoryDropdown}
                onClick={dropdownHandler}
              >
                <p>{category}</p>
                <DownSvg />
              </DropdownInput>
              <DropdownOptions
                category={category}
                categoryDropdown={categoryDropdown}
              >
                <ul>
                  <li onClick={featureClickHandler}>
                    {category == "Feature" ? (
                      <p style={{ color: "#ad1fea" }}>Feature</p>
                    ) : (
                      <p>Feature</p>
                    )}
                    {category == "Feature" && <CheckSvg />}
                  </li>
                  <li onClick={uiClickHandler}>
                    {category == "UI" ? (
                      <p style={{ color: "#ad1fea" }}>UI</p>
                    ) : (
                      <p>UI</p>
                    )}
                    {category == "UI" && <CheckSvg />}
                  </li>
                  <li onClick={uxClickHandler}>
                    {category == "UX" ? (
                      <p style={{ color: "#ad1fea" }}>UX</p>
                    ) : (
                      <p>UX</p>
                    )}
                    {category == "UX" && <CheckSvg />}
                  </li>
                  <li onClick={enhancementClickHandler}>
                    {category == "Enhancement" ? (
                      <p style={{ color: "#ad1fea" }}>Enhancement</p>
                    ) : (
                      <p>Enhancement</p>
                    )}
                    {category == "Enhancement" && <CheckSvg />}
                  </li>
                  <li onClick={bugClickHandler}>
                    {category == "Bug" ? (
                      <p style={{ color: "#ad1fea" }}>Bug</p>
                    ) : (
                      <p>Bug</p>
                    )}
                    {category == "Bug" && <CheckSvg />}
                  </li>
                </ul>
              </DropdownOptions>
            </FieldContainer>
            <FieldContainer>
              <h3>Feedback Detail</h3>
              <p>
                Include any specific comments on what should be improved, added,
                etc.
              </p>
              <textarea rows={4}></textarea>
            </FieldContainer>
            <ButtonsContainer>
                <CancelButton>Cancel</CancelButton>
                <AddButton>Add Feedback</AddButton>
            </ButtonsContainer>
          </ContentContainer>
        </FormContainer>
      </FeedbackModalContainer>
    </FeedbackModalStyled>
  );
}
