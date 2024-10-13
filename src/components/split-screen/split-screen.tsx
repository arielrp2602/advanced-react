import styled from "styled-components";
import { PanelProps, SplitScreenProps } from "./types";

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div<PanelProps>`
  flex: ${(p) => p.flex};
`;

export function SplitScreen({
  children,
  leftWidth = 1,
  rightWidth = 1,
}: SplitScreenProps): React.ReactElement {
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
}
