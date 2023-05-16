import ListItem from "./ListItem";
import styled from "styled-components";

export default function List({ listData, search }) {
  return (
    <Ul>
      {listData.filter(({ name }) => name.includes(search)).map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </Ul>
  )
}

const Ul = styled.ul`
  list-style: none;
`;
