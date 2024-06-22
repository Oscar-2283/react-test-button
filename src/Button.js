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

// 保存根節點以便後續卸載
let root;

export function bootstrap() {
  return Promise.resolve();
}

export function mount(props) {
  // 創建根節點並渲染
  root = ReactDOM.createRoot(props.domElement);
  root.render(<TestButton />);
}

export function unmount(props) {
  // 卸載組件並清理
  root.unmount();
}
