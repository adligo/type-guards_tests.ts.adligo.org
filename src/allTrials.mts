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

import { I_Trial } from '../../i_tests4ts.ts.adligo.org/src/i_tests4ts.mjs';
import { ApiTrial } from '../../tests4ts.ts.adligo.org/src/trials.mjs';
import { AssertionContext } from '../../tests4ts.ts.adligo.org/src/assertions.mjs';
import { Test, TestParams } from '../../tests4ts.ts.adligo.org/src/tests.mjs';
import {ErrorsTrial, MapsTrial, ObjsTrial, 
  //SetsTrial, //wait for 2026
  StringsTrial, TypeGuardTrial} from './typeGuardsTrials.mjs';
import {SetsTrial} from './setsTrial.mjs';


export const ALL_TRIAL_MAP: Map<string, I_Trial> = new Map();
function addTrial(trials: I_Trial[]) {
  for (let trial of trials) {
    ALL_TRIAL_MAP.set((trial as any).getName(), trial);
  }
}
export const ALL_TRIALS: I_Trial[] = [
  new ErrorsTrial(), 
  new MapsTrial(), 
  new ObjsTrial(), 
  new SetsTrial(),
  new StringsTrial(), 
  new TypeGuardTrial()
]
addTrial(ALL_TRIALS);


Object.freeze(ALL_TRIAL_MAP);

