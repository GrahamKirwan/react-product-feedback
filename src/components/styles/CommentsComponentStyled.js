import styled from "styled-components";

export const CommentsComponentStyled = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  padding-bottom: 1px;

  h3 {
    color: #3a4374;
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 35px;
  }
`;
export const CommentStyled = styled.div`
  display: flex;
  border-bottom: 2px solid #f2f4ff;
  border-bottom: ${(props) => props.lastItem ? 'none' : '2px solid #f2f4ff'};;
  margin-bottom: ${(props) => props.reply ? '0px' : '35px'};
  padding-top: ${(props) => props.reply ? '20px' : '0px'};
  padding-bottom: ${(props) => props.reply ? '0px' : '20px'};
  position: relative;
  
`;

export const UserPhoto = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100px;
  margin-right: 30px;
`;

export const CommentContent = styled.div`
    width: 100%;
`;

export const CommentHead = styled.div`
  h3 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    color: #3a4374;
    margin: 0;
  }
`;

export const UsernameAndReply = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 15px;
    line-height: 22px;
    color: #647196;
    margin: 0;
    font-weight: 500;
  }

  button {
    border: none;
    outline: none;
    width: auto;
    height: auto;
    border-radius: 10px;
    background-color: #fff;
    color: #4661e6;
    text-align: center;
    font-family: "Jost", sans-serif;
    font-weight: 900;
    font-size: 14px;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
  }
`;

export const CommentText = styled.p`
  font-size: 15px;
  line-height: 22px;
  color: #647196;

  span {
      color: #ad1fea;
      font-weight: 700;
  }
`;

export const Reply = styled.div`
    display: flex;
    justify-content: space-between;
    display: ${(props) => props.active ? 'intial' : 'none'};

  textarea {
    border: none;
    outline: none;
    padding: 20px;
    border-radius: 10px;
    background-color: #f2f4ff;
    color: #647196;
    height: 70px;
    width: 70%;
    font-family: "Jost",sans-serif;
    font-size: 16px;
    align-items: flex-start;
    justify-content: flex-start;

    &:hover, &:focus {
        cursor: pointer;
        border: 1px solid #4661e6;
        height: 68px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: none;
    outline: none;
    padding: 0 10px;
    width: 158px;
    height: 44px;
    border-radius: 10px;
    background-color: #ad1fea;
    color: #f2f4ff;
    text-align: center;
    width: 117px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;

    &:hover {
        background-color: #c75af6;
        cursor: pointer;
    }
  }
`

export const GreyLine = styled.div`
    position: absolute;
    top: 65px;
    left: 17.5px;
    width: 1px;
    height: calc(100% - 175px);
    background-color: #f2f4ff;
`