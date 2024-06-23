import React, { useState, useRef } from 'react';
import { mergeProps } from '../../utils/with-default-props';
import { Popup, Radio, Checkbox, List, Button } from 'antd-mobile';
import classNames from 'classnames';
const classPrefix = `ly-selector`;
const defaultProps = {
  visible: false,
  title: '',
  multiple: false,
  value: '',
  source: [],
  onConfirm: () => {},
  children: null
};
export default function Selector(p) {
  const props = mergeProps(defaultProps, p);
  const checkboxRefs = props.source.map(() => useRef(null));
  const [defaultValue, setDefaultValue] = useState(props.value);
  const [value, setValue] = useState(props.value);
  return React.createElement(Popup, {
    visible: props.visible,
    onMaskClick: props.onMaskClick
  }, React.createElement("div", {
    className: classNames(classPrefix, {
      [`${classPrefix}-title`]: true
    })
  }, props.title), React.createElement("div", {
    className: classPrefix + '-content'
  }, props.multiple ? React.createElement(React.Fragment, null, React.createElement(Checkbox.Group, {
    onChange: values => {
      setValue(values);
    },
    defaultValue: defaultValue
  }, React.createElement(List, null, props.source.map((item, index) => React.createElement(List.Item, {
    prefix: React.createElement("div", {
      onClick: e => e.stopPropagation()
    }, React.createElement(Checkbox, {
      block: true,
      value: item.value,
      ref: checkboxRefs[index]
    })),
    key: item.value,
    arrow: false,
    className: classPrefix + '-items',
    onClick: () => {
      var _a;
      (_a = checkboxRefs[index].current) === null || _a === void 0 ? void 0 : _a.toggle();
    }
  }, item.label)))), React.createElement(Button, {
    block: true,
    color: "primary",
    size: "middle",
    onClick: () => {
      props.onConfirm && props.onConfirm(value);
    }
  }, "\u786E \u5B9A")) : React.createElement(React.Fragment, null, React.createElement(Radio.Group, {
    value: value,
    defaultValue: defaultValue
  }, React.createElement(List, null, props.source.map((item, index) => React.createElement(List.Item, {
    key: item.value,
    arrow: false,
    onClick: () => {
      item.checked = true;
      const curValue = item.value;
      setValue(curValue);
      props.onConfirm && props.onConfirm(curValue);
    }
  }, React.createElement(Radio, {
    value: item.value
  }, item.label))))))));
}