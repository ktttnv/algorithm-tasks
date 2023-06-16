# https://www.hackerrank.com/challenges/grading/problem

def gradingStudents(grades):
    return list(map((lambda x: x if x < 38 or x % 5 < 3 else x + 5 - x % 5), grades))
    
