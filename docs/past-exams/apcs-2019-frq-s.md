# AP 2019 FRQ Solutions

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [apcompsci.cn](http://apcompsci.cn/2019/08/27/ap%e8%ae%a1%e7%ae%97%e6%9c%ba2019%e5%b9%b4%e8%80%83%e8%af%95%ef%bc%9a%e4%b8%bb%e8%a7%82%e9%a2%98%e8%a7%a3%e7%ad%94/)

## 第一大题

### 第一问

考察标准`for`循环的使用和`if`条件判断，简单的累加计数。

```java
public static int numberOfLeapYears(int year1, int year2)
{
    int count = 0;
    for (int y = year1; y <= year2; y++)
    {
        if (isLeapYear(y))
        {
            count++;
        }
    }
    return count;
}
```

### 第二问

需要正确使用题目中给定的两个 method，考察取模运算`%`。

```java
public static int dayOfWeek(int month, int day, int year)
{
    int startDay = firstDayOfYear(year);
    int nthDay = dayOfYear(month, day, year);
    int returnDay = (startDay + nthDay - 1) % 7;
    return returnDay;
}
```

## 第二大题

送分题。需要正确实现活跃天数的逻辑，另一个重点是求平均数以及`int`与`double`除法的区分。

```java
public class StepTracker
{
    private int minSteps;
    private int totalSteps;
    private int numDays;
    private int numActiveDays;

    public StepTracker(int threshold)
    {
        minSteps = threshold;
        totalSteps = 0;
        numDays = 0;
        numActiveDays = 0;
    }

    public void addDailySteps(int steps)
    {
        totalSteps += steps;
        numDays++;
        if (steps >= minSteps)
        {
            numActiveDays++;
        }
    }

    public int activeDays()
    {
        return numActiveDays;
    }

    public double averageSteps()
    {
        if (numDays == 0)
        {
            return 0.0;
        }
        else
        {
             return (double) totalSteps / numDays;
        }
    }
}
```

## 第三大题

### 第一问

需要掌握数组遍历，`ArrayList`基本操作以及判断`String`相等。

```java
public ArrayList<String> getDelimitersList(String[] tokens)
{
    ArrayList<String> d = new ArrayList<String>();
    for (String str : tokens)
    {
        if (str.equals(openDel) || str.equals(closeDel))
        {
            d.add(str);
        }
    }
    return d;
}
```

### 第二问

分隔符是否匹配，可以通过累加计数的比较来实现。注意后分隔符比前分隔符多就应立即确认不配对而结束循环，否则 Example 2 会被误判。

```java
public boolean isBalanced(ArrayList<String> delimiters)
{
    int openCount = 0;
    int closeCount = 0;

    for (String str : delimiters)
    {
        if (str.equals(openDel))
        {
            openCount++;
        }
        else
        {
            closeCount++;
        }
        if (closeCount > openCount)
        {
            return false;
        }
    }
    if (openCount == closeCount)
    {
        return true;
    }
    else
    {
        return false;
    }
}
```

## 第四大题

### 第一问

基本的二维数组遍历和随机数。

```java
public LightBoard(int numRows, int numCols)
{
    lights = new boolean[numRows][numCols];

    for (int r = 0; r < numRows; r++)
    {
        for (int c = 0; c < numCols; c++)
        {
            double rnd = Math.random();
            lights[r][c] = rnd < 0.4;
        }
    }
}
```

### 第二问

继续考察取模运算`%`以及对题目中给定条件的构造实现。

```java
public boolean evaluateLight(int row, int col)
{
    int numOn = 0;

    for (int r = 0; r < lights.length; r++)
    {
        if (lights[r][col])
        {
            numOn++;
        }
    }

    if (lights[row][col] && numOn % 2 == 0)
    {
        return false;
    }
    if (!lights[row][col] && numOn % 3 == 0)
    {
        return true;
    }
    return lights[row][col];
}
```