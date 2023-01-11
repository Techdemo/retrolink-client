import styled from "styled-components";

import NotificationIcon from 'vectors/notification.svg';

export const ProfileHeader = styled.div``;

export const ProfileEmailVerificationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 12px;
  align-items: center;
`;

export const StyledNotificationIcon = styled(NotificationIcon)`
  width: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;
