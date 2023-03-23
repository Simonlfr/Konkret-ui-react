import React from "react";
import styled from "styled-components";
import { defaultDesignTokens } from "../../utils/defaultDesignTokens";
import {
  IconClose,
  IconDone,
  IconMinus,
  IconPlus,
  IconUnavailable,
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
  IconEdit,
  IconDelete,
  IconSynchronize,
  IconAttach,
  IconExternalLink,
  IconCopy,
  IconBookmark,
  IconMail,
  IconNoteficationOn,
  IconNoteficationOff,
  IconView,
  IconHidden,
  IconFilter,
  IconShare,
  IconSearch,
  IconSend,
  IconSave,
  IconDownload,
  IconLink,
  IconLinkBreak,
  IconLike,
  IconDislike,
  IconAccount,
  IconTeam,
  IconUsers,
  IconUser,
  IconPhone,
  IconComment,
  IconLocation,
  IconDivider,
  IconSettings,
  IconMap,
  IconHome,
  IconHomeSelected,
  IconPreference,
  IconCalendar,
  IconInbox,
  IconContext,
  IconSkipToStart,
  IconRewind,
  IconPlay,
  IconPause,
  IconFastForward,
  IconEnd,
  IconStop,
  IconFullStop,
  IconMute,
  IconVolume,
  IconNewTag,
  IconTag,
  IconTags,
} from "./icon";

export function IconExamples(): JSX.Element {
  return (
    <Container>
      <IconHeartOutlined size={18} />
      <IconHeartFilled size={18} />
      <IconStarOutlined size={18} />
      <IconStarFilled size={18} />
      <IconClose size={18} />
      <IconDone size={18} />
      <IconUnavailable size={18} />
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
      <IconFullscreen size={18} />
      <IconCaretBack size={18} />
      <IconCaretDown size={18} />
      <IconCaretUp size={18} />
      <IconCaretForward size={18} />
      <IconCaretSelector size={18} />
      <IconSortAlphaAsc size={18} />
      <IconSortAlphaDesc size={18} />
      <IconSortNumericAsc size={18} />
      <IconSortNumericDesc size={18} />
      <IconSortSizeAsc size={18} />
      <IconSortSizeDesc size={18} />
      <IconChart size={18} />
      <IconFolderOpen size={18} />
      <IconFolderClosed size={18} />
      <IconFile size={18} />
      <IconDocument size={18} />
      <IconEdit size={18} />
      <IconDelete size={18} />
      <IconSynchronize size={18} />
      <IconAttach size={18} />
      <IconExternalLink size={18} />
      <IconCopy size={18} />
      <IconBookmark size={18} />
      <IconMail size={18} />
      <IconNoteficationOn size={18} />
      <IconNoteficationOff size={18} />
      <IconView size={18} />
      <IconHidden size={18} />
      <IconFilter size={18} />
      <IconShare size={18} />
      <IconSearch size={18} />
      <IconSend size={18} />
      <IconSave size={18} />
      <IconDownload size={18} />
      <IconLink size={18} />
      <IconLinkBreak size={18} />
      <IconLike size={18} />
      <IconDislike size={18} />
      <IconAccount size={18} />
      <IconTeam size={18} />
      <IconUsers size={18} />
      <IconUser size={18} />
      <IconPhone size={18} />
      <IconComment size={18} />
      <IconLocation size={18} />
      <IconDivider size={18} />
      <IconSettings size={18} />
      <IconMap size={18} />
      <IconHome size={18} />
      <IconHomeSelected size={18} />
      <IconPreference size={18} />
      <IconCalendar size={18} />
      <IconInbox size={18} />
      <IconContext size={18} />
      <IconSkipToStart size={18} />
      <IconRewind size={18} />
      <IconPlay size={18} />
      <IconPause size={18} />
      <IconFastForward size={18} />
      <IconEnd size={18} />
      <IconStop size={18} />
      <IconFullStop size={18} />
      <IconMute size={18} />
      <IconVolume size={18} />
      <IconNewTag size={18} />
      <IconTag size={18} />
      <IconTags size={18} />
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
