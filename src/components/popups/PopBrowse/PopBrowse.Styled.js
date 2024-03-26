import styled from 'styled-components';
import { CategoriesTheme } from '../../../styled/common/common.styled';
import { topicStyles } from '../../../lib/topic';

export const StyledPopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;

  position: relative;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowseTopicText = styled.p`
    color: "#ffffff";
    white-space: nowrap;
`;

export const PopBrowseCategoriesTheme = styled(CategoriesTheme)`
  opacity: 1;
  display: block;
  opacity: 1 !important;
  background-color: ${({ $themeColor }) =>
        topicStyles[$themeColor]?.backgroundColor || "#94a6be"};

  ${PopBrowseTopicText} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};
}
`;

export const StatusThemes = styled.div`
  display: ${props => props.$edit ? 'none' : 'flex'};
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusThemesEdit = styled(StatusThemes)`
  display: ${props => props.$edit ? 'flex' : 'none'};
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  color: ${props => props.$statusTheme ? "#FFFFFF" : "#94A6BE"};
  background: ${props => props.$statusTheme ? "#94A6BE" : "#FFFFFF"};
  & label {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  }
  & input[type="radio"] {
    display: none;
  }
`;

export const PopBrowseSubttl = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
display:${props => props.$edit ? 'none' : 'block'};
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;}
  &::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}
`;

export const FormEditArea = styled(FormBrowseArea)`
display:${props => props.$edit ? 'block' : 'none'};
background: transparent;
`

export const CalendarTtl = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  padding: 0;
`;

export const CalendarBlock = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  padding: 0;
`;

export const BtnGroup = styled.div`
  & button {
    margin-right: 8px;
  }
`;

export const popBrowseBtnBrowse = styled.div`
  display: ${props => props.$edit ? 'none' : 'flex'};
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  & button {
    height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  }
`;

export const popBrowseBtnEdit = styled.div`
  display: ${props => props.$edit ? 'flex' : 'none'};
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  & button {
    height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  }

`;

export const BtnEditBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  background: transparent;
  color: #565EEF;
  &:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
`;

export const BtnBg = styled.button`
  border-radius: 4px;
  background: #565EEF;
  border: none;
  outline: none;
  color: #FFFFFF;
  &:hover {
  background-color: #33399b;
}
`;

export const PopNewCardCalendar = styled.div`
    display: ${props => props.$edit ? 'none' : 'block'};
    width: 100%;
`;

export const PopNewCardCalendarEdit = styled(PopNewCardCalendar)`
    display: ${props => props.$edit ? 'block' : 'none'};
    width: 100%;
`;


