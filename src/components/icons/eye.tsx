type IconProps = {
  color?: string
}

export const Eye = ({ color }: IconProps) => {
  return (
    <svg width='20' height='15' viewBox='0 0 20 15' fill='none'>
      <path
        d='M18.6801 5.42857C17.4354 3.40128 14.6039 0 9.63439 0C4.66489 0 1.83342 3.40128 0.58864 5.42857C0.203831 6.05097 0 6.76825 0 7.5C0 8.23175 0.203831 8.94903 0.58864 9.57143C1.83342 11.5987 4.66489 15 9.63439 15C14.6039 15 17.4354 11.5987 18.6801 9.57143C19.0649 8.94903 19.2688 8.23175 19.2688 7.5C19.2688 6.76825 19.0649 6.05097 18.6801 5.42857ZM17.3118 8.73114C16.2427 10.4695 13.823 13.3949 9.63439 13.3949C5.44578 13.3949 3.02604 10.4695 1.95702 8.73114C1.7284 8.36119 1.6073 7.93489 1.6073 7.5C1.6073 7.06511 1.7284 6.63881 1.95702 6.26886C3.02604 4.5305 5.44578 1.60514 9.63439 1.60514C13.823 1.60514 16.2427 4.52729 17.3118 6.26886C17.5404 6.63881 17.6615 7.06511 17.6615 7.5C17.6615 7.93489 17.5404 8.36119 17.3118 8.73114Z'
        fill={color || '#B7B7B7'}
      />
      <path
        d='M9.63443 3.4873C8.84076 3.4873 8.06492 3.72265 7.40501 4.16359C6.7451 4.60453 6.23077 5.23125 5.92704 5.9645C5.62332 6.69775 5.54385 7.5046 5.69869 8.28301C5.85353 9.06143 6.23571 9.77645 6.79692 10.3377C7.35812 10.8989 8.07314 11.281 8.85156 11.4359C9.62997 11.5907 10.4368 11.5113 11.1701 11.2075C11.9033 10.9038 12.53 10.3895 12.971 9.72956C13.4119 9.06965 13.6473 8.29381 13.6473 7.50015C13.646 6.43627 13.2228 5.41632 12.4705 4.66405C11.7182 3.91177 10.6983 3.48858 9.63443 3.4873ZM9.63443 9.90785C9.15823 9.90785 8.69272 9.76664 8.29678 9.50208C7.90083 9.23752 7.59223 8.86149 7.41 8.42154C7.22776 7.98158 7.18008 7.49748 7.27298 7.03043C7.36589 6.56338 7.5952 6.13437 7.93192 5.79764C8.26864 5.46092 8.69766 5.23161 9.16471 5.1387C9.63175 5.0458 10.1159 5.09348 10.5558 5.27572C10.9958 5.45795 11.3718 5.76655 11.6364 6.1625C11.9009 6.55844 12.0421 7.02395 12.0421 7.50015C12.0421 8.13871 11.7885 8.75112 11.3369 9.20265C10.8854 9.65418 10.273 9.90785 9.63443 9.90785Z'
        fill={color || '#B7B7B7'}
      />
    </svg>
  )
}
