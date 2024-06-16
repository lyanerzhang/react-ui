import { ReactNode, createContext } from 'react'
export type LabelButtonGroupProps = {
  activeValue: Array<string | number>[] | string | number | undefined
  defaultValue: Array<string | number>[] | string | number | undefined
  onChange: (
    value: Array<string | number>[] | string | number | undefined,
  ) => void
  multiple: boolean
  disabled: boolean
  children?: ReactNode
}

export const LabelButtonGroupContext =
  createContext<LabelButtonGroupProps | null>(null)
