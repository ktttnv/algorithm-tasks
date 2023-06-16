# https://www.hackerrank.com/challenges/extra-long-factorials/problem

def extraLongFactorials(n):
    ans = 1
    
    for num in range(1, n + 1):
        ans *= num
        
    print(ans)
    
