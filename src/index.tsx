import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import PreviewComponent from './components/preview/preview';
import { FileList, Ref } from './interface';

let div: HTMLDivElement | null = null;

interface PreviewProps {
  show: boolean;
  fileList: FileList[];
}

const Preview: FC<PreviewProps> = props => {
  if (props.show && !div) {
    if (!div) {
      div = document.createElement('div');
      document.body.appendChild(div);
    }
    return ReactDOM.createPortal(<PreviewComponent {...props} />, div);
  }
  return null;
};

export default Preview;

const previewRef = React.createRef<Ref>();

interface UsePreviewInstance {
  (fileList: FileList[]): void;

  /** 重新打开预览组件 */
  show: () => void;

  /** 隐藏/关闭预览组件 */
  close: () => void;

  /** 销毁预览组件 */
  destroy: () => void;
}

const usePreview: UsePreviewInstance = fileList => {
  if (!div) {
    div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<PreviewComponent fileList={fileList} ref={previewRef} />, div);
  }

  previewRef.current?.setVisible(true);

  return usePreview;
};

usePreview.show = () => {
  previewRef.current?.setVisible(true);
};

usePreview.close = () => {
  previewRef.current?.setVisible(false);
};

usePreview.destroy = () => {
  if (div) {
    document.body.removeChild(div);
  }
};

export { usePreview };
