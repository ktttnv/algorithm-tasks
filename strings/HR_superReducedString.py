# https://www.hackerrank.com/challenges/reduced-string/problem

def superReducedString(s):
    stack = []
    
    for char in s:
        if len(stack) == 0 or char != stack[-1]:
            stack.append(char)
        else:
            stack.pop()

    return 'Empty String' if len(stack) == 0 else ''.join(stack)
  
