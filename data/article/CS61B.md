
## 实验总结

[[Gitlet]]



### lec26

#### Tries

Store the data whose keys are String. 

特点：
-   Every node stores only one letter.
-   Nodes can be shared by multiple keys.

![[Pasted image 20230308105744.png]]

contains(“sam”):**true, blue node**
contains(“sa”):**false, white node**
contains(“saq”):**false, fell off tree**

Two ways to have a search “miss”:
-   If the final node is white.    
-   If we fall off the tree, e.g. contains(“sax”).

Tries can also be maps：加上一个value就可以形成<key, value>的map

#### Trie Implementation and Performance

```java
public class TrieSet {
  private static final int R = 128; // ASCII
  private Node root; // root of trie
  private static class Node { 
    private boolean isKey;   
    private DataIndexedCharMap<Node> next;
    private Node(char c, boolean b, int R) {
       isKey = b;
       next = new DataIndexedCharMap<>(R); //将创建长度为R的数组，数组中的元素指向子节点。因此不需要在节点本身存储char ch，因为可以通过字母的ASCII值在next数组中直接找到下一个节点
    }
 }
}
```

in terms of L, the length of the key:

-   Add: Θ(L)    
-   Contains: O(L)

缺点：R的大小太大，导致每个节点开辟了一个长度很长的数组，浪费了很多内存

#### Alternate Child Tracking Strategies

对于next所使用的DataIndexedCharMap，可以替换为Hash-Table或BST
![[Pasted image 20230308203653.png]]
![[Pasted image 20230308203712.png]]

Using a BST or a Hash Table will take slightly more time.
-   DataIndexedCharMap is Θ(1).
-   BST is O(log R), where R is size of alphabet.
-   Hash Table is O(R), where R is size of alphabet.

#### Trie String Operations

Examples:

-   Finding the longest prefix of a string: longestPrefixOf(“sample”)    
	-   Result: sam
-   Finding all keys that match a given prefix: keysWithPrefix(“sa”)
	- Result: \[sad, sam, same, sap]
![[Pasted image 20230308204600.png]]

#### Autocomplete

![[Pasted image 20230308210333.png]]
带有value的Tries，输入一些字符时，将返回value值最高的几个结果
但是当输入的字符过少时，可能collecting billions of results only to keep 10，这样造成性能极大的浪费。
改进的算法是，can stop when top 3 matches are all better than best remaining(use PQ)
更高效的autocomplete: merge nodes that are redundant

### lec27 software engineering I

#### Complexity Defined

As real programs are worked on, they gain more features and complexity.But our most important goal is to keep our software simple.

There are two approaches to managing complexity:
-   Making code simpler and more obvious.
	-   Eliminating special cases, e.g. sentinel nodes.
-   Encapsulation into modules.
	-   In a modular design, creators of one “module” can use other modules without knowing how they work.

Seeking Obvious Code through Decomposition

### lec28

#### 拓扑排序Topological Sorting

-   Record DFS postorder in a list.    
-   Topological ordering is given by the reverse of that list (reverse postorder).

![[Pasted image 20230310200025.png]]


#### Shortest Paths on DAGs

**Dijkstra’s algorithm**

![[Pasted image 20230310200113.png]]

If we allow negative edges, Dijkstra’s algorithm can fail.

个人理解：该算法是不断计算到达源点集合最短边，并把对应的点的距离标上，如果遇到了负数边，且该边的起点在比较后期才被找到，这意味着，有很多可能因为这条负边而更短到达的点早已加入到源点集合中，不会因为这条负边更新这些点的新距离，导致算法出错。而采用拓扑排序能保证，在算这个点的距离的时候，所有能抵达这个点的点的距离都被算完，因此能保证这个点距离的最短性和正确性


#### Longest Paths

无法解决的问题，最著名的算法的时间复杂度是指数级

但是可以通过把所有的距离加上负号，转换为shortest paths，在找到结果后，再把负号去掉，即可得到最长路径

DAG-SPT（dag shortest path tree) is used to solve DAG-LPT, we say that "DAG-LPT reduces to DAG-SPT"  like "climing a hill" reduces to "riding a ski lift"

Reduction：

![[Pasted image 20230310201532.png]]

### lec29 Sorting 1

在Java中，排序关系通常由**compareTo or compare methods**给出

```java
import java.util.Comparator;
public class LengthComparator implements Comparator<String> {
  public int compare(String x, String b) {
       return x.length() - b.length();
  }
}
```

#### Selection Sort

-   Find smallest item.    
-   Swap this item to the front and ‘fix’ it.
-   Repeat for unfixed items until all items are fixed.

-   Θ(N2) time if we use an array (or similar data structure).

#### Naive Heapsort: Leveraging a Max-Oriented Heap

Naive heapsorting N items: 
-   Insert all items into a max heap, and discard input array. Create output array.
-   Repeat N times:
	-   Delete largest item from the max heap.
	-   Put largest item at the end of the unused part of the output array.

##### Runtime Analysis

Use the magic of the heap to sort our data.
-   Getting items into the heap O(N log N) time.
-   Selecting largest item: Θ(1) time.
-   Removing largest item: O(log N) for each removal.

**Overall runtime is O(N log N) + Θ(N) + O(N log N) = O(N log N)**

**Memory usage is Θ(N) to build the additional copy of all of our data.**

可以构造一种算法，减少这个空间复杂度，仅在原数组的基础上进行堆排，不需要构建一个额外的数组，数组构建堆的过程就是从最后一个元素开始，不断把该元素下沉（sink），最后在原数组的位置得到一个堆，再通过该堆进行排序即可

#### Mergesort

-   Split items into 2 roughly even pieces.    
-   Mergesort each half (steps not shown, this is a recursive algorithm!)
-   Merge the two sorted halves to form the final result.

#### Insertion Sort

对于比较有序的数组，时间比较快

#### Shell’s Sort

-   nstead of comparing adjacent items, compare items that are one stride length h apart.  
-   Start with large stride, and decrease towards 1.
-   Example: h = 7, 3, 1.

