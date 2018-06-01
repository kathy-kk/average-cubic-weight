
const FACTOR = 250;

const averageWeight = objects_of_category => {

  const weight_calculation = (width, length, height) => {
      return width * length * height / 1000000 * FACTOR;
  }
  const sum = objects_of_category.reduce(
    (sum, value) => {
      const size = value.size;
      const width = size.width;
      const length = size.length;
      const height = size.height;
      const weight = weight_calculation(width, length, height);
      return sum + weight;
    },0);
  const average = sum / objects_of_category.length;
  
  return average
};
export default averageWeight;
