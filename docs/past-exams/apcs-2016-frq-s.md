# AP 2016 FRQ Solutions

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [apcompsci.cn](http://apcompsci.cn/2019/03/14/ap%e8%ae%a1%e7%ae%97%e6%9c%ba2016%e5%b9%b4%e8%80%83%e8%af%95%ef%bc%9a%e4%b8%bb%e8%a7%82%e9%a2%98%e8%a7%a3%e7%ad%94/)

## 第一大题

### 第一问

列表的基本操作全来了一遍，了解`remove`会同时返回列表的元素是重要考点。

```java
public class RandomStringChooser
{
    private List<String> words;

    public RandomStringChooser(String[] wordArray)
    {
        words = new ArrayList<String>();

        for (String singleWord : wordArray)
        {
            words.add(singleWord);
        }
    }

    public String getNext()
    {
        if (words.size() > 0)
        {
            return words.remove((int)(Math.random() * words.size()));
        }
        return "NONE";
    }
}
```

### 第二问

考察继承和 constructor 中调用`super`，题目中给的`getSingleLetters`能够把参数从`String`转换成`String[]`。因为 AP 计算机科学课程大纲不包括`char`，所以这边把`String`当`char`用，`getNext`直接继承了父类。

```java
public RandomLetterChooser(String str)
{
    super(getSingleLetters(str));
}
```

## 第二大题

### 第一问

整道题都是考察`substring`和对索引的计算。

```java
public LogMessage(String message)
{
    int colon = message.indexOf(":");
    machineId = message.substring(0, colon);
    description = message.substring(colon + 1);
}
```

### 第二问

分四种情况讨论，出现在`description`末尾是最复杂的。索引减去一是因为要把空格算进去。

```java
public boolean containsWord(String keyword)
{
    if (description.equals(keyword))
    { return true; }
    if (description.indexOf(keyword + " ") == 0)
    { return true; }
    if (description.indexOf(" " + keyword + " ") != -1)
    { return true; }
    if (description.length() > keyword.length())
    {
        if ((description.substring(description.length() - keyword.length() - 1).equals(" " + keyword)))
        {
            return true;
        }
    }
    return false;
}
```

### 第三问

同样是考察`remove`会同时返回列表的元素，注意在循环的过程中有涉及到对`i`的修改，for-each 是不能做到这一点的，因而只能使用常规的`for`循环。

```java
public List<LogMessage> removeMessages(String keyword)
{
    List<LogMessage> removals = new ArrayList<LogMessage>();

    for (int i = 0; i < messageList.size(); i++)
    {
        if (messageList.get(i).containsWord(keyword))
        {
            removals.add(messageList.remove(i));
            i--;
        }
    }
    return removals;
}
```

## 第三大题

### 第一问

复杂布尔表达式的写法。

```java
private boolean toBeLabeled(int r, int c, boolean[][] blackSquares)
{
    return (!(blackSquares[r][c]) && (r == 0 || c == 0 || blackSquares[r - 1][c] || blackSquares[r][c - 1]));
}
```

### 第二问

二维数组简单遍历，对三种情况分别处理。

```java
public Crossword(boolean[][] blackSquares)
{
    puzzle = new Square[blackSquares.length][blackSquares[0].length];
    int num = 1;

    for (int r = 0; r < blackSquares.length; r++)
    {
        for (int c = 0; c < blackSquares[0].length; c++)
        {
            if (blackSquares[r][c])
            {
                puzzle[r][c] = new Square(true, 0);
            }
            else
            {
                if (toBeLabeled(r, c, blackSquares))
                {
                    puzzle[r][c] = new Square(false, num);
                    num++;
                }
                else
                {
                    puzzle[r][c] = new Square(false, 0);
                }
            }
        }
    }
}
```

## 第四大题

### 第一问

列表遍历和`String`的`length`。

```java
public static int totalLetters(List<String> wordList)
{
    int total = 0;

    for (String word : wordList)
    {
        total += word.length();
    }
    return total;
}
```

### 第二问

空格数除以空数，得到每个空的基本长度，注意是整数除法的应用。

```java
public static int basicGapWidth(List<String> wordList, int formattedLen)
{
    return (formattedLen - totalLetters(wordList)) / (wordList.size() - 1);
}
```

### 第三问

难点是在于`leftoverSpaces`的处理，可以说是两轮循环同时在进行。不要忘记最后一个词。

```java
public static String format(List<String> wordList, int formattedLen)
{
    String formatted = "";
    int gapWidth = basicGapWidth(wordList, formattedLen);
    int leftovers = leftoverSpaces(wordList, formattedLen);

    for (int w = 0; w < wordList.size() - 1; w++)
    {
        formatted = formatted + wordList.get(w);
        for (int i = 0; i < gapWidth; i++)
        {
            formatted = formatted + " ";
        }
        if (leftovers > 0)
        {
            formatted = formatted + " ";
            leftovers--;
        }
    }
    formatted = formatted + wordList.get(wordList.size() - 1);

    return formatted;
}
```