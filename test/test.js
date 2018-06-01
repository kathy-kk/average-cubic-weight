import 'babel-polyfill'
import {expect} from 'chai';
import fetchData from '../src/fetchData';
import averageWeight from'../src/averageWeight';
const API_ENDPOINT_START = '/api/products/1';
const BASE_URL = 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com'

describe('fetchData', () => {
    it('should return an array of 4 objects when category is "Air Conditioners"', async () => {
         const objects_of_air_conditioners = await fetchData("Air Conditioners", BASE_URL, API_ENDPOINT_START);
         expect(objects_of_air_conditioners.length).to.be.equal(4);
    })
})
describe('averageWeight', () => {
    it('should return the weight of object when there is only one object in the array', () => {
       const sample = {
           size:{
               length: 40,
               width: 20,
               height: 30
           }
       }
       expect(averageWeight([sample])).to.be.equal(6)
   })
})