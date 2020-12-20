# 学习笔记
## 浏览器工作原理
URL(HTTP) -> HTML(pase) -> DOM(css computing) -> DOM with CSS(layout) DOM with position(render) -> Bitmap

## 有限状态机
有限状态机,也称为FSM(Finite State Machine)，其在任意时刻都处于有限状态集合中的某一状态。当其获得一个输入字符时，将从当前状态转换到另一个状态，或者仍然保持在当前状态。  
在启动一个FSM时，首先必须将FSM置于“起始状态”，然后输入一系列字符，最终，FSM会到达“结束状态”或者“消亡状态”。

## HTTP网络七层协议
* ISO-OSI七层协议：应用 —— 表示 —— 会话 —— 传输 —— 网络 —— 数据链路 —— 物理层
* 对应：HTTP —— TCP —— Internet —— 4G、5G、Wi-Fi

## TCP/IP
* Request
  * POST/HTTP/0.1 (Request line: Method/path/http version)
  * Host:126.0.0.1 (headers 多行，到空行前)
  * Content-Type: application/x-www-form-urlencoded
  * 空行
  * field0=aaa&code=x%3D1 (body, \r\n 换行符)
* Response (一对一关系)
  * HTTP/1.1 200 OK (statusl line: Version/status code/ status text)
  * Content-Type: text/html (headers 多行，到空行前)
  * Date: Mon, 23 Dec 2019 06:46:19 GMT
  * Connection: keep-alive
  * Transfer-Encoding: chunked (node.js 默认格式)
  * 空行
  * 26 (16进制数字)
  * <html><body> Hello World
  * 0 (标志内容的结束)
  
  ### 过程
  HTTP 请求--send 函数--发送请求--ResponseParser--BodyParser
