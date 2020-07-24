export const quickSort = (nums: number[]): number[] => {
  const results = _quickSort(nums, 0, nums.length - 1)
  return results
}

const _quickSort = (nums: number[], start: number = 0, end: number = 0): number[] => {
  if(start >= end) return nums

  const parted = partition(nums, start, end)

  _quickSort(nums, start, parted-1)
  _quickSort(nums, parted+1, end)

  return nums
}

const partition = (nums: number[], indexPivot: number = 0, pivot: number = 0): number => {
  for (let i = indexPivot; i < pivot; i++) {
    if(nums[i] < nums[pivot]) {
      swap(nums, i, indexPivot)
      indexPivot++
    }
  }
  
  swap(nums, indexPivot, pivot)
  // console.log(nums, "indexPivot: ", indexPivot, "pivot", pivot)
  return indexPivot
}

const swap = (nums:number[], a: number, b: number): void => {
  // console.log(nums, `swapping ${nums[a]} with ${nums[b]}`)
  const temp = nums[b]
  nums[b] = nums[a]
  nums[a] = temp
  // console.log(nums)
}