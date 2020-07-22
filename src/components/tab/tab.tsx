import React, { useContext, useEffect, CSSProperties } from 'react'
import { scroller } from 'react-scroll'
import { Transition } from 'react-transition-group'

import { TabContext } from '../../context/tab-context'
import { DeviceContext } from '../../context/device-context'
import { MenuProps } from '../footer'
import UniversalLink from '../universal-link/universal-link'
import DynamicAnchor from '../DynamicAnchor'

import {
  TabWrapper,
  List,
  ListItem,
  MenuHeading,
  StyledArrowDown,
  Separator,
  StyledTag,
} from './tab.styled'

const duration = 500

type VisibilityProperty =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'collapse'
  | 'hidden'
  | 'visible'

const defaultStyle: CSSProperties = {
  transition: `opacity ${duration}ms`,
  opacity: 0,
  height: '0',
  visibility: 'hidden' as VisibilityProperty,
}

const transitionStyles = {
  entering: {
    opacity: 1,
    height: '100%',
    visibility: 'visible' as VisibilityProperty,
  },
  entered: {
    opacity: 1,
    height: '100%',
    visibility: 'visible' as VisibilityProperty,
  },
  exiting: {
    opacity: 0,
    height: '0',
    visibility: 'hidden' as VisibilityProperty,
  },
  exited: {
    opacity: 0,
    height: '0',
    visibility: 'hidden' as VisibilityProperty,
  },
}

interface TabProps {
  menu: MenuProps
  index: number
}

const Tab = ({ index: thisIndex, menu }: TabProps) => {
  const {
    state: {
      selectedTab: { index: activeIndex, id: activeId },
    },
    dispatch,
  } = useContext(TabContext)

  const {
    state: { deviceType },
  } = useContext(DeviceContext)

  const { heading, menuItems } = menu
  const active = thisIndex === activeIndex
  const idSelector = `tab${thisIndex}`

  useEffect(() => {
    if (activeId) {
      setTimeout(() => {
        scroller.scrollTo(activeId, {
          smooth: true,
          duration: 200,
        })
      }, 200)
    }
  }, [activeId])

  return (
    <TabWrapper zIndex={thisIndex}>
      <DynamicAnchor id={idSelector} />

      <MenuHeading
        className={
          deviceType !== 'mobile' && deviceType !== 'tablet' ? 'hoverable' : ''
        }
        onClick={() =>
          dispatch({
            type: 'toggleTab',
            payload: { selectedTab: { index: thisIndex, id: idSelector } },
          })
        }
      >
        {heading}
        <StyledArrowDown
          className={
            deviceType !== 'mobile' && deviceType !== 'tablet'
              ? 'hoverable'
              : ''
          }
          active={active}
        />
      </MenuHeading>
      <Transition in={active} timeout={duration}>
        {(state: 'entering' | 'entered' | 'exiting' | 'exited') => (
          <List
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {menuItems.map((menuItem, index) => {
              const { href, name } = menuItem
              return (
                <ListItem active={active} key={index}>
                  <UniversalLink href={href} name={name} key={index} />
                  {name === 'Teams' || name === 'Terminal' ? (
                    <StyledTag>Coming soon</StyledTag>
                  ) : null}
                </ListItem>
              )
            })}
          </List>
        )}
      </Transition>
      <Separator />
    </TabWrapper>
  )
}

export default Tab
