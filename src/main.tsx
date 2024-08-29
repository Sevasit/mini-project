import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import { ThemeProvider, createTheme } from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#9c27b0',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FFBC26',
      contrastText: '#000',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            color: '#9c27b0',
            "&.Mui-disabled": {
              color: '#9c27b0',
            },
          },
          label: {
            color: '#000000',
            shrink: {
              color: '#000000',
            },
            borderBottom: '#000000',
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        input: {
          color: '#9c27b0',
          "&.Mui-disabled": {
            color: '#9c27b0 !important',
            "WebkitTextFillColor": "#9c27b0 !important",
          },
        },
        underline: {
          '&:before': {
            borderBottomColor: '#000000',
          },
          '&:after': {
            borderBottomColor: '#9c27b0',
          },
        },
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#1F9BFD',
          "&.Mui-disabled": {
            color: '#1F9BFD',
          },
        },
        shrink: {
          color: '#1F9BFD',
        },
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: '#1F9BFD'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: '#ff5e43',
            color: "#ffffff",
            "& .MuiListItemIcon-root": {
              color: "#ffffff",
            },
            "&:hover": {
              backgroundColor: '#b2412e',
              color: "#ffffff",
              "& .MuiListItemIcon-root": {
                color: "#ffffff",
              }
            }
          },
          "&:hover": {
            backgroundColor: '#ff5e43',
            color: "#ffffff",
            "& .MuiListItemIcon-root": {
              color: "#ffffff",
            }
          }
        },
      }
    }
  }

})

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
