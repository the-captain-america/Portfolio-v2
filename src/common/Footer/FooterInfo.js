import React from 'react'
import styled from 'styled-components'
import { Icon } from '@common/Icon'

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  width: 24px;
  height: 24px;
`

const FooterContainer = styled.div.attrs({ className: 'FooterContainer' })`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`

const Group = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  padding: 8px;
  justify-content: flex-start;
`

const Link = styled.a`
  text-decoration: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  span {
    color: #aeaeae;
    font-weight: 300;
    display: block;
    line-height: 24px;
    width: 100%;
    font-size: 16px;
  }

  &:hover {
    span {
      color: #6a6cff;
    }
  }
  &:active {
    span {
      color: #6a6cff;
    }
  }
`

const FooterInfo = ({ items = [], children }) => {
  const renderItems = () => {
    if (!items || !items.length) return null
    const result = items.map((item) => (
      <ListItem>
        <Link className="link" href={item.value} key={item.label}>
          <span className="info">{item.label}</span>
          {!!item.icon && (
            <IconContainer>
              <Icon name={item.icon} viewBox="0 0 24 24" />
            </IconContainer>
          )}
        </Link>
      </ListItem>
    ))

    return <Group>{result}</Group>
  }

  return (
    <FooterContainer>
      {renderItems()}
      {children}
    </FooterContainer>
  )
}

export { FooterInfo }
