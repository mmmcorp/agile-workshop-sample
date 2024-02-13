'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { Logout, Inbox, Settings } from '@mui/icons-material';

const darkTheme = createTheme({
  palette: {
    // mode: 'dark',
  },
});
const drawerWidth = 240;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <html lang="ja">
        <body>
          <AppBar position="fixed" sx={{ zIndex: 1300 }}>
            <Toolbar>
              <Typography variant="h6" component={'div'} sx={{ flexGrow: 1 }}>
                保険証券管理システム
              </Typography>
              <Logout />
            </Toolbar>
          </AppBar>
          <Stack direction={'row'}>
            <Drawer
              variant="permanent"
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
            >
              <Toolbar />
              <Box sx={{ overflow: 'auto' }}>
                <List>
                  {['保険証券一覧', '設定'].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      selected={index % 2 === 0}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <Inbox /> : <Settings />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
            <Box component={'main'} width={'100%'} padding={2}>
              <Toolbar />
              {children}
            </Box>
          </Stack>
        </body>
      </html>
    </ThemeProvider>
  );
}
