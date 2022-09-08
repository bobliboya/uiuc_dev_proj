# AP 2013 FRQ Solutions

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [apcompsci.cn](http://apcompsci.cn/2019/03/20/ap%e8%ae%a1%e7%ae%97%e6%9c%ba2013%e5%b9%b4%e8%80%83%e8%af%95%ef%bc%9a%e4%b8%bb%e8%a7%82%e9%a2%98%e8%a7%a3%e7%ad%94/)

## 第一大题

### 第一问

考察对列表的循环遍历和字符串的相等比较。找到即返回，循环外返回`null`的模式。

```java
public DownloadInfo getDownloadInfo(String title){
    for(DonwloadInfo info : downloadList){
        if(info.getTitle().equals(title))
            return info;
    }
    return null;
}
```

### 第二问

同样是对列表的遍历以及在列表后追加元素。注意 for-each 不是对`downloadList`，因而可以在循环体中修改它。

```java
public void updateDownloads(List<String> titles){
    for(String title : titles){
        DownloadInfo info = getDownloadInfo(title);
        if(info)info.incrementTimesDownloaded();
        else downloadList.add(new DownloadInfo(title));
    }
}
```

## 第二大题

### 第一问

考察`Math.random`的使用。注意这个函数取到的是介于 0 和 1 之间的浮点数，需要熟练将其转换为所需的整数范围。

```java
public TokenPass(int playerCount){
    board = new int[playerCount};
    for(int i = 0; i < playerCount; i++){
        board[i] = 1 + (int) (10 * Math.random());
    }
    currentPlayer = (int) playerCount * Math.random();
}
```

### 第二问

解答并不是最简单的写法，但尽量还原了整个游戏步骤，也推荐在考试时用这个思路来写。使用取模运算来防止数组越界是一个很好的技巧。

```java
public void distributeCurrentPlayerTokens(){
    int token = board[currentPlayer];
    board[currentPlayer] = 0;
    int i = currentPlayer + 1;
    while(token > 0){
        board[i % board.length]++;
        token--;
        i++;
    }
}
```

## 第四大题

### 第一问

将一维数组转换为二维数组，需要对奇数行和偶数行进行不同的处理。索引的计算比较繁杂，务必要最后带回到题目中给的两个例子里试算一番。

```java
public SkyView(int numRows, int numCols, double[] scanned){
    view = double[numRows][numCols];
    for(int i = 0; i < scanned.length; i++)
        if((i / numCols) % 2 == 0)view[i / numCols][i % numCols]=scanned[i];
        else view[i / numCols][numCols - i % numCols - 1]=scanned[i];
}
```

### 第二问

本质上还是一个二维数组的遍历，需要掌握如何在循环中进行累加。

```java
public double getAverage(int startRow, int endRow, int startCol, int endCol){
    int count = 0;
    double sum = 0;
    for(int i = startRow; i <= endRow; i++){
        for(int j = startCol; j <= endCol; j++){
            sum += view[i][j];
            count++;
        }
    }
    return sum/count;
}
```