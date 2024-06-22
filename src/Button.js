import React from 'react';
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const TestButton = () => {
  return (
    <Button variant="contained" color="primary">
      <ExpandLessIcon />
    </Button>
  );
};

export default TestButton;

export function mount(props) {
  ReactDOM.render(<TestButton />, props.domElement);
}

export function unmount(props) {
  ReactDOM.unmountComponentAtNode(props.domElement);
}

export function bootstrap() {
  return Promise.resolve();
}
