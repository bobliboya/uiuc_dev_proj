# Unit 3 Boolean Expressions and if Statements

## Boolean Expressions 布尔表达式

### Relational Operators 关系运算符

| 运算符 | 含义     | 示例          |
| ------ | -------- | ------------- |
| `==`   | 相等     | 1==1 -> true  |
| `!=`   | 不等     | 1!=1 -> false |
| `>`    | 大于     | 2>1 -> true   |
| `<`    | 小于     | 1<2 -> false  |
| `>=`   | 大于等于 | 1>=1 -> true  |
| `<=`   | 小于等于 | 1<=1 -> false |

以上运算符左右两边各连接一个`int`或者`double`值，结果返回一个`boolean`值。

代码示例：

```Java
int x = 3;
int y = 9;
if(x <= y){//这里相当于是true

}
```

### Logical Operators 逻辑运算符

| 运算符 | 含义   | 示例                                       |
| ------ | ------ | ------------------------------------------ |
| `!`    | 非     | !exist -> 不存在                           |
| `&&`   | 与(且) | x>5 && x<10 -> x大于5且小于10              |
| `||`   | 或     | age <10 \|\| age >60 -> 年龄小于10或大于60 |

这三个逻辑运算符均运算`boolean`值，这些运算符作为整体也相当于`boolean`值。因此，利用多个运算符的布尔表达式是Compound Boolean Expressions。

对于逻辑运算符，`&&`当两个`boolean`**同时**为`true`时，整体才为`true`；`||`当两个`boolean`**任意一个**为`true`时，整体即为`true`。`!`用来获得`boolean`值所对应的**另外一个**值。

**Short-circuit 逻辑短路**： 对于`||`运算，只要有一个符合true，则计算机会自动跳过后面的计算。

### Precedence 优先级

1. `()`
2. `!`, `++`, `--`
3. `*`, `/`, `%`
4. `+`, `-`
5. `<`, `>`, `<=`, `>=`
6. `==`, `!=`
7. `&&`
8. `||`
9. `=`, `+=`, `-=`, `*=`, `/=`, `%=`

### De Morgan's Law 德摩根定律

!(A && B) = !A || !B

!(A || B) = !A && !B

## Control Structure 控制结构

### if ... if 语句

```java
if (/*boolean*/){
//statement
}
```

### if ... else语句

```java
if(/*boolean*/){
//statement
}else{
//statement
}
```

### Nested if 嵌套

```java
if(A){
	if(B){
	//statement
	}
}

if(A && B){
    //statement
}
//以上两段代码等效
```

### if ... else if ... else语句

代码从上往下执行，只要有一个为真即停止执行，不再判断后面。

### if ... if ... if语句

代码从上往下执行，只要有为真则执行，判断每一条。