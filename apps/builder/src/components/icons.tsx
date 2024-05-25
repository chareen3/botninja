import { IconProps, Icon, useColorModeValue } from '@chakra-ui/react'

export const featherIconsBaseProps: IconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// 99% of these icons are from Feather icons (https://feathericons.com/)

export const SettingsIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </Icon>
)

export const LogOutIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </Icon>
)

export const ChevronLeftIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </Icon>
)

export const ChevronRightIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </Icon>
)

export const ChevronDownIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </Icon>
)

export const PlusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </Icon>
)

export const FolderIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 24 24"
    {...featherIconsBaseProps}
    fill="currentColor"
    {...props}
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </Icon>
)

export const MoreVerticalIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </Icon>
)

export const MoreHorizontalIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </Icon>
)

export const GlobeIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </Icon>
)

export const ToolIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </Icon>
)

export const FolderPlusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    <line x1="12" y1="11" x2="12" y2="17"></line>
    <line x1="9" y1="14" x2="15" y2="14"></line>
  </Icon>
)

export const TextIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="4 7 4 4 20 4 20 7"></polyline>
    <line x1="9" y1="20" x2="15" y2="20"></line>
    <line x1="12" y1="4" x2="12" y2="20"></line>
  </Icon>
)

export const ImageIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </Icon>
)

export const CalendarIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </Icon>
)

export const FlagIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
    <line x1="4" y1="22" x2="4" y2="15"></line>
  </Icon>
)

export const BoldIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
  </Icon>
)

export const ItalicIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="19" y1="4" x2="10" y2="4"></line>
    <line x1="14" y1="20" x2="5" y2="20"></line>
    <line x1="15" y1="4" x2="9" y2="20"></line>
  </Icon>
)

export const UnderlineIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
    <line x1="4" y1="21" x2="20" y2="21"></line>
  </Icon>
)

export const LinkIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </Icon>
)

export const SaveIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
    <polyline points="17 21 17 13 7 13 7 21"></polyline>
    <polyline points="7 3 7 8 15 8"></polyline>
  </Icon>
)

export const CheckIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </Icon>
)

export const ChatIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Icon>
)

export const TrashIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </Icon>
)

export const LayoutIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </Icon>
)

export const CodeIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </Icon>
)

export const EditIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </Icon>
)

export const UploadIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="16 16 12 12 8 16"></polyline>
    <line x1="12" y1="12" x2="12" y2="21"></line>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
    <polyline points="16 16 12 12 8 16"></polyline>
  </Icon>
)

export const DownloadIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </Icon>
)

export const NumberIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="4" y1="9" x2="20" y2="9"></line>
    <line x1="4" y1="15" x2="20" y2="15"></line>
    <line x1="10" y1="3" x2="8" y2="21"></line>
    <line x1="16" y1="3" x2="14" y2="21"></line>
  </Icon>
)

export const EmailIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
  </Icon>
)

export const PhoneIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </Icon>
)

export const CheckSquareIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="9 11 12 14 22 4"></polyline>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </Icon>
)

export const FilterIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </Icon>
)

export const UserIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </Icon>
)

export const ExpandIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </Icon>
)

export const ExternalLinkIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </Icon>
)

export const FilmIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
    <line x1="7" y1="2" x2="7" y2="22"></line>
    <line x1="17" y1="2" x2="17" y2="22"></line>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <line x1="2" y1="7" x2="7" y2="7"></line>
    <line x1="2" y1="17" x2="7" y2="17"></line>
    <line x1="17" y1="17" x2="22" y2="17"></line>
    <line x1="17" y1="7" x2="22" y2="7"></line>
  </Icon>
)

export const WebhookIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </Icon>
)

export const GripIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="9" r="1"></circle>
    <circle cx="19" cy="9" r="1"></circle>
    <circle cx="5" cy="9" r="1"></circle>
    <circle cx="12" cy="15" r="1"></circle>
    <circle cx="19" cy="15" r="1"></circle>
    <circle cx="5" cy="15" r="1"></circle>
  </Icon>
)

export const LockedIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </Icon>
)

export const UnlockedIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
  </Icon>
)

export const UndoIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M3 7v6h6"></path>
    <path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"></path>
  </Icon>
)

export const RedoIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M21 7v6h-6"></path>
    <path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7"></path>
  </Icon>
)

export const FileIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
    <polyline points="13 2 13 9 20 9"></polyline>
  </Icon>
)

export const EyeIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </Icon>
)

