import React from 'react';
import Rheostat from 'rheostat';
import styled, { injectGlobal } from 'styled-components';

/* eslint-disable no-unused-expressions */
injectGlobal`
  .rheostat-horizontal {
    height: 24px;
  }
  
  .rheostat-horizontal .rheostat-background {
    display: none;
  }
  
  .rheostat-horizontal .rheostat-progress {
    height: 6px;
    top: 2px;
  }
  
  .rheostat-horizontal .rheostat-handle {
    margin-left: -12px;
    top: -7px;
  }
`;

const Handle = styled.div`
  background: white none;
  border-radius: 100%;
  border: 1px solid #008489;
  cursor: ew-resize;
`;

const ProgressBar = styled.div`
  background: #008489;  
  height: 6px;
`;

export default () => (
  <Rheostat
    values={[0, 100]}
    handle={Handle}
    progressBar={ProgressBar}
  />
);
