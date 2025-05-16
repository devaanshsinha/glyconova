
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model GlucoseReading
 * 
 */
export type GlucoseReading = $Result.DefaultSelection<Prisma.$GlucoseReadingPayload>
/**
 * Model DataUpload
 * 
 */
export type DataUpload = $Result.DefaultSelection<Prisma.$DataUploadPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.glucoseReading`: Exposes CRUD operations for the **GlucoseReading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlucoseReadings
    * const glucoseReadings = await prisma.glucoseReading.findMany()
    * ```
    */
  get glucoseReading(): Prisma.GlucoseReadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataUpload`: Exposes CRUD operations for the **DataUpload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataUploads
    * const dataUploads = await prisma.dataUpload.findMany()
    * ```
    */
  get dataUpload(): Prisma.DataUploadDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    GlucoseReading: 'GlucoseReading',
    DataUpload: 'DataUpload'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "glucoseReading" | "dataUpload"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      GlucoseReading: {
        payload: Prisma.$GlucoseReadingPayload<ExtArgs>
        fields: Prisma.GlucoseReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlucoseReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlucoseReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>
          }
          findFirst: {
            args: Prisma.GlucoseReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlucoseReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>
          }
          findMany: {
            args: Prisma.GlucoseReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>[]
          }
          create: {
            args: Prisma.GlucoseReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>
          }
          createMany: {
            args: Prisma.GlucoseReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlucoseReadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>[]
          }
          delete: {
            args: Prisma.GlucoseReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>
          }
          update: {
            args: Prisma.GlucoseReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>
          }
          deleteMany: {
            args: Prisma.GlucoseReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlucoseReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlucoseReadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>[]
          }
          upsert: {
            args: Prisma.GlucoseReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>
          }
          aggregate: {
            args: Prisma.GlucoseReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlucoseReading>
          }
          groupBy: {
            args: Prisma.GlucoseReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlucoseReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlucoseReadingCountArgs<ExtArgs>
            result: $Utils.Optional<GlucoseReadingCountAggregateOutputType> | number
          }
        }
      }
      DataUpload: {
        payload: Prisma.$DataUploadPayload<ExtArgs>
        fields: Prisma.DataUploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataUploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataUploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataUploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataUploadPayload>
          }
          findFirst: {
            args: Prisma.DataUploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataUploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataUploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataUploadPayload>
          }
          findMany: {
            args: Prisma.DataUploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataUploadPayload>[]
          }
          create: {
            args: Prisma.DataUploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataUploadPayload>
          }
          createMany: {
            args: Prisma.DataUploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataUploadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataUploadPayload>[]
          }
          delete: {
            args: Prisma.DataUploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataUploadPayload>
          }
          update: {
            args: Prisma.DataUploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataUploadPayload>
          }
          deleteMany: {
            args: Prisma.DataUploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataUploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataUploadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataUploadPayload>[]
          }
          upsert: {
            args: Prisma.DataUploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataUploadPayload>
          }
          aggregate: {
            args: Prisma.DataUploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataUpload>
          }
          groupBy: {
            args: Prisma.DataUploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataUploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataUploadCountArgs<ExtArgs>
            result: $Utils.Optional<DataUploadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    glucoseReading?: GlucoseReadingOmit
    dataUpload?: DataUploadOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    glucoseReadings: number
    dataUploads: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glucoseReadings?: boolean | UserCountOutputTypeCountGlucoseReadingsArgs
    dataUploads?: boolean | UserCountOutputTypeCountDataUploadsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGlucoseReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlucoseReadingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDataUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataUploadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    name: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    glucoseReadings?: boolean | User$glucoseReadingsArgs<ExtArgs>
    dataUploads?: boolean | User$dataUploadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "name" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glucoseReadings?: boolean | User$glucoseReadingsArgs<ExtArgs>
    dataUploads?: boolean | User$dataUploadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      glucoseReadings: Prisma.$GlucoseReadingPayload<ExtArgs>[]
      dataUploads: Prisma.$DataUploadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string | null
      name: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    glucoseReadings<T extends User$glucoseReadingsArgs<ExtArgs> = {}>(args?: Subset<T, User$glucoseReadingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dataUploads<T extends User$dataUploadsArgs<ExtArgs> = {}>(args?: Subset<T, User$dataUploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.glucoseReadings
   */
  export type User$glucoseReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    where?: GlucoseReadingWhereInput
    orderBy?: GlucoseReadingOrderByWithRelationInput | GlucoseReadingOrderByWithRelationInput[]
    cursor?: GlucoseReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlucoseReadingScalarFieldEnum | GlucoseReadingScalarFieldEnum[]
  }

  /**
   * User.dataUploads
   */
  export type User$dataUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadInclude<ExtArgs> | null
    where?: DataUploadWhereInput
    orderBy?: DataUploadOrderByWithRelationInput | DataUploadOrderByWithRelationInput[]
    cursor?: DataUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataUploadScalarFieldEnum | DataUploadScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model GlucoseReading
   */

  export type AggregateGlucoseReading = {
    _count: GlucoseReadingCountAggregateOutputType | null
    _avg: GlucoseReadingAvgAggregateOutputType | null
    _sum: GlucoseReadingSumAggregateOutputType | null
    _min: GlucoseReadingMinAggregateOutputType | null
    _max: GlucoseReadingMaxAggregateOutputType | null
  }

  export type GlucoseReadingAvgAggregateOutputType = {
    glucoseValue: number | null
    rateOfChange: number | null
  }

  export type GlucoseReadingSumAggregateOutputType = {
    glucoseValue: number | null
    rateOfChange: number | null
  }

  export type GlucoseReadingMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    glucoseValue: number | null
    rateOfChange: number | null
    eventType: string | null
    eventSubtype: string | null
    transmitterId: string | null
    transmitterTime: string | null
    sourceDeviceId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlucoseReadingMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    glucoseValue: number | null
    rateOfChange: number | null
    eventType: string | null
    eventSubtype: string | null
    transmitterId: string | null
    transmitterTime: string | null
    sourceDeviceId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlucoseReadingCountAggregateOutputType = {
    id: number
    timestamp: number
    glucoseValue: number
    rateOfChange: number
    eventType: number
    eventSubtype: number
    transmitterId: number
    transmitterTime: number
    sourceDeviceId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GlucoseReadingAvgAggregateInputType = {
    glucoseValue?: true
    rateOfChange?: true
  }

  export type GlucoseReadingSumAggregateInputType = {
    glucoseValue?: true
    rateOfChange?: true
  }

  export type GlucoseReadingMinAggregateInputType = {
    id?: true
    timestamp?: true
    glucoseValue?: true
    rateOfChange?: true
    eventType?: true
    eventSubtype?: true
    transmitterId?: true
    transmitterTime?: true
    sourceDeviceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlucoseReadingMaxAggregateInputType = {
    id?: true
    timestamp?: true
    glucoseValue?: true
    rateOfChange?: true
    eventType?: true
    eventSubtype?: true
    transmitterId?: true
    transmitterTime?: true
    sourceDeviceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlucoseReadingCountAggregateInputType = {
    id?: true
    timestamp?: true
    glucoseValue?: true
    rateOfChange?: true
    eventType?: true
    eventSubtype?: true
    transmitterId?: true
    transmitterTime?: true
    sourceDeviceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GlucoseReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlucoseReading to aggregate.
     */
    where?: GlucoseReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseReadings to fetch.
     */
    orderBy?: GlucoseReadingOrderByWithRelationInput | GlucoseReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlucoseReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlucoseReadings
    **/
    _count?: true | GlucoseReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlucoseReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlucoseReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlucoseReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlucoseReadingMaxAggregateInputType
  }

  export type GetGlucoseReadingAggregateType<T extends GlucoseReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateGlucoseReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlucoseReading[P]>
      : GetScalarType<T[P], AggregateGlucoseReading[P]>
  }




  export type GlucoseReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlucoseReadingWhereInput
    orderBy?: GlucoseReadingOrderByWithAggregationInput | GlucoseReadingOrderByWithAggregationInput[]
    by: GlucoseReadingScalarFieldEnum[] | GlucoseReadingScalarFieldEnum
    having?: GlucoseReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlucoseReadingCountAggregateInputType | true
    _avg?: GlucoseReadingAvgAggregateInputType
    _sum?: GlucoseReadingSumAggregateInputType
    _min?: GlucoseReadingMinAggregateInputType
    _max?: GlucoseReadingMaxAggregateInputType
  }

  export type GlucoseReadingGroupByOutputType = {
    id: string
    timestamp: Date
    glucoseValue: number
    rateOfChange: number | null
    eventType: string
    eventSubtype: string | null
    transmitterId: string | null
    transmitterTime: string | null
    sourceDeviceId: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: GlucoseReadingCountAggregateOutputType | null
    _avg: GlucoseReadingAvgAggregateOutputType | null
    _sum: GlucoseReadingSumAggregateOutputType | null
    _min: GlucoseReadingMinAggregateOutputType | null
    _max: GlucoseReadingMaxAggregateOutputType | null
  }

  type GetGlucoseReadingGroupByPayload<T extends GlucoseReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlucoseReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlucoseReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlucoseReadingGroupByOutputType[P]>
            : GetScalarType<T[P], GlucoseReadingGroupByOutputType[P]>
        }
      >
    >


  export type GlucoseReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    glucoseValue?: boolean
    rateOfChange?: boolean
    eventType?: boolean
    eventSubtype?: boolean
    transmitterId?: boolean
    transmitterTime?: boolean
    sourceDeviceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glucoseReading"]>

  export type GlucoseReadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    glucoseValue?: boolean
    rateOfChange?: boolean
    eventType?: boolean
    eventSubtype?: boolean
    transmitterId?: boolean
    transmitterTime?: boolean
    sourceDeviceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glucoseReading"]>

  export type GlucoseReadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    glucoseValue?: boolean
    rateOfChange?: boolean
    eventType?: boolean
    eventSubtype?: boolean
    transmitterId?: boolean
    transmitterTime?: boolean
    sourceDeviceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glucoseReading"]>

  export type GlucoseReadingSelectScalar = {
    id?: boolean
    timestamp?: boolean
    glucoseValue?: boolean
    rateOfChange?: boolean
    eventType?: boolean
    eventSubtype?: boolean
    transmitterId?: boolean
    transmitterTime?: boolean
    sourceDeviceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GlucoseReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "glucoseValue" | "rateOfChange" | "eventType" | "eventSubtype" | "transmitterId" | "transmitterTime" | "sourceDeviceId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["glucoseReading"]>
  export type GlucoseReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GlucoseReadingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GlucoseReadingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GlucoseReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlucoseReading"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      glucoseValue: number
      rateOfChange: number | null
      eventType: string
      eventSubtype: string | null
      transmitterId: string | null
      transmitterTime: string | null
      sourceDeviceId: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["glucoseReading"]>
    composites: {}
  }

  type GlucoseReadingGetPayload<S extends boolean | null | undefined | GlucoseReadingDefaultArgs> = $Result.GetResult<Prisma.$GlucoseReadingPayload, S>

  type GlucoseReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlucoseReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlucoseReadingCountAggregateInputType | true
    }

  export interface GlucoseReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlucoseReading'], meta: { name: 'GlucoseReading' } }
    /**
     * Find zero or one GlucoseReading that matches the filter.
     * @param {GlucoseReadingFindUniqueArgs} args - Arguments to find a GlucoseReading
     * @example
     * // Get one GlucoseReading
     * const glucoseReading = await prisma.glucoseReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlucoseReadingFindUniqueArgs>(args: SelectSubset<T, GlucoseReadingFindUniqueArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlucoseReading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlucoseReadingFindUniqueOrThrowArgs} args - Arguments to find a GlucoseReading
     * @example
     * // Get one GlucoseReading
     * const glucoseReading = await prisma.glucoseReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlucoseReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, GlucoseReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlucoseReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingFindFirstArgs} args - Arguments to find a GlucoseReading
     * @example
     * // Get one GlucoseReading
     * const glucoseReading = await prisma.glucoseReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlucoseReadingFindFirstArgs>(args?: SelectSubset<T, GlucoseReadingFindFirstArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlucoseReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingFindFirstOrThrowArgs} args - Arguments to find a GlucoseReading
     * @example
     * // Get one GlucoseReading
     * const glucoseReading = await prisma.glucoseReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlucoseReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, GlucoseReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlucoseReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlucoseReadings
     * const glucoseReadings = await prisma.glucoseReading.findMany()
     * 
     * // Get first 10 GlucoseReadings
     * const glucoseReadings = await prisma.glucoseReading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const glucoseReadingWithIdOnly = await prisma.glucoseReading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlucoseReadingFindManyArgs>(args?: SelectSubset<T, GlucoseReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlucoseReading.
     * @param {GlucoseReadingCreateArgs} args - Arguments to create a GlucoseReading.
     * @example
     * // Create one GlucoseReading
     * const GlucoseReading = await prisma.glucoseReading.create({
     *   data: {
     *     // ... data to create a GlucoseReading
     *   }
     * })
     * 
     */
    create<T extends GlucoseReadingCreateArgs>(args: SelectSubset<T, GlucoseReadingCreateArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlucoseReadings.
     * @param {GlucoseReadingCreateManyArgs} args - Arguments to create many GlucoseReadings.
     * @example
     * // Create many GlucoseReadings
     * const glucoseReading = await prisma.glucoseReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlucoseReadingCreateManyArgs>(args?: SelectSubset<T, GlucoseReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlucoseReadings and returns the data saved in the database.
     * @param {GlucoseReadingCreateManyAndReturnArgs} args - Arguments to create many GlucoseReadings.
     * @example
     * // Create many GlucoseReadings
     * const glucoseReading = await prisma.glucoseReading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlucoseReadings and only return the `id`
     * const glucoseReadingWithIdOnly = await prisma.glucoseReading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlucoseReadingCreateManyAndReturnArgs>(args?: SelectSubset<T, GlucoseReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlucoseReading.
     * @param {GlucoseReadingDeleteArgs} args - Arguments to delete one GlucoseReading.
     * @example
     * // Delete one GlucoseReading
     * const GlucoseReading = await prisma.glucoseReading.delete({
     *   where: {
     *     // ... filter to delete one GlucoseReading
     *   }
     * })
     * 
     */
    delete<T extends GlucoseReadingDeleteArgs>(args: SelectSubset<T, GlucoseReadingDeleteArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlucoseReading.
     * @param {GlucoseReadingUpdateArgs} args - Arguments to update one GlucoseReading.
     * @example
     * // Update one GlucoseReading
     * const glucoseReading = await prisma.glucoseReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlucoseReadingUpdateArgs>(args: SelectSubset<T, GlucoseReadingUpdateArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlucoseReadings.
     * @param {GlucoseReadingDeleteManyArgs} args - Arguments to filter GlucoseReadings to delete.
     * @example
     * // Delete a few GlucoseReadings
     * const { count } = await prisma.glucoseReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlucoseReadingDeleteManyArgs>(args?: SelectSubset<T, GlucoseReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlucoseReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlucoseReadings
     * const glucoseReading = await prisma.glucoseReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlucoseReadingUpdateManyArgs>(args: SelectSubset<T, GlucoseReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlucoseReadings and returns the data updated in the database.
     * @param {GlucoseReadingUpdateManyAndReturnArgs} args - Arguments to update many GlucoseReadings.
     * @example
     * // Update many GlucoseReadings
     * const glucoseReading = await prisma.glucoseReading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlucoseReadings and only return the `id`
     * const glucoseReadingWithIdOnly = await prisma.glucoseReading.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlucoseReadingUpdateManyAndReturnArgs>(args: SelectSubset<T, GlucoseReadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlucoseReading.
     * @param {GlucoseReadingUpsertArgs} args - Arguments to update or create a GlucoseReading.
     * @example
     * // Update or create a GlucoseReading
     * const glucoseReading = await prisma.glucoseReading.upsert({
     *   create: {
     *     // ... data to create a GlucoseReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlucoseReading we want to update
     *   }
     * })
     */
    upsert<T extends GlucoseReadingUpsertArgs>(args: SelectSubset<T, GlucoseReadingUpsertArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlucoseReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingCountArgs} args - Arguments to filter GlucoseReadings to count.
     * @example
     * // Count the number of GlucoseReadings
     * const count = await prisma.glucoseReading.count({
     *   where: {
     *     // ... the filter for the GlucoseReadings we want to count
     *   }
     * })
    **/
    count<T extends GlucoseReadingCountArgs>(
      args?: Subset<T, GlucoseReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlucoseReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlucoseReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlucoseReadingAggregateArgs>(args: Subset<T, GlucoseReadingAggregateArgs>): Prisma.PrismaPromise<GetGlucoseReadingAggregateType<T>>

    /**
     * Group by GlucoseReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlucoseReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlucoseReadingGroupByArgs['orderBy'] }
        : { orderBy?: GlucoseReadingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlucoseReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlucoseReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlucoseReading model
   */
  readonly fields: GlucoseReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlucoseReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlucoseReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlucoseReading model
   */
  interface GlucoseReadingFieldRefs {
    readonly id: FieldRef<"GlucoseReading", 'String'>
    readonly timestamp: FieldRef<"GlucoseReading", 'DateTime'>
    readonly glucoseValue: FieldRef<"GlucoseReading", 'Float'>
    readonly rateOfChange: FieldRef<"GlucoseReading", 'Float'>
    readonly eventType: FieldRef<"GlucoseReading", 'String'>
    readonly eventSubtype: FieldRef<"GlucoseReading", 'String'>
    readonly transmitterId: FieldRef<"GlucoseReading", 'String'>
    readonly transmitterTime: FieldRef<"GlucoseReading", 'String'>
    readonly sourceDeviceId: FieldRef<"GlucoseReading", 'String'>
    readonly userId: FieldRef<"GlucoseReading", 'String'>
    readonly createdAt: FieldRef<"GlucoseReading", 'DateTime'>
    readonly updatedAt: FieldRef<"GlucoseReading", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlucoseReading findUnique
   */
  export type GlucoseReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseReading to fetch.
     */
    where: GlucoseReadingWhereUniqueInput
  }

  /**
   * GlucoseReading findUniqueOrThrow
   */
  export type GlucoseReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseReading to fetch.
     */
    where: GlucoseReadingWhereUniqueInput
  }

  /**
   * GlucoseReading findFirst
   */
  export type GlucoseReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseReading to fetch.
     */
    where?: GlucoseReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseReadings to fetch.
     */
    orderBy?: GlucoseReadingOrderByWithRelationInput | GlucoseReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlucoseReadings.
     */
    cursor?: GlucoseReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlucoseReadings.
     */
    distinct?: GlucoseReadingScalarFieldEnum | GlucoseReadingScalarFieldEnum[]
  }

  /**
   * GlucoseReading findFirstOrThrow
   */
  export type GlucoseReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseReading to fetch.
     */
    where?: GlucoseReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseReadings to fetch.
     */
    orderBy?: GlucoseReadingOrderByWithRelationInput | GlucoseReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlucoseReadings.
     */
    cursor?: GlucoseReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlucoseReadings.
     */
    distinct?: GlucoseReadingScalarFieldEnum | GlucoseReadingScalarFieldEnum[]
  }

  /**
   * GlucoseReading findMany
   */
  export type GlucoseReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseReadings to fetch.
     */
    where?: GlucoseReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseReadings to fetch.
     */
    orderBy?: GlucoseReadingOrderByWithRelationInput | GlucoseReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlucoseReadings.
     */
    cursor?: GlucoseReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseReadings.
     */
    skip?: number
    distinct?: GlucoseReadingScalarFieldEnum | GlucoseReadingScalarFieldEnum[]
  }

  /**
   * GlucoseReading create
   */
  export type GlucoseReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a GlucoseReading.
     */
    data: XOR<GlucoseReadingCreateInput, GlucoseReadingUncheckedCreateInput>
  }

  /**
   * GlucoseReading createMany
   */
  export type GlucoseReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlucoseReadings.
     */
    data: GlucoseReadingCreateManyInput | GlucoseReadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlucoseReading createManyAndReturn
   */
  export type GlucoseReadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * The data used to create many GlucoseReadings.
     */
    data: GlucoseReadingCreateManyInput | GlucoseReadingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlucoseReading update
   */
  export type GlucoseReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a GlucoseReading.
     */
    data: XOR<GlucoseReadingUpdateInput, GlucoseReadingUncheckedUpdateInput>
    /**
     * Choose, which GlucoseReading to update.
     */
    where: GlucoseReadingWhereUniqueInput
  }

  /**
   * GlucoseReading updateMany
   */
  export type GlucoseReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlucoseReadings.
     */
    data: XOR<GlucoseReadingUpdateManyMutationInput, GlucoseReadingUncheckedUpdateManyInput>
    /**
     * Filter which GlucoseReadings to update
     */
    where?: GlucoseReadingWhereInput
    /**
     * Limit how many GlucoseReadings to update.
     */
    limit?: number
  }

  /**
   * GlucoseReading updateManyAndReturn
   */
  export type GlucoseReadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * The data used to update GlucoseReadings.
     */
    data: XOR<GlucoseReadingUpdateManyMutationInput, GlucoseReadingUncheckedUpdateManyInput>
    /**
     * Filter which GlucoseReadings to update
     */
    where?: GlucoseReadingWhereInput
    /**
     * Limit how many GlucoseReadings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlucoseReading upsert
   */
  export type GlucoseReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the GlucoseReading to update in case it exists.
     */
    where: GlucoseReadingWhereUniqueInput
    /**
     * In case the GlucoseReading found by the `where` argument doesn't exist, create a new GlucoseReading with this data.
     */
    create: XOR<GlucoseReadingCreateInput, GlucoseReadingUncheckedCreateInput>
    /**
     * In case the GlucoseReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlucoseReadingUpdateInput, GlucoseReadingUncheckedUpdateInput>
  }

  /**
   * GlucoseReading delete
   */
  export type GlucoseReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * Filter which GlucoseReading to delete.
     */
    where: GlucoseReadingWhereUniqueInput
  }

  /**
   * GlucoseReading deleteMany
   */
  export type GlucoseReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlucoseReadings to delete
     */
    where?: GlucoseReadingWhereInput
    /**
     * Limit how many GlucoseReadings to delete.
     */
    limit?: number
  }

  /**
   * GlucoseReading without action
   */
  export type GlucoseReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
  }


  /**
   * Model DataUpload
   */

  export type AggregateDataUpload = {
    _count: DataUploadCountAggregateOutputType | null
    _avg: DataUploadAvgAggregateOutputType | null
    _sum: DataUploadSumAggregateOutputType | null
    _min: DataUploadMinAggregateOutputType | null
    _max: DataUploadMaxAggregateOutputType | null
  }

  export type DataUploadAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type DataUploadSumAggregateOutputType = {
    fileSize: number | null
  }

  export type DataUploadMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileSize: number | null
    uploadedAt: Date | null
    userId: string | null
  }

  export type DataUploadMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileSize: number | null
    uploadedAt: Date | null
    userId: string | null
  }

  export type DataUploadCountAggregateOutputType = {
    id: number
    fileName: number
    fileSize: number
    uploadedAt: number
    userId: number
    _all: number
  }


  export type DataUploadAvgAggregateInputType = {
    fileSize?: true
  }

  export type DataUploadSumAggregateInputType = {
    fileSize?: true
  }

  export type DataUploadMinAggregateInputType = {
    id?: true
    fileName?: true
    fileSize?: true
    uploadedAt?: true
    userId?: true
  }

  export type DataUploadMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileSize?: true
    uploadedAt?: true
    userId?: true
  }

  export type DataUploadCountAggregateInputType = {
    id?: true
    fileName?: true
    fileSize?: true
    uploadedAt?: true
    userId?: true
    _all?: true
  }

  export type DataUploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataUpload to aggregate.
     */
    where?: DataUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataUploads to fetch.
     */
    orderBy?: DataUploadOrderByWithRelationInput | DataUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataUploads
    **/
    _count?: true | DataUploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataUploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataUploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataUploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataUploadMaxAggregateInputType
  }

  export type GetDataUploadAggregateType<T extends DataUploadAggregateArgs> = {
        [P in keyof T & keyof AggregateDataUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataUpload[P]>
      : GetScalarType<T[P], AggregateDataUpload[P]>
  }




  export type DataUploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataUploadWhereInput
    orderBy?: DataUploadOrderByWithAggregationInput | DataUploadOrderByWithAggregationInput[]
    by: DataUploadScalarFieldEnum[] | DataUploadScalarFieldEnum
    having?: DataUploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataUploadCountAggregateInputType | true
    _avg?: DataUploadAvgAggregateInputType
    _sum?: DataUploadSumAggregateInputType
    _min?: DataUploadMinAggregateInputType
    _max?: DataUploadMaxAggregateInputType
  }

  export type DataUploadGroupByOutputType = {
    id: string
    fileName: string
    fileSize: number
    uploadedAt: Date
    userId: string
    _count: DataUploadCountAggregateOutputType | null
    _avg: DataUploadAvgAggregateOutputType | null
    _sum: DataUploadSumAggregateOutputType | null
    _min: DataUploadMinAggregateOutputType | null
    _max: DataUploadMaxAggregateOutputType | null
  }

  type GetDataUploadGroupByPayload<T extends DataUploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataUploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataUploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataUploadGroupByOutputType[P]>
            : GetScalarType<T[P], DataUploadGroupByOutputType[P]>
        }
      >
    >


  export type DataUploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    uploadedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataUpload"]>

  export type DataUploadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    uploadedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataUpload"]>

  export type DataUploadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    uploadedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataUpload"]>

  export type DataUploadSelectScalar = {
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    uploadedAt?: boolean
    userId?: boolean
  }

  export type DataUploadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "fileSize" | "uploadedAt" | "userId", ExtArgs["result"]["dataUpload"]>
  export type DataUploadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DataUploadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DataUploadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DataUploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataUpload"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      fileSize: number
      uploadedAt: Date
      userId: string
    }, ExtArgs["result"]["dataUpload"]>
    composites: {}
  }

  type DataUploadGetPayload<S extends boolean | null | undefined | DataUploadDefaultArgs> = $Result.GetResult<Prisma.$DataUploadPayload, S>

  type DataUploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataUploadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataUploadCountAggregateInputType | true
    }

  export interface DataUploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataUpload'], meta: { name: 'DataUpload' } }
    /**
     * Find zero or one DataUpload that matches the filter.
     * @param {DataUploadFindUniqueArgs} args - Arguments to find a DataUpload
     * @example
     * // Get one DataUpload
     * const dataUpload = await prisma.dataUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataUploadFindUniqueArgs>(args: SelectSubset<T, DataUploadFindUniqueArgs<ExtArgs>>): Prisma__DataUploadClient<$Result.GetResult<Prisma.$DataUploadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataUpload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataUploadFindUniqueOrThrowArgs} args - Arguments to find a DataUpload
     * @example
     * // Get one DataUpload
     * const dataUpload = await prisma.dataUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataUploadFindUniqueOrThrowArgs>(args: SelectSubset<T, DataUploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataUploadClient<$Result.GetResult<Prisma.$DataUploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataUploadFindFirstArgs} args - Arguments to find a DataUpload
     * @example
     * // Get one DataUpload
     * const dataUpload = await prisma.dataUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataUploadFindFirstArgs>(args?: SelectSubset<T, DataUploadFindFirstArgs<ExtArgs>>): Prisma__DataUploadClient<$Result.GetResult<Prisma.$DataUploadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataUploadFindFirstOrThrowArgs} args - Arguments to find a DataUpload
     * @example
     * // Get one DataUpload
     * const dataUpload = await prisma.dataUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataUploadFindFirstOrThrowArgs>(args?: SelectSubset<T, DataUploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataUploadClient<$Result.GetResult<Prisma.$DataUploadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataUploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataUploads
     * const dataUploads = await prisma.dataUpload.findMany()
     * 
     * // Get first 10 DataUploads
     * const dataUploads = await prisma.dataUpload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataUploadWithIdOnly = await prisma.dataUpload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataUploadFindManyArgs>(args?: SelectSubset<T, DataUploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataUpload.
     * @param {DataUploadCreateArgs} args - Arguments to create a DataUpload.
     * @example
     * // Create one DataUpload
     * const DataUpload = await prisma.dataUpload.create({
     *   data: {
     *     // ... data to create a DataUpload
     *   }
     * })
     * 
     */
    create<T extends DataUploadCreateArgs>(args: SelectSubset<T, DataUploadCreateArgs<ExtArgs>>): Prisma__DataUploadClient<$Result.GetResult<Prisma.$DataUploadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataUploads.
     * @param {DataUploadCreateManyArgs} args - Arguments to create many DataUploads.
     * @example
     * // Create many DataUploads
     * const dataUpload = await prisma.dataUpload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataUploadCreateManyArgs>(args?: SelectSubset<T, DataUploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataUploads and returns the data saved in the database.
     * @param {DataUploadCreateManyAndReturnArgs} args - Arguments to create many DataUploads.
     * @example
     * // Create many DataUploads
     * const dataUpload = await prisma.dataUpload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataUploads and only return the `id`
     * const dataUploadWithIdOnly = await prisma.dataUpload.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataUploadCreateManyAndReturnArgs>(args?: SelectSubset<T, DataUploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataUploadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataUpload.
     * @param {DataUploadDeleteArgs} args - Arguments to delete one DataUpload.
     * @example
     * // Delete one DataUpload
     * const DataUpload = await prisma.dataUpload.delete({
     *   where: {
     *     // ... filter to delete one DataUpload
     *   }
     * })
     * 
     */
    delete<T extends DataUploadDeleteArgs>(args: SelectSubset<T, DataUploadDeleteArgs<ExtArgs>>): Prisma__DataUploadClient<$Result.GetResult<Prisma.$DataUploadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataUpload.
     * @param {DataUploadUpdateArgs} args - Arguments to update one DataUpload.
     * @example
     * // Update one DataUpload
     * const dataUpload = await prisma.dataUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataUploadUpdateArgs>(args: SelectSubset<T, DataUploadUpdateArgs<ExtArgs>>): Prisma__DataUploadClient<$Result.GetResult<Prisma.$DataUploadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataUploads.
     * @param {DataUploadDeleteManyArgs} args - Arguments to filter DataUploads to delete.
     * @example
     * // Delete a few DataUploads
     * const { count } = await prisma.dataUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataUploadDeleteManyArgs>(args?: SelectSubset<T, DataUploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataUploads
     * const dataUpload = await prisma.dataUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataUploadUpdateManyArgs>(args: SelectSubset<T, DataUploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataUploads and returns the data updated in the database.
     * @param {DataUploadUpdateManyAndReturnArgs} args - Arguments to update many DataUploads.
     * @example
     * // Update many DataUploads
     * const dataUpload = await prisma.dataUpload.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataUploads and only return the `id`
     * const dataUploadWithIdOnly = await prisma.dataUpload.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DataUploadUpdateManyAndReturnArgs>(args: SelectSubset<T, DataUploadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataUploadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataUpload.
     * @param {DataUploadUpsertArgs} args - Arguments to update or create a DataUpload.
     * @example
     * // Update or create a DataUpload
     * const dataUpload = await prisma.dataUpload.upsert({
     *   create: {
     *     // ... data to create a DataUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataUpload we want to update
     *   }
     * })
     */
    upsert<T extends DataUploadUpsertArgs>(args: SelectSubset<T, DataUploadUpsertArgs<ExtArgs>>): Prisma__DataUploadClient<$Result.GetResult<Prisma.$DataUploadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataUploadCountArgs} args - Arguments to filter DataUploads to count.
     * @example
     * // Count the number of DataUploads
     * const count = await prisma.dataUpload.count({
     *   where: {
     *     // ... the filter for the DataUploads we want to count
     *   }
     * })
    **/
    count<T extends DataUploadCountArgs>(
      args?: Subset<T, DataUploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataUploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataUploadAggregateArgs>(args: Subset<T, DataUploadAggregateArgs>): Prisma.PrismaPromise<GetDataUploadAggregateType<T>>

    /**
     * Group by DataUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataUploadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataUploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataUploadGroupByArgs['orderBy'] }
        : { orderBy?: DataUploadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataUpload model
   */
  readonly fields: DataUploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataUpload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataUploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataUpload model
   */
  interface DataUploadFieldRefs {
    readonly id: FieldRef<"DataUpload", 'String'>
    readonly fileName: FieldRef<"DataUpload", 'String'>
    readonly fileSize: FieldRef<"DataUpload", 'Int'>
    readonly uploadedAt: FieldRef<"DataUpload", 'DateTime'>
    readonly userId: FieldRef<"DataUpload", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DataUpload findUnique
   */
  export type DataUploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadInclude<ExtArgs> | null
    /**
     * Filter, which DataUpload to fetch.
     */
    where: DataUploadWhereUniqueInput
  }

  /**
   * DataUpload findUniqueOrThrow
   */
  export type DataUploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadInclude<ExtArgs> | null
    /**
     * Filter, which DataUpload to fetch.
     */
    where: DataUploadWhereUniqueInput
  }

  /**
   * DataUpload findFirst
   */
  export type DataUploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadInclude<ExtArgs> | null
    /**
     * Filter, which DataUpload to fetch.
     */
    where?: DataUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataUploads to fetch.
     */
    orderBy?: DataUploadOrderByWithRelationInput | DataUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataUploads.
     */
    cursor?: DataUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataUploads.
     */
    distinct?: DataUploadScalarFieldEnum | DataUploadScalarFieldEnum[]
  }

  /**
   * DataUpload findFirstOrThrow
   */
  export type DataUploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadInclude<ExtArgs> | null
    /**
     * Filter, which DataUpload to fetch.
     */
    where?: DataUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataUploads to fetch.
     */
    orderBy?: DataUploadOrderByWithRelationInput | DataUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataUploads.
     */
    cursor?: DataUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataUploads.
     */
    distinct?: DataUploadScalarFieldEnum | DataUploadScalarFieldEnum[]
  }

  /**
   * DataUpload findMany
   */
  export type DataUploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadInclude<ExtArgs> | null
    /**
     * Filter, which DataUploads to fetch.
     */
    where?: DataUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataUploads to fetch.
     */
    orderBy?: DataUploadOrderByWithRelationInput | DataUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataUploads.
     */
    cursor?: DataUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataUploads.
     */
    skip?: number
    distinct?: DataUploadScalarFieldEnum | DataUploadScalarFieldEnum[]
  }

  /**
   * DataUpload create
   */
  export type DataUploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadInclude<ExtArgs> | null
    /**
     * The data needed to create a DataUpload.
     */
    data: XOR<DataUploadCreateInput, DataUploadUncheckedCreateInput>
  }

  /**
   * DataUpload createMany
   */
  export type DataUploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataUploads.
     */
    data: DataUploadCreateManyInput | DataUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataUpload createManyAndReturn
   */
  export type DataUploadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * The data used to create many DataUploads.
     */
    data: DataUploadCreateManyInput | DataUploadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataUpload update
   */
  export type DataUploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadInclude<ExtArgs> | null
    /**
     * The data needed to update a DataUpload.
     */
    data: XOR<DataUploadUpdateInput, DataUploadUncheckedUpdateInput>
    /**
     * Choose, which DataUpload to update.
     */
    where: DataUploadWhereUniqueInput
  }

  /**
   * DataUpload updateMany
   */
  export type DataUploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataUploads.
     */
    data: XOR<DataUploadUpdateManyMutationInput, DataUploadUncheckedUpdateManyInput>
    /**
     * Filter which DataUploads to update
     */
    where?: DataUploadWhereInput
    /**
     * Limit how many DataUploads to update.
     */
    limit?: number
  }

  /**
   * DataUpload updateManyAndReturn
   */
  export type DataUploadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * The data used to update DataUploads.
     */
    data: XOR<DataUploadUpdateManyMutationInput, DataUploadUncheckedUpdateManyInput>
    /**
     * Filter which DataUploads to update
     */
    where?: DataUploadWhereInput
    /**
     * Limit how many DataUploads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataUpload upsert
   */
  export type DataUploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadInclude<ExtArgs> | null
    /**
     * The filter to search for the DataUpload to update in case it exists.
     */
    where: DataUploadWhereUniqueInput
    /**
     * In case the DataUpload found by the `where` argument doesn't exist, create a new DataUpload with this data.
     */
    create: XOR<DataUploadCreateInput, DataUploadUncheckedCreateInput>
    /**
     * In case the DataUpload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataUploadUpdateInput, DataUploadUncheckedUpdateInput>
  }

  /**
   * DataUpload delete
   */
  export type DataUploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadInclude<ExtArgs> | null
    /**
     * Filter which DataUpload to delete.
     */
    where: DataUploadWhereUniqueInput
  }

  /**
   * DataUpload deleteMany
   */
  export type DataUploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataUploads to delete
     */
    where?: DataUploadWhereInput
    /**
     * Limit how many DataUploads to delete.
     */
    limit?: number
  }

  /**
   * DataUpload without action
   */
  export type DataUploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataUpload
     */
    select?: DataUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataUpload
     */
    omit?: DataUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataUploadInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GlucoseReadingScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    glucoseValue: 'glucoseValue',
    rateOfChange: 'rateOfChange',
    eventType: 'eventType',
    eventSubtype: 'eventSubtype',
    transmitterId: 'transmitterId',
    transmitterTime: 'transmitterTime',
    sourceDeviceId: 'sourceDeviceId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GlucoseReadingScalarFieldEnum = (typeof GlucoseReadingScalarFieldEnum)[keyof typeof GlucoseReadingScalarFieldEnum]


  export const DataUploadScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileSize: 'fileSize',
    uploadedAt: 'uploadedAt',
    userId: 'userId'
  };

  export type DataUploadScalarFieldEnum = (typeof DataUploadScalarFieldEnum)[keyof typeof DataUploadScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    glucoseReadings?: GlucoseReadingListRelationFilter
    dataUploads?: DataUploadListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    glucoseReadings?: GlucoseReadingOrderByRelationAggregateInput
    dataUploads?: DataUploadOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    glucoseReadings?: GlucoseReadingListRelationFilter
    dataUploads?: DataUploadListRelationFilter
  }, "id" | "clerkId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GlucoseReadingWhereInput = {
    AND?: GlucoseReadingWhereInput | GlucoseReadingWhereInput[]
    OR?: GlucoseReadingWhereInput[]
    NOT?: GlucoseReadingWhereInput | GlucoseReadingWhereInput[]
    id?: StringFilter<"GlucoseReading"> | string
    timestamp?: DateTimeFilter<"GlucoseReading"> | Date | string
    glucoseValue?: FloatFilter<"GlucoseReading"> | number
    rateOfChange?: FloatNullableFilter<"GlucoseReading"> | number | null
    eventType?: StringFilter<"GlucoseReading"> | string
    eventSubtype?: StringNullableFilter<"GlucoseReading"> | string | null
    transmitterId?: StringNullableFilter<"GlucoseReading"> | string | null
    transmitterTime?: StringNullableFilter<"GlucoseReading"> | string | null
    sourceDeviceId?: StringNullableFilter<"GlucoseReading"> | string | null
    userId?: StringFilter<"GlucoseReading"> | string
    createdAt?: DateTimeFilter<"GlucoseReading"> | Date | string
    updatedAt?: DateTimeFilter<"GlucoseReading"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GlucoseReadingOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    glucoseValue?: SortOrder
    rateOfChange?: SortOrderInput | SortOrder
    eventType?: SortOrder
    eventSubtype?: SortOrderInput | SortOrder
    transmitterId?: SortOrderInput | SortOrder
    transmitterTime?: SortOrderInput | SortOrder
    sourceDeviceId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GlucoseReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlucoseReadingWhereInput | GlucoseReadingWhereInput[]
    OR?: GlucoseReadingWhereInput[]
    NOT?: GlucoseReadingWhereInput | GlucoseReadingWhereInput[]
    timestamp?: DateTimeFilter<"GlucoseReading"> | Date | string
    glucoseValue?: FloatFilter<"GlucoseReading"> | number
    rateOfChange?: FloatNullableFilter<"GlucoseReading"> | number | null
    eventType?: StringFilter<"GlucoseReading"> | string
    eventSubtype?: StringNullableFilter<"GlucoseReading"> | string | null
    transmitterId?: StringNullableFilter<"GlucoseReading"> | string | null
    transmitterTime?: StringNullableFilter<"GlucoseReading"> | string | null
    sourceDeviceId?: StringNullableFilter<"GlucoseReading"> | string | null
    userId?: StringFilter<"GlucoseReading"> | string
    createdAt?: DateTimeFilter<"GlucoseReading"> | Date | string
    updatedAt?: DateTimeFilter<"GlucoseReading"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GlucoseReadingOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    glucoseValue?: SortOrder
    rateOfChange?: SortOrderInput | SortOrder
    eventType?: SortOrder
    eventSubtype?: SortOrderInput | SortOrder
    transmitterId?: SortOrderInput | SortOrder
    transmitterTime?: SortOrderInput | SortOrder
    sourceDeviceId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GlucoseReadingCountOrderByAggregateInput
    _avg?: GlucoseReadingAvgOrderByAggregateInput
    _max?: GlucoseReadingMaxOrderByAggregateInput
    _min?: GlucoseReadingMinOrderByAggregateInput
    _sum?: GlucoseReadingSumOrderByAggregateInput
  }

  export type GlucoseReadingScalarWhereWithAggregatesInput = {
    AND?: GlucoseReadingScalarWhereWithAggregatesInput | GlucoseReadingScalarWhereWithAggregatesInput[]
    OR?: GlucoseReadingScalarWhereWithAggregatesInput[]
    NOT?: GlucoseReadingScalarWhereWithAggregatesInput | GlucoseReadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlucoseReading"> | string
    timestamp?: DateTimeWithAggregatesFilter<"GlucoseReading"> | Date | string
    glucoseValue?: FloatWithAggregatesFilter<"GlucoseReading"> | number
    rateOfChange?: FloatNullableWithAggregatesFilter<"GlucoseReading"> | number | null
    eventType?: StringWithAggregatesFilter<"GlucoseReading"> | string
    eventSubtype?: StringNullableWithAggregatesFilter<"GlucoseReading"> | string | null
    transmitterId?: StringNullableWithAggregatesFilter<"GlucoseReading"> | string | null
    transmitterTime?: StringNullableWithAggregatesFilter<"GlucoseReading"> | string | null
    sourceDeviceId?: StringNullableWithAggregatesFilter<"GlucoseReading"> | string | null
    userId?: StringWithAggregatesFilter<"GlucoseReading"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GlucoseReading"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GlucoseReading"> | Date | string
  }

  export type DataUploadWhereInput = {
    AND?: DataUploadWhereInput | DataUploadWhereInput[]
    OR?: DataUploadWhereInput[]
    NOT?: DataUploadWhereInput | DataUploadWhereInput[]
    id?: StringFilter<"DataUpload"> | string
    fileName?: StringFilter<"DataUpload"> | string
    fileSize?: IntFilter<"DataUpload"> | number
    uploadedAt?: DateTimeFilter<"DataUpload"> | Date | string
    userId?: StringFilter<"DataUpload"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DataUploadOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DataUploadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DataUploadWhereInput | DataUploadWhereInput[]
    OR?: DataUploadWhereInput[]
    NOT?: DataUploadWhereInput | DataUploadWhereInput[]
    fileName?: StringFilter<"DataUpload"> | string
    fileSize?: IntFilter<"DataUpload"> | number
    uploadedAt?: DateTimeFilter<"DataUpload"> | Date | string
    userId?: StringFilter<"DataUpload"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DataUploadOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
    _count?: DataUploadCountOrderByAggregateInput
    _avg?: DataUploadAvgOrderByAggregateInput
    _max?: DataUploadMaxOrderByAggregateInput
    _min?: DataUploadMinOrderByAggregateInput
    _sum?: DataUploadSumOrderByAggregateInput
  }

  export type DataUploadScalarWhereWithAggregatesInput = {
    AND?: DataUploadScalarWhereWithAggregatesInput | DataUploadScalarWhereWithAggregatesInput[]
    OR?: DataUploadScalarWhereWithAggregatesInput[]
    NOT?: DataUploadScalarWhereWithAggregatesInput | DataUploadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataUpload"> | string
    fileName?: StringWithAggregatesFilter<"DataUpload"> | string
    fileSize?: IntWithAggregatesFilter<"DataUpload"> | number
    uploadedAt?: DateTimeWithAggregatesFilter<"DataUpload"> | Date | string
    userId?: StringWithAggregatesFilter<"DataUpload"> | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseReadingCreateInput = {
    id?: string
    timestamp: Date | string
    glucoseValue: number
    rateOfChange?: number | null
    eventType: string
    eventSubtype?: string | null
    transmitterId?: string | null
    transmitterTime?: string | null
    sourceDeviceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGlucoseReadingsInput
  }

  export type GlucoseReadingUncheckedCreateInput = {
    id?: string
    timestamp: Date | string
    glucoseValue: number
    rateOfChange?: number | null
    eventType: string
    eventSubtype?: string | null
    transmitterId?: string | null
    transmitterTime?: string | null
    sourceDeviceId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlucoseReadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseValue?: FloatFieldUpdateOperationsInput | number
    rateOfChange?: NullableFloatFieldUpdateOperationsInput | number | null
    eventType?: StringFieldUpdateOperationsInput | string
    eventSubtype?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterId?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterTime?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDeviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGlucoseReadingsNestedInput
  }

  export type GlucoseReadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseValue?: FloatFieldUpdateOperationsInput | number
    rateOfChange?: NullableFloatFieldUpdateOperationsInput | number | null
    eventType?: StringFieldUpdateOperationsInput | string
    eventSubtype?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterId?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterTime?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDeviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseReadingCreateManyInput = {
    id?: string
    timestamp: Date | string
    glucoseValue: number
    rateOfChange?: number | null
    eventType: string
    eventSubtype?: string | null
    transmitterId?: string | null
    transmitterTime?: string | null
    sourceDeviceId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlucoseReadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseValue?: FloatFieldUpdateOperationsInput | number
    rateOfChange?: NullableFloatFieldUpdateOperationsInput | number | null
    eventType?: StringFieldUpdateOperationsInput | string
    eventSubtype?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterId?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterTime?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDeviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseReadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseValue?: FloatFieldUpdateOperationsInput | number
    rateOfChange?: NullableFloatFieldUpdateOperationsInput | number | null
    eventType?: StringFieldUpdateOperationsInput | string
    eventSubtype?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterId?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterTime?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDeviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataUploadCreateInput = {
    id?: string
    fileName: string
    fileSize: number
    uploadedAt?: Date | string
    user: UserCreateNestedOneWithoutDataUploadsInput
  }

  export type DataUploadUncheckedCreateInput = {
    id?: string
    fileName: string
    fileSize: number
    uploadedAt?: Date | string
    userId: string
  }

  export type DataUploadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDataUploadsNestedInput
  }

  export type DataUploadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DataUploadCreateManyInput = {
    id?: string
    fileName: string
    fileSize: number
    uploadedAt?: Date | string
    userId: string
  }

  export type DataUploadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataUploadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GlucoseReadingListRelationFilter = {
    every?: GlucoseReadingWhereInput
    some?: GlucoseReadingWhereInput
    none?: GlucoseReadingWhereInput
  }

  export type DataUploadListRelationFilter = {
    every?: DataUploadWhereInput
    some?: DataUploadWhereInput
    none?: DataUploadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GlucoseReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DataUploadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GlucoseReadingCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    glucoseValue?: SortOrder
    rateOfChange?: SortOrder
    eventType?: SortOrder
    eventSubtype?: SortOrder
    transmitterId?: SortOrder
    transmitterTime?: SortOrder
    sourceDeviceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlucoseReadingAvgOrderByAggregateInput = {
    glucoseValue?: SortOrder
    rateOfChange?: SortOrder
  }

  export type GlucoseReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    glucoseValue?: SortOrder
    rateOfChange?: SortOrder
    eventType?: SortOrder
    eventSubtype?: SortOrder
    transmitterId?: SortOrder
    transmitterTime?: SortOrder
    sourceDeviceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlucoseReadingMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    glucoseValue?: SortOrder
    rateOfChange?: SortOrder
    eventType?: SortOrder
    eventSubtype?: SortOrder
    transmitterId?: SortOrder
    transmitterTime?: SortOrder
    sourceDeviceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlucoseReadingSumOrderByAggregateInput = {
    glucoseValue?: SortOrder
    rateOfChange?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DataUploadCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
  }

  export type DataUploadAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type DataUploadMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
  }

  export type DataUploadMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
  }

  export type DataUploadSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type GlucoseReadingCreateNestedManyWithoutUserInput = {
    create?: XOR<GlucoseReadingCreateWithoutUserInput, GlucoseReadingUncheckedCreateWithoutUserInput> | GlucoseReadingCreateWithoutUserInput[] | GlucoseReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GlucoseReadingCreateOrConnectWithoutUserInput | GlucoseReadingCreateOrConnectWithoutUserInput[]
    createMany?: GlucoseReadingCreateManyUserInputEnvelope
    connect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
  }

  export type DataUploadCreateNestedManyWithoutUserInput = {
    create?: XOR<DataUploadCreateWithoutUserInput, DataUploadUncheckedCreateWithoutUserInput> | DataUploadCreateWithoutUserInput[] | DataUploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataUploadCreateOrConnectWithoutUserInput | DataUploadCreateOrConnectWithoutUserInput[]
    createMany?: DataUploadCreateManyUserInputEnvelope
    connect?: DataUploadWhereUniqueInput | DataUploadWhereUniqueInput[]
  }

  export type GlucoseReadingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GlucoseReadingCreateWithoutUserInput, GlucoseReadingUncheckedCreateWithoutUserInput> | GlucoseReadingCreateWithoutUserInput[] | GlucoseReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GlucoseReadingCreateOrConnectWithoutUserInput | GlucoseReadingCreateOrConnectWithoutUserInput[]
    createMany?: GlucoseReadingCreateManyUserInputEnvelope
    connect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
  }

  export type DataUploadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DataUploadCreateWithoutUserInput, DataUploadUncheckedCreateWithoutUserInput> | DataUploadCreateWithoutUserInput[] | DataUploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataUploadCreateOrConnectWithoutUserInput | DataUploadCreateOrConnectWithoutUserInput[]
    createMany?: DataUploadCreateManyUserInputEnvelope
    connect?: DataUploadWhereUniqueInput | DataUploadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GlucoseReadingUpdateManyWithoutUserNestedInput = {
    create?: XOR<GlucoseReadingCreateWithoutUserInput, GlucoseReadingUncheckedCreateWithoutUserInput> | GlucoseReadingCreateWithoutUserInput[] | GlucoseReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GlucoseReadingCreateOrConnectWithoutUserInput | GlucoseReadingCreateOrConnectWithoutUserInput[]
    upsert?: GlucoseReadingUpsertWithWhereUniqueWithoutUserInput | GlucoseReadingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GlucoseReadingCreateManyUserInputEnvelope
    set?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    disconnect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    delete?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    connect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    update?: GlucoseReadingUpdateWithWhereUniqueWithoutUserInput | GlucoseReadingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GlucoseReadingUpdateManyWithWhereWithoutUserInput | GlucoseReadingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GlucoseReadingScalarWhereInput | GlucoseReadingScalarWhereInput[]
  }

  export type DataUploadUpdateManyWithoutUserNestedInput = {
    create?: XOR<DataUploadCreateWithoutUserInput, DataUploadUncheckedCreateWithoutUserInput> | DataUploadCreateWithoutUserInput[] | DataUploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataUploadCreateOrConnectWithoutUserInput | DataUploadCreateOrConnectWithoutUserInput[]
    upsert?: DataUploadUpsertWithWhereUniqueWithoutUserInput | DataUploadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DataUploadCreateManyUserInputEnvelope
    set?: DataUploadWhereUniqueInput | DataUploadWhereUniqueInput[]
    disconnect?: DataUploadWhereUniqueInput | DataUploadWhereUniqueInput[]
    delete?: DataUploadWhereUniqueInput | DataUploadWhereUniqueInput[]
    connect?: DataUploadWhereUniqueInput | DataUploadWhereUniqueInput[]
    update?: DataUploadUpdateWithWhereUniqueWithoutUserInput | DataUploadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DataUploadUpdateManyWithWhereWithoutUserInput | DataUploadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DataUploadScalarWhereInput | DataUploadScalarWhereInput[]
  }

  export type GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GlucoseReadingCreateWithoutUserInput, GlucoseReadingUncheckedCreateWithoutUserInput> | GlucoseReadingCreateWithoutUserInput[] | GlucoseReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GlucoseReadingCreateOrConnectWithoutUserInput | GlucoseReadingCreateOrConnectWithoutUserInput[]
    upsert?: GlucoseReadingUpsertWithWhereUniqueWithoutUserInput | GlucoseReadingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GlucoseReadingCreateManyUserInputEnvelope
    set?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    disconnect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    delete?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    connect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    update?: GlucoseReadingUpdateWithWhereUniqueWithoutUserInput | GlucoseReadingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GlucoseReadingUpdateManyWithWhereWithoutUserInput | GlucoseReadingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GlucoseReadingScalarWhereInput | GlucoseReadingScalarWhereInput[]
  }

  export type DataUploadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DataUploadCreateWithoutUserInput, DataUploadUncheckedCreateWithoutUserInput> | DataUploadCreateWithoutUserInput[] | DataUploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataUploadCreateOrConnectWithoutUserInput | DataUploadCreateOrConnectWithoutUserInput[]
    upsert?: DataUploadUpsertWithWhereUniqueWithoutUserInput | DataUploadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DataUploadCreateManyUserInputEnvelope
    set?: DataUploadWhereUniqueInput | DataUploadWhereUniqueInput[]
    disconnect?: DataUploadWhereUniqueInput | DataUploadWhereUniqueInput[]
    delete?: DataUploadWhereUniqueInput | DataUploadWhereUniqueInput[]
    connect?: DataUploadWhereUniqueInput | DataUploadWhereUniqueInput[]
    update?: DataUploadUpdateWithWhereUniqueWithoutUserInput | DataUploadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DataUploadUpdateManyWithWhereWithoutUserInput | DataUploadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DataUploadScalarWhereInput | DataUploadScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGlucoseReadingsInput = {
    create?: XOR<UserCreateWithoutGlucoseReadingsInput, UserUncheckedCreateWithoutGlucoseReadingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGlucoseReadingsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGlucoseReadingsNestedInput = {
    create?: XOR<UserCreateWithoutGlucoseReadingsInput, UserUncheckedCreateWithoutGlucoseReadingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGlucoseReadingsInput
    upsert?: UserUpsertWithoutGlucoseReadingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGlucoseReadingsInput, UserUpdateWithoutGlucoseReadingsInput>, UserUncheckedUpdateWithoutGlucoseReadingsInput>
  }

  export type UserCreateNestedOneWithoutDataUploadsInput = {
    create?: XOR<UserCreateWithoutDataUploadsInput, UserUncheckedCreateWithoutDataUploadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDataUploadsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDataUploadsNestedInput = {
    create?: XOR<UserCreateWithoutDataUploadsInput, UserUncheckedCreateWithoutDataUploadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDataUploadsInput
    upsert?: UserUpsertWithoutDataUploadsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDataUploadsInput, UserUpdateWithoutDataUploadsInput>, UserUncheckedUpdateWithoutDataUploadsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type GlucoseReadingCreateWithoutUserInput = {
    id?: string
    timestamp: Date | string
    glucoseValue: number
    rateOfChange?: number | null
    eventType: string
    eventSubtype?: string | null
    transmitterId?: string | null
    transmitterTime?: string | null
    sourceDeviceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlucoseReadingUncheckedCreateWithoutUserInput = {
    id?: string
    timestamp: Date | string
    glucoseValue: number
    rateOfChange?: number | null
    eventType: string
    eventSubtype?: string | null
    transmitterId?: string | null
    transmitterTime?: string | null
    sourceDeviceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlucoseReadingCreateOrConnectWithoutUserInput = {
    where: GlucoseReadingWhereUniqueInput
    create: XOR<GlucoseReadingCreateWithoutUserInput, GlucoseReadingUncheckedCreateWithoutUserInput>
  }

  export type GlucoseReadingCreateManyUserInputEnvelope = {
    data: GlucoseReadingCreateManyUserInput | GlucoseReadingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DataUploadCreateWithoutUserInput = {
    id?: string
    fileName: string
    fileSize: number
    uploadedAt?: Date | string
  }

  export type DataUploadUncheckedCreateWithoutUserInput = {
    id?: string
    fileName: string
    fileSize: number
    uploadedAt?: Date | string
  }

  export type DataUploadCreateOrConnectWithoutUserInput = {
    where: DataUploadWhereUniqueInput
    create: XOR<DataUploadCreateWithoutUserInput, DataUploadUncheckedCreateWithoutUserInput>
  }

  export type DataUploadCreateManyUserInputEnvelope = {
    data: DataUploadCreateManyUserInput | DataUploadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GlucoseReadingUpsertWithWhereUniqueWithoutUserInput = {
    where: GlucoseReadingWhereUniqueInput
    update: XOR<GlucoseReadingUpdateWithoutUserInput, GlucoseReadingUncheckedUpdateWithoutUserInput>
    create: XOR<GlucoseReadingCreateWithoutUserInput, GlucoseReadingUncheckedCreateWithoutUserInput>
  }

  export type GlucoseReadingUpdateWithWhereUniqueWithoutUserInput = {
    where: GlucoseReadingWhereUniqueInput
    data: XOR<GlucoseReadingUpdateWithoutUserInput, GlucoseReadingUncheckedUpdateWithoutUserInput>
  }

  export type GlucoseReadingUpdateManyWithWhereWithoutUserInput = {
    where: GlucoseReadingScalarWhereInput
    data: XOR<GlucoseReadingUpdateManyMutationInput, GlucoseReadingUncheckedUpdateManyWithoutUserInput>
  }

  export type GlucoseReadingScalarWhereInput = {
    AND?: GlucoseReadingScalarWhereInput | GlucoseReadingScalarWhereInput[]
    OR?: GlucoseReadingScalarWhereInput[]
    NOT?: GlucoseReadingScalarWhereInput | GlucoseReadingScalarWhereInput[]
    id?: StringFilter<"GlucoseReading"> | string
    timestamp?: DateTimeFilter<"GlucoseReading"> | Date | string
    glucoseValue?: FloatFilter<"GlucoseReading"> | number
    rateOfChange?: FloatNullableFilter<"GlucoseReading"> | number | null
    eventType?: StringFilter<"GlucoseReading"> | string
    eventSubtype?: StringNullableFilter<"GlucoseReading"> | string | null
    transmitterId?: StringNullableFilter<"GlucoseReading"> | string | null
    transmitterTime?: StringNullableFilter<"GlucoseReading"> | string | null
    sourceDeviceId?: StringNullableFilter<"GlucoseReading"> | string | null
    userId?: StringFilter<"GlucoseReading"> | string
    createdAt?: DateTimeFilter<"GlucoseReading"> | Date | string
    updatedAt?: DateTimeFilter<"GlucoseReading"> | Date | string
  }

  export type DataUploadUpsertWithWhereUniqueWithoutUserInput = {
    where: DataUploadWhereUniqueInput
    update: XOR<DataUploadUpdateWithoutUserInput, DataUploadUncheckedUpdateWithoutUserInput>
    create: XOR<DataUploadCreateWithoutUserInput, DataUploadUncheckedCreateWithoutUserInput>
  }

  export type DataUploadUpdateWithWhereUniqueWithoutUserInput = {
    where: DataUploadWhereUniqueInput
    data: XOR<DataUploadUpdateWithoutUserInput, DataUploadUncheckedUpdateWithoutUserInput>
  }

  export type DataUploadUpdateManyWithWhereWithoutUserInput = {
    where: DataUploadScalarWhereInput
    data: XOR<DataUploadUpdateManyMutationInput, DataUploadUncheckedUpdateManyWithoutUserInput>
  }

  export type DataUploadScalarWhereInput = {
    AND?: DataUploadScalarWhereInput | DataUploadScalarWhereInput[]
    OR?: DataUploadScalarWhereInput[]
    NOT?: DataUploadScalarWhereInput | DataUploadScalarWhereInput[]
    id?: StringFilter<"DataUpload"> | string
    fileName?: StringFilter<"DataUpload"> | string
    fileSize?: IntFilter<"DataUpload"> | number
    uploadedAt?: DateTimeFilter<"DataUpload"> | Date | string
    userId?: StringFilter<"DataUpload"> | string
  }

  export type UserCreateWithoutGlucoseReadingsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataUploads?: DataUploadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGlucoseReadingsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataUploads?: DataUploadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGlucoseReadingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGlucoseReadingsInput, UserUncheckedCreateWithoutGlucoseReadingsInput>
  }

  export type UserUpsertWithoutGlucoseReadingsInput = {
    update: XOR<UserUpdateWithoutGlucoseReadingsInput, UserUncheckedUpdateWithoutGlucoseReadingsInput>
    create: XOR<UserCreateWithoutGlucoseReadingsInput, UserUncheckedCreateWithoutGlucoseReadingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGlucoseReadingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGlucoseReadingsInput, UserUncheckedUpdateWithoutGlucoseReadingsInput>
  }

  export type UserUpdateWithoutGlucoseReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataUploads?: DataUploadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGlucoseReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataUploads?: DataUploadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDataUploadsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDataUploadsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDataUploadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDataUploadsInput, UserUncheckedCreateWithoutDataUploadsInput>
  }

  export type UserUpsertWithoutDataUploadsInput = {
    update: XOR<UserUpdateWithoutDataUploadsInput, UserUncheckedUpdateWithoutDataUploadsInput>
    create: XOR<UserCreateWithoutDataUploadsInput, UserUncheckedCreateWithoutDataUploadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDataUploadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDataUploadsInput, UserUncheckedUpdateWithoutDataUploadsInput>
  }

  export type UserUpdateWithoutDataUploadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDataUploadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GlucoseReadingCreateManyUserInput = {
    id?: string
    timestamp: Date | string
    glucoseValue: number
    rateOfChange?: number | null
    eventType: string
    eventSubtype?: string | null
    transmitterId?: string | null
    transmitterTime?: string | null
    sourceDeviceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataUploadCreateManyUserInput = {
    id?: string
    fileName: string
    fileSize: number
    uploadedAt?: Date | string
  }

  export type GlucoseReadingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseValue?: FloatFieldUpdateOperationsInput | number
    rateOfChange?: NullableFloatFieldUpdateOperationsInput | number | null
    eventType?: StringFieldUpdateOperationsInput | string
    eventSubtype?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterId?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterTime?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDeviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseReadingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseValue?: FloatFieldUpdateOperationsInput | number
    rateOfChange?: NullableFloatFieldUpdateOperationsInput | number | null
    eventType?: StringFieldUpdateOperationsInput | string
    eventSubtype?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterId?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterTime?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDeviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseReadingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseValue?: FloatFieldUpdateOperationsInput | number
    rateOfChange?: NullableFloatFieldUpdateOperationsInput | number | null
    eventType?: StringFieldUpdateOperationsInput | string
    eventSubtype?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterId?: NullableStringFieldUpdateOperationsInput | string | null
    transmitterTime?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDeviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataUploadUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataUploadUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataUploadUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}