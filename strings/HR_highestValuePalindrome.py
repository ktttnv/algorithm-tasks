# https://www.hackerrank.com/challenges/richie-rich/problem

def highestValuePalindrome(s, n, k):
    min_changes = 0
    
    for i in range(n // 2):
        if s[i] != s[-1-i]:
            min_changes += 1
            
    if min_changes > k:
        return '-1'
    
    new_s = list(s)
    expensive_changes = k - min_changes
    
    nine = '9'
    
    for i in range(n // 2):
        if s[i] != s[-1-i]:
            if s[i] != nine and s[-1-i] != nine:
                if expensive_changes >= 1:
                    new_s[i] = nine
                    new_s[-1-i] = nine
                    expensive_changes -= 1
                else:
                    new_s[i] = max(s[i], s[-1-i])
                    new_s[-1-i] = max(s[i], s[-1-i])
            else:
                new_s[i] = nine
                new_s[-1-i] = nine
        elif s[i] != nine and expensive_changes >= 2:
            new_s[i] = nine
            new_s[-1-i] = nine
            expensive_changes -= 2
        
    if n % 2 == 1 and expensive_changes >= 1:
        new_s[n // 2] = nine

    return ''.join(new_s)
