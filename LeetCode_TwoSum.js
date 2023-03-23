let twoSum = function(nums, target) {
  let sumsArr = [];
  let differences = [];
  for (const i of nums) {
    differences.push = target - i;
  }  
  console.log(differences);
  console.log(sumsArr);
  return(sumsArr);
};

twoSum([2,7,11,15], 9);