import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router'

function RootLayout(): any {
  return (
    <>
    <Header />
    <Outlet />
    </>
    
  )
}

export default RootLayout