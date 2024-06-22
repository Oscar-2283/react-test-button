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
  return new Promise((resolve, reject) => {
    try {
      const domElement = props.domElementGetter();
      if (domElement) {
        root = ReactDOM.createRoot(domElement);
        root.render(<TestButton />);
        resolve();
      } else {
        console.error('Mount failed: domElement is not a valid DOM element.');
        reject(new Error('Mount failed: domElement is not a valid DOM element.'));
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function unmount(props) {
  return new Promise((resolve, reject) => {
    try {
      if (root) {
        root.unmount();
        resolve();
      } else {
        console.error('Unmount failed: root is not defined.');
        reject(new Error('Unmount failed: root is not defined.'));
      }
    } catch (error) {
      reject(error);
    }
  });
}
