import React from 'react';
import Selector from './Selector';

import entireHomeIcon from './icons/entireHome.svg';
import privateRoomIcon from './icons/privateRoom.svg';
import sharedRoomIcon from './icons/sharedRoom.svg';

export default ({ values, onCheck }) => {
  const { entireHome, privateRoom, sharedRoom } = values;

  return (
    <React.Fragment>
      <Selector
        title="Entire home"
        description="Have a place to yourself"
        name="entireHome"
        checked={entireHome}
        icon={entireHomeIcon}
        onChange={onCheck}
      />
      <Selector
        title="Private room"
        description="Have your own room and share some common spaces"
        name="privateRoom"
        checked={privateRoom}
        icon={privateRoomIcon}
        onChange={onCheck}
      />
      <Selector
        title="Shared room"
        description="Stay in a shared space, like a common room"
        name="sharedRoom"
        checked={sharedRoom}
        icon={sharedRoomIcon}
        onChange={onCheck}
      />
    </React.Fragment>
  );
};
