import React, { useContext, useEffect } from 'react'
import { scroller } from 'react-scroll'

import { TabProvider, TabContext } from '../../context/tab-context'
import Tab from '../tab'
import { MenuProps } from '../footer'
import { Wrapper } from './footer-menu-mobile.styled'

interface FooterMenuMobileProps {
  menus: MenuProps[]
}

const FooterMenuMobile = ({ menus }: FooterMenuMobileProps) => {
  const {
    state: {
      selectedTab: { index: activeIndex, id: activeId },
    },
  } = useContext(TabContext)

  useEffect(() => {
    if (activeIndex !== 1 && activeId) {
      scroller.scrollTo(activeId, {
        smooth: true,
        duration: 300,
      })
    }
  }, [activeIndex, activeId])

  return (
    <Wrapper>
      <TabProvider>
        {menus.map((menu, index) => {
          return <Tab key={index} menu={menu} index={index} />
        })}
      </TabProvider>
    </Wrapper>
  )
}

export default FooterMenuMobile
