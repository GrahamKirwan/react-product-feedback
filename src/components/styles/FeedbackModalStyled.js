import styled from "styled-components";

export const FeedbackModalStyled =  styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    background-color: #f2f4ff;
    display: ${(props) => props.modalActive ? 'initial' : 'none'};
    height: 150%;
`

export const FeedbackModalContainer = styled.div`
    width: 540px;
    margin: 0 auto;
    margin-top: 100px;
`

export const BackBtn = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 40px;

    svg {
        margin-right: 10px;
    }

    p {
        color: #647196;
        font-weight: 700;
        font-size: 14px;
    }

    &:hover > p{
        text-decoration: underline;
    }
`

export const FormContainer = styled.div`
    background-color: #fff;
    padding: 50px;
    position: relative;
    border-radius: 10px;
`

export const PlusDiv = styled.div`
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const ContentContainer = styled.div`
    
    h2 {
        margin: 0;
        margin-bottom: 30px;
        font-size: 24px;
        line-height: 25px;
        font-weight: 700;
        color: #3a4374;
    }
`

export const FieldContainer = styled.div`
    position: relative;
    margin-bottom: 30px;

    h3 {
        color: #3a4374;
        font-size: 14px;
        line-height: 20px;
        font-weight: 700;
        margin-bottom: 5px;
        padding-bottom: 0;
    }

    p {
        color: #647196;
        font-size: 15px;
        line-height: 22px;
        margin-bottom: 8px;
        margin-top: 0;
    }

    input {
        border: none;
        outline: none;
        border-radius: 10px;
        height: 48px;
        background-color: #f2f4ff;
        color: #647196;
        font-family: "Jost",sans-serif;
        font-size: 16px;
        width: 90%;
        padding-left: 5%;
        padding-right: 5%;

        &:hover {
            border: 1px solid #4661e6;
            height: 46px;
            cursor: pointer;
        }

        &:active {
            border: 1px solid #4661e6;
        }

        &:focus {
            border: 1px solid #4661e6;
        }
    }

    textarea {
        border: none;
        outline: none;
        border-radius: 10px;
        background-color: #f2f4ff;
        color: #647196;
        font-family: "Jost",sans-serif;
        font-size: 16px;
        width: 90%;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 10px;
    }
`

export const DropdownInput = styled.div`
        border: none;
        outline: none;
        border-radius: 10px;
        height: 48px;
        background-color: #f2f4ff;
        color: #647196;
        font-family: "Jost",sans-serif;
        font-size: 16px;
        width: 90%;
        padding-left: 5%;
        padding-right: 5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        &:hover {
            border: 1px solid #4661e6;
            height: 46px;
        }

        p {
            margin: 0;
            color: #3a4374;
        }

        svg {
            transform: ${(props) => props.categoryDropdown ? 'rotate(180deg)' : 'none'};
            transition: all .5s;
        }
`

export const DropdownOptions = styled.div`
    display: ${(props) => props.categoryDropdown ? 'initial' : 'none'};
    position: absolute;
    background-color: #fff;
    width: 100%;
    z-index: 100;

        ul {
            padding: 0;
            padding-left: 5%;
            padding-right: 4%;

            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #f2f4ff;
                color: #647196;
                height: 48px;
                transition: all .5s;
                cursor: pointer;
                user-select:none;

                &:hover > p{
                    color: #ad1fea;
                }

                &:last-child {
                    border-bottom: 0px;
                }

                p {
                    margin-bottom: 0;
                    font-size: 16px;
                    line-height: 23px;
                    font-weight: 400;

                }

                svg {
                    /* display: none; */
                }
            }
        }
`
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const CancelButton = styled.button`
    border: none;
    outline: none;
    width: 158px;
    height: 44px;
    border-radius: 10px;
    background-color: #3a4374;
    color: #f2f4ff;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    width: 93px;
    margin-right: 10px;
    cursor: pointer;

    &:hover {
        background-color: #656ea3;
    }
`

export const AddButton = styled.button`
    border: none;
    outline: none;
    width: 144px;
    height: 44px;
    border-radius: 10px;
    background-color: #ad1fea;
    color: #f2f4ff;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: #c75af6;
    }
`
