export const binarySearch = (nums: number[], target: number): number => {
  let result: number = -1;
  let low: number = 0
  let high: number = nums.length - 1
  
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)
    if(nums[mid] < target) {
      low = mid + 1
    } else {
      high = mid
    }

    if(nums[mid] === target) result = mid
  }
  return result
}