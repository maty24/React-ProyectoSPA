import React from 'react'
import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
  //el authprovider hace que tenga la info para todas la rutas
  return (
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
  )
}
