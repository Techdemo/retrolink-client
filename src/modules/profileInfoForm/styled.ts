import styled from 'styled-components';

import PencilSvg from 'vectors/pencil.svg';

export const ProfileDataFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 48px;
`;

export const PencilIcon = styled(PencilSvg)`
  width: 24px;
  color: ${({ theme }) => theme.colors.gray};
`;

