export interface FileList {
  /** 文件名 */
  name?: string;
  /** 文件地址 */
  url: string;
}

export interface Ref {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}
