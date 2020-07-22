// FeaturesImage.js
import React, { useState, useEffect } from 'react'
import useNetwork from '../../utils/hooks/useNetwork'

import useSetInterval from 'use-set-interval'
// flags
import WorldMapImage from '../../images/world-map-dots.inline.svg'
import AtFlag from '../../images/flags/at-flag.inline.svg'
import AuFlag from '../../images/flags/au-flag.inline.svg'
import BeFlag from '../../images/flags/be-flag.inline.svg'
import CaFlag from '../../images/flags/ca-flag.inline.svg'
import ChFlag from '../../images/flags/ch-flag.inline.svg'
import CnFlag from '../../images/flags/cn-flag.inline.svg'
import DeFlag from '../../images/flags/de-flag.inline.svg'
import EsFlag from '../../images/flags/es-flag.inline.svg'
import FrFlag from '../../images/flags/fr-flag.inline.svg'
import HkFlag from '../../images/flags/hk-flag.inline.svg'
import HuFlag from '../../images/flags/hu-flag.inline.svg'
import ItFlag from '../../images/flags/it-flag.inline.svg'
import NlFlag from '../../images/flags/nl-flag.inline.svg'
import SgFlag from '../../images/flags/sg-flag.inline.svg'
import UkFlag from '../../images/flags/uk-flag.inline.svg'
import UsFlag from '../../images/flags/us-flag.inline.svg'

import {
  AnimationContainer,
  Wrapper,
  MapWrapper,
} from './features-image.styled'

import TransactionCard from '../transaction-card'

const currencies = [
  'USD',
  'GBP',
  'EUR',
  'AUD',
  'CNY',
  'CAD',
  'SGD',
  'CHF',
  'HKD',
]
const minAmount = 50
const maxAmount = 1000

export type City =
  | 'Toronto'
  | 'San Francisco'
  | 'Vancouver'
  | 'Boston'
  | 'New York'
  | 'London'
  | 'Manchester'
  | 'Paris'
  | 'Zurich'
  | 'Geneva'
  | 'Hong Kong'
  | 'Melbourne'
  | 'Sydney'
  | 'Munich'
  | 'Rome'
  | 'Vienna'
  | 'Madrid'
  | 'Brussels'
  | 'Amsterdam'
  | 'Frankfurt'
  | 'Budapest'
  | 'Shanghai'
  | 'Beijing'
  | 'Singapore'

