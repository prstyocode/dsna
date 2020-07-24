export const searchRange = (nums: number[], target: number): number[] => {
  let start = 0
  let end = nums.length - 1
  let results: number[] = [-1, -1]

  if(nums.length === 0) return results

  while (start < end) {

    let mid = Math.floor(start + ((end - start) / 2))

    if(nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  if(nums[start] === target) {
    results[0] = start
  } else {
    return results
  }

  end = nums.length - 1

  while (start < end) {

    let mid = Math.floor(start + ((end - start) / 2)) + 1

    if(nums[mid] > target) {
      end = mid - 1
    } else {
      start = mid
    }
  }

  results[1] = end
  
  return results
};