import React from "react";
import styled from "@emotion/styled";

const InputContainer= styled.div`
  margin:2rem 2rem;
  text-align:center;
`;
const SearchInput = styled.input`
  width:50%;
  height: 2em;
  border-radius:15px;
  padding:1em;
  border: 2px solid #c9c9c9;
`;

const UserFilter = ({filter, setFilter})=>(
    <InputContainer>
        <SearchInput value={filter} onChange={(evt) => setFilter(evt.target.value)} />
      </InputContainer>
)

export default UserFilter;