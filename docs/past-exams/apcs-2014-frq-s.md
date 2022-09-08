# AP 2014 FRQ Solutions

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [apcompsci.cn](http://apcompsci.cn/2019/03/20/ap%e8%ae%a1%e7%ae%97%e6%9c%ba2014%e5%b9%b4%e8%80%83%e8%af%95%ef%bc%9a%e4%b8%bb%e8%a7%82%e9%a2%98%e8%a7%a3%e7%ad%94/)

## 第一大题

### 第一问

模式是一个字符一个字符构造新字符串，难点是在于写条件，索引处理以及最后的补齐。

```java
public static String scrambleWord(String word){
    int current = 0;
    String result = "";
    while (current < word.length() - 1){
        if (word.substring(current, current + 1).equals("A") &&
                !word.substring(current + 1, current + 2).equals("A")){
            result += word.substring(current + 1, current + 2);
            result += "A";
            current += 2;
        }
        else {
            result += word.substring(current, current + 1);
            current++;
        }
    }
    if (current < word.length()){
        result += word.substring(current);
    }
    return result;
}
```

### 第二问

基本的`List`操作，因为涉及到删除，所以不能用 for-each 且需要分情况处理索引。

```java
public static void scrambleOrRemove(List<String> wordList){
    int index = 0;
    while (index < wordList.size()){
        String word = wordList.get(index);
        String scrambled = scrambledWord(word);
        if (word.equals(scrambled)){
            wordList.remove(index);
        }
        else {
            wordList.set(index, scrambled);
            index++;
        }
    }
}
```

## 第三大题

### 第一问

简单的二维数组遍历，注意顺序按题意不是 row-major order 而是 column-major order。

```java
public SeatingChart(List<Student> studentList, int rows, int cols){
    seats = new Student[rows][cols];
    for (int col = 0; col < cols; col++){
        for (int row = 0; row < rows; row++){
            if (studentIndex < studentList.size()){
                seats[row][col] = studentList.get(studentIndex);
                studentIndex++;;
            }
        }
    }
}
```

### 第二问

注意第二重循环的截止条件，循环体中涉及到布尔表达式的短路求解。

```java
public int removeAbsentStudents(int allowedAbsences){
    int count = 0;
    for (int row = 0; row < seats.length; row++){
        for (int col = 0; col < seats[0].length; col++){
            if (seats[row][col] != null &&
                    seats[row][col].getAbsenceCount > allowedAbsences){
                seats[row][col] = null;
                count++;
            }
        }
    }
    return count;
}
```

## 第四大题

注意 constructor 三个参数的顺序是规定好的，比较价格用笨办法就好。

```java
public class Trio implements MenuItem{
    private Sandwich sandwich;
    private Salad salad;
    private Drink drink;

    public Trio(Sandwich s, salad sal, Drink d){
        sandwich = s;
        salad = sal;
        drink = d;
    }

    public String getName(){
        return sandwich.getName() + "/" + salad.getName() + "/" + drink.getName() + " Trio";
    }

    public double getPrice(){
        double sandwichPrice = sandwich.getPrice();
        double saladPrice = salad.getPrice();
        double drinkPrice = drink.getPrice();
        if (sandwichPrice <= saladPrice && sandwichPrice <= drinkPrice)
            return saladPrice + drinkPrice;
        else if (saladPrice <= sandwichPrice && saladPrice <= drinkPrice)
            return sandwichPrice + drinkPrice;
        else
            return sandwichPrice + saladPrice;
    }
}
```