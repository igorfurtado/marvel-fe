type IconProps = {
  color?: string
  rotate?: number
}

export const Arrow = ({ color, rotate }: IconProps) => {
  return (
    <svg
      width='15'
      height='14'
      viewBox='0 0 15 14'
      fill='none'
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d='M13.3334 7.00008H1.66675M1.66675 7.00008L7.50008 12.8334M1.66675 7.00008L7.50008 1.16675'
        stroke={`${color || '#747D94'}`}
        strokeWidth='1.67'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
