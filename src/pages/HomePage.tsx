import { Box, CardGrid, Typography } from '../components'
import { navigation } from '../navigation/pages'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <>
      {navigation.map((group) => (
        <Box key={group.id} className={styles.group}>
          <Typography variant="subtitle">{group.label}</Typography>
          <CardGrid>
            {[1, 2, 3].map((n) => (
              <Box as="div" key={n} className={styles.placeholder} />
            ))}
          </CardGrid>
        </Box>
      ))}
    </>
  )
}
