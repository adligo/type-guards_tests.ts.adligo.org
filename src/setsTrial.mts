// slink_tests.ts.adligo.org/src/pathsTest.ts


/**
 * Copyright 2025 Adligo Inc / Scott Morgan
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Errors, isNil, Maps, Objs, Sets, Strings } from '@ts.adligo.org/type-guards/dist/typeGuards.mjs';
import { I_Classifiable, I_Equatable, I_Hashable} from '@ts.adligo.org/i_obj/dist/i_obj.mjs';
import { I_AssertionContext, I_Test } from '../../i_tests4ts.ts.adligo.org/src/i_tests4ts.mjs';
import {ApiTrial, SourceFileTrial} from '../../tests4ts.ts.adligo.org/src/trials.mjs';
import { Test, TestParams } from '../../tests4ts.ts.adligo.org/src/tests.mjs';
import {setMockWithAllMethods} from './mockSet.mjs';


// Objects with some Set methods as undefined and others defined
export const setMockWithUndefinedClear = {

};

export const setMockWithUndefinedDelete = {
  clear: () => {}
  //delete: undefined
};

export const setMockWithUndefinedEntries = {
  clear: () => {},
  delete: (value: any) => true
  //entries: undefined
};

export const setMockWithUndefinedHas = {
  clear: () => {},
  delete: (value: any) => true,
  entries: () => [][Symbol.iterator]()
  //has: undefined
};

export const setMockWithUndefinedSize = {
  clear: () => {},
  delete: (value: any) => true,
  entries: () => [][Symbol.iterator](),
  has: (value: any) => false
  //size: undefined
};

export const setMockWithUndefinedUnion = {
  clear: () => {},
  delete: (value: any) => true,
  entries: () => [][Symbol.iterator](),
  has: (value: any) => false,
  size: 0
  //union: undefined
};

export const setMockWithUndefinedIntersection = {
  clear: () => {},
  delete: (value: any) => true,
  entries: () => [][Symbol.iterator](),
  has: (value: any) => false,
  size: 0,
  union: (other: Set<any>) => new Set()
  //intersection: undefined
};

export const setMockWithUndefinedDifference = {
  clear: () => {},
  delete: (value: any) => true,
  entries: () => [][Symbol.iterator](),
  has: (value: any) => false,
  size: 0,
  union: (other: Set<any>) => new Set(),
  intersection: (other: Set<any>) => new Set()
  //difference: undefined
};

export const setMockWithUndefinedSymmetricDifference = {
  clear: () => {},
  delete: (value: any) => true,
  entries: () => [][Symbol.iterator](),
  has: (value: any) => false,
  size: 0,
  union: (other: Set<any>) => new Set(),
  intersection: (other: Set<any>) => new Set(),
  difference: (other: Set<any>) => new Set()
  //symmetricDifference: undefined
};

export class SetsTrial extends ApiTrial {
  public static readonly CLAZZ_NAME = 'org.adligo.ts.type-guards.SetsTrial';
/* wait for 2026
  testIsSetFailures(ac: I_AssertionContext) {
    ac.isFalse(Sets.isSet(null), "A null should not be a Set");
    ac.isFalse(Sets.isSet(undefined), "A undefined should not be a Set");
    ac.isFalse(Sets.isSet({}), "A new empty Object should not be a Set");
    ac.isFalse(Sets.isSet([]), "An array should not be a Set");
    ac.isFalse(Sets.isSet(123), "A number should not be a Set");
    ac.isFalse(Sets.isSet("string"), "A string should not be a Set");
  }

  testIsSetSuccess(ac: I_AssertionContext) {
    ac.isTrue(Sets.isSet(new Set()), "A new Set should be a Set");
    let set = new Set();
    set.add("value");
    ac.isTrue(Sets.isSet(set), "A Set with entries should be a Set");
  }
*/


  /**
   * Test specific edge cases for comprehensive coverage
   */
  testIsASetComplexFailures(ac: I_AssertionContext) {

    // Test individual Set method checks
    //alpha
    ac.isFalse(Sets.isASet(setMockWithUndefinedClear), "setMockWithUndefinedClear should return false");
    ac.isFalse(Sets.isASet(setMockWithUndefinedDelete), "setMockWithUndefinedDelete should return false");
    ac.isFalse(Sets.isASet(setMockWithUndefinedDifference), "setMockWithUndefinedDifference should return false");
    ac.isFalse(Sets.isASet(setMockWithUndefinedEntries), "setMockWithUndefinedEntries should return false");
    ac.isFalse(Sets.isASet(setMockWithUndefinedHas), "setMockWithUndefinedHas should return false");

    ac.isFalse(Sets.isASet(setMockWithUndefinedIntersection), "setMockWithUndefinedIntersection should return false");
    ac.isFalse(Sets.isASet(setMockWithUndefinedSize), "setMockWithUndefinedSize should return false");
    ac.isFalse(Sets.isASet(setMockWithUndefinedSymmetricDifference), "setMockWithUndefinedSymmetricDifference should return false");
    ac.isFalse(Sets.isASet(setMockWithUndefinedUnion), "setMockWithUndefinedUnion should return false");
  }

  testIsASetSimpleFailures(ac: I_AssertionContext) {
    // Test the first condition: null, undefined, number
    ac.isFalse(Sets.isASet(null), "null should return false (first condition)");
    ac.isFalse(Sets.isASet(undefined), "undefined should return false (first condition)");
    ac.isFalse(Sets.isASet(0), "number 0 should return false (first condition)");
    ac.isFalse(Sets.isASet(123), "positive number should return false (first condition)");
    ac.isFalse(Sets.isASet(-456), "negative number should return false (first condition)");

    // Test individual Set method checks
    ac.isFalse(Sets.isASet({ clear: () => { } }), "object with clear method should return false");
    ac.isFalse(Sets.isASet({ delete: () => true }), "object with delete method should return false");
    ac.isFalse(Sets.isASet({ entries: () => [] }), "object with entries method should return false");
    ac.isFalse(Sets.isASet({ has: () => false }), "object with has method should return false");
    ac.isFalse(Sets.isASet({ size: 0 }), "object with size property should return false");
    ac.isFalse(Sets.isASet({ union: () => new Set() }), "object with union method should return false");
    ac.isFalse(Sets.isASet({ intersection: () => new Set() }), "object with intersection method should return false");
    ac.isFalse(Sets.isASet({ difference: () => new Set() }), "object with difference method should return false");
    ac.isFalse(Sets.isASet({ symmetricDifference: () => new Set() }), "object with symmetricDifference method should return false");
  }

  testIsASetSuccess(ac: I_AssertionContext) {
    ac.isTrue(Sets.isASet(setMockWithAllMethods), "All functions exist, so it must be a Set, or no ;)");
  }
  
  constructor() {
    super(SetsTrial.CLAZZ_NAME);
  }
}

