# Unit 2 Using Objects

## String 字符串

`String`属于"引用字符串"。创建字符串的代码如下：

```java
String slogan = "OhMyGod";
```

`OhMyGod`两边需要使用引号，确保它不是代码，而是字符串。

通过创建对象的方法创建字符串：

```java
String slogan = new String("OhMyGod");
```

### 连接字符串

两个字符串相连接，直接用`+`相连：

```java
public class HelloWorld {
    public static void main(String[] args) {
        String slogan1 = "OhMyGod";
        String slogan2 = "BuyIt";
        System.out.println(slogan1+slogan2);
    }
}
```

只有`+`两侧的`int`才可能被转化成`String`，以下是相连的几个情况：

```java
System.out.println(7+7);//输出14
System.out.println("7"+"7");//输出77
System.out.println(7+"7");//输出77
System.out.println("7"+7);//输出77
System.out.println(7+7+"7"+7);//输出1477
```

### 比较字符串

#### `.equals()`方法

```java
String slogan1 = "OhMyGod";
String slogan2 = "BuyIt";
System.out.println(slogan1.equals(slogan2));//输出false
```

`String`的比较只能用`.equals()`，不能用`==`。**注意：`.equals()`要加"s"。**

#### `.compareTo()`方法

```java
String c1 = "abandon";
String c2 = "cat";
System.out.println(c1.comapreto(c2));//输出负数
```

`.compareTo()`用来比较字符串的**字典顺序**。输出为负数则代表`c1`在`c2`前面，反之则表示`c1`在`c2`后面。当输出值为0的时候，`c1`与`c2`相等。

### 字符串的位数

假设现有字符串`abcdef`，则分别对应第0至5位。

### 字符串的其它方法

#### `length()`方法

`length()`方法返回一个`int`，表示字符串的长度。(字符串的实际长度=最后一位位数+1)

```java
String a = "691code";
System.out.println(a.length());//返回值7
```

#### `substring(int startindex)`方法

`substring(int startindex)`方法截取第`startindex`位开始到字符串结尾的字符串。

```java
String a = "691code";
System.out.println(a.substring(3));//返回值code
```

使用此方法不会改变原有的字符串`a`。

#### `substring(int startindex, int finishindex)`方法

`substring(int startindex, int finishindex)`方法截取第`startindex`位开始，在第`finishindex`位之前(不包括第`startindex`位)。

```java
String a = "691code";
System.out.println(a.substring(3, 6));//返回值cod
```

**直接截取到最后：**`substring(int startindex)`=`substring(int startindex, int string.length)`

**提取第`x`位上的字母：**`substring(x, x+1)`

#### `indexOf(String str)`方法

`indexOf(String str)`方法用来求`str`这个字符第一次出现在字符串上的位置。

```java
String a = "OhMyGodBuyItBuyIt";
System.out.println(a.indexof("BuyIt"));//返回值7
```

### 转义字符

| 转义字符 | 意义                                | ASCII码值（十进制） |
| -------- | ----------------------------------- | ------------------- |
|          |                                     |                     |
| `\b`     | 退格(BS) ，将当前位置移到前一列     | 008                 |
| `\f`     | 换页(FF)，将当前位置移到下页开头    | 012                 |
| `\n`     | 换行(LF) ，将当前位置移到下一行开头 | 010                 |
| `\r`     | 回车(CR) ，将当前位置移到本行开头   | 013                 |
| `\t`     | 水平制表(HT) （跳到下一个TAB位置）  | 009                 |
| `\v`     | 垂直制表(VT)                        | 011                 |
| `\\`     | 代表一个反斜线字符''\'              | 092                 |
| `\'`     | 代表一个单引号（撇号）字符          | 039                 |
| `\"`     | 代表一个双引号字符                  | 034                 |
| `\0`     | 空字符(NULL)                        | 000                 |
| `\ddd`   | 1到3位八进制数所代表的任意字符      | 三位八进制          |
| `\uhhhh` | 1到2位十六进制所代表的任意字符      | 二位十六进制        |

## Math类

### `Math.abs()`绝对值

```java
int x = -1025;
System.out.println(Math.abs(x));
```

### `Math.pow(base, exp)`幂方法

```java
int x = 2;
int a = 3;
System.out.println(Math.pow(2, 3));//输出值8.0
```

此方法返回值是一个`double`，返回值是8.0。

### `Math.sqrt()`平方根方法

```java
int x = 4;
System.out.println(Math.sqrt(x));//输出值2.0
```

此方法返回值是一个`double`，返回值是2.0。

### `Math.randon()`随机数方法

此方法随机返回一个0.0至1.0之间的任意一个数。

```java
double x = (highValue - lowValue + 1) * Math.random() + lowValue;
//求出lowValuw<=x<=highValue之间的随机数

double x = (highValue - lowValue) * Math.random() + lowValue;
//求出lowValuw<x<highValue之间的随机数

int x = (int)(Math.random()*k);
//求出0至k-1之间的随机数

int x = (int)((highValue - lowValue + 1) * Math.random() + lowValue);
//求出lowValuw<=x<=highValue之间的随机整数

double x = (int)((highValue - lowValue) * Math.random() + lowValue);
//求出lowValuw<x<highValue之间的随机整数
```

重点：`Math.random()>x`的概率是1-x；`Math.random()<x`的概率是x。

### 常量

| 表示名称 | 常量名称  | 值      |
| -------- | --------- | ------- |
| Math.PI  | 圆周率π   | 3.14159 |
| Math.E   | 自然常数e | 2.71828 |

### 公式表达

**一元二次方程求根公式：**<img src="https://latex.codecogs.com/gif.latex?{x_{1,2}}&space;=&space;{{&space;-&space;b&space;\pm&space;\sqrt&space;{{b^2}&space;-&space;4ac}&space;}&space;\over&space;{2a}}" title="{x_{1,2}} = {{ - b \pm \sqrt {{b^2} - 4ac} } \over {2a}}" />

代码：

```java
public class HelloWorld {
    public static void main(String[] args) {
        double a = 1;
        double b = 3;
        double c = 2;
        double root1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        double root2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        System.out.println(root1 + ", " + root2); //输出-1.0, -2.0
    }
}
```

## `Integer`类和`Double`类

将原始数据包装成引用类型的数据。

```java
Integer i = new Integer(3);
System.out.println(i.compareTo(new Integer(3)));//输出0
System.out.println(i.intValue);//输出3
System.out.println(i.equals(new Integer(3)));//输出true
```

`Integer`中也有一些常量可以使用：

| 常量名称            | 表示内容         |
| ------------------- | ---------------- |
| `Integer.MIN_VALUE` | 能存储的最小数字 |
| `Integer.MAX_VALUE` | 能存储的最大数字 |

`Double`的使用方法和`Integer`类似，使用方法同上。