import React, { useContext } from "react";
import styled from "@emotion/styled";
import UserContext from "../UserContext";

const UserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 1.5em;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items:center;
  }
`;
const UserRow = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  font-size:1rem;
  padding:0.5em 1.5em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius:20px;
  margin-bottom:1em;
  width: min(10vw,100%);
  column-gap: 1.5em;
  @media (max-width: 1440px) {
    width: min(20vw,100%);
  }
  @media (max-width: 925px) {
    width: min(30vw,100%);
  }
  @media (max-width: 768px) {
    width: min(50vw,100%);
    
  }
  @media (max-width:480px){
    width: min(70vw,100%);
  }
  @media (max-width:320px){
    width: min(80vw,100%);
  }


`;

const Img = styled.img`
  border-radius:50%;
  width:2.5em
`;

// version normal
// const ListsUser = ({users,filter})=>(
//     <UserContainer>
//         {users.filter((user) => user.name.last.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).map(user =>
//           <UserRow key={user.cell}>
//             <Img src={user.picture.medium} />
//             <p>{user.name.title} {user.name.last} </p>
//           </UserRow>
//         )}
//       </UserContainer>
// );

// version using context
const ListsUser = ()=>{
  const {users,filter} = useContext(UserContext)
  return(
  <UserContainer>
      {users.filter((user) => user.name.last.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).map(user =>
        <UserRow key={user.cell}>
          <Img src={user.picture.medium} />
          <p>{user.name.title} {user.name.last} </p>
        </UserRow>
      )}
    </UserContainer>
)
};

export default ListsUser;

