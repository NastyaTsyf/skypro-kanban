import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;
export const SubTtl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Categories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesSubTtl = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;


`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  & label {
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;}
  & input[type="radio"] {
    display: none;
  }
  & input[type="radio"]:checked+label {
    opacity: 1 !important;
  }
  & label:hover {
    opacity: 1 !important;
  }
`;

export const CategoriesThemeOrange = styled(CategoriesTheme)`
  & label {
  background-color: #FFE4C2;
  color: #FF6D00;
  }

`;

export const CategoriesThemeGreen = styled(CategoriesTheme)`
  & label {
    background-color: #B4FDD1;
    color: #06B16E}

`;

export const CategoriesThemePurple = styled(CategoriesTheme)`
  & label {
  background-color: #E9D4FF;
  color: #9A48F1;}
`;

