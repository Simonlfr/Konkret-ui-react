import React from "react";
import styled from "styled-components";
import { useColorPalette } from "../../providers/colorProvider";
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
  const colorPalette = useColorPalette();
  return (
    <Container>
      <IconHeartOutlined
        size={18}
        color={colorPalette.secondary.secondaryRef}
      />
      <IconHeartFilled size={18} color={colorPalette.secondary.secondaryRef} />
      <IconStarOutlined size={18} color={colorPalette.secondary.secondaryRef} />
      <IconStarFilled size={18} color={colorPalette.secondary.secondaryRef} />
      <IconClose size={18} color={colorPalette.secondary.secondaryRef} />
      <IconDone size={18} color={colorPalette.secondary.secondaryRef} />
      <IconUnavailable size={18} color={colorPalette.secondary.secondaryRef} />
      <IconPlus size={18} color={colorPalette.secondary.secondaryRef} />
      <IconMinus size={18} color={colorPalette.secondary.secondaryRef} />
      <IconChevronBack size={18} color={colorPalette.secondary.secondaryRef} />
      <IconChevronUp size={18} color={colorPalette.secondary.secondaryRef} />
      <IconChevronDown size={18} color={colorPalette.secondary.secondaryRef} />
      <IconChevronForward
        size={18}
        color={colorPalette.secondary.secondaryRef}
      />
      <IconArrowBack size={18} color={colorPalette.secondary.secondaryRef} />
      <IconArrowUp size={18} color={colorPalette.secondary.secondaryRef} />
      <IconArrowDown size={18} color={colorPalette.secondary.secondaryRef} />
      <IconArrowForward size={18} color={colorPalette.secondary.secondaryRef} />
      <IconFullscreen size={18} color={colorPalette.secondary.secondaryRef} />
      <IconCaretBack size={18} color={colorPalette.secondary.secondaryRef} />
      <IconCaretDown size={18} color={colorPalette.secondary.secondaryRef} />
      <IconCaretUp size={18} color={colorPalette.secondary.secondaryRef} />
      <IconCaretForward size={18} color={colorPalette.secondary.secondaryRef} />
      <IconCaretSelector
        size={18}
        color={colorPalette.secondary.secondaryRef}
      />
      <IconSortAlphaAsc size={18} color={colorPalette.secondary.secondaryRef} />
      <IconSortAlphaDesc
        size={18}
        color={colorPalette.secondary.secondaryRef}
      />
      <IconSortNumericAsc
        size={18}
        color={colorPalette.secondary.secondaryRef}
      />
      <IconSortNumericDesc
        size={18}
        color={colorPalette.secondary.secondaryRef}
      />
      <IconSortSizeAsc size={18} color={colorPalette.secondary.secondaryRef} />
      <IconSortSizeDesc size={18} color={colorPalette.secondary.secondaryRef} />
      <IconChart size={18} color={colorPalette.secondary.secondaryRef} />
      <IconFolderOpen size={18} color={colorPalette.secondary.secondaryRef} />
      <IconFolderClosed size={18} color={colorPalette.secondary.secondaryRef} />
      <IconFile size={18} color={colorPalette.secondary.secondaryRef} />
      <IconDocument size={18} color={colorPalette.secondary.secondaryRef} />
      <IconEdit size={18} color={colorPalette.secondary.secondaryRef} />
      <IconDelete size={18} color={colorPalette.secondary.secondaryRef} />
      <IconSynchronize size={18} color={colorPalette.secondary.secondaryRef} />
      <IconAttach size={18} color={colorPalette.secondary.secondaryRef} />
      <IconExternalLink size={18} color={colorPalette.secondary.secondaryRef} />
      <IconCopy size={18} color={colorPalette.secondary.secondaryRef} />
      <IconBookmark size={18} color={colorPalette.secondary.secondaryRef} />
      <IconMail size={18} color={colorPalette.secondary.secondaryRef} />
      <IconNoteficationOn
        size={18}
        color={colorPalette.secondary.secondaryRef}
      />
      <IconNoteficationOff
        size={18}
        color={colorPalette.secondary.secondaryRef}
      />
      <IconView size={18} color={colorPalette.secondary.secondaryRef} />
      <IconHidden size={18} color={colorPalette.secondary.secondaryRef} />
      <IconFilter size={18} color={colorPalette.secondary.secondaryRef} />
      <IconShare size={18} color={colorPalette.secondary.secondaryRef} />
      <IconSearch size={18} color={colorPalette.secondary.secondaryRef} />
      <IconSend size={18} color={colorPalette.secondary.secondaryRef} />
      <IconSave size={18} color={colorPalette.secondary.secondaryRef} />
      <IconDownload size={18} color={colorPalette.secondary.secondaryRef} />
      <IconLink size={18} color={colorPalette.secondary.secondaryRef} />
      <IconLinkBreak size={18} color={colorPalette.secondary.secondaryRef} />
      <IconLike size={18} color={colorPalette.secondary.secondaryRef} />
      <IconDislike size={18} color={colorPalette.secondary.secondaryRef} />
      <IconAccount size={18} color={colorPalette.secondary.secondaryRef} />
      <IconTeam size={18} color={colorPalette.secondary.secondaryRef} />
      <IconUsers size={18} color={colorPalette.secondary.secondaryRef} />
      <IconUser size={18} color={colorPalette.secondary.secondaryRef} />
      <IconPhone size={18} color={colorPalette.secondary.secondaryRef} />
      <IconComment size={18} color={colorPalette.secondary.secondaryRef} />
      <IconLocation size={18} color={colorPalette.secondary.secondaryRef} />
      <IconDivider size={18} color={colorPalette.secondary.secondaryRef} />
      <IconSettings size={18} color={colorPalette.secondary.secondaryRef} />
      <IconMap size={18} color={colorPalette.secondary.secondaryRef} />
      <IconHome size={18} color={colorPalette.secondary.secondaryRef} />
      <IconHomeSelected size={18} color={colorPalette.secondary.secondaryRef} />
      <IconPreference size={18} color={colorPalette.secondary.secondaryRef} />
      <IconCalendar size={18} color={colorPalette.secondary.secondaryRef} />
      <IconInbox size={18} color={colorPalette.secondary.secondaryRef} />
      <IconContext size={18} color={colorPalette.secondary.secondaryRef} />
      <IconSkipToStart size={18} color={colorPalette.secondary.secondaryRef} />
      <IconRewind size={18} color={colorPalette.secondary.secondaryRef} />
      <IconPlay size={18} color={colorPalette.secondary.secondaryRef} />
      <IconPause size={18} color={colorPalette.secondary.secondaryRef} />
      <IconFastForward size={18} color={colorPalette.secondary.secondaryRef} />
      <IconEnd size={18} color={colorPalette.secondary.secondaryRef} />
      <IconStop size={18} color={colorPalette.secondary.secondaryRef} />
      <IconFullStop size={18} color={colorPalette.secondary.secondaryRef} />
      <IconMute size={18} color={colorPalette.secondary.secondaryRef} />
      <IconVolume size={18} color={colorPalette.secondary.secondaryRef} />
      <IconNewTag size={18} color={colorPalette.secondary.secondaryRef} />
      <IconTag size={18} color={colorPalette.secondary.secondaryRef} />
      <IconTags size={18} color={colorPalette.secondary.secondaryRef} />
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.secondary.secondaryRef};
  border-radius: 12px;
  padding: 8px;
  width: 33%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