export const SendEmailIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </Icon>
)

export const GithubIcon = (props: IconProps) => (
  <Icon viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      fill={useColorModeValue('#24292f', 'white')}
    />
  </Icon>
)

export const UsersIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </Icon>
)

export const AlignLeftTextIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="17" y1="10" x2="3" y2="10"></line>
    <line x1="21" y1="6" x2="3" y2="6"></line>
    <line x1="21" y1="14" x2="3" y2="14"></line>
    <line x1="17" y1="18" x2="3" y2="18"></line>
  </Icon>
)

export const BoxIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </Icon>
)

export const HelpCircleIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </Icon>
)

export const CopyIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </Icon>
)

export const TemplateIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </Icon>
)

export const MinusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </Icon>
)

export const LaptopIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path
      d="M3.2 14.2222V4C3.2 2.89543 4.09543 2 5.2 2H18.8C19.9046 2 20.8 2.89543 20.8 4V14.2222M3.2 14.2222H20.8M3.2 14.2222L1.71969 19.4556C1.35863 20.7321 2.31762 22 3.64418 22H20.3558C21.6824 22 22.6414 20.7321 22.2803 19.4556L20.8 14.2222"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M11 19L13 19"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export const MouseIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path
      d="M12 2V2C16.4183 2 20 5.58172 20 10V14C20 18.4183 16.4183 22 12 22V22C7.58172 22 4 18.4183 4 14V10C4 5.58172 7.58172 2 12 2V2ZM12 2V9"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </Icon>
)

export const HardDriveIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="22" y1="12" x2="2" y2="12"></line>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
    <line x1="6" y1="16" x2="6.01" y2="16"></line>
    <line x1="10" y1="16" x2="10.01" y2="16"></line>
  </Icon>
)
export const BotninjaIcon = (props: IconProps) => (
  <Icon viewBox="0 0 164 164" {...featherIconsBaseProps} {...props}>
    <path
      fill="currentColor"
      d="M80.095 18C45.801 18 18 45.801 18 80.095c0 15.8 5.902 30.222 15.62 41.182 0 0 37.446-32.378 35.261-46.88-2.205-14.64-36.714-28.843-36.714-28.843C53.55 47.234 77.8 65.704 77.8 65.704c-2.133-2.956-3.507-6.591-3.811-10.558-.055.024-.109.05-.162.075-.054.027-.106.057-.16.086l-.115.068-.004.003.02-.01-.013.009-.024.015c-.062.04-.132.083-.186.12l-.124.099c-.094.078-.191.16-.287.248-.19.176-.38.371-.576.577-.84.884-1.672 1.708-2.809 2.202-1.1.475-2.432-.928-2.965-1.751-.341-.527-.634-1.13-.785-1.743l.087.092c.028.03.063.068.111.108.047.038.097.091.164.138.033.025.069.05.104.079.039.026.08.05.123.077.084.06.187.104.294.163.221.104.491.195.8.254.309.055.657.075 1.02.031.092-.004.178-.033.272-.046.053-.008.077-.017.116-.025l.111-.022.19-.075.096-.039.024-.011.011-.003.006-.003-.041.023.035-.017.144-.063.149-.077c.404-.217.843-.541 1.344-.905.253-.181.52-.37.812-.55.146-.09.298-.175.457-.26l.264-.132c.078-.034.142-.057.214-.087l.04-.016c.05-.025.018-.008.031-.014l.009-.004.064-.023.13-.047c.087-.029.172-.054.258-.08.173-.046.346-.087.515-.116.059-.011.115-.018.171-.028 0-.266.01-.525.022-.784a3.302 3.302 0 00-.481-.275c-.93-.448-2.088-.301-3.32-.023-1.254.278-2.542.61-3.891.81a14.31 14.31 0 01-2.066.16c-.177-.007-.353-.01-.527-.015l-.53-.04c-.175-.023-.35-.043-.526-.069l-.394-.072-.064-.015-.033-.005-.048-.012-.015-.004-.334-.078-.057-.016-.067-.02-.27-.082c-.09-.028-.18-.055-.26-.085a9.377 9.377 0 01-.953-.39 11.26 11.26 0 01-1.696-.997 13.07 13.07 0 01-1.727-1.477 10.25 10.25 0 01-.298-.31c-.096-.103-.193-.206-.283-.311l-.137-.156-.067-.077-.071-.087a19.723 19.723 0 01-.487-.605c-.154-.205-.304-.404-.443-.6-.278-.395-.575-.75-.754-1.132-.925-1.97 1.284-5.028 1.284-5.028l.184.431c.12.278.294.685.52 1.193.226.507.502 1.115.844 1.778a19.712 19.712 0 001.06 1.827c.06.091.136.197.205.295l.025.037.02.029-.005-.006.048.066.099.135c.065.09.135.179.205.267.069.092.142.181.216.269a10.693 10.693 0 001.249 1.274c.372.317.776.61 1.21.863a6.8 6.8 0 00.839.42l.158.066.041.018.053.017.109.036.218.073c.114.031.23.065.345.097l.39.087.403.067.413.046c.56.05 1.148.05 1.753.014 1.211-.07 2.484-.28 3.803-.458.668-.087 1.377-.162 2.12-.119a5.605 5.605 0 011.42.267l.253.097c.164.07.323.149.477.234 1.441-9.339 7.003-13.14 16.277-13.14 7.475 0 18.077 5.943 18.385 15.257-7.339-4.717-13.741-.086-13.741 1.722 0 2.032 4.254 2.014 12.176 4.868-2.472 7.698-4.955 9.8-15.107 13.477-.072.027-10.916 16.175-9.074 21.747 1.537 4.654 16.604 5.282 16.753 10.183.456 15.151-49.828 34.562-49.828 34.562l7.498-1.836a61.935 61.935 0 0022.65 4.261c34.296 0 62.097-27.801 62.097-62.097C142.192 45.801 114.391 18 80.095 18z"
    />
    <path
      fill="currentColor"
      d="M84.207 107.285c-1.433-4.322-10.124-3.943-16.694-.846-22.066 10.399-49.497 35.479-49.497 35.479l27.397-15.571c.454.329 1.697 1.281 2.159 1.598a61.973 61.973 0 008.177 4.725s31.24-16.995 28.458-25.385z"
    />
  </Icon>
)

