class Solution:
  def countPrefixSuffixPairs(self, words):
    res = 0
    for i in range(len(words)):
      for j in range(i + 1, len(words)):
        s1, s2 = words[i], words[j]
        if s2.startswith(s1) and s2.endswith(s1):
          res += 1
    
    return res
        
