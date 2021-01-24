学习笔记
### XML与SGML
> SGML是指“标准通用标记语言”(Standard Generalized Markup Language), 是1986年出版发布的一个信息管理方面的国际标准(ISO 8879)，它是国际上定义电子文件结构和内容描述的标准，是一种非常复杂的文档的结构，主要用于大量高度结构化数据的防卫区和其他各种工业领域，利于分类和索引。  
SGML规定了在文档中嵌入描述标记的标准格式，指定了描述文档结构的标准方法，目前在WEB上使用的HTML格式便是使用固定标签集的一种SGML文档。由于SGML可以支持无数的文档结构类型，并且可以创建与特定的软硬件无关的文档，因此很容易与使用不同计算机系统的用户交换文档。同XML相比，定义的功能很强大，缺点是它不适用于Web数据描述，而且SGML软件价格非常价格昂贵。  

> 所谓的xml（eXtensible Markup Language）, 翻译成中文就是“可扩展标识语言“，在国内很多人理解xml为html的简单扩展，这实际上是一种误解。尽管xml同html关系非常密切。 它由万维网协会（W3C）创建，用来克服 HTML的局限。和 HTML 一样，XML 基于 SGML。XML 是为 Web 设计的。  XML实际上是Web上表示结构化信息的一种标准文本格式，它没有复杂的语法和包罗万象的数据定义。

#### 转义符
quot 、amp 、lt 、gt 、nbsp 、apos分别代表双引号、&符号、小于号、大于号、空格、单引号
#### 合法元素
* Elemenet: ...
* Text: text
* Comment:
* DocumentType: <!Doctype html
* ProcessingInstruction:
* CDATA: <![CDATA[]]

### 浏览器API
#### DOM API
* traversal系列，不建议用
* 节点 Document：文档根节点
DocumentFragment：文档片段
DocumentType:文档类型
Element：元素型节点
CharacterData：字符
* 导航类操作
parentNode , parentElement, childNodes , children
firstChild ,firstElementChild , lastChild, lastElementChild
nextSibling ,nextElementSibling, previousSibling, previousElementSibling
* 操作
appendChild, insertBefore, removeChild, replaceChild
* 高级操作
compareDocumentPosition: 比较两个节点中关系的函数
contains: 检查一个节点是否包含另一个节点的函数
isEqualNode: 检查两个节点是否完全相同
isSameNode :检查两个节点是否是同一个节点，实际上在JavaScript 中可以用“===”
cloneNode: 复制一个节点，如果传入参数true，则会连同子元素做深拷贝
* Event：冒泡与捕获

#### 事件API
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
#### Range API
 var range = new Range()   
 range.setStart(element,9)  
 range.setEnd(element,4)  
 var range = document.getSelection().getRangeAt(0)  
 
#### CSSOM
document.styleSheets
