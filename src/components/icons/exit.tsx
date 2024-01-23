type IconProps = {
  color?: string
}

export const Exit = ({ color }: IconProps) => {
  return (
    <svg width='16px' height='16px' viewBox='0 0 24 24' fill='none'>
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M18.6 20V13.6C18.6 10.5072 16.0928 8 13 8H6.59998'
          stroke={`${color || '#333333'}`}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>{' '}
        <path
          d='M6 8L9.59998 12'
          stroke={`${color || '#333333'}`}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>{' '}
        <path
          d='M6 8L9.59998 4'
          stroke={`${color || '#333333'}`}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>{' '}
      </g>
    </svg>
  )
}