export const BotninjaFull = (props: IconProps) => (
  <Icon viewBox="0 0 174 174" {...featherIconsBaseProps} {...props}>
    <path
      fill="currentColor"
      d="M57.045 82.19c2.12 0 3.62.616 4.495 1.848.88 1.233 1.32 3.326 1.32 6.279 0 2.94-.591 5.073-1.77 6.402-1.174 1.324-3.079 1.986-5.713 1.986-1.522 0-2.94-.076-4.248-.225-1.305-.148-2.461-.373-3.465-.674V77.013h4.82v6.33a11.495 11.495 0 012.263-.849 9.13 9.13 0 012.298-.305zm.993 8.127c0-1.56-.163-2.583-.485-3.067-.32-.482-1.066-.725-2.24-.725-.494 0-.983.043-1.465.13a8.867 8.867 0 00-1.363.356v7.04c.319.063.681.112 1.087.144.41.03.894.044 1.45.044 1.285 0 2.11-.24 2.473-.718.362-.482.543-1.551.543-3.204zM78.898 90.447c0 2.978-.6 5.1-1.798 6.366-1.2 1.261-3.215 1.892-6.046 1.892-2.828 0-4.842-.63-6.04-1.892-1.2-1.265-1.798-3.388-1.798-6.366 0-2.976.598-5.097 1.798-6.358 1.198-1.265 3.212-1.9 6.04-1.9 2.83 0 4.846.635 6.046 1.9 1.198 1.261 1.798 3.382 1.798 6.358zm-10.86-.065c0 1.63.175 2.68.529 3.154.351.47 1.182.703 2.487.703 1.308 0 2.14-.234 2.493-.703.352-.473.53-1.525.53-3.154 0-1.628-.178-2.677-.53-3.147-.353-.473-1.185-.71-2.493-.71-1.305 0-2.136.237-2.487.71-.354.47-.53 1.52-.53 3.147zM80.855 86.525H78.99v-4.017h2.03l.61-3.697h4.045v3.697h4.502v4.017h-4.502v6.17c0 .6.154 1.004.464 1.21.314.204.932.305 1.856.305.319 0 .712-.025 1.182-.08.473-.052.872-.112 1.196-.181v4.118c-.344.15-.875.294-1.595.428-.716.14-1.354.21-1.914.21-2.142 0-3.68-.453-4.611-1.363-.933-.908-1.4-2.392-1.4-4.451v-6.366zM95.644 98.386h-4.82V82.509h4.175l.196 1.674h.094c.685-.71 1.43-1.22 2.233-1.53.801-.308 1.771-.464 2.908-.464 1.798 0 3.157.44 4.081 1.32.923.875 1.385 2.171 1.385 3.886v10.991h-4.821V88.04c0-.493-.2-.866-.595-1.124-.397-.26-.982-.391-1.754-.391-.58 0-1.138.065-1.675.196-.533.127-1 .308-1.407.543v11.122zM112.286 80.776h-5.075v-3.763h5.075v3.763zm-.123 17.61h-4.821V82.509h4.821v15.877zM118.494 98.386h-4.822V82.509h4.176l.196 1.674h.094c.686-.71 1.431-1.22 2.233-1.53.802-.308 1.771-.464 2.908-.464 1.798 0 3.157.44 4.081 1.32.923.875 1.385 2.171 1.385 3.886v10.991h-4.821V88.04c0-.493-.199-.866-.595-1.124-.396-.26-.982-.391-1.754-.391-.58 0-1.138.065-1.675.196-.533.127-1 .308-1.406.543v11.122z"
    />
    <path
      fill="currentColor"
      d="M135.36 80.776h-5.075v-3.763h5.075v3.763zm-5.59 22.815c-.301 0-.572-.005-.819-.014-.246-.011-.776-.069-1.588-.174v-3.988c.084.019.18.03.29.03h.443c.946 0 1.569-.124 1.87-.37.299-.247.45-.733.45-1.457v-15.11h4.821v15.748c0 1.734-.475 3.055-1.421 3.965-.943.914-2.291 1.37-4.046 1.37zM140.604 98.705c-1.63 0-2.826-.406-3.589-1.218-.76-.816-1.138-2.102-1.138-3.857 0-1.798.453-3.061 1.363-3.792.913-.728 2.483-1.094 4.712-1.094.511 0 1.041.027 1.588.08.545.054 1.022.123 1.428.21v-1.16c0-.512-.221-.892-.66-1.139-.435-.246-1.102-.37-2.001-.37-1.029 0-1.948.028-2.755.08-.803.055-1.535.145-2.196.276v-3.952a19.48 19.48 0 012.762-.434 40.636 40.636 0 013.661-.145c1.972 0 3.466.44 4.481 1.319 1.018.875 1.529 2.171 1.529 3.886v10.991h-4.495l-.159-1.349h-.102a8.388 8.388 0 01-2.182 1.218c-.794.3-1.542.45-2.247.45zm1.986-6.779c-.855 0-1.434.093-1.733.276-.3.18-.449.558-.449 1.138 0 .536.123.906.37 1.11.246.202.678.304 1.297.304a6.15 6.15 0 001.479-.189 8.33 8.33 0 001.414-.486v-1.957a5.533 5.533 0 00-.964-.145c-.383-.033-.854-.05-1.414-.05zM152.672 78.724v.63h1.385v-.63h-.377V77.1h.377v-.63h-1.385v.63h.394v1.624h-.394zM152.245 79.355v-1.822c0-.583-.468-1.056-1.05-1.056-.583 0-1.051.473-1.051 1.056v1.822h.614v-.82h.89v.82h.597zm-1.487-1.418v-.404a.446.446 0 01.89 0v.404h-.89zM155.378 80.69c.289-.746.147-1.426-.397-2.006a2.82 2.82 0 01-.59 1.193l-.365 1.4-.154.592c.02.002.026.003.031.002a.16.16 0 00.031-.004c.692-.134 1.192-.522 1.444-1.176z"
    />
    <path
      fill="currentColor"
      d="M156.022 76.397l.003-.03c-.001-.012-.001-.023-.005-.034-.134-.69-.522-1.19-1.176-1.442-.745-.29-1.427-.147-2.005.397.446.101.852.306 1.193.59l1.399.365c.196.05.391.101.591.154zM153.713 74.164l-.026-.018c-.585-.395-1.212-.473-1.854-.19-.73.324-1.111.906-1.136 1.7a2.837 2.837 0 011.259-.426l1.249-.733c.174-.101.348-.204.526-.31-.013-.014-.015-.02-.018-.023zM150.032 76.237l.364-1.399.154-.593-.029-.001-.033.003c-.692.136-1.191.524-1.444 1.177-.288.746-.147 1.426.398 2.006.1-.446.307-.854.59-1.193z"
    />
    <path
      fill="currentColor"
      d="M149.578 81.225c.747.289 1.427.145 2.005-.398a2.822 2.822 0 01-1.191-.59c-.467-.12-.933-.242-1.401-.364-.196-.05-.39-.101-.591-.154l-.003.03.005.032c.134.69.522 1.19 1.176 1.444z"
    />
  </Icon>
)

