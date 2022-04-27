import React from "react";
import { ListContainer, ListInner, ListItem, Button } from "./style";
import useMarkers from "../../hooks/useMarkers";

const List = ({ items }) => {
  const { handleSelectedMarker } = useMarkers();
  return (
    <ListContainer>
      <ListInner>
        {items?.map((item, index) => (
          <ListItem key={index}>
            <Button onClick={() => handleSelectedMarker(item)}>
              Scooter {item.id}: Şarj: {item.charge}
            </Button>
            {/* <Button>X</Button> */}
          </ListItem>
        ))}
      </ListInner>
    </ListContainer>
  );
};

export default List;
