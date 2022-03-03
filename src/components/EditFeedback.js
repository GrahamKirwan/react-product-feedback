import {
    EditFeedbackModalStyled,
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
  import { ReactComponent as PlusSvg } from "../assets/shared/icon-edit-feedback.svg";
  import { ReactComponent as DownSvg } from "../assets/shared/icon-arrow-down.svg";
  import { ReactComponent as CheckSvg } from "../assets/shared/icon-check.svg";
  
  import { useState, useRef, useEffect } from "react";
  
  export default function EditFeedback(props) {

    function camelCaseHelper(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let initCat = camelCaseHelper(props.suggestion.category);
    let initStatus = camelCaseHelper(props.suggestion.status);

    const [title, setTitle] = useState(props.suggestion.title);
    const [description, setDescription] = useState(props.suggestion.description);
        
    useEffect(() => {
        setTitle(props.suggestion.title);
        setCategory(camelCaseHelper(props.suggestion.category));
        setStatus(camelCaseHelper(props.suggestion.status));
        setDescription(props.suggestion.description);
    }, [props.suggestion.title])
  
    const [category, setCategory] = useState(initCat);
    const [categoryDropdown, setCategoryDropdown] = useState(false);

    const [status, setStatus] = useState(initStatus);
    const [updateStatusDropdown, setUpdateStatusDropdown] = useState(false);
  
    const titleRef = useRef();
    const feedbackRef = useRef();
  
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

    function statusDropdownHandler() {
        if (updateStatusDropdown) {
            setUpdateStatusDropdown(false);
          } else {
            setUpdateStatusDropdown(true);
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

    function suggestionClickHandler() {
        setStatus('Suggestion');
        setUpdateStatusDropdown(false);
    }
    function plannedClickHandler() {
        setStatus('Planned');
        setUpdateStatusDropdown(false);
    }
    function inprogressClickHandler() {
        setStatus('In-Progress');
        setUpdateStatusDropdown(false);
    }
    function liveClickHandler() {
        setStatus('Live');
        setUpdateStatusDropdown(false);
    }

    // Actions
    function addFeedbackButtonHandler() {
        let newFeedback = {
            title: titleRef.current.value,
            category: category,
            status: status,
            feedbackDetails: feedbackRef.current.value,
            id: props.suggestion.id
        }
  
        titleRef.current.value = '';
        feedbackRef.current.value = '';
        setCategory('Feature');
        setStatus('Suggestion');
  
        props.editFeedback(newFeedback);
        props.backButtonHandler();
  
    }

    function deleteButtonHandler() {
        props.deleteFeedback(props.suggestion.id);

        titleRef.current.value = '';
        feedbackRef.current.value = '';
        setCategory('Feature');
        setStatus('Suggestion');
        props.deleteBackButtonHandler();
    }

    return (
      <EditFeedbackModalStyled modalActive={props.modalActive}>
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
              <h2>Edit '{props.suggestion.title}'</h2>
              <FieldContainer>
                <h3>Feedback Title</h3>
                <p>Add a short, descriptive headline</p>
                <input type="text" ref={titleRef} value={title} onChange={(e) => {
                    setTitle(e.target.value);
                    }}></input>
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
                      {category === "Feature" ? (
                        <p style={{ color: "#ad1fea" }}>Feature</p>
                      ) : (
                        <p>Feature</p>
                      )}
                      {category === "Feature" && <CheckSvg />}
                    </li>
                    <li onClick={uiClickHandler}>
                      {category === "UI" ? (
                        <p style={{ color: "#ad1fea" }}>UI</p>
                      ) : (
                        <p>UI</p>
                      )}
                      {category === "UI" && <CheckSvg />}
                    </li>
                    <li onClick={uxClickHandler}>
                      {category === "UX" ? (
                        <p style={{ color: "#ad1fea" }}>UX</p>
                      ) : (
                        <p>UX</p>
                      )}
                      {category === "UX" && <CheckSvg />}
                    </li>
                    <li onClick={enhancementClickHandler}>
                      {category === "Enhancement" ? (
                        <p style={{ color: "#ad1fea" }}>Enhancement</p>
                      ) : (
                        <p>Enhancement</p>
                      )}
                      {category === "Enhancement" && <CheckSvg />}
                    </li>
                    <li onClick={bugClickHandler}>
                      {category === "Bug" ? (
                        <p style={{ color: "#ad1fea" }}>Bug</p>
                      ) : (
                        <p>Bug</p>
                      )}
                      {category === "Bug" && <CheckSvg />}
                    </li>
                  </ul>
                </DropdownOptions>
              </FieldContainer>
              <FieldContainer>
                <h3>Update Status</h3>
                <p>Change feedback state</p>
                <DropdownInput
                  categoryDropdown={updateStatusDropdown}
                  onClick={statusDropdownHandler}
                >
                  <p>{status}</p>
                  <DownSvg />
                </DropdownInput>
                <DropdownOptions
                  category={status}
                  categoryDropdown={updateStatusDropdown}
                >
                  <ul>
                    <li onClick={suggestionClickHandler}>
                      {status === "Suggestion" ? (
                        <p style={{ color: "#ad1fea" }}>Suggestion</p>
                      ) : (
                        <p>Suggestion</p>
                      )}
                      {status === "Suggestion" && <CheckSvg />}
                    </li>
                    <li onClick={plannedClickHandler}>
                      {status === "Planned" ? (
                        <p style={{ color: "#ad1fea" }}>Planned</p>
                      ) : (
                        <p>Planned</p>
                      )}
                      {status === "Planned" && <CheckSvg />}
                    </li>
                    <li onClick={inprogressClickHandler}>
                      {status === "In-Progress" ? (
                        <p style={{ color: "#ad1fea" }}>In-Progress</p>
                      ) : (
                        <p>In-Progress</p>
                      )}
                      {status === "In-Progress" && <CheckSvg />}
                    </li>
                    <li onClick={liveClickHandler}>
                      {status === "Live" ? (
                        <p style={{ color: "#ad1fea" }}>Live</p>
                      ) : (
                        <p>Live</p>
                      )}
                      {status === "Live" && <CheckSvg />}
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
                <textarea rows={4} ref={feedbackRef} value={description} onChange={(e) => {
                    setDescription(e.target.value);
                    }}></textarea>
              </FieldContainer>
              <ButtonsContainer>
                  <CancelButton style={{backgroundColor:'#d73737'}} onClick={deleteButtonHandler}>Delete</CancelButton>
                  <CancelButton onClick={backButtonHandler}>Cancel</CancelButton>
                  <AddButton onClick={addFeedbackButtonHandler}>Save Changes</AddButton>
              </ButtonsContainer>
            </ContentContainer>
          </FormContainer>
        </FeedbackModalContainer>
      </EditFeedbackModalStyled>
    );
  }
  