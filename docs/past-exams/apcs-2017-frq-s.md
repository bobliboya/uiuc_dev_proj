# AP 2017 FRQ Solutions

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [apcompsci.cn](http://apcompsci.cn/2019/03/12/ap%e8%ae%a1%e7%ae%97%e6%9c%ba2017%e5%b9%b4%e8%80%83%e8%af%95%ef%bc%9a%e4%b8%bb%e8%a7%82%e9%a2%98%e8%a7%a3%e7%ad%94/)

## 第一大题

### 第一问

考察取模和整数除法，以及在`ArrayList`的头部添加元素。注意按某个基（AP 计算机中目前都只出现十进制）将整数分解成数字算法的递归版本在多项选择中时有出现，需要掌握。

```java
public Digits(int num)
{
    digitList = new ArrayList<Integer>();
    if (num == 0)
    {
        digitList.add(new Integer(0));
    }

    while (num > 0)
    {
        digitList.add(0, new Integer(num % 10));
        num /= 10;
    }
}
```

### 第二问

考察对`ArrayList`元素的循环，注意循环条件需要比正常情况的少一。在循环中一旦不满足条件就直接`return`也是在 AP 计算机考试中常见的编程模式。

```java
public boolean isStrictlyIncreasing()
{
    for (int i = 0; i < digitList.size()-1; i++)
    {
        if (digitList.get(i).intValue() >= digitList.get(i+1).intValue())
        {
            return false;
        }
    }
    return true;
}
```

## 第二大题

送分题，考`interface`和一些面向对象编程的基本概念。

```java
public class MultPractice implements StudyPractice
{
    private int first;
    private int second;

    public MultPractice(int num1, int num2)
    {
        first = num1;
        second = num2;
    }

    public String getProblem()
    {
        return first + " TIMES " + second;
    }

    public void nextProblem()
    {
        second++;
    }
}
```

## 第三大题

### 第一问

需要正确使用题目中给出的 method，知道如何计算`String`的索引并应用`substring`进行裁剪。

```java
public void replaceNthOccurrence(String str, int n, String repl)
{
    int loc = findNthOccurrence(str, n);

    if (loc != -1)
    {
        currentPhrase = currentPhrase.substring(0, loc) + repl +
         currentPhrase.substring(loc + str.length());
    }
}
```

### 第二问

主要考察循环的正确用法以及对`n`的计算。

```java
public int findLastOccurrence(String str)
{
    int n = 1;
    while (findNthOccurrence(str, n+1) != -1)
    {
        n++;
    }
    return findNthOccurrence(str, n);
}
```

## 第四大题

### 第一问

遍历二维数组，送分题。`return`的模式再一次出现。

```java
public static Position findPosition(int num, int[][] intArr)
{
    for (int row=0; row < intArr.length; row++)
    {
        for (int col=0; col < intArr[0].length; col++)
        {
            if (intArr[row][col] == num)
            {
                return new Position(row, col);
            }
        }
    }
    return null;
}
```

### 第二问

再遍历一遍，创建一个 object 的二维数组很基本，必须掌握。

```java
public static Position[][] getSuccessorArray(int[][] intArr)
{
    Position[][] newArr = new Position[intArr.length][intArr[0].length];

    for (int row=0; row < intArr.length; row++)
    {
        for (int col=0; col < intArr[0].length; col++)
        {
            newArr[row][col] = findPosition(intArr[row][col]+1, intArr);
        }
    }
    return newArr;
}
```