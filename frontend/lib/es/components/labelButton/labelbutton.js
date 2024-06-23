import React, { forwardRef, useContext, useState, useRef, useEffect } from 'react';
import { LabelButtonGroupContext } from './group-context';
import { mergeProps } from '../../utils/with-default-props';
import classNames from 'classnames';
const defaultProps = {
  title: '',
  value: ''
};
const classPrefix = `ly-label-button`;
export const LabelButton = forwardRef((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const groupContext = useContext(LabelButtonGroupContext);
  const {
    activeValue,
    defaultValue,
    onChange,
    multiple,
    disabled,
    children
  } = groupContext;
  // activeValue：设置组件激活标签，通过 state 来管理，会随着用户的交互而改变
  // defaultValue: 设置组件挂载时的默认激活标签，不会随着用户的交互而改变，除非页面刷新~~
  const [currentValue, setCurrentValue] = useState();
  const effectDefaultValue = useRef(null);
  useEffect(() => {
    if (multiple) {
      if (activeValue !== undefined) {
        setCurrentValue(activeValue);
        effectDefaultValue.current = activeValue;
      } else if (defaultValue.length) {
        effectDefaultValue.current = defaultValue;
        console.log('effect defaultValue', defaultValue);
        setCurrentValue(defaultValue);
      }
    } else {
      if (activeValue !== undefined) {
        setCurrentValue(activeValue);
      } else if (defaultValue) {
        setCurrentValue(defaultValue);
      } else {
        // 默认取第一个child的value作为默认值33
        if (children) {
          setCurrentValue(children[0].props.value);
        }
      }
    }
  }, [activeValue, defaultValue, children, multiple]);
  const handleClick = () => {
    if (disabled || props.disabled) {
      return;
    }
    if (multiple) {
      console.log(currentValue, children);
      // 当点击某一个时，触发父组件的onChange事件
      // 如果activeValue 为undefined，以defaultValue为准
      // 已存在，则删除
      if (effectDefaultValue.current.includes(props.value)) {
        effectDefaultValue.current = effectDefaultValue.current.filter(item => item !== props.value);
        console.log('已存在，则删除', effectDefaultValue.current);
        setCurrentValue(effectDefaultValue.current);
      } else {
        // 不存在，则添加
        effectDefaultValue.current = [...effectDefaultValue.current, props.value];
        console.log('不存在，则添加', effectDefaultValue.current);
        setCurrentValue(effectDefaultValue.current);
      }
      onChange(effectDefaultValue.current);
    } else {
      setCurrentValue(props.value);
      onChange(props.value);
    }
  };
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: classNames(classPrefix),
    onClick: handleClick
  }, React.createElement("div", {
    className: classNames(`${classPrefix}__content`, {
      [`${classPrefix}__active`]: !disabled && !props.disabled && (currentValue === props.value || (currentValue === null || currentValue === void 0 ? void 0 : currentValue.includes(props.value))),
      [`${classPrefix}__default`]: !disabled && !props.disabled && currentValue !== props.value && !(currentValue === null || currentValue === void 0 ? void 0 : currentValue.includes(props.value)),
      [`${classPrefix}__disabled`]: !!disabled || props.disabled
    })
  }, props.children)));
});
LabelButton.displayName = 'LabelButton';
export default LabelButton;