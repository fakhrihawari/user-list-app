import React, { useContext } from "react";
import styled from "@emotion/styled";
import UserContext from "../UserContext";

const InputContainer = styled.div`
  margin: 2rem 2rem;
  text-align: center;
`;
const SearchInput = styled.input`
  width: 50%;
  height: 2em;
  border-radius: 15px;
  padding: 1em;
  border: 2px solid #c9c9c9;
`;

// version normal
// const UserFilter = ({filter, setFilter})=>(
//     <InputContainer>
//         <SearchInput value={filter} onChange={(evt) => setFilter(evt.target.value)} />
//       </InputContainer>
// )

// version using context
const UserFilter = () => {
  const { filter, setFilter } = useContext(UserContext);
  return (
    <InputContainer>
      <SearchInput
        value={filter}
        onChange={(evt) => setFilter(evt.target.value)}
      />
    </InputContainer>
  );
};

export default UserFilter;