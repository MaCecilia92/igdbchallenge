'use client'

import { Toaster as HotToaster } from 'react-hot-toast'

export function ResponsiveToaster() {
  return (
    <>
      <div className="hidden lg:block">
        <HotToaster
          position="top-right"
          toastOptions={{
            className: 'lg:!right-4 lg:!top-4',
          }}
        />
      </div>
      <div className="lg:hidden">
        <HotToaster
          position="top-center"
          toastOptions={{
            className: 'md:!top-4 xs:!top-4',
          }}
        />
      </div>
    </>
  )
}