import styled from "styled-components";

export const SuggestionsBannerStyled = styled.div`
    height: 30px;
    background-color: #373f68;
    border-radius: 10px;
    color: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    
    h2 {
        margin: 0;
        font-size: 18px;
        line-height: 26px;
        font-weight: 700;
        margin-right: 25px;
    }

`

export const BannerLeft = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    svg {
        margin-right: 30px;
    }
`

export const SortBy = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
        font-size: 13px;
        line-height: 19px;
        color: #f2f4ff;
        margin-right: 15px;
        user-select: none;

    }

    h4 {
        font-size: 14px;
        line-height: 20px;
        font-weight: 700;
        color: #f2f4ff;
        margin-right: 7px;
        user-select: none;


    }

    svg {
        transform: ${(props) => props.visible ? 'rotate(180deg)' : 'rotate(0deg)'};
        transition: all .3s;
    }
`

export const SortByOptions = styled.div`
    width: 50%;
    border-radius: 10px;
    background-color: #fff;
    position: absolute;
    right: 0;
    margin-right: 30px;
    bottom: -225px;
    display: ${(props) => props.visible ? 'block' : 'none'};
    user-select: none;

    ul {
            padding: 0;

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
                padding-left: 16px;
                user-select: none;


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
                    user-select: none;

                    &:first-child {
                    margin-top: 0;
                    
                        
                }

                }

                svg {
                    margin-right: 15px;
                }
            }
        }

`