import { useState } from "react"
import { AppShell } from "@/app/AppShell"
import { ActionsScreen } from "@/screens/ActionsScreen"
import { AskScreen } from "@/screens/AskScreen"
import { ConnectorsScreen } from "@/screens/ConnectorsScreen"
import { CustomersScreen } from "@/screens/CustomersScreen"
import { ForecastScreen } from "@/screens/ForecastScreen"
import { HomeScreen } from "@/screens/HomeScreen"
import { OpportunitiesScreen } from "@/screens/OpportunitiesScreen"
import { ProductsScreen } from "@/screens/ProductsScreen"
import type { Screen } from "@/types"

export default function App() {
  const [screen, setScreen] = useState<Screen>("home")
  return (
    <AppShell current={screen} onNavigate={setScreen}>
      {screen === "home" && <HomeScreen onNavigate={setScreen} />}
      {screen === "ask" && <AskScreen />}
      {screen === "opportunities" && <OpportunitiesScreen />}
      {screen === "customers" && <CustomersScreen />}
      {screen === "products" && <ProductsScreen />}
      {screen === "forecast" && <ForecastScreen />}
      {screen === "actions" && <ActionsScreen />}
      {screen === "connectors" && <ConnectorsScreen />}
    </AppShell>
  )
}
