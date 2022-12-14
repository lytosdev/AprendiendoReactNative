import React from "react"
import { View } from 'react-native'
import { Route, Routes } from 'react-router-native'

import Menu from "./components/Menu"
import Screens from "./components/Screens"

const Main = () => {

  return (
    <View style={{ flex: 1 }}>
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route exact path="/screens/:title/:keyComponent" element={<Screens />} />
      </Routes>
    </View>
  )
}

export default Main