export const CreditCardIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </Icon>
)

export const PlayIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </Icon>
)

export const StarIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </Icon>
)
export const BuoyIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
    <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
  </Icon>
)

export const EyeOffIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </Icon>
)

export const AlertIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </Icon>
)

export const CloudOffIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </Icon>
)

export const ListIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="8" y1="6" x2="21" y2="6"></line>
    <line x1="8" y1="12" x2="21" y2="12"></line>
    <line x1="8" y1="18" x2="21" y2="18"></line>
    <line x1="3" y1="6" x2="3.01" y2="6"></line>
    <line x1="3" y1="12" x2="3.01" y2="12"></line>
    <line x1="3" y1="18" x2="3.01" y2="18"></line>
  </Icon>
)

export const PackageIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </Icon>
)

export const CloseIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </Icon>
)

export const NoRadiusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <mask id="path-1-inside-1_1009_3" fill="currentColor">
      <path d="M0 0H20V20H0V0Z" />
    </mask>
    <path
      d="M0 0V-2H-2V0H0ZM0 20H-2V22H0V20ZM0 2H20V-2H0V2ZM20 18H0V22H20V18ZM2 20V0H-2V20H2Z"
      fill="currentColor"
      mask="url(#path-1-inside-1_1009_3)"
    />
  </Icon>
)

