import React, { useRef } from 'react'

import useResizeObserver from 'use-resize-observer/polyfilled'

import {
  Wrapper,
  CityLine,
  TransactionBlock,
  TransactionLine,
} from './transaction-card.styled'

interface TransactionCardProps {
  flag: React.FC
  city: string
  className?: string
  amount: string
  currency: string
}

const TransactionCard = ({
  flag,
  city,
  className,
  amount,
  currency,
}: TransactionCardProps) => {
  const Flag = flag
  const flagRef = useRef<HTMLDivElement>(null)
  const transactionBlockRef = useRef<HTMLDivElement>(null)
  const { width: flagWidth } = useResizeObserver({ ref: flagRef })
  const { width: transactionBlockWidth } = useResizeObserver({
    ref: transactionBlockRef,
  })

  return (
    <Wrapper
      className={className}
      innerWidth={
        flagWidth && transactionBlockWidth
          ? flagWidth + transactionBlockWidth
          : undefined
      }
    >
      <div ref={flagRef}>
        <Flag />
      </div>
      <div ref={transactionBlockRef}>
        <TransactionBlock>
          <CityLine>
            Someone in <span>{city} </span> just paid
          </CityLine>
          <TransactionLine>{`${currency} ${amount}`}</TransactionLine>
        </TransactionBlock>
      </div>
    </Wrapper>
  )
}

export default TransactionCard
