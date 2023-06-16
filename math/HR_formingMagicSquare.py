# https://www.hackerrank.com/challenges/magic-square-forming/problem

magic_nums1 = [8, 3, 4, 9, 2, 7, 6, 1]
magic_nums2 = [8, 1, 6, 7, 2, 9, 4, 3]

def calculateCost(nums, shift, magic_nums):
    cost = 0
    
    for i in range(8):
        cost += abs(nums[i] - magic_nums[(i + shift) % 8])
    
    return cost


def formingMagicSquare(s):
    border_nums = [s[0][0], s[0][1], s[0][2], s[1][2], s[2][2], s[2][1], s[2][0], s[1][0]]
    
    min_cost = -1
    
    for i in range(0, 8, 2):
        cur_cost = calculateCost(border_nums, i, magic_nums1)
        if min_cost == -1 or cur_cost < min_cost:
            min_cost = cur_cost

    for i in range(0, 8, 2):
        cur_cost = calculateCost(border_nums, i, magic_nums2)
        if cur_cost < min_cost:
            min_cost = cur_cost
            
    return min_cost + abs(s[1][1] - 5)
  
