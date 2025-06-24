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

export class IsEq2 {
    equals(obj: any): boolean {
        if (obj == this) {
          return true;
        }
        if (obj == 'isEq2') {
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


export class MapsTrial extends ApiTrial {
  public static readonly CLAZZ_NAME = 'org.adligo.ts.type-guards.MapsTrial';

  testIsMapFailures(ac: I_AssertionContext) {
    ac.isFalse(Maps.isMap(null), "A null should not be a Map");
    ac.isFalse(Maps.isMap(undefined), "A undefined should not be a Map");
    ac.isFalse(Maps.isMap({}), "A new empty Object should not be a Map");
    ac.isFalse(Maps.isMap([]), "An array should not be a Map");
    ac.isFalse(Maps.isMap(123), "A number should not be a Map");
    ac.isFalse(Maps.isMap("string"), "A string should not be a Map");
  }

  testIsMapSuccess(ac: I_AssertionContext) {
    ac.isTrue(Maps.isMap(new Map()), "A new Map should be a Map");
    let map = new Map();
    map.set("key", "value");
    ac.isTrue(Maps.isMap(map), "A Map with entries should be a Map");
  }

  constructor() {
    super(MapsTrial.CLAZZ_NAME);
  }
}

export class ObjsTrial extends ApiTrial {
  public static readonly CLAZZ_NAME = 'org.adligo.ts.type-guards.ObjsTrial';

  testIsClassifiableFailures(ac: I_AssertionContext) {
    ac.isFalse(Objs.isClassifiable(null), "A null should not be classifiable");
    ac.isFalse(Objs.isClassifiable(undefined), "A undefined should not be classifiable");
    ac.isFalse(Objs.isClassifiable({}), "A new empty Object should not be classifiable");
    ac.isFalse(Objs.isClassifiable(123), "A number should not be classifiable");
  }

  testIsClassifiableSuccess(ac: I_AssertionContext) {
    let classifiable = { getClass: () => "TestClass" };
    ac.isTrue(Objs.isClassifiable(classifiable), "An object with getClass method should be classifiable");
  }

  testIsEquatableFailures(ac: I_AssertionContext) {
    ac.isFalse(Objs.isEquatable(null), "A null should not be equatable");
    ac.isFalse(Objs.isEquatable(undefined), "A undefined should not be equatable");
    ac.isFalse(Objs.isEquatable({}), "A new empty Object should not be equatable");
    ac.isFalse(Objs.isEquatable(123), "A number should not be equatable");
  }

  testIsEquatableSuccess(ac: I_AssertionContext) {
    ac.isTrue(Objs.isEquatable(new IsEq()), "An IsEq object should be equatable");
    ac.isTrue(Objs.isEquatable(new IsEq2()), "An IsEq object should be equatable");
  }

  testIsHashableFailures(ac: I_AssertionContext) {
    ac.isFalse(Objs.isHashable(null), "A null should not be hashable");
    ac.isFalse(Objs.isHashable(undefined), "A undefined should not be hashable");
    ac.isFalse(Objs.isHashable({}), "A new empty Object should not be hashable");
    ac.isFalse(Objs.isHashable(123), "A number should not be hashable");
  }

  testIsHashableSuccess(ac: I_AssertionContext) {
    let hashable = { hashCode: () => 42 };
    ac.isTrue(Objs.isHashable(hashable), "An object with hashCode method should be hashable");
  }

  constructor() {
    super(ObjsTrial.CLAZZ_NAME);
  }
}

export class StringsTrial extends ApiTrial {
  public static readonly CLAZZ_NAME = 'org.adligo.ts.type-guards.StringsTrial';

  testIsI_StringFailures(ac: I_AssertionContext) {
    ac.isFalse(Strings.isI_String(null), "A null should not be an I_String");
    ac.isFalse(Strings.isI_String(undefined), "A undefined should not be an I_String");
    ac.isFalse(Strings.isI_String({}), "A new empty Object should not be an I_String");
    ac.isFalse(Strings.isI_String(123), "A number should not be an I_String");
    ac.isFalse(Strings.isI_String("string"), "A regular string should not be an I_String");
  }

  testIsI_StringSuccess(ac: I_AssertionContext) {
    let iString = { 
      hasToStringOverride: () => true, 
      toString: () => "test string" 
    };
    ac.isTrue(Strings.isI_String(iString), "An object with I_String methods should be an I_String");
  }

  testIsNamedFailures(ac: I_AssertionContext) {
    ac.isFalse(Strings.isNamed(null), "A null should not be named");
    ac.isFalse(Strings.isNamed(undefined), "A undefined should not be named");
    ac.isFalse(Strings.isNamed({}), "A new empty Object should not be named");
    ac.isFalse(Strings.isNamed(123), "A number should not be named");
  }

  testIsNamedSuccess(ac: I_AssertionContext) {
    let named = { getName: () => "TestName" };
    ac.isTrue(Strings.isNamed(named), "An object with getName method should be named");
  }

  constructor() {
    super(StringsTrial.CLAZZ_NAME);
  }
}

export class TypeGuardTrial extends ApiTrial {
  public static readonly CLAZZ_NAME = 'org.adligo.ts.type-guards.TypeGuardTrial';

  testIsNilFailures(ac: I_AssertionContext) {
    ac.isFalse(isNil(0), "Zero should not be nil");
    ac.isFalse(isNil(false), "False should not be nil");
    ac.isFalse(isNil(""), "Empty string should not be nil");
    ac.isFalse(isNil({}), "Empty object should not be nil");
    ac.isFalse(isNil([]), "Empty array should not be nil");
  }

  testIsNilSuccess(ac: I_AssertionContext) {
    ac.isTrue(isNil(null), "Null should be nil");
    ac.isTrue(isNil(undefined), "Undefined should be nil");
  }

  constructor() {
    super(TypeGuardTrial.CLAZZ_NAME);
  }
}
