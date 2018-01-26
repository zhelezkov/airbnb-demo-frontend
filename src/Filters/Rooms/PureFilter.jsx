import React from 'react';
import Selector from './Selector';

import entireHomeIcon from './icons/entireHome.svg';
import privateRoomIcon from './icons/privateRoom.svg';
import sharedRoomIcon from './icons/sharedRoom.svg';

export default class Rooms extends React.Component {
  select = (ev) => {
    this.props.onSelect(ev.target.name);
  };

  render() {
    return (
      <React.Fragment>
        <Selector
          title="Entire home"
          description="Have a place to yourself"
          name="entireHome"
          checked={this.props.entireHome}
          icon={entireHomeIcon}
          onChange={this.select}
        />
        <Selector
          title="Private room"
          description="Have your own room and share some common spaces"
          name="privateRoom"
          checked={this.props.privateRoom}
          icon={privateRoomIcon}
          onChange={this.select}
        />
        <Selector
          title="Shared room"
          description="Stay in a shared space, like a common room"
          name="sharedRoom"
          checked={this.props.sharedRoom}
          icon={sharedRoomIcon}
          onChange={this.select}
        />
      </React.Fragment>
    );
  }
}
