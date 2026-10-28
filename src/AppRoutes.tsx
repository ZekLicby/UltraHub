import { Route, Routes } from 'react-router'
import { AppShell } from './layout'
import { GameProvider } from './modules/japanese/game/GameProvider'
import { mockNotifications } from './mocks/notifications'
import { allPages, homePage, navigation } from './navigation/pages'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { pageElements, placeholderElement } from './pages/pageElements'

const user = { name: 'Usuário' }

export function AppRoutes() {
  return (
    <GameProvider>
      <Routes>
        <Route element={<AppShell groups={navigation} notifications={mockNotifications} user={user} />}>
          <Route index element={<HomePage />} />
          {allPages
            .filter((page) => page.id !== homePage.id)
            .map((page) => (
              <Route
                key={page.id}
                path={page.path}
                element={pageElements[page.id] ?? placeholderElement}
              />
            ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </GameProvider>
  )
}
