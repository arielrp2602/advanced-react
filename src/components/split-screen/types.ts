export type PanelProps = {
  flex: string | number;
};

export type SplitScreenProps = {
  children: React.ReactNode[];
  leftWidth?: string | number;
  rightWidth?: string | number;
};
