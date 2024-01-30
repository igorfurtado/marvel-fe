/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserLogin } from '@/types/user'
import { ElementType } from 'react'
import { Control, Controller } from 'react-hook-form'
import InputBase from './input-base'

type CustomInputProps = {
  IconBefore?: ElementType
  IconAfter?: ElementType
  iconClick?: () => void
  name?: 'email' | 'password'
  $control?: Control<UserLogin, any>
  placeHolder?: string
  $login?: boolean
  type?: React.HTMLInputTypeAttribute | undefined
  errorText?: string
  pureValue?: string
  pureOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomInput = ({
  IconBefore,
  IconAfter,
  $control,
  name,
  placeHolder,
  $login,
  type,
  pureValue,
  iconClick,
  pureOnChange
}: CustomInputProps) => {
  return (
    <>
      {$login ? (
        <Controller
          name={name as 'email' | 'password'}
          control={$control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputBase
              onChange={onChange}
              value={value}
              errorText={error?.message}
              placeHolder={placeHolder}
              $login={$login}
              type={type}
              iconClick={iconClick}
              IconAfter={IconAfter}
              IconBefore={IconBefore}
            />
          )}
        ></Controller>
      ) : (
        <InputBase
          onChange={pureOnChange}
          value={pureValue}
          placeHolder={placeHolder}
          $login={$login}
          type={type}
          iconClick={iconClick}
          IconAfter={IconAfter}
          IconBefore={IconBefore}
        />
      )}
    </>
  )
}

export default CustomInput