const FeaturesImage = () => {
  const [transactions, setTransactions] = useState({
    Toronto: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    'San Francisco': { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Vancouver: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Boston: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    'New York': { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    London: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Manchester: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Paris: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Zurich: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Geneva: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    'Hong Kong': { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Melbourne: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Sydney: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Munich: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Rome: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Vienna: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Madrid: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Brussels: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Amsterdam: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Frankfurt: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Budapest: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Shanghai: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Beijing: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
    Singapore: { loaded: false, zIndex: 0, amount: '', currency: 'USD' },
  })

  const cities = Object.keys(transactions) as City[]
  const isOnline = useNetwork()
  const [selectedCity, setSelectedCity] = useState(
    cities[Math.floor(Math.random() * cities.length)],
  )
  const [count, setCount] = useState(0)

  useSetInterval(() => {
    setTransactions(transactions => {
      transactions[selectedCity].loaded = false
      return transactions
    })
    setSelectedCity(cities[Math.floor(Math.random() * cities.length)] as City)
    setCount(count + 1)
  }, 2500)

  const loadTransaction = (city: City) => {
    if (!transactions[city].loaded) {
      const amount =
        minAmount +
        Math.floor(Math.random() * (maxAmount - minAmount) * 100) / 100
      const currencyIndex = Math.floor(Math.random() * currencies.length)
      setTransactions(transactions => {
        transactions[city].loaded = true
        transactions[city].zIndex = count
        transactions[city].amount = amount.toFixed(2)
        transactions[city].currency = currencies[currencyIndex]
        return transactions
      })
    }
  }

  useEffect(() => {
    if (isOnline) {
      loadTransaction(selectedCity)
    }
  }, [selectedCity])

  return (
    <AnimationContainer>
      <Wrapper transactions={transactions}>
        <MapWrapper>
          <WorldMapImage alt="worldMapImage" className="world-map" />
          <TransactionCard
            flag={CaFlag}
            city="Toronto"
            className="toronto-image"
            amount={transactions['Toronto'].amount}
            currency={transactions['Toronto'].currency}
          />
          <TransactionCard
            flag={CaFlag}
            city="Vancouver"
            className="vancouver-image"
            amount={transactions['Vancouver'].amount}
            currency={transactions['Vancouver'].currency}
          />
          <TransactionCard
            flag={UsFlag}
            city="San Francisco"
            className="san-francisco-image"
            amount={transactions['San Francisco'].amount}
            currency={transactions['San Francisco'].currency}
          />
          <TransactionCard
            flag={UsFlag}
            city="Boston"
            className="boston-image"
            amount={transactions['Boston'].amount}
            currency={transactions['Boston'].currency}
          />
          <TransactionCard
            flag={UsFlag}
            city="New York"
            className="new-york-image"
            amount={transactions['New York'].amount}
            currency={transactions['New York'].currency}
          />
          <TransactionCard
            flag={UkFlag}
            city="Manchester"
            className="manchester-image"
            amount={transactions['Manchester'].amount}
            currency={transactions['Manchester'].currency}
          />
          <TransactionCard
            flag={UkFlag}
            city="London"
            className="london-image"
            amount={transactions['London'].amount}
            currency={transactions['London'].currency}
          />

          <TransactionCard
            flag={FrFlag}
            city="Paris"
            className="paris-image"
            amount={transactions['Paris'].amount}
            currency={transactions['Paris'].currency}
          />
          <TransactionCard
            flag={ChFlag}
            city="Geneva"
            className="geneva-image"
            amount={transactions['Geneva'].amount}
            currency={transactions['Geneva'].currency}
          />
          <TransactionCard
            flag={ChFlag}
            city="Zurich"
            className="zurich-image"
            amount={transactions['Zurich'].amount}
            currency={transactions['Zurich'].currency}
          />
          <TransactionCard
            flag={HkFlag}
            city="Hong Kong"
            className="hong-kong-image"
            amount={transactions['Hong Kong'].amount}
            currency={transactions['Hong Kong'].currency}
          />
          <TransactionCard
            flag={AuFlag}
            city="Melbourne"
            className="melbourne-image"
            amount={transactions['Melbourne'].amount}
            currency={transactions['Melbourne'].currency}
          />
          <TransactionCard
            flag={AuFlag}
            city="Sydney"
            className="sydney-image"
            amount={transactions['Sydney'].amount}
            currency={transactions['Sydney'].currency}
          />
          <TransactionCard
            flag={DeFlag}
            city="Munich"
            className="munich-image"
            amount={transactions['Munich'].amount}
            currency={transactions['Munich'].currency}
          />
          <TransactionCard
            flag={DeFlag}
            city="Frankfurt"
            className="frankfurt-image"
            amount={transactions['Frankfurt'].amount}
            currency={transactions['Frankfurt'].currency}
          />
          <TransactionCard
            flag={ItFlag}
            city="Rome"
            className="rome-image"
            amount={transactions['Rome'].amount}
            currency={transactions['Rome'].currency}
          />
          <TransactionCard
            flag={EsFlag}
            city="Madrid"
            className="madrid-image"
            amount={transactions['Madrid'].amount}
            currency={transactions['Madrid'].currency}
          />
          <TransactionCard
            flag={BeFlag}
            city="Brussels"
            className="brussels-image"
            amount={transactions['Brussels'].amount}
            currency={transactions['Brussels'].currency}
          />
          <TransactionCard
            flag={NlFlag}
            city="Amsterdam"
            className="amsterdam-image"
            amount={transactions['Amsterdam'].amount}
            currency={transactions['Amsterdam'].currency}
          />
          <TransactionCard
            flag={HuFlag}
            city="Budapest"
            className="budapest-image"
            amount={transactions['Budapest'].amount}
            currency={transactions['Budapest'].currency}
          />
          <TransactionCard
            flag={CnFlag}
            city="Shanghai"
            className="shanghai-image"
            amount={transactions['Shanghai'].amount}
            currency={transactions['Shanghai'].currency}
          />
          <TransactionCard
            flag={CnFlag}
            city="Beijing"
            className="beijing-image"
            amount={transactions['Beijing'].amount}
            currency={transactions['Beijing'].currency}
          />
          <TransactionCard
            flag={SgFlag}
            city="Singapore"
            className="singapore-image"
            amount={transactions['Singapore'].amount}
            currency={transactions['Singapore'].currency}
          />
          <TransactionCard
            flag={AtFlag}
            city="Vienna"
            className="vienna-image"
            amount={transactions['Vienna'].amount}
            currency={transactions['Vienna'].currency}
          />
        </MapWrapper>
      </Wrapper>
    </AnimationContainer>
  )
}

export default FeaturesImage