export const MediumRadiusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <mask id="path-1-inside-1_1009_4" fill="currentColor">
      <path d="M0 4C0 1.79086 1.79086 0 4 0H20V20H4C1.79086 20 0 18.2091 0 16V4Z" />
    </mask>
    <path
      d="M-2 4C-2 0.686292 0.686292 -2 4 -2H20V2H4C2.89543 2 2 2.89543 2 4H-2ZM20 22H4C0.686292 22 -2 19.3137 -2 16H2C2 17.1046 2.89543 18 4 18H20V22ZM4 22C0.686292 22 -2 19.3137 -2 16V4C-2 0.686292 0.686292 -2 4 -2V2C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18V22ZM20 0V20V0Z"
      fill="currentColor"
      mask="url(#path-1-inside-1_1009_4)"
    />
  </Icon>
)

export const LargeRadiusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <mask id="path-1-inside-1_1009_5" fill="currentColor">
      <path d="M0 10C0 4.47715 4.47715 0 10 0H20V20H10C4.47715 20 0 15.5228 0 10V10Z" />
    </mask>
    <path
      d="M-2 10C-2 3.37258 3.37258 -2 10 -2H20V2H10C5.58172 2 2 5.58172 2 10H-2ZM20 22H10C3.37258 22 -2 16.6274 -2 10H2C2 14.4183 5.58172 18 10 18H20V22ZM10 22C3.37258 22 -2 16.6274 -2 10C-2 3.37258 3.37258 -2 10 -2V2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18V22ZM20 0V20V0Z"
      fill="currentColor"
      mask="url(#path-1-inside-1_1009_5)"
    />
  </Icon>
)

export const DropletIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </Icon>
)

export const TableIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>
  </Icon>
)

export const ShuffleIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="16 3 21 3 21 8"></polyline>
    <line x1="4" y1="20" x2="21" y2="3"></line>
    <polyline points="21 16 21 21 16 21"></polyline>
    <line x1="15" y1="15" x2="21" y2="21"></line>
    <line x1="4" y1="4" x2="9" y2="9"></line>
  </Icon>
)

export const InfoIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </Icon>
)

export const SmileIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </Icon>
)

export const BookIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </Icon>
)

export const ChevronLastIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="m7 18 6-6-6-6" />
    <path d="M17 6v12" />
  </Icon>
)

export const XCircleIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </Icon>
)

export const LightBulbIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </Icon>
)

export const UnlinkIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
    <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
    <line x1="8" x2="8" y1="2" y2="5" />
    <line x1="2" x2="5" y1="8" y2="8" />
    <line x1="16" x2="16" y1="19" y2="22" />
    <line x1="19" x2="22" y1="16" y2="16" />
  </Icon>
)

export const RepeatIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="m2 9 3-3 3 3" />
    <path d="M13 18H7a2 2 0 0 1-2-2V6" />
    <path d="m22 15-3 3-3-3" />
    <path d="M11 6h6a2 2 0 0 1 2 2v10" />
  </Icon>
)

export const BracesIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
    <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
  </Icon>
)
