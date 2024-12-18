'use client'
import { useTheme } from 'next-themes'
import React from 'react'


export default function RadioButton({ ...props }) {
  // const [checked, setChecked] = useState(false)
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === 'dark'
  return (
    <>
      <input
        type="radio"
        {...props}
        className={`rounded-full custom_radio ${dark ? 'custom_radio_dark' : 'custom_radio_light'}`}
      />
      {/* <input
        type="radio"
        {...props}
        className={`rounded-full custom_radio ${dark ? 'custom_radio_dark' : 'custom_radio_light'}`}
      /> */}
    </>
  )
}
