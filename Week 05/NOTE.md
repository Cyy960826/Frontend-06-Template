学习笔记

* Proxy     
Proxy也就是代理，可以帮助我们完成很多事情，例如对数据的处理，对构造函数的处理，对数据的验证，说白了，就是在我们访问对象前添加了一层拦截，可以过滤很多操作，而这些过滤，可由自己来定义。     

  * 参数：    
target ：需要使用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。    
handler: 一个对象，其属性是当执行一个操作时定义代理的行为的函数(可以理解为某种触发器)。   
返回一个包含了代理对象本身和它的撤销方法的可撤销 Proxy 对象。   

  * 语法：  
let p = new Proxy(target, handler);  

  * 用一段简单的proxy来帮助理解和学习:  
```JavaScript
<script>  
  let test = {  
    name: "小红"  
  };  
  test = new Proxy(test, {  
    get(target, key) {  
      console.log('获取了getter属性');  
      return target[key];  
    }  
  });  
  console.log(test.name);  
</script>  
```

  * 上方的案例，首先创建了一个test对象，里面有name属性，然后使用Proxy将其包装起来，再返回给test，此时的test已经成为了一个Proxy实例，对其的操作，都会被Proxy拦截。  
  * Proxy有两个参数，第一个是target,也就是我们传入的*test对象,另一个则是handler，也就是传入的第二个参数，一个匿名对象。在handler中定义了一个名叫get的函数，当获取 test的属性时，则会触发此函数。  
  * 使用set来拦截一些操作，并将get返回值更改： 
```JavaScript
<script>  
    let xiaohong = {  
    name: "小红",  
    age: 15  
  };  
  xiaohong = new Proxy(xiaohong, {  
    get(target, key) {  
      let result = target[key];  
      //如果是获取 年龄 属性，则添加 岁字  
      if (key === "age") result += "岁";  
      return result;  
    },  
    set(target, key, value) {  
      if (key === "age" && typeof value !== "number") {  
        throw Error("age字段必须为Number类型");  
      }  
      return Reflect.set(target, key, value);  
    }  
  });  
  console.log(`我叫${xiaohong.name}  我今年${xiaohong.age}了`);  
  xiaohong.age = "aa";  
</script>  
```

  * 上方案例中定义了 xiaohong 对象，其中有 age 和 name 两个字段,在Proxy中的 get 拦截函数中添加了一个判断，如果是取 age 属性的值，则在后面添加 岁。在 set 拦截函数中判断了如果是更改 age 属性时，类型不是 Number则抛出错误。最后,正确的输出了结果。  


  * 而实现双向绑定，需要实现一个数据监听器Observer,能够对所有数据进行监听，如果有数据变动的话，拿到最新的值并通知订阅者Watcher，还需要实现一个指令解析器Compile，它能够对每个元素的指令进行扫描和解析，根据指令模板替换数据，以及绑定相对应的函数。需要实现一个Watcher, 它是链接Observer和Compile的桥梁，它能够订阅并收到每个属性变动的通知，然后会执行指令绑定的相对应的回调函数，从而更新视图。  


* range

input range对象是HTML5 中的新对象，可以通过使用 getElementById() 来访问 <input type="range"> 元素。  

当鼠标指针在指定的元素中移动时，就会发生 mousemove 事件。把鼠标移动一个像素，就会发生一次 mousemove 事件。  
当在元素上放松鼠标按钮时，会发生 mouseup 事件。与 click 事件不同，mouseup 事件仅需要放松按钮。当鼠标指针位于元素上方时，放松鼠标按钮就会触发该事件。    
