import React from "react";
import styled from "styled-components";
import { defaultDesignTokens } from "../../utils/defaultDesignTokens";
import {
  IconClose,
  IconDone,
  IconMinus,
  IconPlus,
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
  IconHeartFilled,
  IconHeartOutlined,
  IconFolderOpen,
  IconFolderClosed,
  IconFile,
  IconDocument,
  IconEdit,
  IconDelete,
  IconSynchronize,
  IconExternalLink,
  IconCopy,
  IconNoteficationOn,
  IconNoteficationOff,
  IconView,
  IconHidden,
  IconShare,
  IconSearch,
  IconSave,
  IconDownload,
  IconLink,
  IconLinkBreak,
  IconAccount,
  IconTeam,
  IconUsers,
  IconUser,
  IconComment,
  IconLocation,
  IconSettings,
  IconHome,
  IconContext,
} from "./icon";

export function IconExamples(): JSX.Element {
  return (
    <Container>
      <IconHeartOutlined size={18} />
      <IconHeartFilled size={18} />
      <IconClose size={18} />
      <IconDone size={18} />
      <IconPlus size={18} />
      <IconMinus size={18} />
      <IconChevronBack size={18} />
      <IconChevronUp size={18} />
      <IconChevronDown size={18} />
      <IconChevronForward size={18} />
      <IconArrowBack size={18} />
      <IconArrowUp size={18} />
      <IconArrowDown size={18} />
      <IconArrowForward size={18} />
      <IconCaretBack size={18} />
      <IconCaretDown size={18} />
      <IconCaretUp size={18} />
      <IconCaretForward size={18} />
      <IconCaretSelector size={18} />
      <IconFolderOpen size={18} />
      <IconFolderClosed size={18} />
      <IconFile size={18} />
      <IconDocument size={18} />
      <IconEdit size={18} />
      <IconDelete size={18} />
      <IconSynchronize size={18} />
      <IconExternalLink size={18} />
      <IconCopy size={18} />
      <IconNoteficationOn size={18} />
      <IconNoteficationOff size={18} />
      <IconView size={18} />
      <IconHidden size={18} />
      <IconShare size={18} />
      <IconSearch size={18} />
      <IconSave size={18} />
      <IconDownload size={18} />
      <IconLink size={18} />
      <IconLinkBreak size={18} />
      <IconAccount size={18} />
      <IconTeam size={18} />
      <IconUsers size={18} />
      <IconUser size={18} />
      <IconComment size={18} />
      <IconLocation size={18} />
      <IconSettings size={18} />
      <IconHome size={18} />
      <IconContext size={18} />
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid
    ${({ theme }) =>
      theme && theme.palette
        ? theme.palette.secondary.secondaryRef
        : defaultDesignTokens.palette.secondary.secondaryRef};
  border-radius: 12px;
  padding: 8px;
  width: 33%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
