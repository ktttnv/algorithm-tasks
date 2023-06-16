# https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem

def isValid(s):
    frequencies = {}
    
    for char in s:
        if frequencies.get(char) == None:
            frequencies[char] = 1
        else:
            frequencies[char] = frequencies.get(char) + 1

    first_value = 0
    first_value_count = 0
    second_value = 0
    second_value_count = 0
    
    for value in frequencies.values():
        if first_value == value:
            first_value_count += 1
        elif second_value == value:
            second_value_count += 1
        elif first_value == 0:
            first_value = value
            first_value_count = 1
        elif second_value == 0:
            second_value = value
            second_value_count = 1
        else:
            return 'NO'
            
    if second_value_count > 1:
        return 'NO'
    
    return 'YES'
