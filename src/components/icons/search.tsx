import { colors } from '@/styles/references'

type IconProps = {
  color?: string
}

export const Search = ({ color }: IconProps) => {
  return (
    <svg width='13' height='13' viewBox='0 0 13 13' fill='none'>
      <path
        d='M12.125 12.125L9.40625 9.40625M10.875 5.875C10.875 8.63642 8.63642 10.875 5.875 10.875C3.11358 10.875 0.875 8.63642 0.875 5.875C0.875 3.11358 3.11358 0.875 5.875 0.875C8.63642 0.875 10.875 3.11358 10.875 5.875Z'
        stroke={`${color || colors.black}`}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
