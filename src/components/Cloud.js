import * as React from "react"

function Cloud({ color = '', ...rest }) {
  return (
    <svg width={75} height={50} viewBox="0 0 75 50" fill="none" {...rest}>
      <path
        d="M60.469 18.875C58.344 8.094 48.875 0 37.5 0c-9.031 0-16.875 5.125-20.781 12.625C7.312 13.625 0 21.594 0 31.25 0 41.594 8.406 50 18.75 50h40.625C68 50 75 43 75 34.375c0-8.25-6.406-14.938-14.531-15.5zm-16.719 9.25v12.5h-12.5v-12.5h-9.375L37.5 12.5l15.625 15.625H43.75z"
        fill={color}
      />
    </svg>
  )
}

export default Cloud;
