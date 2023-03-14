import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  gap: 25px;
  list-style-type: none;
`;

export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.65s;

  &:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 0px 89px 1px rgba(209, 181, 71, 0.62);
    -moz-box-shadow: 0px 0px 89px 1px rgba(209, 181, 71, 0.62);
    box-shadow: 0px 0px 89px 1px rgba(209, 181, 71, 0.62);
  }

  > a {
    text-decoration: none;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 75;
  border-radius: 10px;
`;
export const ProductName = styled.p`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
