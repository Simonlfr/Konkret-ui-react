import React from "react";
import styled from "styled-components";
import {
  IconActionClose,
  IconActionDone,
  IconActionMinus,
  IconActionPlus,
  IconActionUnavailable,
  IconArrowBack,
  IconArrowDown,
  IconArrowForward,
  IconArrowUp,
  IconCaretBack,
  IconCaretDown,
  IconCaretForward,
  IconCaretSelector,
  IconCaretUp,
  IconChevronBack,
  IconChevronDown,
  IconChevronForward,
  IconChevronUp,
  IconFullscreen,
  IconHeartFilled,
  IconHeartOutlined,
  IconSortSizeAsc,
  IconSortSizeDesc,
  IconSortAlphaAsc,
  IconSortAlphaDesc,
  IconSortNumericAsc,
  IconStarFilled,
  IconStarOutlined,
  IconSortNumericDesc,
  IconChart,
  IconFolderOpen,
  IconFolderClosed,
  IconFile,
  IconDocument,
} from "./icon";

export function IconExamples(): JSX.Element {
  return (
    <Container>
      <IconHeartOutlined />
      <IconHeartFilled />
      <IconStarOutlined />
      <IconStarFilled />
      <IconActionClose />
      <IconActionDone />
      <IconActionUnavailable />
      <IconActionPlus />
      <IconActionMinus />
      <IconChevronBack />
      <IconChevronUp />
      <IconChevronDown />
      <IconChevronForward />
      <IconArrowBack />
      <IconArrowUp />
      <IconArrowDown />
      <IconArrowForward />
      <IconFullscreen />
      <IconCaretBack />
      <IconCaretDown />
      <IconCaretUp />
      <IconCaretForward />
      <IconCaretSelector />
      <IconSortAlphaAsc />
      <IconSortAlphaDesc />
      <IconSortNumericAsc />
      <IconSortNumericDesc />
      <IconSortSizeAsc />
      <IconSortSizeDesc />
      <IconChart />
      <IconFolderOpen />
      <IconFolderClosed />
      <IconFile />
      <IconDocument />
    </Container>
  );
}

const Container = styled.div`
  width: 33%;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
