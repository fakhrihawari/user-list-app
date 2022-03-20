import React from "react";
import styled from "@emotion/styled";

const UserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  column-gap: 0.5em;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items:center;
  }
`;
const UserRow = styled.div`
  display:flex;
  align-items: center;
  justify-content:flex-start;
  font-size:1em;
  padding:0.5em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius:20px;
  margin-bottom:1em;
  min-width: 20vw;
  column-gap: 1.5em;
  @media (max-width: 925px) {
    width: 30vw;
  }
  @media (max-width: 768px) {
    width:50vw;
    
  }
`;
const Img = styled.img`
  border-radius:50%;
  width:2.5em
`;

const ListsUser = ({users,filter})=>(
    <UserContainer>
        {users.filter((user) => user.name.last.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).map(user =>
          <UserRow key={user.cell}>
            <Img src={user.picture.medium} />
            <p>{user.name.title} {user.name.last} </p>
          </UserRow>
        )}
      </UserContainer>
);

export default ListsUser;
