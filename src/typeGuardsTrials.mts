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

import { Errors, Objs, Strings } from '@ts.adligo.org/type-guards/dist/typeGuards.mjs';
import { I_Classifiable, I_Equatable, I_Hashable} from '@ts.adligo.org/i_obj/dist/i_obj.mjs';
import { I_AssertionContext, I_Test } from '../../i_tests4ts.ts.adligo.org/src/i_tests4ts.mjs';
import {ApiTrial, SourceFileTrial} from '../../tests4ts.ts.adligo.org/src/trials.mjs';
import { Test, TestParams } from '../../tests4ts.ts.adligo.org/src/tests.mjs';

export class IsEq implements I_Equatable {
    equals(obj: any): boolean {
        if (obj == this) {
          return true;
        }
        if (obj == 'isEq') {
          return true;
        }
        return false;
    }
}

export class NotEq {

}

export class ErrorsTrial extends ApiTrial /* todo change to a SourceFileTrial */ {
  public static readonly CLAZZ_NAME = 'org.adligo.ts.type-guards.ErrorsTrial';

  /*
    public static hasCause(error: any):
  public static hasName(error: any):
  public static hasMessage(error: any):
  public static hasStack(error: any): boolean {
    public static isError(error: any): boolean {
   */
  testHasCauseFailures(ac: I_AssertionContext) {
    ac.isFalse(Errors.hasCause(null), "A null should not have a cause");
    ac.isFalse(Errors.hasCause(undefined), "A undefined should not have a cause");
    ac.isFalse(Errors.hasCause(new Error()), "A new empty Error should not have a cause");
  }

    testHasCauseSuccess(ac: I_AssertionContext) {
      let e = new Error();
      e.cause = new Error();
        ac.isTrue(Errors.hasCause(e), "The error e has a cause");
    }

  testHasNameFailures(ac: I_AssertionContext) {
    ac.isFalse(Errors.hasName(null), "A null should not have a name");
    ac.isFalse(Errors.hasName(undefined), "A undefined should not have a name");
    ac.isFalse(Errors.hasName({}), "A new empty object should not have a name");
  }

  testHasNameSuccess(ac: I_AssertionContext) {
    ac.isTrue(Errors.hasName(new Error()), "The error e has a name");
  }

  testHasMessageFailures(ac: I_AssertionContext) {
    ac.isFalse(Errors.hasMessage(null), "A null should not have a message.");
    ac.isFalse(Errors.hasMessage(undefined), "A undefined should not have a message.");
    ac.isFalse(Errors.hasMessage({}), "A new empty Object should not have a message.");
  }

  testHasMessageSuccess(ac: I_AssertionContext) {
    ac.isTrue(Errors.hasMessage(new Error('some message')), "The error e has a message.");
  }

  testHasStackFailures(ac: I_AssertionContext) {
    ac.isFalse(Errors.hasStack(null), "A null should not have a stack.");
    ac.isFalse(Errors.hasStack(undefined), "A undefined should not have a stack.");
    ac.isFalse(Errors.hasStack({}), "A new empty Object should not have a stack.");
  }

  testHasStackSuccess(ac: I_AssertionContext) {
    ac.isTrue(Errors.hasStack(new Error('some message')), "The error e has a stack.");
  }

  testIsErrorFailures(ac: I_AssertionContext) {
    ac.isFalse(Errors.hasStack(null), "A null should not have a stack.");
    ac.isFalse(Errors.hasStack(undefined), "A undefined should not have a stack.");
    ac.isFalse(Errors.hasStack({}), "A new empty Object should not have a stack.");
  }

  testIsErrorSuccess(ac: I_AssertionContext) {
    ac.isTrue(Errors.isAError(new Error()), "The error e has a stack.");
  }

  constructor() {
    super(TypeGuardTrial.CLAZZ_NAME);
  }
}

export class TypeGuardTrial extends ApiTrial {
  public static readonly CLAZZ_NAME = 'org.adligo.ts.type-guards.TypeGuardTrial';

  testTypeGuards(ac: I_AssertionContext) {
    let isEq = new IsEq();
    ac.equals(isEq, isEq, "Same objects should be equal");
    ac.equals(isEq, 'isEq', "Same objects should be equal");
    ac.notSame(isEq, 'isEq', "These should NOT be the same.")
    let isEq2  = new IsEq();
    ac.notEquals(isEq, isEq2, "These should not be equal");
    
    ac.isTrue(Objs.isEquatable(isEq), "The isEq object should be equatable.");
  }
  
  constructor() {
    super(TypeGuardTrial.CLAZZ_NAME);
  }
}
