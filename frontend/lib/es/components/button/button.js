import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { mergeProps } from '../../utils/with-default-props';
import { Button as AntButton } from 'antd-mobile';
import classNames from 'classnames';
const classPrefix = `ly-button`;
const defaultProps = {
  block: false,
  type: 'normal',
  mode: 'dark',
  size: 'middle',
  text: false,
  loading: false,
  loadingText: '加载中...'
};
export const Button = forwardRef((p, ref) => {
  // ButtonProps: 函数组件|类组件
  // forwardRef：将DOM节点公共给父节点。会创建一个新的组件，当这个组件被使用时， ref 会被传递给指定的子组件
  const nativeButtonRef = useRef(null);
  const props = mergeProps(defaultProps, p);
  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeButtonRef.current;
    }
  }));
  const handleClick = e => {
    if (!props.onClick || props.disabled) {
      return;
    }
    props.onClick(e);
  };
  return React.createElement(React.Fragment, null, props.text ? React.createElement("span", {
    ref: nativeButtonRef,
    onClick: handleClick,
    className: classNames(classPrefix, {
      [`${classPrefix}-text`]: true
    })
  }, props.children) : React.createElement(React.Fragment, null, React.createElement(AntButton, {
    ref: nativeButtonRef,
    onClick: handleClick,
    disabled: props.disabled,
    loading: props.loading,
    loadingText: props.loadingText,
    className: classNames(classPrefix, {
      [`${classPrefix}-${props.type}`]: props.type,
      [`${classPrefix}-${props.type}-${props.mode}`]: props.mode === 'light',
      [`${classPrefix}-${props.size}`]: props.size,
      [`${classPrefix}-block`]: props.block,
      [`${classPrefix}-disabled`]: props.disabled
    })
  }, React.createElement("span", null, props.children))));
});
Button.displayName = 'Button';