# AP 2015 FRQ Solutions

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [apcompsci.cn](http://apcompsci.cn/2019/03/18/ap%e8%ae%a1%e7%ae%97%e6%9c%ba2015%e5%b9%b4%e8%80%83%e8%af%95%ef%bc%9a%e4%b8%bb%e8%a7%82%e9%a2%98%e8%a7%a3%e7%ad%94/)

## 第一大题

### 第一问

标准的累加求和算法，for-each 可以稍微简化一点代码。

```java
public static int arraySum(int[] arr){
    int sum = 0;
    for (int elem : arr){
        sum += elem;
    }
    return sum;
}
```

### 第二问

同上，注意二维数组的本质是一维数组的数组。事实上因为涉及到索引，这里的循环用`for`会更加方便。

```java
public static int[] rowSums(int[][] arr2D){
    int[] sums = new int[arr2D.length];
    int rowNum = 0;
    for (int[] row : arr2D){
        sums[rowNum] = arraySum(row);
        rowNum++;
    }
    return sums;
}
```

### 第三问

嵌套循环，每行之间两两比较，`j = i + 1`是因为 (i, j) 比较过以后就不用再比 (j, i) 了。

```java
public static boolean isDiverse(int[][] arr2D){
    int[] sums = rowSums(arr2D);
    for (int i = 0; i < sums.length; i++){
        for (int j = i + 1; j < sums.length; j++){
            if (sums[i] == sums[j]){
                return false;
            }
        }
    }
    return true;
}
```

## 第二大题

注意根据题目条件`word`和`guess`长度相同，因此每个字符比一遍即可。

```java
public class HiddenWord
{
    private String word;

    public HiddenWord(String hWord)
    {
        word = hWord;
    }

    public String getHint(String guess){
        String hint = "";
        for (int i = 0; i < guess.length(); i++){
            if (guess.substring(i, i + 1).equals(word.substring(i, i + 1))){
                hint += guess.substring(i, i + 1);
            } else if (word.indexOf(guess.substring(i, i + 1)) != -1 ){
                hint += "+";
            } else {
                hint += "*";
            }
        }
        return hint;
    }
}
```

## 第三大题

### 第一问

简单的`ArrayList`遍历。

```java
public int getValueAt(int row, int col){
    for (SparseArrayEntry e : entries){
        if (e.getRow() ==  row && e.getCol() == col){
            return e.getValue();
        }
    }
    return 0;
}
```

### 第二问

使用`while`循环的原因是对于删除的元素，`i`不能递增，否则最终会超出`size`。要注意对后面列的处理和总列数的处理。

```java
public void removeColumn(int col){
    int i = 0;
    while (i < entries.size()){
        SparseArrayEntry e = entries.get(i);
        if (e.getCol() == col){
            entries.remove(i);
        } else if (e.getCol() > col){
            entries.set(i, new SparseArrayEntry(e.getRow(), e.getCol() - 1, e.getValue()));
            i++;
        } else {
            i++;
        }
    }
    numCols--;
}
```

第四大题
----

### 第一问

基本的`interface`，只写 method 签名即可。

```java
public interface NumberGroup
{
    boolean contains(int num);
}
```

### 第二问

`contains`需要与`interface`定义的一致。注意`Range`未必要实际储存每一个范围内的整数，只要`contains`能正常工作即可。

```java
public class Range implements NumberGroup
{
    private int min;
    private int max;

    public Range(int min, int max)
    {
        this.min = min;
        this.max = max;
    }

    public boolean contains(int num) {
        return num >= min && num <= max;
    }
}
```

### 第三问

送分题，一旦有`true`即返回。

```java
public boolean contains(int num){
    for (NumberGroup group : groupList){
        if (group.contains(num)){
            return true;
        }
    }
    return false;
}
```