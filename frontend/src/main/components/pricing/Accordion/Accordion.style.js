import styled from "styled-components";

export const AccordionWrapper = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
  overflow-x: hidden;
  flex-direction: column;
  align-items: center;
  margin-top: 180px;
`;

export const AccordionHeader = styled.h2`
  font-size: 32px;
  color: #323130;
  margin: ${(props) => {
    return props.margin;
  }};
  font-weight: 600;
  line-height: 40px;
  text-align: center;
`;

export const AccordionDiv = styled.div`
  max-width: 1300px;
  width: 100%;
  padding: 0 5px;
`;
export const QuestionDiv = styled.div`
  width: 100%;
  height: 72px;
  border-top: 1px solid #d1d1d1;
  display: flex;
  cursor: pointer;
  justify-content: space-between;

  align-items: center;
`;
export const Question = styled.h4`
  font-size: 16px;

  color: #323130;

  font-weight: 600;
  line-height: 22px;
`;

export const QuestionToggler = styled.img`
  transform: ${(props) => props.rotate};
`;
export const Answer = styled.p`
  font-size: 15px;

  color: #323130;

  font-weight: 400;
  line-height: 21px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 200px;
`;

export const AccordionButton = styled.button`
  width: 220px;
  height: 44px;
  color: white;
  background-color: #141ae9;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  transition: all 0.3s ease-in;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #fff;
    color: #141ae9;
    border: 1px solid #141ae9;
  }
`;
