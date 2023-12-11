import styled from 'styled-components'
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  h2 {
    margin: 0;
    font-size: 14px;
    margin-top: 8px;
  }
`

const CardGroup = styled.div`
  background: #f4f4f4;
  border-radius: 12px;
  padding: 16px;
  min-height: 200px;
  border: 1px solid #d1d1d1;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 20px 0px;
`

const Detail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  span,
  p {
    color: rgb(174, 174, 174);
    font-size: 16px;
    line-height: 24px;
  }
  p {
    margin: 0;
  }
`
export { CardContainer, CardGroup, Detail }
