import { ReactNode, createContext } from 'react'
export type LabelButtonGroupProps = {
  value: Array<string | number>[] | string | number | undefined
  disabled: boolean
  children?: ReactNode
}

export const LabelButtonGroupContext =
  createContext<LabelButtonGroupProps | null>(null)
