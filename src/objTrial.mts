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

import { Obj } from '@ts.adligo.org/io-obj-and-strings/dist/obj.mjs';
import { I_Classifiable, I_Equatable, I_Hashable} from '@ts.adligo.org/i_obj/dist/i_obj.mjs';
import { I_AssertionContext } from '../../i_tests4ts.ts.adligo.org/src/i_tests4ts.mjs';
import {ApiTrial, SourceFileTrial} from '../../tests4ts.ts.adligo.org/src/trials.mjs';
import { Test, TestParams } from '../../tests4ts.ts.adligo.org/src/tests4ts.mjs';

export class IsEq implements I_Equatable {
    equals(obj: any): boolean {
        if (obj == this) {
          return true;
        }
        if (obj == 'IsEq') {
          return true;
        }
        return false;
    }
}

export class NotEq {

}

export class ObjTrial extends ApiTrial {
  public static readonly CLAZZ_NAME = 'org.adligo.ts.io-obj-and-strings_tests.ObjTrial';
  public static new() {
      return new ObjTrial();
  }
  public static readonly testTypeGuards = new Test(ObjTrial.CLAZZ_NAME +
    '.testTypeGuards', (ac: I_AssertionContext) => {
    let isEq = new IsEq();
    ac.equals(isEq, isEq, "Same objects should be equal");
    ac.equals(isEq, 'isEq', "Same objects should be equal");
    ac.notSame(isEq, 'isEq', "These should NOT be the same.")
    let isEq2  = new IsEq();
    ac.notEquals(isEq, isEq2, "These should not be equal");

  });
  constructor() {
    super(ObjTrial.CLAZZ_NAME, [ObjTrial.testTypeGuards
    ]);
  }
}
