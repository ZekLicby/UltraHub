import { Route, Routes } from 'react-router'
import { AppShell } from './layout'
import { mockNotifications } from './mocks/notifications'
import { navigation } from './navigation/pages'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PlaceholderPage } from './pages/PlaceholderPage'

const user = { name: 'Usuário' }

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell groups={navigation} notifications={mockNotifications} user={user} />}>
        <Route index element={<HomePage />} />
        {navigation.flatMap((group) =>
          group.pages.map((page) => (
            <Route key={page.id} path={page.path} element={<PlaceholderPage />} />
          )),
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
