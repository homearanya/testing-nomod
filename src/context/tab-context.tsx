import React, { createContext, useReducer } from 'react'

type StateType = {
  selectedTab: { index: number; id: string | null }
}

type ActionType = {
  type?: 'toggleTab'
  payload: StateType
}

const reducer = (state: StateType, action: ActionType) => {
  const { type, payload } = action
  const {
    selectedTab: { index },
  } = payload

  switch (type) {
    case 'toggleTab':
      if (index !== -1 && index !== state.selectedTab.index) {
        return payload
      } else {
        return {
          selectedTab: {
            index: -1,
            id: null,
          },
        }
      }

    default:
      return state
  }
}

const initialState = { selectedTab: { index: -1, id: null } }

interface TabContextProps {
  state: StateType
  dispatch: (type: ActionType) => void
}

const TabContext = createContext({
  state: initialState,
} as TabContextProps)

const TabProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { Provider } = TabContext

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
export { TabContext, TabProvider }
