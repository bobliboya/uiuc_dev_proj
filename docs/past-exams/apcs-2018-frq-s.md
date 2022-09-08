# AP 2018 FRQ Solutions

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [apcompsci.cn](http://apcompsci.cn/2019/03/08/ap%e8%ae%a1%e7%ae%97%e6%9c%ba2018%e5%b9%b4%e8%80%83%e8%af%95%ef%bc%9a%e4%b8%bb%e8%a7%82%e9%a2%98%e8%a7%a3%e7%ad%94/)

## 第一大题

### 第一问

考察标准`for`循环的使用和`if`条件判断。注意根据题目要求在位置为负时要直接终止模拟并返回`false`。

```java
public boolean simulate()
{
    int position = 0;
    for (int count = 0; count < maxHops; count++)
    {
        position += hopDistance();
        if (position >= goalDistance)
        {
            return true;
        }
        else if (position < 0)
        {
            return false;
        }
    }
    return false;
}
```

### 第二问

送分题，唯一的难点可能只是在最后的转换为浮点除法上了。

```java
public double runSimulations(int num)
{
    int countSuccess = 0;

    for (int count = 0; count < num; count++)
    {
        if(simulate())
        {
            countSuccess++;
        }
    }
    return (double)countSuccess / num;
}
```

## 第二大题

### 第一问

考察循环嵌套，重点是循环的截止条件，不要让单词和自己组成`WordPair`。

```java
public WordPairList(String[] words)
{
    allPairs = new ArrayList<WordPair>();
    for (int i = 0; i < words.length-1; i++)
    {
        for (int j = i+1; j < words.length; j++)
        {
            allPairs.add(new WordPair(words[i], words[j]));
        }
    }
}
```

### 第二问

`String`的`equals`一直是重要考点之一。

```java
public int numMatches()
{
    int count = 0;
    for (WordPair pair: allPairs)
    {
        if (pair.getFirst().equals(pair.getSecond()))
        {
            count++;
        }
    }
    return count;
}
```

## 第三大题

`interface`概念、基本的 constructor 写法以及布尔表达式。

```java
public class CodeWordChecker implements StringChecker
{
    private int minLength;
    private int maxLength;
    private String notAllowed;

    public CodeWordChecker(int minLen, int maxLen, String symbol)
    {
        minLength = minLen;
        maxLength = maxLen;
        notAllowed = symbol;
    }

    public CodeWordChecker(String symbol)
    {
        minLength = 6;
        maxLength = 20;
        notAllowed = symbol;
    }

    public boolean isValid(String str)
    {
        return str.length() >= minLength && str.length() <= maxLength &&
            str.indexOf(notAllowed) == -1;
    }
}
```

## 第四大题

### 第一问

操作二维数组，注意列的长度是二维数组第一级的长度即行数（例如对于一个 5 行的矩阵，每一列有 5 个元素）。同理行的长度则是二维数组第二级的长度即列数，一般可用`arr2D[0].length`求得。

```java
public static int[] getColumn(int[][] arr2D, int c)
{
    int[] result = new int[arr2D.length];
    for (int r = 0; r < arr2D.length; r++)
    {
        result[r] = arr2D[r][c];
    }
    return result;
}
```

### 第二问

先判断有没有重复值，然后对每一行及每一列进行测试。考察的重点是取得行和列的一维数组（对于列使用上一问写的 method），以及取得行数和列数。

原则上不用把第一行和自己进行测试，因而`r`从`1`开始。但是测了的话应该也不会影响结果。

```java
public static boolean isLatin(int[][] square)
{
    if (containsDuplicates(square[0]))
    {
        return false;
    }
    for (int r = 1; r < square.length; r++)
    {
        if (!hasAllValues(square[0], square[r]))
        {
            return false;
        }
    }
    for (int c = 0; c < square[0].length; c++)
    {
        if (!hasAllValues(square[0], getColumn(square, c)))
        {
        return false;
        }
    }
    return true;
}
```