import React from 'react';
import ReactDOM from 'react-dom/client';
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

let root;

export function bootstrap() {
  return Promise.resolve();
}

export function mount(props) {
  const domElement = props.domElementGetter();
  if (domElement) {
    root = ReactDOM.createRoot(domElement);
    root.render(<TestButton />);
  } else {
    console.error('Mount failed: domElement is not a valid DOM element.');
  }
}

export function unmount(props) {
  if (root) {
    root.unmount();
  } else {
    console.error('Unmount failed: root is not defined.');
  }
}
