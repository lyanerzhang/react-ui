import React, { forwardRef, useContext } from 'react'
import type { ReactNode } from 'react'
import { LabelButtonGroupContext } from './group-context'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'

export type LabelButtonRef = {
  check: () => void
  uncheck: () => void
  toggle: () => void
}
export type LabelButtonProps = {
  value: Array<string | number>[] | string | number | undefined
  children?: ReactNode
}

const defaultProps = {
  value: [],
}

const classPrefix = `ly-label-button`

export const LabelButton = forwardRef<LabelButtonRef, LabelButtonProps>(
  (p, ref) => {
    const props = mergeProps(defaultProps, p)
    const groupContext = useContext(LabelButtonGroupContext)
    console.log(groupContext)
    const renderSelectedClass = () => {
      return 'xxx'
    }
    return (
      <>
        <div className={classNames(classPrefix)}>
          <div
            className={classNames(
              `${classPrefix}__content`,
              renderSelectedClass(),
              {
                [`${classPrefix}__active`]: true,
              },
            )}
          >
            {props.children}
          </div>
        </div>
      </>
    )
  },
)

LabelButton.displayName = 'LabelButton'

export default LabelButton
