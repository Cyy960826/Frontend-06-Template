学习笔记
## first-letter和first-line设置float
作用对象不一样。first-letter作用于第一行的首字符，first-line作用于第一行的所有字符，first-line需要等到布局完成，所以从性能方面考虑，first-letter 可以设置 float 之类的，而 first-line 不行。

## CSS总论
* @charset https://www.w3.org/TR/css-syntax-3/
* @import https://www.w3.org/TR/css-cascade-4/
* @media https://www.w3.org/TR/css3-conditional/
* @page https://www.w3.org/TR/css-page-3/
* @counter-style https://www.w3.org/TR/css-counter-styles-3
* @keyframes https://www.w3.org/TR/css-animations-1/
* @font-face https://www.w3.org/TR/css-fonts-3/
* @supports https://www.w3.org/TR/css3-conditional/
* @namespace https://www.w3.org/TR/css-namespaces-3/

## 选择器语法
### 简单选择器
div svg|a 类型选择器 .cls #id [attr=value] :hover ::before
### 复合选择器
<简单选择器><简单选择器><简单选择器> (与的关系)  
 \* 或者 div 必须写在最前面
### 复杂选择器
* <复合选择器><复合选择器> :加空格,表达子孙
* <复合选择器>">"<复合选择器> :直接子孙
* <复合选择器>"~"<复合选择器> :邻居
* <复合选择器>"+"<复合选择器> :
* <复合选择器>"||"<复合选择器> :表字段 逗号是或关系
### 伪类和伪元素
#### 伪元素/伪对象
不存在在DOM文档中，是虚拟的元素，是创建新元素。代表某个元素的子元素，这个子元素虽然在逻辑上存在，但却并不实际存在于文档树中。  
用于向某些选择器添加特殊的效果。
#### 伪类
存在DOM文档中，逻辑上存在但在文档树中却无须标识的“幽灵”分类。  
用于将特殊的效果添加到某些选择器

伪类只能使用“：”
而伪元素既可以使用“:”，也可以使用“::”
因为伪类是类似于添加类所以可以是多个，而伪元素在一个选择器中只能出现一次，并且只能出现在末尾
