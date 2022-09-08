# Unit 1 Primitive Types

## 三种基本变量

| 名称    | 用途           | 举例         |
| ------- | -------------- | ------------ |
| int     | 存储**整数**   | 3, 56, -9    |
| double  | 存储**小数**   | 10.25, -58.9 |
| boolean | 存储**布尔值** | true, false  |



### int整数变量

`int`用来存储整数，如0，25，-9等。范围是-2^32^至2^31^。创建整数变量的代码：

```java
int height = 180;
```

`int`指**数据类型**；`height`是"identifier"就是**变量名**；`=`是**赋值**操作；`;`是英文分号，表示一行代码写完

### double浮点数变量

创建浮点数变量的代码：

```java
double weight = 103.5;
```

仅只有`double`变量可以存储小数。

### boolean布尔变量

创建布尔型变量的代码：

```java
boolean exist = false;
```

布尔型变量只能存在这两种状态，及`true`或`false`。

## 变量命名注意事项

1. 可以包含大小写字母，数字，下划线；
2. 不能数字开头；
3. 不能使用关键词命名，例如`int`，`double`等等；
4. 变量名要具有意义，例如`height`；
5. 可以使用驼峰命名法(Camel-Case)，例如`playerScore`；
6. 区分大小写。

## 变量的创建和赋值/更改变量的值

```java
int height = 180;
```

一般情况下， 变量的赋值是将右边赋给左边。使用`=`表示“赋值”，使用`==`表示“相等”。

### 变量赋值给变量

对于`int`的赋值，右边既可以是数字也可是变量。

```java
int y = 10;
int x = y;
//x的值是10
```

### 分开创建和赋值

```java
int height; //声明
height = 180; //赋值
```

不能重复声明已经被声明的变量，但是赋值可以多次进行。

### 更改变量的值

```java
int height = 180; //给height赋值为180
height = 185; //将height重新赋值为185
```

#### 交换算法

现有变量`x`一个，变量`y`一个，交换他们的值。

```java
int x = 5;
int y = 10;
int temp = x;//声明一个新变量temp
x = y;
y = temp;
```

如果直接交换，会丢掉`x`和`y`的初始值，所以必须先新建一个变量`temp`作为临时变量。

## 输出语句

输出的语句是`System.out.printin()`，括号中放入变量名。

```java
public class HelloWorld {
    public static void main(String[] args) {
        int height = 180;
        System.out.println(height);
    }
}
```

输出语句：

```
180
```
`println`和`print`的区别如下：

| 语句名称             | 输出效果   |
| -------------------- | ---------- |
| `System.out.println` | 换行输出   |
| `System.out.print`   | 不换行输出 |

## 一般运算

### 运算符

| 符号 | 用途     | 举例   |
| ---- | -------- | ------ |
| `+`  | 加       | 1+1=2  |
| `-`  | 减       | 1-1=0  |
| `*`  | 乘       | 1*2=2  |
| `/`  | 除       | 2/2=1  |
| `%`  | 求余     | 5%2=1  |
| `++` | 自增(+1) | 1++=2  |
| `--` | 自减(-1) | 1--=0  |
| `+=` | 自增数   | 1+=3=4 |
| `-=` | 自减数   | 4-=3=1 |

### 加减乘除运算

```java
int height = 180;
height = height + 5; 
System.out.println(height);//最终输出185
```

### Remainder求余计算

```java
int x = 20;
int y = 3;
System.out.println(x % y);//最终输出2
```

#### 分辨奇偶性

```java
public class HelloWorld {
    public static void main(String[] args) {
        int x = 5;
        if (x % 2 == 0) {
            System.out.println("even");
        } else {
            System.out.println("odd");//输出odd
        }
    }
}
```

如果整数`x`除以2为0，则输出偶数；反之则输出奇数。

#### 提取个位数

```java
public class HelloWorld {
    public static void main(String[] args) {
        int x = 524;
        int y;
        y = x % 10;
        System.out.println(y); //输出值为4
    }
}
```

对于某数字`x`，除以10的余数就是它的各位数字。

#### 周期性问题

对于正整数`x`，`x % 7`可以获得一个0至6之间的周期数。

假设今天是周一，那么x天后是周几？这就可以用`(x%7)+1`获得结果。若`x`是3，则(x%7)+1就是4，即距今天三天后是周四。如果`x`是20，则(x%7)+1=7，即20天后是周日。

### 自增自减 Increment/Decrement

| 自增自减符 | 等效于  |
| ---------- | ------- |
| `x++`      | `x=x+1` |
| `x--`      | `x=x-1` |
| `x+=y`     | `x=x+y` |
| `x-=y`     | `x=x-y` |

```java
int inc = 10;
inc++; //inc的值是11
```

### 计算优先级

先计算括号内，再乘除求余，最后加减。

## 计算浮点数

### 强制数据转换

- `int/int`得`int`
- `int/double`得`double`
- `double/int` 得`double`
- `(double)int/int`得`double`
- `int/(double)int`得`double`
- `(double)(int/int)`得不准确的`double`

`int`转`double`直接后面加"".0"；`double`转`int`则是去掉小数点。

#### 自动四舍五入

```java
public class HelloWorld {
    public static void main(String[] args) {
        double x = 36.25;
        int y = (int) (x + 0.5);
        System.out.println(y);//输出四舍五入以后的值
    }
}
```

### 舍入误差 Round-off Error

CSA 考试对于round off error 考察很浅，只考单选只要求考生知道round off error 这回事即可。如果桌道题满足了下面三个条件：

1. 题目里面有 double（注意不能是int），
2. 加减乘除或利用Math 类方法运算了double，
3. 选项里面有 round off error 字熊，那么八九不离十这题考查的就是round off error，你就选 round off error 就对了。

## Constant 常量

在变量之前冠以`final`即将变量转化为常量。常量只能声明一次，赋值一次。例如，`monthsInYear = 12`表示一年中有12个月。

## 进制

### Decimal Base 十进制

### Hexadecimal 十六进制

| 字母 | 数字 | 字母 | 数字 |
| ---- | ---- | ---- | ---- |
| A    | 10   | D    | 13   |
| B    | 11   | E    | 14   |
| C    | 12   | F    | 15   |

### Binary 二进制

### 进制转换

#### N进制转10进制

第M位=N^M-1^

#### 10进制转N进制

除以N倒取余