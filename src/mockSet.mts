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

/**
 * Mock objects to test all permutations of Sets.isASet function for 100% code coverage.
 * 
 * Note: The current Sets.isASet function has inverted logic - it returns false when
 * Set methods exist and true when they don't exist. These mocks are designed to test
 * the current implementation as-is.
 */

// Basic falsy cases that should return false (first condition)
export const mockNull = null;
export const mockUndefined = undefined;
export const mockNumber = 123;
export const mockZero = 0;
export const mockNegativeNumber = -456;

export const setMockWithAllMethods = {
  clear: () => {},
  delete: (value: any) => true,
  entries: () => [][Symbol.iterator](),
  has: (value: any) => false,
  size: 0,
  union: (other: Set<any>) => new Set(),
  intersection: (other: Set<any>) => new Set(),
  difference: (other: Set<any>) => new Set(),
  symmetricDifference: (other: Set<any>) => new Set()
};


