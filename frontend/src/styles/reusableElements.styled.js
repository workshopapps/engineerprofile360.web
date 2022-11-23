import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: ${({ theme }) => theme.spacing(6)}
    ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: ${({ theme }) => theme.spacing(6)}
      ${({ theme }) => theme.spacing(6)};
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    padding: ${({ theme }) => theme.spacing(6)}
      ${({ theme }) => theme.spacing(2)};
  }
`;

export const Title = styled.h1`
  color: ${({ $color }) => ($color ? $color : "initial")};
  font-size: ${({ $size }) => ($size ? $size : "48px")};
  font-weight: ${({ $weight }) => ($weight ? $weight : "900")};
  line-height: ${({ $lHeight }) => ($lHeight ? $lHeight : "52px")};
`;

export const Button = styled.button`
  min-width: 77px;
  min-height: 44px;
  max-width: 288px;
  height: ${(props) => (props.$size === "lg" ? "80px" : "auto")};
  width: ${(props) => (props.$size === "lg" ? "280px" : "auto")};
  font-size: ${(props) => (props.$size === "lg" ? "20px" : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  padding: ${({ theme }) => theme.spacing(1.2)}
    ${({ theme }) => theme.spacing(2.5)};
  cursor: pointer;

  ${(props) => {
    switch (props.$variant) {
      case "outlined":
        return css`
          border: 1px solid #106ebe;
          color: #323130;
          background: none;
        `;
      case "disabled":
        return css`
          color: #c8c6c4;
          background: none;
          border: none;
        `;
      default:
        return css`
          border: none;
          background: #106ebe;
          color: #ffffff;
          font-weight: 700;
        `;
    }
  }}

  color: ${({$color}) => ($color ? $color : null)};
`;

// THE STYLES HERE ARE GOING TO BE USED FOR LAYOUTS AND EVERY OTHER REUSABLE CONTAINERS

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
`;

export const Divider = styled.div`
  width: 85%;
  height: 2px;
  margin-top: 96px;
  position: absolute;
  right: 0;
  background: ${({ theme }) => theme.palette.divider};
`;
