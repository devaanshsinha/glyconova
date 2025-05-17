
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
 * Model GlucoseStats
 * 
 */
export type GlucoseStats = $Result.DefaultSelection<Prisma.$GlucoseStatsPayload>
/**
 * Model InsulinStats
 * 
 */
export type InsulinStats = $Result.DefaultSelection<Prisma.$InsulinStatsPayload>
/**
 * Model BolusRecord
 * 
 */
export type BolusRecord = $Result.DefaultSelection<Prisma.$BolusRecordPayload>
/**
 * Model BasalRecord
 * 
 */
export type BasalRecord = $Result.DefaultSelection<Prisma.$BasalRecordPayload>
/**
 * Model CarbEntry
 * 
 */
export type CarbEntry = $Result.DefaultSelection<Prisma.$CarbEntryPayload>
/**
 * Model AlarmEvent
 * 
 */
export type AlarmEvent = $Result.DefaultSelection<Prisma.$AlarmEventPayload>

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

  /**
   * `prisma.glucoseStats`: Exposes CRUD operations for the **GlucoseStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlucoseStats
    * const glucoseStats = await prisma.glucoseStats.findMany()
    * ```
    */
  get glucoseStats(): Prisma.GlucoseStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insulinStats`: Exposes CRUD operations for the **InsulinStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InsulinStats
    * const insulinStats = await prisma.insulinStats.findMany()
    * ```
    */
  get insulinStats(): Prisma.InsulinStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bolusRecord`: Exposes CRUD operations for the **BolusRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BolusRecords
    * const bolusRecords = await prisma.bolusRecord.findMany()
    * ```
    */
  get bolusRecord(): Prisma.BolusRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.basalRecord`: Exposes CRUD operations for the **BasalRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BasalRecords
    * const basalRecords = await prisma.basalRecord.findMany()
    * ```
    */
  get basalRecord(): Prisma.BasalRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carbEntry`: Exposes CRUD operations for the **CarbEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarbEntries
    * const carbEntries = await prisma.carbEntry.findMany()
    * ```
    */
  get carbEntry(): Prisma.CarbEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alarmEvent`: Exposes CRUD operations for the **AlarmEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlarmEvents
    * const alarmEvents = await prisma.alarmEvent.findMany()
    * ```
    */
  get alarmEvent(): Prisma.AlarmEventDelegate<ExtArgs, ClientOptions>;
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
    DataUpload: 'DataUpload',
    GlucoseStats: 'GlucoseStats',
    InsulinStats: 'InsulinStats',
    BolusRecord: 'BolusRecord',
    BasalRecord: 'BasalRecord',
    CarbEntry: 'CarbEntry',
    AlarmEvent: 'AlarmEvent'
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
      modelProps: "user" | "glucoseReading" | "dataUpload" | "glucoseStats" | "insulinStats" | "bolusRecord" | "basalRecord" | "carbEntry" | "alarmEvent"
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
      GlucoseStats: {
        payload: Prisma.$GlucoseStatsPayload<ExtArgs>
        fields: Prisma.GlucoseStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlucoseStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlucoseStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseStatsPayload>
          }
          findFirst: {
            args: Prisma.GlucoseStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlucoseStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseStatsPayload>
          }
          findMany: {
            args: Prisma.GlucoseStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseStatsPayload>[]
          }
          create: {
            args: Prisma.GlucoseStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseStatsPayload>
          }
          createMany: {
            args: Prisma.GlucoseStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlucoseStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseStatsPayload>[]
          }
          delete: {
            args: Prisma.GlucoseStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseStatsPayload>
          }
          update: {
            args: Prisma.GlucoseStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseStatsPayload>
          }
          deleteMany: {
            args: Prisma.GlucoseStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlucoseStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlucoseStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseStatsPayload>[]
          }
          upsert: {
            args: Prisma.GlucoseStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseStatsPayload>
          }
          aggregate: {
            args: Prisma.GlucoseStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlucoseStats>
          }
          groupBy: {
            args: Prisma.GlucoseStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlucoseStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlucoseStatsCountArgs<ExtArgs>
            result: $Utils.Optional<GlucoseStatsCountAggregateOutputType> | number
          }
        }
      }
      InsulinStats: {
        payload: Prisma.$InsulinStatsPayload<ExtArgs>
        fields: Prisma.InsulinStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsulinStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsulinStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsulinStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsulinStatsPayload>
          }
          findFirst: {
            args: Prisma.InsulinStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsulinStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsulinStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsulinStatsPayload>
          }
          findMany: {
            args: Prisma.InsulinStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsulinStatsPayload>[]
          }
          create: {
            args: Prisma.InsulinStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsulinStatsPayload>
          }
          createMany: {
            args: Prisma.InsulinStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsulinStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsulinStatsPayload>[]
          }
          delete: {
            args: Prisma.InsulinStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsulinStatsPayload>
          }
          update: {
            args: Prisma.InsulinStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsulinStatsPayload>
          }
          deleteMany: {
            args: Prisma.InsulinStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsulinStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InsulinStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsulinStatsPayload>[]
          }
          upsert: {
            args: Prisma.InsulinStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsulinStatsPayload>
          }
          aggregate: {
            args: Prisma.InsulinStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsulinStats>
          }
          groupBy: {
            args: Prisma.InsulinStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsulinStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsulinStatsCountArgs<ExtArgs>
            result: $Utils.Optional<InsulinStatsCountAggregateOutputType> | number
          }
        }
      }
      BolusRecord: {
        payload: Prisma.$BolusRecordPayload<ExtArgs>
        fields: Prisma.BolusRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BolusRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolusRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BolusRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolusRecordPayload>
          }
          findFirst: {
            args: Prisma.BolusRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolusRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BolusRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolusRecordPayload>
          }
          findMany: {
            args: Prisma.BolusRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolusRecordPayload>[]
          }
          create: {
            args: Prisma.BolusRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolusRecordPayload>
          }
          createMany: {
            args: Prisma.BolusRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BolusRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolusRecordPayload>[]
          }
          delete: {
            args: Prisma.BolusRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolusRecordPayload>
          }
          update: {
            args: Prisma.BolusRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolusRecordPayload>
          }
          deleteMany: {
            args: Prisma.BolusRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BolusRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BolusRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolusRecordPayload>[]
          }
          upsert: {
            args: Prisma.BolusRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolusRecordPayload>
          }
          aggregate: {
            args: Prisma.BolusRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBolusRecord>
          }
          groupBy: {
            args: Prisma.BolusRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<BolusRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.BolusRecordCountArgs<ExtArgs>
            result: $Utils.Optional<BolusRecordCountAggregateOutputType> | number
          }
        }
      }
      BasalRecord: {
        payload: Prisma.$BasalRecordPayload<ExtArgs>
        fields: Prisma.BasalRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BasalRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasalRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BasalRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasalRecordPayload>
          }
          findFirst: {
            args: Prisma.BasalRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasalRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BasalRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasalRecordPayload>
          }
          findMany: {
            args: Prisma.BasalRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasalRecordPayload>[]
          }
          create: {
            args: Prisma.BasalRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasalRecordPayload>
          }
          createMany: {
            args: Prisma.BasalRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BasalRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasalRecordPayload>[]
          }
          delete: {
            args: Prisma.BasalRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasalRecordPayload>
          }
          update: {
            args: Prisma.BasalRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasalRecordPayload>
          }
          deleteMany: {
            args: Prisma.BasalRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BasalRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BasalRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasalRecordPayload>[]
          }
          upsert: {
            args: Prisma.BasalRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasalRecordPayload>
          }
          aggregate: {
            args: Prisma.BasalRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBasalRecord>
          }
          groupBy: {
            args: Prisma.BasalRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<BasalRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.BasalRecordCountArgs<ExtArgs>
            result: $Utils.Optional<BasalRecordCountAggregateOutputType> | number
          }
        }
      }
      CarbEntry: {
        payload: Prisma.$CarbEntryPayload<ExtArgs>
        fields: Prisma.CarbEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarbEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarbEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbEntryPayload>
          }
          findFirst: {
            args: Prisma.CarbEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarbEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbEntryPayload>
          }
          findMany: {
            args: Prisma.CarbEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbEntryPayload>[]
          }
          create: {
            args: Prisma.CarbEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbEntryPayload>
          }
          createMany: {
            args: Prisma.CarbEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarbEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbEntryPayload>[]
          }
          delete: {
            args: Prisma.CarbEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbEntryPayload>
          }
          update: {
            args: Prisma.CarbEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbEntryPayload>
          }
          deleteMany: {
            args: Prisma.CarbEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarbEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarbEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbEntryPayload>[]
          }
          upsert: {
            args: Prisma.CarbEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbEntryPayload>
          }
          aggregate: {
            args: Prisma.CarbEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarbEntry>
          }
          groupBy: {
            args: Prisma.CarbEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarbEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarbEntryCountArgs<ExtArgs>
            result: $Utils.Optional<CarbEntryCountAggregateOutputType> | number
          }
        }
      }
      AlarmEvent: {
        payload: Prisma.$AlarmEventPayload<ExtArgs>
        fields: Prisma.AlarmEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlarmEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlarmEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmEventPayload>
          }
          findFirst: {
            args: Prisma.AlarmEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlarmEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmEventPayload>
          }
          findMany: {
            args: Prisma.AlarmEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmEventPayload>[]
          }
          create: {
            args: Prisma.AlarmEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmEventPayload>
          }
          createMany: {
            args: Prisma.AlarmEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlarmEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmEventPayload>[]
          }
          delete: {
            args: Prisma.AlarmEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmEventPayload>
          }
          update: {
            args: Prisma.AlarmEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmEventPayload>
          }
          deleteMany: {
            args: Prisma.AlarmEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlarmEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlarmEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmEventPayload>[]
          }
          upsert: {
            args: Prisma.AlarmEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmEventPayload>
          }
          aggregate: {
            args: Prisma.AlarmEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlarmEvent>
          }
          groupBy: {
            args: Prisma.AlarmEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlarmEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlarmEventCountArgs<ExtArgs>
            result: $Utils.Optional<AlarmEventCountAggregateOutputType> | number
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
    glucoseStats?: GlucoseStatsOmit
    insulinStats?: InsulinStatsOmit
    bolusRecord?: BolusRecordOmit
    basalRecord?: BasalRecordOmit
    carbEntry?: CarbEntryOmit
    alarmEvent?: AlarmEventOmit
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
    bolusRecords: number
    basalRecords: number
    carbEntries: number
    alarmEvents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glucoseReadings?: boolean | UserCountOutputTypeCountGlucoseReadingsArgs
    dataUploads?: boolean | UserCountOutputTypeCountDataUploadsArgs
    bolusRecords?: boolean | UserCountOutputTypeCountBolusRecordsArgs
    basalRecords?: boolean | UserCountOutputTypeCountBasalRecordsArgs
    carbEntries?: boolean | UserCountOutputTypeCountCarbEntriesArgs
    alarmEvents?: boolean | UserCountOutputTypeCountAlarmEventsArgs
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
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBolusRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BolusRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBasalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BasalRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCarbEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarbEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlarmEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlarmEventWhereInput
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
    glucoseStats?: boolean | User$glucoseStatsArgs<ExtArgs>
    insulinStats?: boolean | User$insulinStatsArgs<ExtArgs>
    bolusRecords?: boolean | User$bolusRecordsArgs<ExtArgs>
    basalRecords?: boolean | User$basalRecordsArgs<ExtArgs>
    carbEntries?: boolean | User$carbEntriesArgs<ExtArgs>
    alarmEvents?: boolean | User$alarmEventsArgs<ExtArgs>
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
    glucoseStats?: boolean | User$glucoseStatsArgs<ExtArgs>
    insulinStats?: boolean | User$insulinStatsArgs<ExtArgs>
    bolusRecords?: boolean | User$bolusRecordsArgs<ExtArgs>
    basalRecords?: boolean | User$basalRecordsArgs<ExtArgs>
    carbEntries?: boolean | User$carbEntriesArgs<ExtArgs>
    alarmEvents?: boolean | User$alarmEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      glucoseReadings: Prisma.$GlucoseReadingPayload<ExtArgs>[]
      dataUploads: Prisma.$DataUploadPayload<ExtArgs>[]
      glucoseStats: Prisma.$GlucoseStatsPayload<ExtArgs> | null
      insulinStats: Prisma.$InsulinStatsPayload<ExtArgs> | null
      bolusRecords: Prisma.$BolusRecordPayload<ExtArgs>[]
      basalRecords: Prisma.$BasalRecordPayload<ExtArgs>[]
      carbEntries: Prisma.$CarbEntryPayload<ExtArgs>[]
      alarmEvents: Prisma.$AlarmEventPayload<ExtArgs>[]
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
    glucoseStats<T extends User$glucoseStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$glucoseStatsArgs<ExtArgs>>): Prisma__GlucoseStatsClient<$Result.GetResult<Prisma.$GlucoseStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    insulinStats<T extends User$insulinStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$insulinStatsArgs<ExtArgs>>): Prisma__InsulinStatsClient<$Result.GetResult<Prisma.$InsulinStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bolusRecords<T extends User$bolusRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$bolusRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BolusRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    basalRecords<T extends User$basalRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$basalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carbEntries<T extends User$carbEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$carbEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarbEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alarmEvents<T extends User$alarmEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$alarmEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.glucoseStats
   */
  export type User$glucoseStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsInclude<ExtArgs> | null
    where?: GlucoseStatsWhereInput
  }

  /**
   * User.insulinStats
   */
  export type User$insulinStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsInclude<ExtArgs> | null
    where?: InsulinStatsWhereInput
  }

  /**
   * User.bolusRecords
   */
  export type User$bolusRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordInclude<ExtArgs> | null
    where?: BolusRecordWhereInput
    orderBy?: BolusRecordOrderByWithRelationInput | BolusRecordOrderByWithRelationInput[]
    cursor?: BolusRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BolusRecordScalarFieldEnum | BolusRecordScalarFieldEnum[]
  }

  /**
   * User.basalRecords
   */
  export type User$basalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordInclude<ExtArgs> | null
    where?: BasalRecordWhereInput
    orderBy?: BasalRecordOrderByWithRelationInput | BasalRecordOrderByWithRelationInput[]
    cursor?: BasalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BasalRecordScalarFieldEnum | BasalRecordScalarFieldEnum[]
  }

  /**
   * User.carbEntries
   */
  export type User$carbEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryInclude<ExtArgs> | null
    where?: CarbEntryWhereInput
    orderBy?: CarbEntryOrderByWithRelationInput | CarbEntryOrderByWithRelationInput[]
    cursor?: CarbEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarbEntryScalarFieldEnum | CarbEntryScalarFieldEnum[]
  }

  /**
   * User.alarmEvents
   */
  export type User$alarmEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventInclude<ExtArgs> | null
    where?: AlarmEventWhereInput
    orderBy?: AlarmEventOrderByWithRelationInput | AlarmEventOrderByWithRelationInput[]
    cursor?: AlarmEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlarmEventScalarFieldEnum | AlarmEventScalarFieldEnum[]
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
   * Model GlucoseStats
   */

  export type AggregateGlucoseStats = {
    _count: GlucoseStatsCountAggregateOutputType | null
    _avg: GlucoseStatsAvgAggregateOutputType | null
    _sum: GlucoseStatsSumAggregateOutputType | null
    _min: GlucoseStatsMinAggregateOutputType | null
    _max: GlucoseStatsMaxAggregateOutputType | null
  }

  export type GlucoseStatsAvgAggregateOutputType = {
    average: number | null
    standardDeviation: number | null
    highCount: number | null
    lowCount: number | null
    inRangeCount: number | null
    totalReadings: number | null
    highPercentage: number | null
    lowPercentage: number | null
    inRangePercentage: number | null
    minGlucose: number | null
    maxGlucose: number | null
  }

  export type GlucoseStatsSumAggregateOutputType = {
    average: number | null
    standardDeviation: number | null
    highCount: number | null
    lowCount: number | null
    inRangeCount: number | null
    totalReadings: number | null
    highPercentage: number | null
    lowPercentage: number | null
    inRangePercentage: number | null
    minGlucose: number | null
    maxGlucose: number | null
  }

  export type GlucoseStatsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    average: number | null
    standardDeviation: number | null
    highCount: number | null
    lowCount: number | null
    inRangeCount: number | null
    totalReadings: number | null
    highPercentage: number | null
    lowPercentage: number | null
    inRangePercentage: number | null
    minGlucose: number | null
    maxGlucose: number | null
    timeInRange: string | null
    lastCalculated: Date | null
    updatedAt: Date | null
  }

  export type GlucoseStatsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    average: number | null
    standardDeviation: number | null
    highCount: number | null
    lowCount: number | null
    inRangeCount: number | null
    totalReadings: number | null
    highPercentage: number | null
    lowPercentage: number | null
    inRangePercentage: number | null
    minGlucose: number | null
    maxGlucose: number | null
    timeInRange: string | null
    lastCalculated: Date | null
    updatedAt: Date | null
  }

  export type GlucoseStatsCountAggregateOutputType = {
    id: number
    userId: number
    average: number
    standardDeviation: number
    highCount: number
    lowCount: number
    inRangeCount: number
    totalReadings: number
    highPercentage: number
    lowPercentage: number
    inRangePercentage: number
    minGlucose: number
    maxGlucose: number
    timeInRange: number
    lastCalculated: number
    updatedAt: number
    _all: number
  }


  export type GlucoseStatsAvgAggregateInputType = {
    average?: true
    standardDeviation?: true
    highCount?: true
    lowCount?: true
    inRangeCount?: true
    totalReadings?: true
    highPercentage?: true
    lowPercentage?: true
    inRangePercentage?: true
    minGlucose?: true
    maxGlucose?: true
  }

  export type GlucoseStatsSumAggregateInputType = {
    average?: true
    standardDeviation?: true
    highCount?: true
    lowCount?: true
    inRangeCount?: true
    totalReadings?: true
    highPercentage?: true
    lowPercentage?: true
    inRangePercentage?: true
    minGlucose?: true
    maxGlucose?: true
  }

  export type GlucoseStatsMinAggregateInputType = {
    id?: true
    userId?: true
    average?: true
    standardDeviation?: true
    highCount?: true
    lowCount?: true
    inRangeCount?: true
    totalReadings?: true
    highPercentage?: true
    lowPercentage?: true
    inRangePercentage?: true
    minGlucose?: true
    maxGlucose?: true
    timeInRange?: true
    lastCalculated?: true
    updatedAt?: true
  }

  export type GlucoseStatsMaxAggregateInputType = {
    id?: true
    userId?: true
    average?: true
    standardDeviation?: true
    highCount?: true
    lowCount?: true
    inRangeCount?: true
    totalReadings?: true
    highPercentage?: true
    lowPercentage?: true
    inRangePercentage?: true
    minGlucose?: true
    maxGlucose?: true
    timeInRange?: true
    lastCalculated?: true
    updatedAt?: true
  }

  export type GlucoseStatsCountAggregateInputType = {
    id?: true
    userId?: true
    average?: true
    standardDeviation?: true
    highCount?: true
    lowCount?: true
    inRangeCount?: true
    totalReadings?: true
    highPercentage?: true
    lowPercentage?: true
    inRangePercentage?: true
    minGlucose?: true
    maxGlucose?: true
    timeInRange?: true
    lastCalculated?: true
    updatedAt?: true
    _all?: true
  }

  export type GlucoseStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlucoseStats to aggregate.
     */
    where?: GlucoseStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseStats to fetch.
     */
    orderBy?: GlucoseStatsOrderByWithRelationInput | GlucoseStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlucoseStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlucoseStats
    **/
    _count?: true | GlucoseStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlucoseStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlucoseStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlucoseStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlucoseStatsMaxAggregateInputType
  }

  export type GetGlucoseStatsAggregateType<T extends GlucoseStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateGlucoseStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlucoseStats[P]>
      : GetScalarType<T[P], AggregateGlucoseStats[P]>
  }




  export type GlucoseStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlucoseStatsWhereInput
    orderBy?: GlucoseStatsOrderByWithAggregationInput | GlucoseStatsOrderByWithAggregationInput[]
    by: GlucoseStatsScalarFieldEnum[] | GlucoseStatsScalarFieldEnum
    having?: GlucoseStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlucoseStatsCountAggregateInputType | true
    _avg?: GlucoseStatsAvgAggregateInputType
    _sum?: GlucoseStatsSumAggregateInputType
    _min?: GlucoseStatsMinAggregateInputType
    _max?: GlucoseStatsMaxAggregateInputType
  }

  export type GlucoseStatsGroupByOutputType = {
    id: string
    userId: string
    average: number
    standardDeviation: number
    highCount: number
    lowCount: number
    inRangeCount: number
    totalReadings: number
    highPercentage: number
    lowPercentage: number
    inRangePercentage: number
    minGlucose: number
    maxGlucose: number
    timeInRange: string
    lastCalculated: Date
    updatedAt: Date
    _count: GlucoseStatsCountAggregateOutputType | null
    _avg: GlucoseStatsAvgAggregateOutputType | null
    _sum: GlucoseStatsSumAggregateOutputType | null
    _min: GlucoseStatsMinAggregateOutputType | null
    _max: GlucoseStatsMaxAggregateOutputType | null
  }

  type GetGlucoseStatsGroupByPayload<T extends GlucoseStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlucoseStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlucoseStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlucoseStatsGroupByOutputType[P]>
            : GetScalarType<T[P], GlucoseStatsGroupByOutputType[P]>
        }
      >
    >


  export type GlucoseStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    average?: boolean
    standardDeviation?: boolean
    highCount?: boolean
    lowCount?: boolean
    inRangeCount?: boolean
    totalReadings?: boolean
    highPercentage?: boolean
    lowPercentage?: boolean
    inRangePercentage?: boolean
    minGlucose?: boolean
    maxGlucose?: boolean
    timeInRange?: boolean
    lastCalculated?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glucoseStats"]>

  export type GlucoseStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    average?: boolean
    standardDeviation?: boolean
    highCount?: boolean
    lowCount?: boolean
    inRangeCount?: boolean
    totalReadings?: boolean
    highPercentage?: boolean
    lowPercentage?: boolean
    inRangePercentage?: boolean
    minGlucose?: boolean
    maxGlucose?: boolean
    timeInRange?: boolean
    lastCalculated?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glucoseStats"]>

  export type GlucoseStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    average?: boolean
    standardDeviation?: boolean
    highCount?: boolean
    lowCount?: boolean
    inRangeCount?: boolean
    totalReadings?: boolean
    highPercentage?: boolean
    lowPercentage?: boolean
    inRangePercentage?: boolean
    minGlucose?: boolean
    maxGlucose?: boolean
    timeInRange?: boolean
    lastCalculated?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glucoseStats"]>

  export type GlucoseStatsSelectScalar = {
    id?: boolean
    userId?: boolean
    average?: boolean
    standardDeviation?: boolean
    highCount?: boolean
    lowCount?: boolean
    inRangeCount?: boolean
    totalReadings?: boolean
    highPercentage?: boolean
    lowPercentage?: boolean
    inRangePercentage?: boolean
    minGlucose?: boolean
    maxGlucose?: boolean
    timeInRange?: boolean
    lastCalculated?: boolean
    updatedAt?: boolean
  }

  export type GlucoseStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "average" | "standardDeviation" | "highCount" | "lowCount" | "inRangeCount" | "totalReadings" | "highPercentage" | "lowPercentage" | "inRangePercentage" | "minGlucose" | "maxGlucose" | "timeInRange" | "lastCalculated" | "updatedAt", ExtArgs["result"]["glucoseStats"]>
  export type GlucoseStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GlucoseStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GlucoseStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GlucoseStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlucoseStats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      average: number
      standardDeviation: number
      highCount: number
      lowCount: number
      inRangeCount: number
      totalReadings: number
      highPercentage: number
      lowPercentage: number
      inRangePercentage: number
      minGlucose: number
      maxGlucose: number
      timeInRange: string
      lastCalculated: Date
      updatedAt: Date
    }, ExtArgs["result"]["glucoseStats"]>
    composites: {}
  }

  type GlucoseStatsGetPayload<S extends boolean | null | undefined | GlucoseStatsDefaultArgs> = $Result.GetResult<Prisma.$GlucoseStatsPayload, S>

  type GlucoseStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlucoseStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlucoseStatsCountAggregateInputType | true
    }

  export interface GlucoseStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlucoseStats'], meta: { name: 'GlucoseStats' } }
    /**
     * Find zero or one GlucoseStats that matches the filter.
     * @param {GlucoseStatsFindUniqueArgs} args - Arguments to find a GlucoseStats
     * @example
     * // Get one GlucoseStats
     * const glucoseStats = await prisma.glucoseStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlucoseStatsFindUniqueArgs>(args: SelectSubset<T, GlucoseStatsFindUniqueArgs<ExtArgs>>): Prisma__GlucoseStatsClient<$Result.GetResult<Prisma.$GlucoseStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlucoseStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlucoseStatsFindUniqueOrThrowArgs} args - Arguments to find a GlucoseStats
     * @example
     * // Get one GlucoseStats
     * const glucoseStats = await prisma.glucoseStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlucoseStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, GlucoseStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlucoseStatsClient<$Result.GetResult<Prisma.$GlucoseStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlucoseStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseStatsFindFirstArgs} args - Arguments to find a GlucoseStats
     * @example
     * // Get one GlucoseStats
     * const glucoseStats = await prisma.glucoseStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlucoseStatsFindFirstArgs>(args?: SelectSubset<T, GlucoseStatsFindFirstArgs<ExtArgs>>): Prisma__GlucoseStatsClient<$Result.GetResult<Prisma.$GlucoseStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlucoseStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseStatsFindFirstOrThrowArgs} args - Arguments to find a GlucoseStats
     * @example
     * // Get one GlucoseStats
     * const glucoseStats = await prisma.glucoseStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlucoseStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, GlucoseStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlucoseStatsClient<$Result.GetResult<Prisma.$GlucoseStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlucoseStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlucoseStats
     * const glucoseStats = await prisma.glucoseStats.findMany()
     * 
     * // Get first 10 GlucoseStats
     * const glucoseStats = await prisma.glucoseStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const glucoseStatsWithIdOnly = await prisma.glucoseStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlucoseStatsFindManyArgs>(args?: SelectSubset<T, GlucoseStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlucoseStats.
     * @param {GlucoseStatsCreateArgs} args - Arguments to create a GlucoseStats.
     * @example
     * // Create one GlucoseStats
     * const GlucoseStats = await prisma.glucoseStats.create({
     *   data: {
     *     // ... data to create a GlucoseStats
     *   }
     * })
     * 
     */
    create<T extends GlucoseStatsCreateArgs>(args: SelectSubset<T, GlucoseStatsCreateArgs<ExtArgs>>): Prisma__GlucoseStatsClient<$Result.GetResult<Prisma.$GlucoseStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlucoseStats.
     * @param {GlucoseStatsCreateManyArgs} args - Arguments to create many GlucoseStats.
     * @example
     * // Create many GlucoseStats
     * const glucoseStats = await prisma.glucoseStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlucoseStatsCreateManyArgs>(args?: SelectSubset<T, GlucoseStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlucoseStats and returns the data saved in the database.
     * @param {GlucoseStatsCreateManyAndReturnArgs} args - Arguments to create many GlucoseStats.
     * @example
     * // Create many GlucoseStats
     * const glucoseStats = await prisma.glucoseStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlucoseStats and only return the `id`
     * const glucoseStatsWithIdOnly = await prisma.glucoseStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlucoseStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, GlucoseStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlucoseStats.
     * @param {GlucoseStatsDeleteArgs} args - Arguments to delete one GlucoseStats.
     * @example
     * // Delete one GlucoseStats
     * const GlucoseStats = await prisma.glucoseStats.delete({
     *   where: {
     *     // ... filter to delete one GlucoseStats
     *   }
     * })
     * 
     */
    delete<T extends GlucoseStatsDeleteArgs>(args: SelectSubset<T, GlucoseStatsDeleteArgs<ExtArgs>>): Prisma__GlucoseStatsClient<$Result.GetResult<Prisma.$GlucoseStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlucoseStats.
     * @param {GlucoseStatsUpdateArgs} args - Arguments to update one GlucoseStats.
     * @example
     * // Update one GlucoseStats
     * const glucoseStats = await prisma.glucoseStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlucoseStatsUpdateArgs>(args: SelectSubset<T, GlucoseStatsUpdateArgs<ExtArgs>>): Prisma__GlucoseStatsClient<$Result.GetResult<Prisma.$GlucoseStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlucoseStats.
     * @param {GlucoseStatsDeleteManyArgs} args - Arguments to filter GlucoseStats to delete.
     * @example
     * // Delete a few GlucoseStats
     * const { count } = await prisma.glucoseStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlucoseStatsDeleteManyArgs>(args?: SelectSubset<T, GlucoseStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlucoseStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlucoseStats
     * const glucoseStats = await prisma.glucoseStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlucoseStatsUpdateManyArgs>(args: SelectSubset<T, GlucoseStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlucoseStats and returns the data updated in the database.
     * @param {GlucoseStatsUpdateManyAndReturnArgs} args - Arguments to update many GlucoseStats.
     * @example
     * // Update many GlucoseStats
     * const glucoseStats = await prisma.glucoseStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlucoseStats and only return the `id`
     * const glucoseStatsWithIdOnly = await prisma.glucoseStats.updateManyAndReturn({
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
    updateManyAndReturn<T extends GlucoseStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, GlucoseStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlucoseStats.
     * @param {GlucoseStatsUpsertArgs} args - Arguments to update or create a GlucoseStats.
     * @example
     * // Update or create a GlucoseStats
     * const glucoseStats = await prisma.glucoseStats.upsert({
     *   create: {
     *     // ... data to create a GlucoseStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlucoseStats we want to update
     *   }
     * })
     */
    upsert<T extends GlucoseStatsUpsertArgs>(args: SelectSubset<T, GlucoseStatsUpsertArgs<ExtArgs>>): Prisma__GlucoseStatsClient<$Result.GetResult<Prisma.$GlucoseStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlucoseStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseStatsCountArgs} args - Arguments to filter GlucoseStats to count.
     * @example
     * // Count the number of GlucoseStats
     * const count = await prisma.glucoseStats.count({
     *   where: {
     *     // ... the filter for the GlucoseStats we want to count
     *   }
     * })
    **/
    count<T extends GlucoseStatsCountArgs>(
      args?: Subset<T, GlucoseStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlucoseStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlucoseStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlucoseStatsAggregateArgs>(args: Subset<T, GlucoseStatsAggregateArgs>): Prisma.PrismaPromise<GetGlucoseStatsAggregateType<T>>

    /**
     * Group by GlucoseStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseStatsGroupByArgs} args - Group by arguments.
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
      T extends GlucoseStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlucoseStatsGroupByArgs['orderBy'] }
        : { orderBy?: GlucoseStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlucoseStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlucoseStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlucoseStats model
   */
  readonly fields: GlucoseStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlucoseStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlucoseStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GlucoseStats model
   */
  interface GlucoseStatsFieldRefs {
    readonly id: FieldRef<"GlucoseStats", 'String'>
    readonly userId: FieldRef<"GlucoseStats", 'String'>
    readonly average: FieldRef<"GlucoseStats", 'Float'>
    readonly standardDeviation: FieldRef<"GlucoseStats", 'Float'>
    readonly highCount: FieldRef<"GlucoseStats", 'Int'>
    readonly lowCount: FieldRef<"GlucoseStats", 'Int'>
    readonly inRangeCount: FieldRef<"GlucoseStats", 'Int'>
    readonly totalReadings: FieldRef<"GlucoseStats", 'Int'>
    readonly highPercentage: FieldRef<"GlucoseStats", 'Float'>
    readonly lowPercentage: FieldRef<"GlucoseStats", 'Float'>
    readonly inRangePercentage: FieldRef<"GlucoseStats", 'Float'>
    readonly minGlucose: FieldRef<"GlucoseStats", 'Float'>
    readonly maxGlucose: FieldRef<"GlucoseStats", 'Float'>
    readonly timeInRange: FieldRef<"GlucoseStats", 'String'>
    readonly lastCalculated: FieldRef<"GlucoseStats", 'DateTime'>
    readonly updatedAt: FieldRef<"GlucoseStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlucoseStats findUnique
   */
  export type GlucoseStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseStats to fetch.
     */
    where: GlucoseStatsWhereUniqueInput
  }

  /**
   * GlucoseStats findUniqueOrThrow
   */
  export type GlucoseStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseStats to fetch.
     */
    where: GlucoseStatsWhereUniqueInput
  }

  /**
   * GlucoseStats findFirst
   */
  export type GlucoseStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseStats to fetch.
     */
    where?: GlucoseStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseStats to fetch.
     */
    orderBy?: GlucoseStatsOrderByWithRelationInput | GlucoseStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlucoseStats.
     */
    cursor?: GlucoseStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlucoseStats.
     */
    distinct?: GlucoseStatsScalarFieldEnum | GlucoseStatsScalarFieldEnum[]
  }

  /**
   * GlucoseStats findFirstOrThrow
   */
  export type GlucoseStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseStats to fetch.
     */
    where?: GlucoseStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseStats to fetch.
     */
    orderBy?: GlucoseStatsOrderByWithRelationInput | GlucoseStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlucoseStats.
     */
    cursor?: GlucoseStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlucoseStats.
     */
    distinct?: GlucoseStatsScalarFieldEnum | GlucoseStatsScalarFieldEnum[]
  }

  /**
   * GlucoseStats findMany
   */
  export type GlucoseStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseStats to fetch.
     */
    where?: GlucoseStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseStats to fetch.
     */
    orderBy?: GlucoseStatsOrderByWithRelationInput | GlucoseStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlucoseStats.
     */
    cursor?: GlucoseStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseStats.
     */
    skip?: number
    distinct?: GlucoseStatsScalarFieldEnum | GlucoseStatsScalarFieldEnum[]
  }

  /**
   * GlucoseStats create
   */
  export type GlucoseStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a GlucoseStats.
     */
    data: XOR<GlucoseStatsCreateInput, GlucoseStatsUncheckedCreateInput>
  }

  /**
   * GlucoseStats createMany
   */
  export type GlucoseStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlucoseStats.
     */
    data: GlucoseStatsCreateManyInput | GlucoseStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlucoseStats createManyAndReturn
   */
  export type GlucoseStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * The data used to create many GlucoseStats.
     */
    data: GlucoseStatsCreateManyInput | GlucoseStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlucoseStats update
   */
  export type GlucoseStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a GlucoseStats.
     */
    data: XOR<GlucoseStatsUpdateInput, GlucoseStatsUncheckedUpdateInput>
    /**
     * Choose, which GlucoseStats to update.
     */
    where: GlucoseStatsWhereUniqueInput
  }

  /**
   * GlucoseStats updateMany
   */
  export type GlucoseStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlucoseStats.
     */
    data: XOR<GlucoseStatsUpdateManyMutationInput, GlucoseStatsUncheckedUpdateManyInput>
    /**
     * Filter which GlucoseStats to update
     */
    where?: GlucoseStatsWhereInput
    /**
     * Limit how many GlucoseStats to update.
     */
    limit?: number
  }

  /**
   * GlucoseStats updateManyAndReturn
   */
  export type GlucoseStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * The data used to update GlucoseStats.
     */
    data: XOR<GlucoseStatsUpdateManyMutationInput, GlucoseStatsUncheckedUpdateManyInput>
    /**
     * Filter which GlucoseStats to update
     */
    where?: GlucoseStatsWhereInput
    /**
     * Limit how many GlucoseStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlucoseStats upsert
   */
  export type GlucoseStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the GlucoseStats to update in case it exists.
     */
    where: GlucoseStatsWhereUniqueInput
    /**
     * In case the GlucoseStats found by the `where` argument doesn't exist, create a new GlucoseStats with this data.
     */
    create: XOR<GlucoseStatsCreateInput, GlucoseStatsUncheckedCreateInput>
    /**
     * In case the GlucoseStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlucoseStatsUpdateInput, GlucoseStatsUncheckedUpdateInput>
  }

  /**
   * GlucoseStats delete
   */
  export type GlucoseStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsInclude<ExtArgs> | null
    /**
     * Filter which GlucoseStats to delete.
     */
    where: GlucoseStatsWhereUniqueInput
  }

  /**
   * GlucoseStats deleteMany
   */
  export type GlucoseStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlucoseStats to delete
     */
    where?: GlucoseStatsWhereInput
    /**
     * Limit how many GlucoseStats to delete.
     */
    limit?: number
  }

  /**
   * GlucoseStats without action
   */
  export type GlucoseStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseStats
     */
    select?: GlucoseStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseStats
     */
    omit?: GlucoseStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseStatsInclude<ExtArgs> | null
  }


  /**
   * Model InsulinStats
   */

  export type AggregateInsulinStats = {
    _count: InsulinStatsCountAggregateOutputType | null
    _avg: InsulinStatsAvgAggregateOutputType | null
    _sum: InsulinStatsSumAggregateOutputType | null
    _min: InsulinStatsMinAggregateOutputType | null
    _max: InsulinStatsMaxAggregateOutputType | null
  }

  export type InsulinStatsAvgAggregateOutputType = {
    totalDays: number | null
    avgTotalInsulin: number | null
    avgDailyBolus: number | null
    avgDailyBasal: number | null
    avgDailyCarbs: number | null
    bolusPercentage: number | null
    basalPercentage: number | null
    insulinCarbRatio: number | null
    totalBolusCount: number | null
    totalBasalChanges: number | null
    avgBolusesPerDay: number | null
  }

  export type InsulinStatsSumAggregateOutputType = {
    totalDays: number | null
    avgTotalInsulin: number | null
    avgDailyBolus: number | null
    avgDailyBasal: number | null
    avgDailyCarbs: number | null
    bolusPercentage: number | null
    basalPercentage: number | null
    insulinCarbRatio: number | null
    totalBolusCount: number | null
    totalBasalChanges: number | null
    avgBolusesPerDay: number | null
  }

  export type InsulinStatsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    totalDays: number | null
    avgTotalInsulin: number | null
    avgDailyBolus: number | null
    avgDailyBasal: number | null
    avgDailyCarbs: number | null
    bolusPercentage: number | null
    basalPercentage: number | null
    insulinCarbRatio: number | null
    totalBolusCount: number | null
    totalBasalChanges: number | null
    avgBolusesPerDay: number | null
    lastCalculated: Date | null
    updatedAt: Date | null
    dataStartDate: Date | null
    dataEndDate: Date | null
  }

  export type InsulinStatsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    totalDays: number | null
    avgTotalInsulin: number | null
    avgDailyBolus: number | null
    avgDailyBasal: number | null
    avgDailyCarbs: number | null
    bolusPercentage: number | null
    basalPercentage: number | null
    insulinCarbRatio: number | null
    totalBolusCount: number | null
    totalBasalChanges: number | null
    avgBolusesPerDay: number | null
    lastCalculated: Date | null
    updatedAt: Date | null
    dataStartDate: Date | null
    dataEndDate: Date | null
  }

  export type InsulinStatsCountAggregateOutputType = {
    id: number
    userId: number
    totalDays: number
    avgTotalInsulin: number
    avgDailyBolus: number
    avgDailyBasal: number
    avgDailyCarbs: number
    bolusPercentage: number
    basalPercentage: number
    insulinCarbRatio: number
    totalBolusCount: number
    totalBasalChanges: number
    avgBolusesPerDay: number
    lastCalculated: number
    updatedAt: number
    dataStartDate: number
    dataEndDate: number
    _all: number
  }


  export type InsulinStatsAvgAggregateInputType = {
    totalDays?: true
    avgTotalInsulin?: true
    avgDailyBolus?: true
    avgDailyBasal?: true
    avgDailyCarbs?: true
    bolusPercentage?: true
    basalPercentage?: true
    insulinCarbRatio?: true
    totalBolusCount?: true
    totalBasalChanges?: true
    avgBolusesPerDay?: true
  }

  export type InsulinStatsSumAggregateInputType = {
    totalDays?: true
    avgTotalInsulin?: true
    avgDailyBolus?: true
    avgDailyBasal?: true
    avgDailyCarbs?: true
    bolusPercentage?: true
    basalPercentage?: true
    insulinCarbRatio?: true
    totalBolusCount?: true
    totalBasalChanges?: true
    avgBolusesPerDay?: true
  }

  export type InsulinStatsMinAggregateInputType = {
    id?: true
    userId?: true
    totalDays?: true
    avgTotalInsulin?: true
    avgDailyBolus?: true
    avgDailyBasal?: true
    avgDailyCarbs?: true
    bolusPercentage?: true
    basalPercentage?: true
    insulinCarbRatio?: true
    totalBolusCount?: true
    totalBasalChanges?: true
    avgBolusesPerDay?: true
    lastCalculated?: true
    updatedAt?: true
    dataStartDate?: true
    dataEndDate?: true
  }

  export type InsulinStatsMaxAggregateInputType = {
    id?: true
    userId?: true
    totalDays?: true
    avgTotalInsulin?: true
    avgDailyBolus?: true
    avgDailyBasal?: true
    avgDailyCarbs?: true
    bolusPercentage?: true
    basalPercentage?: true
    insulinCarbRatio?: true
    totalBolusCount?: true
    totalBasalChanges?: true
    avgBolusesPerDay?: true
    lastCalculated?: true
    updatedAt?: true
    dataStartDate?: true
    dataEndDate?: true
  }

  export type InsulinStatsCountAggregateInputType = {
    id?: true
    userId?: true
    totalDays?: true
    avgTotalInsulin?: true
    avgDailyBolus?: true
    avgDailyBasal?: true
    avgDailyCarbs?: true
    bolusPercentage?: true
    basalPercentage?: true
    insulinCarbRatio?: true
    totalBolusCount?: true
    totalBasalChanges?: true
    avgBolusesPerDay?: true
    lastCalculated?: true
    updatedAt?: true
    dataStartDate?: true
    dataEndDate?: true
    _all?: true
  }

  export type InsulinStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InsulinStats to aggregate.
     */
    where?: InsulinStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsulinStats to fetch.
     */
    orderBy?: InsulinStatsOrderByWithRelationInput | InsulinStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsulinStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsulinStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsulinStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InsulinStats
    **/
    _count?: true | InsulinStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsulinStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsulinStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsulinStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsulinStatsMaxAggregateInputType
  }

  export type GetInsulinStatsAggregateType<T extends InsulinStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateInsulinStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsulinStats[P]>
      : GetScalarType<T[P], AggregateInsulinStats[P]>
  }




  export type InsulinStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsulinStatsWhereInput
    orderBy?: InsulinStatsOrderByWithAggregationInput | InsulinStatsOrderByWithAggregationInput[]
    by: InsulinStatsScalarFieldEnum[] | InsulinStatsScalarFieldEnum
    having?: InsulinStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsulinStatsCountAggregateInputType | true
    _avg?: InsulinStatsAvgAggregateInputType
    _sum?: InsulinStatsSumAggregateInputType
    _min?: InsulinStatsMinAggregateInputType
    _max?: InsulinStatsMaxAggregateInputType
  }

  export type InsulinStatsGroupByOutputType = {
    id: string
    userId: string
    totalDays: number
    avgTotalInsulin: number
    avgDailyBolus: number
    avgDailyBasal: number
    avgDailyCarbs: number
    bolusPercentage: number
    basalPercentage: number
    insulinCarbRatio: number | null
    totalBolusCount: number
    totalBasalChanges: number
    avgBolusesPerDay: number
    lastCalculated: Date
    updatedAt: Date
    dataStartDate: Date
    dataEndDate: Date
    _count: InsulinStatsCountAggregateOutputType | null
    _avg: InsulinStatsAvgAggregateOutputType | null
    _sum: InsulinStatsSumAggregateOutputType | null
    _min: InsulinStatsMinAggregateOutputType | null
    _max: InsulinStatsMaxAggregateOutputType | null
  }

  type GetInsulinStatsGroupByPayload<T extends InsulinStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsulinStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsulinStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsulinStatsGroupByOutputType[P]>
            : GetScalarType<T[P], InsulinStatsGroupByOutputType[P]>
        }
      >
    >


  export type InsulinStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalDays?: boolean
    avgTotalInsulin?: boolean
    avgDailyBolus?: boolean
    avgDailyBasal?: boolean
    avgDailyCarbs?: boolean
    bolusPercentage?: boolean
    basalPercentage?: boolean
    insulinCarbRatio?: boolean
    totalBolusCount?: boolean
    totalBasalChanges?: boolean
    avgBolusesPerDay?: boolean
    lastCalculated?: boolean
    updatedAt?: boolean
    dataStartDate?: boolean
    dataEndDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insulinStats"]>

  export type InsulinStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalDays?: boolean
    avgTotalInsulin?: boolean
    avgDailyBolus?: boolean
    avgDailyBasal?: boolean
    avgDailyCarbs?: boolean
    bolusPercentage?: boolean
    basalPercentage?: boolean
    insulinCarbRatio?: boolean
    totalBolusCount?: boolean
    totalBasalChanges?: boolean
    avgBolusesPerDay?: boolean
    lastCalculated?: boolean
    updatedAt?: boolean
    dataStartDate?: boolean
    dataEndDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insulinStats"]>

  export type InsulinStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalDays?: boolean
    avgTotalInsulin?: boolean
    avgDailyBolus?: boolean
    avgDailyBasal?: boolean
    avgDailyCarbs?: boolean
    bolusPercentage?: boolean
    basalPercentage?: boolean
    insulinCarbRatio?: boolean
    totalBolusCount?: boolean
    totalBasalChanges?: boolean
    avgBolusesPerDay?: boolean
    lastCalculated?: boolean
    updatedAt?: boolean
    dataStartDate?: boolean
    dataEndDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insulinStats"]>

  export type InsulinStatsSelectScalar = {
    id?: boolean
    userId?: boolean
    totalDays?: boolean
    avgTotalInsulin?: boolean
    avgDailyBolus?: boolean
    avgDailyBasal?: boolean
    avgDailyCarbs?: boolean
    bolusPercentage?: boolean
    basalPercentage?: boolean
    insulinCarbRatio?: boolean
    totalBolusCount?: boolean
    totalBasalChanges?: boolean
    avgBolusesPerDay?: boolean
    lastCalculated?: boolean
    updatedAt?: boolean
    dataStartDate?: boolean
    dataEndDate?: boolean
  }

  export type InsulinStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalDays" | "avgTotalInsulin" | "avgDailyBolus" | "avgDailyBasal" | "avgDailyCarbs" | "bolusPercentage" | "basalPercentage" | "insulinCarbRatio" | "totalBolusCount" | "totalBasalChanges" | "avgBolusesPerDay" | "lastCalculated" | "updatedAt" | "dataStartDate" | "dataEndDate", ExtArgs["result"]["insulinStats"]>
  export type InsulinStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InsulinStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InsulinStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InsulinStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InsulinStats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      totalDays: number
      avgTotalInsulin: number
      avgDailyBolus: number
      avgDailyBasal: number
      avgDailyCarbs: number
      bolusPercentage: number
      basalPercentage: number
      insulinCarbRatio: number | null
      totalBolusCount: number
      totalBasalChanges: number
      avgBolusesPerDay: number
      lastCalculated: Date
      updatedAt: Date
      dataStartDate: Date
      dataEndDate: Date
    }, ExtArgs["result"]["insulinStats"]>
    composites: {}
  }

  type InsulinStatsGetPayload<S extends boolean | null | undefined | InsulinStatsDefaultArgs> = $Result.GetResult<Prisma.$InsulinStatsPayload, S>

  type InsulinStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InsulinStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsulinStatsCountAggregateInputType | true
    }

  export interface InsulinStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InsulinStats'], meta: { name: 'InsulinStats' } }
    /**
     * Find zero or one InsulinStats that matches the filter.
     * @param {InsulinStatsFindUniqueArgs} args - Arguments to find a InsulinStats
     * @example
     * // Get one InsulinStats
     * const insulinStats = await prisma.insulinStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsulinStatsFindUniqueArgs>(args: SelectSubset<T, InsulinStatsFindUniqueArgs<ExtArgs>>): Prisma__InsulinStatsClient<$Result.GetResult<Prisma.$InsulinStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InsulinStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsulinStatsFindUniqueOrThrowArgs} args - Arguments to find a InsulinStats
     * @example
     * // Get one InsulinStats
     * const insulinStats = await prisma.insulinStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsulinStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, InsulinStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsulinStatsClient<$Result.GetResult<Prisma.$InsulinStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InsulinStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsulinStatsFindFirstArgs} args - Arguments to find a InsulinStats
     * @example
     * // Get one InsulinStats
     * const insulinStats = await prisma.insulinStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsulinStatsFindFirstArgs>(args?: SelectSubset<T, InsulinStatsFindFirstArgs<ExtArgs>>): Prisma__InsulinStatsClient<$Result.GetResult<Prisma.$InsulinStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InsulinStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsulinStatsFindFirstOrThrowArgs} args - Arguments to find a InsulinStats
     * @example
     * // Get one InsulinStats
     * const insulinStats = await prisma.insulinStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsulinStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, InsulinStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsulinStatsClient<$Result.GetResult<Prisma.$InsulinStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InsulinStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsulinStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InsulinStats
     * const insulinStats = await prisma.insulinStats.findMany()
     * 
     * // Get first 10 InsulinStats
     * const insulinStats = await prisma.insulinStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insulinStatsWithIdOnly = await prisma.insulinStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsulinStatsFindManyArgs>(args?: SelectSubset<T, InsulinStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsulinStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InsulinStats.
     * @param {InsulinStatsCreateArgs} args - Arguments to create a InsulinStats.
     * @example
     * // Create one InsulinStats
     * const InsulinStats = await prisma.insulinStats.create({
     *   data: {
     *     // ... data to create a InsulinStats
     *   }
     * })
     * 
     */
    create<T extends InsulinStatsCreateArgs>(args: SelectSubset<T, InsulinStatsCreateArgs<ExtArgs>>): Prisma__InsulinStatsClient<$Result.GetResult<Prisma.$InsulinStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InsulinStats.
     * @param {InsulinStatsCreateManyArgs} args - Arguments to create many InsulinStats.
     * @example
     * // Create many InsulinStats
     * const insulinStats = await prisma.insulinStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsulinStatsCreateManyArgs>(args?: SelectSubset<T, InsulinStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InsulinStats and returns the data saved in the database.
     * @param {InsulinStatsCreateManyAndReturnArgs} args - Arguments to create many InsulinStats.
     * @example
     * // Create many InsulinStats
     * const insulinStats = await prisma.insulinStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InsulinStats and only return the `id`
     * const insulinStatsWithIdOnly = await prisma.insulinStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsulinStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, InsulinStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsulinStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InsulinStats.
     * @param {InsulinStatsDeleteArgs} args - Arguments to delete one InsulinStats.
     * @example
     * // Delete one InsulinStats
     * const InsulinStats = await prisma.insulinStats.delete({
     *   where: {
     *     // ... filter to delete one InsulinStats
     *   }
     * })
     * 
     */
    delete<T extends InsulinStatsDeleteArgs>(args: SelectSubset<T, InsulinStatsDeleteArgs<ExtArgs>>): Prisma__InsulinStatsClient<$Result.GetResult<Prisma.$InsulinStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InsulinStats.
     * @param {InsulinStatsUpdateArgs} args - Arguments to update one InsulinStats.
     * @example
     * // Update one InsulinStats
     * const insulinStats = await prisma.insulinStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsulinStatsUpdateArgs>(args: SelectSubset<T, InsulinStatsUpdateArgs<ExtArgs>>): Prisma__InsulinStatsClient<$Result.GetResult<Prisma.$InsulinStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InsulinStats.
     * @param {InsulinStatsDeleteManyArgs} args - Arguments to filter InsulinStats to delete.
     * @example
     * // Delete a few InsulinStats
     * const { count } = await prisma.insulinStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsulinStatsDeleteManyArgs>(args?: SelectSubset<T, InsulinStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InsulinStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsulinStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InsulinStats
     * const insulinStats = await prisma.insulinStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsulinStatsUpdateManyArgs>(args: SelectSubset<T, InsulinStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InsulinStats and returns the data updated in the database.
     * @param {InsulinStatsUpdateManyAndReturnArgs} args - Arguments to update many InsulinStats.
     * @example
     * // Update many InsulinStats
     * const insulinStats = await prisma.insulinStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InsulinStats and only return the `id`
     * const insulinStatsWithIdOnly = await prisma.insulinStats.updateManyAndReturn({
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
    updateManyAndReturn<T extends InsulinStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, InsulinStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsulinStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InsulinStats.
     * @param {InsulinStatsUpsertArgs} args - Arguments to update or create a InsulinStats.
     * @example
     * // Update or create a InsulinStats
     * const insulinStats = await prisma.insulinStats.upsert({
     *   create: {
     *     // ... data to create a InsulinStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InsulinStats we want to update
     *   }
     * })
     */
    upsert<T extends InsulinStatsUpsertArgs>(args: SelectSubset<T, InsulinStatsUpsertArgs<ExtArgs>>): Prisma__InsulinStatsClient<$Result.GetResult<Prisma.$InsulinStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InsulinStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsulinStatsCountArgs} args - Arguments to filter InsulinStats to count.
     * @example
     * // Count the number of InsulinStats
     * const count = await prisma.insulinStats.count({
     *   where: {
     *     // ... the filter for the InsulinStats we want to count
     *   }
     * })
    **/
    count<T extends InsulinStatsCountArgs>(
      args?: Subset<T, InsulinStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsulinStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InsulinStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsulinStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsulinStatsAggregateArgs>(args: Subset<T, InsulinStatsAggregateArgs>): Prisma.PrismaPromise<GetInsulinStatsAggregateType<T>>

    /**
     * Group by InsulinStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsulinStatsGroupByArgs} args - Group by arguments.
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
      T extends InsulinStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsulinStatsGroupByArgs['orderBy'] }
        : { orderBy?: InsulinStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InsulinStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsulinStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InsulinStats model
   */
  readonly fields: InsulinStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InsulinStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsulinStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the InsulinStats model
   */
  interface InsulinStatsFieldRefs {
    readonly id: FieldRef<"InsulinStats", 'String'>
    readonly userId: FieldRef<"InsulinStats", 'String'>
    readonly totalDays: FieldRef<"InsulinStats", 'Int'>
    readonly avgTotalInsulin: FieldRef<"InsulinStats", 'Float'>
    readonly avgDailyBolus: FieldRef<"InsulinStats", 'Float'>
    readonly avgDailyBasal: FieldRef<"InsulinStats", 'Float'>
    readonly avgDailyCarbs: FieldRef<"InsulinStats", 'Float'>
    readonly bolusPercentage: FieldRef<"InsulinStats", 'Float'>
    readonly basalPercentage: FieldRef<"InsulinStats", 'Float'>
    readonly insulinCarbRatio: FieldRef<"InsulinStats", 'Float'>
    readonly totalBolusCount: FieldRef<"InsulinStats", 'Int'>
    readonly totalBasalChanges: FieldRef<"InsulinStats", 'Int'>
    readonly avgBolusesPerDay: FieldRef<"InsulinStats", 'Float'>
    readonly lastCalculated: FieldRef<"InsulinStats", 'DateTime'>
    readonly updatedAt: FieldRef<"InsulinStats", 'DateTime'>
    readonly dataStartDate: FieldRef<"InsulinStats", 'DateTime'>
    readonly dataEndDate: FieldRef<"InsulinStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InsulinStats findUnique
   */
  export type InsulinStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsInclude<ExtArgs> | null
    /**
     * Filter, which InsulinStats to fetch.
     */
    where: InsulinStatsWhereUniqueInput
  }

  /**
   * InsulinStats findUniqueOrThrow
   */
  export type InsulinStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsInclude<ExtArgs> | null
    /**
     * Filter, which InsulinStats to fetch.
     */
    where: InsulinStatsWhereUniqueInput
  }

  /**
   * InsulinStats findFirst
   */
  export type InsulinStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsInclude<ExtArgs> | null
    /**
     * Filter, which InsulinStats to fetch.
     */
    where?: InsulinStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsulinStats to fetch.
     */
    orderBy?: InsulinStatsOrderByWithRelationInput | InsulinStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InsulinStats.
     */
    cursor?: InsulinStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsulinStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsulinStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InsulinStats.
     */
    distinct?: InsulinStatsScalarFieldEnum | InsulinStatsScalarFieldEnum[]
  }

  /**
   * InsulinStats findFirstOrThrow
   */
  export type InsulinStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsInclude<ExtArgs> | null
    /**
     * Filter, which InsulinStats to fetch.
     */
    where?: InsulinStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsulinStats to fetch.
     */
    orderBy?: InsulinStatsOrderByWithRelationInput | InsulinStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InsulinStats.
     */
    cursor?: InsulinStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsulinStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsulinStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InsulinStats.
     */
    distinct?: InsulinStatsScalarFieldEnum | InsulinStatsScalarFieldEnum[]
  }

  /**
   * InsulinStats findMany
   */
  export type InsulinStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsInclude<ExtArgs> | null
    /**
     * Filter, which InsulinStats to fetch.
     */
    where?: InsulinStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsulinStats to fetch.
     */
    orderBy?: InsulinStatsOrderByWithRelationInput | InsulinStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InsulinStats.
     */
    cursor?: InsulinStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsulinStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsulinStats.
     */
    skip?: number
    distinct?: InsulinStatsScalarFieldEnum | InsulinStatsScalarFieldEnum[]
  }

  /**
   * InsulinStats create
   */
  export type InsulinStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a InsulinStats.
     */
    data: XOR<InsulinStatsCreateInput, InsulinStatsUncheckedCreateInput>
  }

  /**
   * InsulinStats createMany
   */
  export type InsulinStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InsulinStats.
     */
    data: InsulinStatsCreateManyInput | InsulinStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InsulinStats createManyAndReturn
   */
  export type InsulinStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * The data used to create many InsulinStats.
     */
    data: InsulinStatsCreateManyInput | InsulinStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InsulinStats update
   */
  export type InsulinStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a InsulinStats.
     */
    data: XOR<InsulinStatsUpdateInput, InsulinStatsUncheckedUpdateInput>
    /**
     * Choose, which InsulinStats to update.
     */
    where: InsulinStatsWhereUniqueInput
  }

  /**
   * InsulinStats updateMany
   */
  export type InsulinStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InsulinStats.
     */
    data: XOR<InsulinStatsUpdateManyMutationInput, InsulinStatsUncheckedUpdateManyInput>
    /**
     * Filter which InsulinStats to update
     */
    where?: InsulinStatsWhereInput
    /**
     * Limit how many InsulinStats to update.
     */
    limit?: number
  }

  /**
   * InsulinStats updateManyAndReturn
   */
  export type InsulinStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * The data used to update InsulinStats.
     */
    data: XOR<InsulinStatsUpdateManyMutationInput, InsulinStatsUncheckedUpdateManyInput>
    /**
     * Filter which InsulinStats to update
     */
    where?: InsulinStatsWhereInput
    /**
     * Limit how many InsulinStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InsulinStats upsert
   */
  export type InsulinStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the InsulinStats to update in case it exists.
     */
    where: InsulinStatsWhereUniqueInput
    /**
     * In case the InsulinStats found by the `where` argument doesn't exist, create a new InsulinStats with this data.
     */
    create: XOR<InsulinStatsCreateInput, InsulinStatsUncheckedCreateInput>
    /**
     * In case the InsulinStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsulinStatsUpdateInput, InsulinStatsUncheckedUpdateInput>
  }

  /**
   * InsulinStats delete
   */
  export type InsulinStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsInclude<ExtArgs> | null
    /**
     * Filter which InsulinStats to delete.
     */
    where: InsulinStatsWhereUniqueInput
  }

  /**
   * InsulinStats deleteMany
   */
  export type InsulinStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InsulinStats to delete
     */
    where?: InsulinStatsWhereInput
    /**
     * Limit how many InsulinStats to delete.
     */
    limit?: number
  }

  /**
   * InsulinStats without action
   */
  export type InsulinStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsulinStats
     */
    select?: InsulinStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InsulinStats
     */
    omit?: InsulinStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsulinStatsInclude<ExtArgs> | null
  }


  /**
   * Model BolusRecord
   */

  export type AggregateBolusRecord = {
    _count: BolusRecordCountAggregateOutputType | null
    _avg: BolusRecordAvgAggregateOutputType | null
    _sum: BolusRecordSumAggregateOutputType | null
    _min: BolusRecordMinAggregateOutputType | null
    _max: BolusRecordMaxAggregateOutputType | null
  }

  export type BolusRecordAvgAggregateOutputType = {
    amount: number | null
    duration: number | null
  }

  export type BolusRecordSumAggregateOutputType = {
    amount: number | null
    duration: number | null
  }

  export type BolusRecordMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    amount: number | null
    bolusType: string | null
    duration: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BolusRecordMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    amount: number | null
    bolusType: string | null
    duration: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BolusRecordCountAggregateOutputType = {
    id: number
    timestamp: number
    amount: number
    bolusType: number
    duration: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BolusRecordAvgAggregateInputType = {
    amount?: true
    duration?: true
  }

  export type BolusRecordSumAggregateInputType = {
    amount?: true
    duration?: true
  }

  export type BolusRecordMinAggregateInputType = {
    id?: true
    timestamp?: true
    amount?: true
    bolusType?: true
    duration?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BolusRecordMaxAggregateInputType = {
    id?: true
    timestamp?: true
    amount?: true
    bolusType?: true
    duration?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BolusRecordCountAggregateInputType = {
    id?: true
    timestamp?: true
    amount?: true
    bolusType?: true
    duration?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BolusRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BolusRecord to aggregate.
     */
    where?: BolusRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BolusRecords to fetch.
     */
    orderBy?: BolusRecordOrderByWithRelationInput | BolusRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BolusRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BolusRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BolusRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BolusRecords
    **/
    _count?: true | BolusRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BolusRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BolusRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BolusRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BolusRecordMaxAggregateInputType
  }

  export type GetBolusRecordAggregateType<T extends BolusRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateBolusRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBolusRecord[P]>
      : GetScalarType<T[P], AggregateBolusRecord[P]>
  }




  export type BolusRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BolusRecordWhereInput
    orderBy?: BolusRecordOrderByWithAggregationInput | BolusRecordOrderByWithAggregationInput[]
    by: BolusRecordScalarFieldEnum[] | BolusRecordScalarFieldEnum
    having?: BolusRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BolusRecordCountAggregateInputType | true
    _avg?: BolusRecordAvgAggregateInputType
    _sum?: BolusRecordSumAggregateInputType
    _min?: BolusRecordMinAggregateInputType
    _max?: BolusRecordMaxAggregateInputType
  }

  export type BolusRecordGroupByOutputType = {
    id: string
    timestamp: Date
    amount: number
    bolusType: string
    duration: number | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: BolusRecordCountAggregateOutputType | null
    _avg: BolusRecordAvgAggregateOutputType | null
    _sum: BolusRecordSumAggregateOutputType | null
    _min: BolusRecordMinAggregateOutputType | null
    _max: BolusRecordMaxAggregateOutputType | null
  }

  type GetBolusRecordGroupByPayload<T extends BolusRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BolusRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BolusRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BolusRecordGroupByOutputType[P]>
            : GetScalarType<T[P], BolusRecordGroupByOutputType[P]>
        }
      >
    >


  export type BolusRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    amount?: boolean
    bolusType?: boolean
    duration?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bolusRecord"]>

  export type BolusRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    amount?: boolean
    bolusType?: boolean
    duration?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bolusRecord"]>

  export type BolusRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    amount?: boolean
    bolusType?: boolean
    duration?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bolusRecord"]>

  export type BolusRecordSelectScalar = {
    id?: boolean
    timestamp?: boolean
    amount?: boolean
    bolusType?: boolean
    duration?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BolusRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "amount" | "bolusType" | "duration" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["bolusRecord"]>
  export type BolusRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BolusRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BolusRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BolusRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BolusRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      amount: number
      bolusType: string
      duration: number | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bolusRecord"]>
    composites: {}
  }

  type BolusRecordGetPayload<S extends boolean | null | undefined | BolusRecordDefaultArgs> = $Result.GetResult<Prisma.$BolusRecordPayload, S>

  type BolusRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BolusRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BolusRecordCountAggregateInputType | true
    }

  export interface BolusRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BolusRecord'], meta: { name: 'BolusRecord' } }
    /**
     * Find zero or one BolusRecord that matches the filter.
     * @param {BolusRecordFindUniqueArgs} args - Arguments to find a BolusRecord
     * @example
     * // Get one BolusRecord
     * const bolusRecord = await prisma.bolusRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BolusRecordFindUniqueArgs>(args: SelectSubset<T, BolusRecordFindUniqueArgs<ExtArgs>>): Prisma__BolusRecordClient<$Result.GetResult<Prisma.$BolusRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BolusRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BolusRecordFindUniqueOrThrowArgs} args - Arguments to find a BolusRecord
     * @example
     * // Get one BolusRecord
     * const bolusRecord = await prisma.bolusRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BolusRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, BolusRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BolusRecordClient<$Result.GetResult<Prisma.$BolusRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BolusRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolusRecordFindFirstArgs} args - Arguments to find a BolusRecord
     * @example
     * // Get one BolusRecord
     * const bolusRecord = await prisma.bolusRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BolusRecordFindFirstArgs>(args?: SelectSubset<T, BolusRecordFindFirstArgs<ExtArgs>>): Prisma__BolusRecordClient<$Result.GetResult<Prisma.$BolusRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BolusRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolusRecordFindFirstOrThrowArgs} args - Arguments to find a BolusRecord
     * @example
     * // Get one BolusRecord
     * const bolusRecord = await prisma.bolusRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BolusRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, BolusRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__BolusRecordClient<$Result.GetResult<Prisma.$BolusRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BolusRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolusRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BolusRecords
     * const bolusRecords = await prisma.bolusRecord.findMany()
     * 
     * // Get first 10 BolusRecords
     * const bolusRecords = await prisma.bolusRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bolusRecordWithIdOnly = await prisma.bolusRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BolusRecordFindManyArgs>(args?: SelectSubset<T, BolusRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BolusRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BolusRecord.
     * @param {BolusRecordCreateArgs} args - Arguments to create a BolusRecord.
     * @example
     * // Create one BolusRecord
     * const BolusRecord = await prisma.bolusRecord.create({
     *   data: {
     *     // ... data to create a BolusRecord
     *   }
     * })
     * 
     */
    create<T extends BolusRecordCreateArgs>(args: SelectSubset<T, BolusRecordCreateArgs<ExtArgs>>): Prisma__BolusRecordClient<$Result.GetResult<Prisma.$BolusRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BolusRecords.
     * @param {BolusRecordCreateManyArgs} args - Arguments to create many BolusRecords.
     * @example
     * // Create many BolusRecords
     * const bolusRecord = await prisma.bolusRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BolusRecordCreateManyArgs>(args?: SelectSubset<T, BolusRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BolusRecords and returns the data saved in the database.
     * @param {BolusRecordCreateManyAndReturnArgs} args - Arguments to create many BolusRecords.
     * @example
     * // Create many BolusRecords
     * const bolusRecord = await prisma.bolusRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BolusRecords and only return the `id`
     * const bolusRecordWithIdOnly = await prisma.bolusRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BolusRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, BolusRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BolusRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BolusRecord.
     * @param {BolusRecordDeleteArgs} args - Arguments to delete one BolusRecord.
     * @example
     * // Delete one BolusRecord
     * const BolusRecord = await prisma.bolusRecord.delete({
     *   where: {
     *     // ... filter to delete one BolusRecord
     *   }
     * })
     * 
     */
    delete<T extends BolusRecordDeleteArgs>(args: SelectSubset<T, BolusRecordDeleteArgs<ExtArgs>>): Prisma__BolusRecordClient<$Result.GetResult<Prisma.$BolusRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BolusRecord.
     * @param {BolusRecordUpdateArgs} args - Arguments to update one BolusRecord.
     * @example
     * // Update one BolusRecord
     * const bolusRecord = await prisma.bolusRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BolusRecordUpdateArgs>(args: SelectSubset<T, BolusRecordUpdateArgs<ExtArgs>>): Prisma__BolusRecordClient<$Result.GetResult<Prisma.$BolusRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BolusRecords.
     * @param {BolusRecordDeleteManyArgs} args - Arguments to filter BolusRecords to delete.
     * @example
     * // Delete a few BolusRecords
     * const { count } = await prisma.bolusRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BolusRecordDeleteManyArgs>(args?: SelectSubset<T, BolusRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BolusRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolusRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BolusRecords
     * const bolusRecord = await prisma.bolusRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BolusRecordUpdateManyArgs>(args: SelectSubset<T, BolusRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BolusRecords and returns the data updated in the database.
     * @param {BolusRecordUpdateManyAndReturnArgs} args - Arguments to update many BolusRecords.
     * @example
     * // Update many BolusRecords
     * const bolusRecord = await prisma.bolusRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BolusRecords and only return the `id`
     * const bolusRecordWithIdOnly = await prisma.bolusRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends BolusRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, BolusRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BolusRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BolusRecord.
     * @param {BolusRecordUpsertArgs} args - Arguments to update or create a BolusRecord.
     * @example
     * // Update or create a BolusRecord
     * const bolusRecord = await prisma.bolusRecord.upsert({
     *   create: {
     *     // ... data to create a BolusRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BolusRecord we want to update
     *   }
     * })
     */
    upsert<T extends BolusRecordUpsertArgs>(args: SelectSubset<T, BolusRecordUpsertArgs<ExtArgs>>): Prisma__BolusRecordClient<$Result.GetResult<Prisma.$BolusRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BolusRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolusRecordCountArgs} args - Arguments to filter BolusRecords to count.
     * @example
     * // Count the number of BolusRecords
     * const count = await prisma.bolusRecord.count({
     *   where: {
     *     // ... the filter for the BolusRecords we want to count
     *   }
     * })
    **/
    count<T extends BolusRecordCountArgs>(
      args?: Subset<T, BolusRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BolusRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BolusRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolusRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BolusRecordAggregateArgs>(args: Subset<T, BolusRecordAggregateArgs>): Prisma.PrismaPromise<GetBolusRecordAggregateType<T>>

    /**
     * Group by BolusRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolusRecordGroupByArgs} args - Group by arguments.
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
      T extends BolusRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BolusRecordGroupByArgs['orderBy'] }
        : { orderBy?: BolusRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BolusRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBolusRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BolusRecord model
   */
  readonly fields: BolusRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BolusRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BolusRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BolusRecord model
   */
  interface BolusRecordFieldRefs {
    readonly id: FieldRef<"BolusRecord", 'String'>
    readonly timestamp: FieldRef<"BolusRecord", 'DateTime'>
    readonly amount: FieldRef<"BolusRecord", 'Float'>
    readonly bolusType: FieldRef<"BolusRecord", 'String'>
    readonly duration: FieldRef<"BolusRecord", 'Int'>
    readonly userId: FieldRef<"BolusRecord", 'String'>
    readonly createdAt: FieldRef<"BolusRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"BolusRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BolusRecord findUnique
   */
  export type BolusRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordInclude<ExtArgs> | null
    /**
     * Filter, which BolusRecord to fetch.
     */
    where: BolusRecordWhereUniqueInput
  }

  /**
   * BolusRecord findUniqueOrThrow
   */
  export type BolusRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordInclude<ExtArgs> | null
    /**
     * Filter, which BolusRecord to fetch.
     */
    where: BolusRecordWhereUniqueInput
  }

  /**
   * BolusRecord findFirst
   */
  export type BolusRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordInclude<ExtArgs> | null
    /**
     * Filter, which BolusRecord to fetch.
     */
    where?: BolusRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BolusRecords to fetch.
     */
    orderBy?: BolusRecordOrderByWithRelationInput | BolusRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BolusRecords.
     */
    cursor?: BolusRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BolusRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BolusRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BolusRecords.
     */
    distinct?: BolusRecordScalarFieldEnum | BolusRecordScalarFieldEnum[]
  }

  /**
   * BolusRecord findFirstOrThrow
   */
  export type BolusRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordInclude<ExtArgs> | null
    /**
     * Filter, which BolusRecord to fetch.
     */
    where?: BolusRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BolusRecords to fetch.
     */
    orderBy?: BolusRecordOrderByWithRelationInput | BolusRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BolusRecords.
     */
    cursor?: BolusRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BolusRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BolusRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BolusRecords.
     */
    distinct?: BolusRecordScalarFieldEnum | BolusRecordScalarFieldEnum[]
  }

  /**
   * BolusRecord findMany
   */
  export type BolusRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordInclude<ExtArgs> | null
    /**
     * Filter, which BolusRecords to fetch.
     */
    where?: BolusRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BolusRecords to fetch.
     */
    orderBy?: BolusRecordOrderByWithRelationInput | BolusRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BolusRecords.
     */
    cursor?: BolusRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BolusRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BolusRecords.
     */
    skip?: number
    distinct?: BolusRecordScalarFieldEnum | BolusRecordScalarFieldEnum[]
  }

  /**
   * BolusRecord create
   */
  export type BolusRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a BolusRecord.
     */
    data: XOR<BolusRecordCreateInput, BolusRecordUncheckedCreateInput>
  }

  /**
   * BolusRecord createMany
   */
  export type BolusRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BolusRecords.
     */
    data: BolusRecordCreateManyInput | BolusRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BolusRecord createManyAndReturn
   */
  export type BolusRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * The data used to create many BolusRecords.
     */
    data: BolusRecordCreateManyInput | BolusRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BolusRecord update
   */
  export type BolusRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a BolusRecord.
     */
    data: XOR<BolusRecordUpdateInput, BolusRecordUncheckedUpdateInput>
    /**
     * Choose, which BolusRecord to update.
     */
    where: BolusRecordWhereUniqueInput
  }

  /**
   * BolusRecord updateMany
   */
  export type BolusRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BolusRecords.
     */
    data: XOR<BolusRecordUpdateManyMutationInput, BolusRecordUncheckedUpdateManyInput>
    /**
     * Filter which BolusRecords to update
     */
    where?: BolusRecordWhereInput
    /**
     * Limit how many BolusRecords to update.
     */
    limit?: number
  }

  /**
   * BolusRecord updateManyAndReturn
   */
  export type BolusRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * The data used to update BolusRecords.
     */
    data: XOR<BolusRecordUpdateManyMutationInput, BolusRecordUncheckedUpdateManyInput>
    /**
     * Filter which BolusRecords to update
     */
    where?: BolusRecordWhereInput
    /**
     * Limit how many BolusRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BolusRecord upsert
   */
  export type BolusRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the BolusRecord to update in case it exists.
     */
    where: BolusRecordWhereUniqueInput
    /**
     * In case the BolusRecord found by the `where` argument doesn't exist, create a new BolusRecord with this data.
     */
    create: XOR<BolusRecordCreateInput, BolusRecordUncheckedCreateInput>
    /**
     * In case the BolusRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BolusRecordUpdateInput, BolusRecordUncheckedUpdateInput>
  }

  /**
   * BolusRecord delete
   */
  export type BolusRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordInclude<ExtArgs> | null
    /**
     * Filter which BolusRecord to delete.
     */
    where: BolusRecordWhereUniqueInput
  }

  /**
   * BolusRecord deleteMany
   */
  export type BolusRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BolusRecords to delete
     */
    where?: BolusRecordWhereInput
    /**
     * Limit how many BolusRecords to delete.
     */
    limit?: number
  }

  /**
   * BolusRecord without action
   */
  export type BolusRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolusRecord
     */
    select?: BolusRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BolusRecord
     */
    omit?: BolusRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolusRecordInclude<ExtArgs> | null
  }


  /**
   * Model BasalRecord
   */

  export type AggregateBasalRecord = {
    _count: BasalRecordCountAggregateOutputType | null
    _avg: BasalRecordAvgAggregateOutputType | null
    _sum: BasalRecordSumAggregateOutputType | null
    _min: BasalRecordMinAggregateOutputType | null
    _max: BasalRecordMaxAggregateOutputType | null
  }

  export type BasalRecordAvgAggregateOutputType = {
    rate: number | null
    duration: number | null
  }

  export type BasalRecordSumAggregateOutputType = {
    rate: number | null
    duration: number | null
  }

  export type BasalRecordMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    rate: number | null
    duration: number | null
    changeType: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BasalRecordMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    rate: number | null
    duration: number | null
    changeType: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BasalRecordCountAggregateOutputType = {
    id: number
    timestamp: number
    rate: number
    duration: number
    changeType: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BasalRecordAvgAggregateInputType = {
    rate?: true
    duration?: true
  }

  export type BasalRecordSumAggregateInputType = {
    rate?: true
    duration?: true
  }

  export type BasalRecordMinAggregateInputType = {
    id?: true
    timestamp?: true
    rate?: true
    duration?: true
    changeType?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BasalRecordMaxAggregateInputType = {
    id?: true
    timestamp?: true
    rate?: true
    duration?: true
    changeType?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BasalRecordCountAggregateInputType = {
    id?: true
    timestamp?: true
    rate?: true
    duration?: true
    changeType?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BasalRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BasalRecord to aggregate.
     */
    where?: BasalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BasalRecords to fetch.
     */
    orderBy?: BasalRecordOrderByWithRelationInput | BasalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BasalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BasalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BasalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BasalRecords
    **/
    _count?: true | BasalRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BasalRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BasalRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BasalRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BasalRecordMaxAggregateInputType
  }

  export type GetBasalRecordAggregateType<T extends BasalRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateBasalRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBasalRecord[P]>
      : GetScalarType<T[P], AggregateBasalRecord[P]>
  }




  export type BasalRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BasalRecordWhereInput
    orderBy?: BasalRecordOrderByWithAggregationInput | BasalRecordOrderByWithAggregationInput[]
    by: BasalRecordScalarFieldEnum[] | BasalRecordScalarFieldEnum
    having?: BasalRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BasalRecordCountAggregateInputType | true
    _avg?: BasalRecordAvgAggregateInputType
    _sum?: BasalRecordSumAggregateInputType
    _min?: BasalRecordMinAggregateInputType
    _max?: BasalRecordMaxAggregateInputType
  }

  export type BasalRecordGroupByOutputType = {
    id: string
    timestamp: Date
    rate: number
    duration: number
    changeType: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: BasalRecordCountAggregateOutputType | null
    _avg: BasalRecordAvgAggregateOutputType | null
    _sum: BasalRecordSumAggregateOutputType | null
    _min: BasalRecordMinAggregateOutputType | null
    _max: BasalRecordMaxAggregateOutputType | null
  }

  type GetBasalRecordGroupByPayload<T extends BasalRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BasalRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BasalRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BasalRecordGroupByOutputType[P]>
            : GetScalarType<T[P], BasalRecordGroupByOutputType[P]>
        }
      >
    >


  export type BasalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    rate?: boolean
    duration?: boolean
    changeType?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["basalRecord"]>

  export type BasalRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    rate?: boolean
    duration?: boolean
    changeType?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["basalRecord"]>

  export type BasalRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    rate?: boolean
    duration?: boolean
    changeType?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["basalRecord"]>

  export type BasalRecordSelectScalar = {
    id?: boolean
    timestamp?: boolean
    rate?: boolean
    duration?: boolean
    changeType?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BasalRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "rate" | "duration" | "changeType" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["basalRecord"]>
  export type BasalRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BasalRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BasalRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BasalRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BasalRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      rate: number
      duration: number
      changeType: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["basalRecord"]>
    composites: {}
  }

  type BasalRecordGetPayload<S extends boolean | null | undefined | BasalRecordDefaultArgs> = $Result.GetResult<Prisma.$BasalRecordPayload, S>

  type BasalRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BasalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BasalRecordCountAggregateInputType | true
    }

  export interface BasalRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BasalRecord'], meta: { name: 'BasalRecord' } }
    /**
     * Find zero or one BasalRecord that matches the filter.
     * @param {BasalRecordFindUniqueArgs} args - Arguments to find a BasalRecord
     * @example
     * // Get one BasalRecord
     * const basalRecord = await prisma.basalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BasalRecordFindUniqueArgs>(args: SelectSubset<T, BasalRecordFindUniqueArgs<ExtArgs>>): Prisma__BasalRecordClient<$Result.GetResult<Prisma.$BasalRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BasalRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BasalRecordFindUniqueOrThrowArgs} args - Arguments to find a BasalRecord
     * @example
     * // Get one BasalRecord
     * const basalRecord = await prisma.basalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BasalRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, BasalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BasalRecordClient<$Result.GetResult<Prisma.$BasalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BasalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasalRecordFindFirstArgs} args - Arguments to find a BasalRecord
     * @example
     * // Get one BasalRecord
     * const basalRecord = await prisma.basalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BasalRecordFindFirstArgs>(args?: SelectSubset<T, BasalRecordFindFirstArgs<ExtArgs>>): Prisma__BasalRecordClient<$Result.GetResult<Prisma.$BasalRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BasalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasalRecordFindFirstOrThrowArgs} args - Arguments to find a BasalRecord
     * @example
     * // Get one BasalRecord
     * const basalRecord = await prisma.basalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BasalRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, BasalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__BasalRecordClient<$Result.GetResult<Prisma.$BasalRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BasalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BasalRecords
     * const basalRecords = await prisma.basalRecord.findMany()
     * 
     * // Get first 10 BasalRecords
     * const basalRecords = await prisma.basalRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const basalRecordWithIdOnly = await prisma.basalRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BasalRecordFindManyArgs>(args?: SelectSubset<T, BasalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BasalRecord.
     * @param {BasalRecordCreateArgs} args - Arguments to create a BasalRecord.
     * @example
     * // Create one BasalRecord
     * const BasalRecord = await prisma.basalRecord.create({
     *   data: {
     *     // ... data to create a BasalRecord
     *   }
     * })
     * 
     */
    create<T extends BasalRecordCreateArgs>(args: SelectSubset<T, BasalRecordCreateArgs<ExtArgs>>): Prisma__BasalRecordClient<$Result.GetResult<Prisma.$BasalRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BasalRecords.
     * @param {BasalRecordCreateManyArgs} args - Arguments to create many BasalRecords.
     * @example
     * // Create many BasalRecords
     * const basalRecord = await prisma.basalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BasalRecordCreateManyArgs>(args?: SelectSubset<T, BasalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BasalRecords and returns the data saved in the database.
     * @param {BasalRecordCreateManyAndReturnArgs} args - Arguments to create many BasalRecords.
     * @example
     * // Create many BasalRecords
     * const basalRecord = await prisma.basalRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BasalRecords and only return the `id`
     * const basalRecordWithIdOnly = await prisma.basalRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BasalRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, BasalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasalRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BasalRecord.
     * @param {BasalRecordDeleteArgs} args - Arguments to delete one BasalRecord.
     * @example
     * // Delete one BasalRecord
     * const BasalRecord = await prisma.basalRecord.delete({
     *   where: {
     *     // ... filter to delete one BasalRecord
     *   }
     * })
     * 
     */
    delete<T extends BasalRecordDeleteArgs>(args: SelectSubset<T, BasalRecordDeleteArgs<ExtArgs>>): Prisma__BasalRecordClient<$Result.GetResult<Prisma.$BasalRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BasalRecord.
     * @param {BasalRecordUpdateArgs} args - Arguments to update one BasalRecord.
     * @example
     * // Update one BasalRecord
     * const basalRecord = await prisma.basalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BasalRecordUpdateArgs>(args: SelectSubset<T, BasalRecordUpdateArgs<ExtArgs>>): Prisma__BasalRecordClient<$Result.GetResult<Prisma.$BasalRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BasalRecords.
     * @param {BasalRecordDeleteManyArgs} args - Arguments to filter BasalRecords to delete.
     * @example
     * // Delete a few BasalRecords
     * const { count } = await prisma.basalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BasalRecordDeleteManyArgs>(args?: SelectSubset<T, BasalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BasalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BasalRecords
     * const basalRecord = await prisma.basalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BasalRecordUpdateManyArgs>(args: SelectSubset<T, BasalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BasalRecords and returns the data updated in the database.
     * @param {BasalRecordUpdateManyAndReturnArgs} args - Arguments to update many BasalRecords.
     * @example
     * // Update many BasalRecords
     * const basalRecord = await prisma.basalRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BasalRecords and only return the `id`
     * const basalRecordWithIdOnly = await prisma.basalRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends BasalRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, BasalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasalRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BasalRecord.
     * @param {BasalRecordUpsertArgs} args - Arguments to update or create a BasalRecord.
     * @example
     * // Update or create a BasalRecord
     * const basalRecord = await prisma.basalRecord.upsert({
     *   create: {
     *     // ... data to create a BasalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BasalRecord we want to update
     *   }
     * })
     */
    upsert<T extends BasalRecordUpsertArgs>(args: SelectSubset<T, BasalRecordUpsertArgs<ExtArgs>>): Prisma__BasalRecordClient<$Result.GetResult<Prisma.$BasalRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BasalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasalRecordCountArgs} args - Arguments to filter BasalRecords to count.
     * @example
     * // Count the number of BasalRecords
     * const count = await prisma.basalRecord.count({
     *   where: {
     *     // ... the filter for the BasalRecords we want to count
     *   }
     * })
    **/
    count<T extends BasalRecordCountArgs>(
      args?: Subset<T, BasalRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BasalRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BasalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BasalRecordAggregateArgs>(args: Subset<T, BasalRecordAggregateArgs>): Prisma.PrismaPromise<GetBasalRecordAggregateType<T>>

    /**
     * Group by BasalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasalRecordGroupByArgs} args - Group by arguments.
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
      T extends BasalRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BasalRecordGroupByArgs['orderBy'] }
        : { orderBy?: BasalRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BasalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBasalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BasalRecord model
   */
  readonly fields: BasalRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BasalRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BasalRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BasalRecord model
   */
  interface BasalRecordFieldRefs {
    readonly id: FieldRef<"BasalRecord", 'String'>
    readonly timestamp: FieldRef<"BasalRecord", 'DateTime'>
    readonly rate: FieldRef<"BasalRecord", 'Float'>
    readonly duration: FieldRef<"BasalRecord", 'Int'>
    readonly changeType: FieldRef<"BasalRecord", 'String'>
    readonly userId: FieldRef<"BasalRecord", 'String'>
    readonly createdAt: FieldRef<"BasalRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"BasalRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BasalRecord findUnique
   */
  export type BasalRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordInclude<ExtArgs> | null
    /**
     * Filter, which BasalRecord to fetch.
     */
    where: BasalRecordWhereUniqueInput
  }

  /**
   * BasalRecord findUniqueOrThrow
   */
  export type BasalRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordInclude<ExtArgs> | null
    /**
     * Filter, which BasalRecord to fetch.
     */
    where: BasalRecordWhereUniqueInput
  }

  /**
   * BasalRecord findFirst
   */
  export type BasalRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordInclude<ExtArgs> | null
    /**
     * Filter, which BasalRecord to fetch.
     */
    where?: BasalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BasalRecords to fetch.
     */
    orderBy?: BasalRecordOrderByWithRelationInput | BasalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BasalRecords.
     */
    cursor?: BasalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BasalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BasalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BasalRecords.
     */
    distinct?: BasalRecordScalarFieldEnum | BasalRecordScalarFieldEnum[]
  }

  /**
   * BasalRecord findFirstOrThrow
   */
  export type BasalRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordInclude<ExtArgs> | null
    /**
     * Filter, which BasalRecord to fetch.
     */
    where?: BasalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BasalRecords to fetch.
     */
    orderBy?: BasalRecordOrderByWithRelationInput | BasalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BasalRecords.
     */
    cursor?: BasalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BasalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BasalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BasalRecords.
     */
    distinct?: BasalRecordScalarFieldEnum | BasalRecordScalarFieldEnum[]
  }

  /**
   * BasalRecord findMany
   */
  export type BasalRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordInclude<ExtArgs> | null
    /**
     * Filter, which BasalRecords to fetch.
     */
    where?: BasalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BasalRecords to fetch.
     */
    orderBy?: BasalRecordOrderByWithRelationInput | BasalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BasalRecords.
     */
    cursor?: BasalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BasalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BasalRecords.
     */
    skip?: number
    distinct?: BasalRecordScalarFieldEnum | BasalRecordScalarFieldEnum[]
  }

  /**
   * BasalRecord create
   */
  export type BasalRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a BasalRecord.
     */
    data: XOR<BasalRecordCreateInput, BasalRecordUncheckedCreateInput>
  }

  /**
   * BasalRecord createMany
   */
  export type BasalRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BasalRecords.
     */
    data: BasalRecordCreateManyInput | BasalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BasalRecord createManyAndReturn
   */
  export type BasalRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * The data used to create many BasalRecords.
     */
    data: BasalRecordCreateManyInput | BasalRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BasalRecord update
   */
  export type BasalRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a BasalRecord.
     */
    data: XOR<BasalRecordUpdateInput, BasalRecordUncheckedUpdateInput>
    /**
     * Choose, which BasalRecord to update.
     */
    where: BasalRecordWhereUniqueInput
  }

  /**
   * BasalRecord updateMany
   */
  export type BasalRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BasalRecords.
     */
    data: XOR<BasalRecordUpdateManyMutationInput, BasalRecordUncheckedUpdateManyInput>
    /**
     * Filter which BasalRecords to update
     */
    where?: BasalRecordWhereInput
    /**
     * Limit how many BasalRecords to update.
     */
    limit?: number
  }

  /**
   * BasalRecord updateManyAndReturn
   */
  export type BasalRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * The data used to update BasalRecords.
     */
    data: XOR<BasalRecordUpdateManyMutationInput, BasalRecordUncheckedUpdateManyInput>
    /**
     * Filter which BasalRecords to update
     */
    where?: BasalRecordWhereInput
    /**
     * Limit how many BasalRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BasalRecord upsert
   */
  export type BasalRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the BasalRecord to update in case it exists.
     */
    where: BasalRecordWhereUniqueInput
    /**
     * In case the BasalRecord found by the `where` argument doesn't exist, create a new BasalRecord with this data.
     */
    create: XOR<BasalRecordCreateInput, BasalRecordUncheckedCreateInput>
    /**
     * In case the BasalRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BasalRecordUpdateInput, BasalRecordUncheckedUpdateInput>
  }

  /**
   * BasalRecord delete
   */
  export type BasalRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordInclude<ExtArgs> | null
    /**
     * Filter which BasalRecord to delete.
     */
    where: BasalRecordWhereUniqueInput
  }

  /**
   * BasalRecord deleteMany
   */
  export type BasalRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BasalRecords to delete
     */
    where?: BasalRecordWhereInput
    /**
     * Limit how many BasalRecords to delete.
     */
    limit?: number
  }

  /**
   * BasalRecord without action
   */
  export type BasalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasalRecord
     */
    select?: BasalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasalRecord
     */
    omit?: BasalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasalRecordInclude<ExtArgs> | null
  }


  /**
   * Model CarbEntry
   */

  export type AggregateCarbEntry = {
    _count: CarbEntryCountAggregateOutputType | null
    _avg: CarbEntryAvgAggregateOutputType | null
    _sum: CarbEntrySumAggregateOutputType | null
    _min: CarbEntryMinAggregateOutputType | null
    _max: CarbEntryMaxAggregateOutputType | null
  }

  export type CarbEntryAvgAggregateOutputType = {
    carbAmount: number | null
  }

  export type CarbEntrySumAggregateOutputType = {
    carbAmount: number | null
  }

  export type CarbEntryMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    carbAmount: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarbEntryMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    carbAmount: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarbEntryCountAggregateOutputType = {
    id: number
    timestamp: number
    carbAmount: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarbEntryAvgAggregateInputType = {
    carbAmount?: true
  }

  export type CarbEntrySumAggregateInputType = {
    carbAmount?: true
  }

  export type CarbEntryMinAggregateInputType = {
    id?: true
    timestamp?: true
    carbAmount?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarbEntryMaxAggregateInputType = {
    id?: true
    timestamp?: true
    carbAmount?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarbEntryCountAggregateInputType = {
    id?: true
    timestamp?: true
    carbAmount?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarbEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarbEntry to aggregate.
     */
    where?: CarbEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarbEntries to fetch.
     */
    orderBy?: CarbEntryOrderByWithRelationInput | CarbEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarbEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarbEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarbEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarbEntries
    **/
    _count?: true | CarbEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarbEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarbEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarbEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarbEntryMaxAggregateInputType
  }

  export type GetCarbEntryAggregateType<T extends CarbEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateCarbEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarbEntry[P]>
      : GetScalarType<T[P], AggregateCarbEntry[P]>
  }




  export type CarbEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarbEntryWhereInput
    orderBy?: CarbEntryOrderByWithAggregationInput | CarbEntryOrderByWithAggregationInput[]
    by: CarbEntryScalarFieldEnum[] | CarbEntryScalarFieldEnum
    having?: CarbEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarbEntryCountAggregateInputType | true
    _avg?: CarbEntryAvgAggregateInputType
    _sum?: CarbEntrySumAggregateInputType
    _min?: CarbEntryMinAggregateInputType
    _max?: CarbEntryMaxAggregateInputType
  }

  export type CarbEntryGroupByOutputType = {
    id: string
    timestamp: Date
    carbAmount: number
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CarbEntryCountAggregateOutputType | null
    _avg: CarbEntryAvgAggregateOutputType | null
    _sum: CarbEntrySumAggregateOutputType | null
    _min: CarbEntryMinAggregateOutputType | null
    _max: CarbEntryMaxAggregateOutputType | null
  }

  type GetCarbEntryGroupByPayload<T extends CarbEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarbEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarbEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarbEntryGroupByOutputType[P]>
            : GetScalarType<T[P], CarbEntryGroupByOutputType[P]>
        }
      >
    >


  export type CarbEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    carbAmount?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carbEntry"]>

  export type CarbEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    carbAmount?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carbEntry"]>

  export type CarbEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    carbAmount?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carbEntry"]>

  export type CarbEntrySelectScalar = {
    id?: boolean
    timestamp?: boolean
    carbAmount?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarbEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "carbAmount" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["carbEntry"]>
  export type CarbEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CarbEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CarbEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CarbEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarbEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      carbAmount: number
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["carbEntry"]>
    composites: {}
  }

  type CarbEntryGetPayload<S extends boolean | null | undefined | CarbEntryDefaultArgs> = $Result.GetResult<Prisma.$CarbEntryPayload, S>

  type CarbEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarbEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarbEntryCountAggregateInputType | true
    }

  export interface CarbEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarbEntry'], meta: { name: 'CarbEntry' } }
    /**
     * Find zero or one CarbEntry that matches the filter.
     * @param {CarbEntryFindUniqueArgs} args - Arguments to find a CarbEntry
     * @example
     * // Get one CarbEntry
     * const carbEntry = await prisma.carbEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarbEntryFindUniqueArgs>(args: SelectSubset<T, CarbEntryFindUniqueArgs<ExtArgs>>): Prisma__CarbEntryClient<$Result.GetResult<Prisma.$CarbEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarbEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarbEntryFindUniqueOrThrowArgs} args - Arguments to find a CarbEntry
     * @example
     * // Get one CarbEntry
     * const carbEntry = await prisma.carbEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarbEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, CarbEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarbEntryClient<$Result.GetResult<Prisma.$CarbEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarbEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbEntryFindFirstArgs} args - Arguments to find a CarbEntry
     * @example
     * // Get one CarbEntry
     * const carbEntry = await prisma.carbEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarbEntryFindFirstArgs>(args?: SelectSubset<T, CarbEntryFindFirstArgs<ExtArgs>>): Prisma__CarbEntryClient<$Result.GetResult<Prisma.$CarbEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarbEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbEntryFindFirstOrThrowArgs} args - Arguments to find a CarbEntry
     * @example
     * // Get one CarbEntry
     * const carbEntry = await prisma.carbEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarbEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, CarbEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarbEntryClient<$Result.GetResult<Prisma.$CarbEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarbEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarbEntries
     * const carbEntries = await prisma.carbEntry.findMany()
     * 
     * // Get first 10 CarbEntries
     * const carbEntries = await prisma.carbEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carbEntryWithIdOnly = await prisma.carbEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarbEntryFindManyArgs>(args?: SelectSubset<T, CarbEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarbEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarbEntry.
     * @param {CarbEntryCreateArgs} args - Arguments to create a CarbEntry.
     * @example
     * // Create one CarbEntry
     * const CarbEntry = await prisma.carbEntry.create({
     *   data: {
     *     // ... data to create a CarbEntry
     *   }
     * })
     * 
     */
    create<T extends CarbEntryCreateArgs>(args: SelectSubset<T, CarbEntryCreateArgs<ExtArgs>>): Prisma__CarbEntryClient<$Result.GetResult<Prisma.$CarbEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarbEntries.
     * @param {CarbEntryCreateManyArgs} args - Arguments to create many CarbEntries.
     * @example
     * // Create many CarbEntries
     * const carbEntry = await prisma.carbEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarbEntryCreateManyArgs>(args?: SelectSubset<T, CarbEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarbEntries and returns the data saved in the database.
     * @param {CarbEntryCreateManyAndReturnArgs} args - Arguments to create many CarbEntries.
     * @example
     * // Create many CarbEntries
     * const carbEntry = await prisma.carbEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarbEntries and only return the `id`
     * const carbEntryWithIdOnly = await prisma.carbEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarbEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, CarbEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarbEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarbEntry.
     * @param {CarbEntryDeleteArgs} args - Arguments to delete one CarbEntry.
     * @example
     * // Delete one CarbEntry
     * const CarbEntry = await prisma.carbEntry.delete({
     *   where: {
     *     // ... filter to delete one CarbEntry
     *   }
     * })
     * 
     */
    delete<T extends CarbEntryDeleteArgs>(args: SelectSubset<T, CarbEntryDeleteArgs<ExtArgs>>): Prisma__CarbEntryClient<$Result.GetResult<Prisma.$CarbEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarbEntry.
     * @param {CarbEntryUpdateArgs} args - Arguments to update one CarbEntry.
     * @example
     * // Update one CarbEntry
     * const carbEntry = await prisma.carbEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarbEntryUpdateArgs>(args: SelectSubset<T, CarbEntryUpdateArgs<ExtArgs>>): Prisma__CarbEntryClient<$Result.GetResult<Prisma.$CarbEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarbEntries.
     * @param {CarbEntryDeleteManyArgs} args - Arguments to filter CarbEntries to delete.
     * @example
     * // Delete a few CarbEntries
     * const { count } = await prisma.carbEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarbEntryDeleteManyArgs>(args?: SelectSubset<T, CarbEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarbEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarbEntries
     * const carbEntry = await prisma.carbEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarbEntryUpdateManyArgs>(args: SelectSubset<T, CarbEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarbEntries and returns the data updated in the database.
     * @param {CarbEntryUpdateManyAndReturnArgs} args - Arguments to update many CarbEntries.
     * @example
     * // Update many CarbEntries
     * const carbEntry = await prisma.carbEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarbEntries and only return the `id`
     * const carbEntryWithIdOnly = await prisma.carbEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarbEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, CarbEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarbEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarbEntry.
     * @param {CarbEntryUpsertArgs} args - Arguments to update or create a CarbEntry.
     * @example
     * // Update or create a CarbEntry
     * const carbEntry = await prisma.carbEntry.upsert({
     *   create: {
     *     // ... data to create a CarbEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarbEntry we want to update
     *   }
     * })
     */
    upsert<T extends CarbEntryUpsertArgs>(args: SelectSubset<T, CarbEntryUpsertArgs<ExtArgs>>): Prisma__CarbEntryClient<$Result.GetResult<Prisma.$CarbEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarbEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbEntryCountArgs} args - Arguments to filter CarbEntries to count.
     * @example
     * // Count the number of CarbEntries
     * const count = await prisma.carbEntry.count({
     *   where: {
     *     // ... the filter for the CarbEntries we want to count
     *   }
     * })
    **/
    count<T extends CarbEntryCountArgs>(
      args?: Subset<T, CarbEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarbEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarbEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarbEntryAggregateArgs>(args: Subset<T, CarbEntryAggregateArgs>): Prisma.PrismaPromise<GetCarbEntryAggregateType<T>>

    /**
     * Group by CarbEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbEntryGroupByArgs} args - Group by arguments.
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
      T extends CarbEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarbEntryGroupByArgs['orderBy'] }
        : { orderBy?: CarbEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarbEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarbEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarbEntry model
   */
  readonly fields: CarbEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarbEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarbEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CarbEntry model
   */
  interface CarbEntryFieldRefs {
    readonly id: FieldRef<"CarbEntry", 'String'>
    readonly timestamp: FieldRef<"CarbEntry", 'DateTime'>
    readonly carbAmount: FieldRef<"CarbEntry", 'Float'>
    readonly userId: FieldRef<"CarbEntry", 'String'>
    readonly createdAt: FieldRef<"CarbEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"CarbEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CarbEntry findUnique
   */
  export type CarbEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryInclude<ExtArgs> | null
    /**
     * Filter, which CarbEntry to fetch.
     */
    where: CarbEntryWhereUniqueInput
  }

  /**
   * CarbEntry findUniqueOrThrow
   */
  export type CarbEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryInclude<ExtArgs> | null
    /**
     * Filter, which CarbEntry to fetch.
     */
    where: CarbEntryWhereUniqueInput
  }

  /**
   * CarbEntry findFirst
   */
  export type CarbEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryInclude<ExtArgs> | null
    /**
     * Filter, which CarbEntry to fetch.
     */
    where?: CarbEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarbEntries to fetch.
     */
    orderBy?: CarbEntryOrderByWithRelationInput | CarbEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarbEntries.
     */
    cursor?: CarbEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarbEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarbEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarbEntries.
     */
    distinct?: CarbEntryScalarFieldEnum | CarbEntryScalarFieldEnum[]
  }

  /**
   * CarbEntry findFirstOrThrow
   */
  export type CarbEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryInclude<ExtArgs> | null
    /**
     * Filter, which CarbEntry to fetch.
     */
    where?: CarbEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarbEntries to fetch.
     */
    orderBy?: CarbEntryOrderByWithRelationInput | CarbEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarbEntries.
     */
    cursor?: CarbEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarbEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarbEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarbEntries.
     */
    distinct?: CarbEntryScalarFieldEnum | CarbEntryScalarFieldEnum[]
  }

  /**
   * CarbEntry findMany
   */
  export type CarbEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryInclude<ExtArgs> | null
    /**
     * Filter, which CarbEntries to fetch.
     */
    where?: CarbEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarbEntries to fetch.
     */
    orderBy?: CarbEntryOrderByWithRelationInput | CarbEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarbEntries.
     */
    cursor?: CarbEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarbEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarbEntries.
     */
    skip?: number
    distinct?: CarbEntryScalarFieldEnum | CarbEntryScalarFieldEnum[]
  }

  /**
   * CarbEntry create
   */
  export type CarbEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a CarbEntry.
     */
    data: XOR<CarbEntryCreateInput, CarbEntryUncheckedCreateInput>
  }

  /**
   * CarbEntry createMany
   */
  export type CarbEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarbEntries.
     */
    data: CarbEntryCreateManyInput | CarbEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarbEntry createManyAndReturn
   */
  export type CarbEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * The data used to create many CarbEntries.
     */
    data: CarbEntryCreateManyInput | CarbEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarbEntry update
   */
  export type CarbEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a CarbEntry.
     */
    data: XOR<CarbEntryUpdateInput, CarbEntryUncheckedUpdateInput>
    /**
     * Choose, which CarbEntry to update.
     */
    where: CarbEntryWhereUniqueInput
  }

  /**
   * CarbEntry updateMany
   */
  export type CarbEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarbEntries.
     */
    data: XOR<CarbEntryUpdateManyMutationInput, CarbEntryUncheckedUpdateManyInput>
    /**
     * Filter which CarbEntries to update
     */
    where?: CarbEntryWhereInput
    /**
     * Limit how many CarbEntries to update.
     */
    limit?: number
  }

  /**
   * CarbEntry updateManyAndReturn
   */
  export type CarbEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * The data used to update CarbEntries.
     */
    data: XOR<CarbEntryUpdateManyMutationInput, CarbEntryUncheckedUpdateManyInput>
    /**
     * Filter which CarbEntries to update
     */
    where?: CarbEntryWhereInput
    /**
     * Limit how many CarbEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarbEntry upsert
   */
  export type CarbEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the CarbEntry to update in case it exists.
     */
    where: CarbEntryWhereUniqueInput
    /**
     * In case the CarbEntry found by the `where` argument doesn't exist, create a new CarbEntry with this data.
     */
    create: XOR<CarbEntryCreateInput, CarbEntryUncheckedCreateInput>
    /**
     * In case the CarbEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarbEntryUpdateInput, CarbEntryUncheckedUpdateInput>
  }

  /**
   * CarbEntry delete
   */
  export type CarbEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryInclude<ExtArgs> | null
    /**
     * Filter which CarbEntry to delete.
     */
    where: CarbEntryWhereUniqueInput
  }

  /**
   * CarbEntry deleteMany
   */
  export type CarbEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarbEntries to delete
     */
    where?: CarbEntryWhereInput
    /**
     * Limit how many CarbEntries to delete.
     */
    limit?: number
  }

  /**
   * CarbEntry without action
   */
  export type CarbEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbEntry
     */
    select?: CarbEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbEntry
     */
    omit?: CarbEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbEntryInclude<ExtArgs> | null
  }


  /**
   * Model AlarmEvent
   */

  export type AggregateAlarmEvent = {
    _count: AlarmEventCountAggregateOutputType | null
    _min: AlarmEventMinAggregateOutputType | null
    _max: AlarmEventMaxAggregateOutputType | null
  }

  export type AlarmEventMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    eventType: string | null
    deviceId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlarmEventMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    eventType: string | null
    deviceId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlarmEventCountAggregateOutputType = {
    id: number
    timestamp: number
    eventType: number
    deviceId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlarmEventMinAggregateInputType = {
    id?: true
    timestamp?: true
    eventType?: true
    deviceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlarmEventMaxAggregateInputType = {
    id?: true
    timestamp?: true
    eventType?: true
    deviceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlarmEventCountAggregateInputType = {
    id?: true
    timestamp?: true
    eventType?: true
    deviceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlarmEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlarmEvent to aggregate.
     */
    where?: AlarmEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlarmEvents to fetch.
     */
    orderBy?: AlarmEventOrderByWithRelationInput | AlarmEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlarmEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlarmEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlarmEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlarmEvents
    **/
    _count?: true | AlarmEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlarmEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlarmEventMaxAggregateInputType
  }

  export type GetAlarmEventAggregateType<T extends AlarmEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAlarmEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlarmEvent[P]>
      : GetScalarType<T[P], AggregateAlarmEvent[P]>
  }




  export type AlarmEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlarmEventWhereInput
    orderBy?: AlarmEventOrderByWithAggregationInput | AlarmEventOrderByWithAggregationInput[]
    by: AlarmEventScalarFieldEnum[] | AlarmEventScalarFieldEnum
    having?: AlarmEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlarmEventCountAggregateInputType | true
    _min?: AlarmEventMinAggregateInputType
    _max?: AlarmEventMaxAggregateInputType
  }

  export type AlarmEventGroupByOutputType = {
    id: string
    timestamp: Date
    eventType: string
    deviceId: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AlarmEventCountAggregateOutputType | null
    _min: AlarmEventMinAggregateOutputType | null
    _max: AlarmEventMaxAggregateOutputType | null
  }

  type GetAlarmEventGroupByPayload<T extends AlarmEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlarmEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlarmEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlarmEventGroupByOutputType[P]>
            : GetScalarType<T[P], AlarmEventGroupByOutputType[P]>
        }
      >
    >


  export type AlarmEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    deviceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarmEvent"]>

  export type AlarmEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    deviceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarmEvent"]>

  export type AlarmEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    deviceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarmEvent"]>

  export type AlarmEventSelectScalar = {
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    deviceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlarmEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "eventType" | "deviceId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["alarmEvent"]>
  export type AlarmEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlarmEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlarmEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlarmEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlarmEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      eventType: string
      deviceId: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alarmEvent"]>
    composites: {}
  }

  type AlarmEventGetPayload<S extends boolean | null | undefined | AlarmEventDefaultArgs> = $Result.GetResult<Prisma.$AlarmEventPayload, S>

  type AlarmEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlarmEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlarmEventCountAggregateInputType | true
    }

  export interface AlarmEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlarmEvent'], meta: { name: 'AlarmEvent' } }
    /**
     * Find zero or one AlarmEvent that matches the filter.
     * @param {AlarmEventFindUniqueArgs} args - Arguments to find a AlarmEvent
     * @example
     * // Get one AlarmEvent
     * const alarmEvent = await prisma.alarmEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlarmEventFindUniqueArgs>(args: SelectSubset<T, AlarmEventFindUniqueArgs<ExtArgs>>): Prisma__AlarmEventClient<$Result.GetResult<Prisma.$AlarmEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlarmEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlarmEventFindUniqueOrThrowArgs} args - Arguments to find a AlarmEvent
     * @example
     * // Get one AlarmEvent
     * const alarmEvent = await prisma.alarmEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlarmEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AlarmEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlarmEventClient<$Result.GetResult<Prisma.$AlarmEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlarmEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmEventFindFirstArgs} args - Arguments to find a AlarmEvent
     * @example
     * // Get one AlarmEvent
     * const alarmEvent = await prisma.alarmEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlarmEventFindFirstArgs>(args?: SelectSubset<T, AlarmEventFindFirstArgs<ExtArgs>>): Prisma__AlarmEventClient<$Result.GetResult<Prisma.$AlarmEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlarmEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmEventFindFirstOrThrowArgs} args - Arguments to find a AlarmEvent
     * @example
     * // Get one AlarmEvent
     * const alarmEvent = await prisma.alarmEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlarmEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AlarmEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlarmEventClient<$Result.GetResult<Prisma.$AlarmEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlarmEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlarmEvents
     * const alarmEvents = await prisma.alarmEvent.findMany()
     * 
     * // Get first 10 AlarmEvents
     * const alarmEvents = await prisma.alarmEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alarmEventWithIdOnly = await prisma.alarmEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlarmEventFindManyArgs>(args?: SelectSubset<T, AlarmEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlarmEvent.
     * @param {AlarmEventCreateArgs} args - Arguments to create a AlarmEvent.
     * @example
     * // Create one AlarmEvent
     * const AlarmEvent = await prisma.alarmEvent.create({
     *   data: {
     *     // ... data to create a AlarmEvent
     *   }
     * })
     * 
     */
    create<T extends AlarmEventCreateArgs>(args: SelectSubset<T, AlarmEventCreateArgs<ExtArgs>>): Prisma__AlarmEventClient<$Result.GetResult<Prisma.$AlarmEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlarmEvents.
     * @param {AlarmEventCreateManyArgs} args - Arguments to create many AlarmEvents.
     * @example
     * // Create many AlarmEvents
     * const alarmEvent = await prisma.alarmEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlarmEventCreateManyArgs>(args?: SelectSubset<T, AlarmEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlarmEvents and returns the data saved in the database.
     * @param {AlarmEventCreateManyAndReturnArgs} args - Arguments to create many AlarmEvents.
     * @example
     * // Create many AlarmEvents
     * const alarmEvent = await prisma.alarmEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlarmEvents and only return the `id`
     * const alarmEventWithIdOnly = await prisma.alarmEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlarmEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AlarmEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlarmEvent.
     * @param {AlarmEventDeleteArgs} args - Arguments to delete one AlarmEvent.
     * @example
     * // Delete one AlarmEvent
     * const AlarmEvent = await prisma.alarmEvent.delete({
     *   where: {
     *     // ... filter to delete one AlarmEvent
     *   }
     * })
     * 
     */
    delete<T extends AlarmEventDeleteArgs>(args: SelectSubset<T, AlarmEventDeleteArgs<ExtArgs>>): Prisma__AlarmEventClient<$Result.GetResult<Prisma.$AlarmEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlarmEvent.
     * @param {AlarmEventUpdateArgs} args - Arguments to update one AlarmEvent.
     * @example
     * // Update one AlarmEvent
     * const alarmEvent = await prisma.alarmEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlarmEventUpdateArgs>(args: SelectSubset<T, AlarmEventUpdateArgs<ExtArgs>>): Prisma__AlarmEventClient<$Result.GetResult<Prisma.$AlarmEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlarmEvents.
     * @param {AlarmEventDeleteManyArgs} args - Arguments to filter AlarmEvents to delete.
     * @example
     * // Delete a few AlarmEvents
     * const { count } = await prisma.alarmEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlarmEventDeleteManyArgs>(args?: SelectSubset<T, AlarmEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlarmEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlarmEvents
     * const alarmEvent = await prisma.alarmEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlarmEventUpdateManyArgs>(args: SelectSubset<T, AlarmEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlarmEvents and returns the data updated in the database.
     * @param {AlarmEventUpdateManyAndReturnArgs} args - Arguments to update many AlarmEvents.
     * @example
     * // Update many AlarmEvents
     * const alarmEvent = await prisma.alarmEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlarmEvents and only return the `id`
     * const alarmEventWithIdOnly = await prisma.alarmEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlarmEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AlarmEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlarmEvent.
     * @param {AlarmEventUpsertArgs} args - Arguments to update or create a AlarmEvent.
     * @example
     * // Update or create a AlarmEvent
     * const alarmEvent = await prisma.alarmEvent.upsert({
     *   create: {
     *     // ... data to create a AlarmEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlarmEvent we want to update
     *   }
     * })
     */
    upsert<T extends AlarmEventUpsertArgs>(args: SelectSubset<T, AlarmEventUpsertArgs<ExtArgs>>): Prisma__AlarmEventClient<$Result.GetResult<Prisma.$AlarmEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlarmEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmEventCountArgs} args - Arguments to filter AlarmEvents to count.
     * @example
     * // Count the number of AlarmEvents
     * const count = await prisma.alarmEvent.count({
     *   where: {
     *     // ... the filter for the AlarmEvents we want to count
     *   }
     * })
    **/
    count<T extends AlarmEventCountArgs>(
      args?: Subset<T, AlarmEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlarmEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlarmEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlarmEventAggregateArgs>(args: Subset<T, AlarmEventAggregateArgs>): Prisma.PrismaPromise<GetAlarmEventAggregateType<T>>

    /**
     * Group by AlarmEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmEventGroupByArgs} args - Group by arguments.
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
      T extends AlarmEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlarmEventGroupByArgs['orderBy'] }
        : { orderBy?: AlarmEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlarmEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlarmEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlarmEvent model
   */
  readonly fields: AlarmEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlarmEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlarmEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AlarmEvent model
   */
  interface AlarmEventFieldRefs {
    readonly id: FieldRef<"AlarmEvent", 'String'>
    readonly timestamp: FieldRef<"AlarmEvent", 'DateTime'>
    readonly eventType: FieldRef<"AlarmEvent", 'String'>
    readonly deviceId: FieldRef<"AlarmEvent", 'String'>
    readonly userId: FieldRef<"AlarmEvent", 'String'>
    readonly createdAt: FieldRef<"AlarmEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"AlarmEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlarmEvent findUnique
   */
  export type AlarmEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventInclude<ExtArgs> | null
    /**
     * Filter, which AlarmEvent to fetch.
     */
    where: AlarmEventWhereUniqueInput
  }

  /**
   * AlarmEvent findUniqueOrThrow
   */
  export type AlarmEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventInclude<ExtArgs> | null
    /**
     * Filter, which AlarmEvent to fetch.
     */
    where: AlarmEventWhereUniqueInput
  }

  /**
   * AlarmEvent findFirst
   */
  export type AlarmEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventInclude<ExtArgs> | null
    /**
     * Filter, which AlarmEvent to fetch.
     */
    where?: AlarmEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlarmEvents to fetch.
     */
    orderBy?: AlarmEventOrderByWithRelationInput | AlarmEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlarmEvents.
     */
    cursor?: AlarmEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlarmEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlarmEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlarmEvents.
     */
    distinct?: AlarmEventScalarFieldEnum | AlarmEventScalarFieldEnum[]
  }

  /**
   * AlarmEvent findFirstOrThrow
   */
  export type AlarmEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventInclude<ExtArgs> | null
    /**
     * Filter, which AlarmEvent to fetch.
     */
    where?: AlarmEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlarmEvents to fetch.
     */
    orderBy?: AlarmEventOrderByWithRelationInput | AlarmEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlarmEvents.
     */
    cursor?: AlarmEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlarmEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlarmEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlarmEvents.
     */
    distinct?: AlarmEventScalarFieldEnum | AlarmEventScalarFieldEnum[]
  }

  /**
   * AlarmEvent findMany
   */
  export type AlarmEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventInclude<ExtArgs> | null
    /**
     * Filter, which AlarmEvents to fetch.
     */
    where?: AlarmEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlarmEvents to fetch.
     */
    orderBy?: AlarmEventOrderByWithRelationInput | AlarmEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlarmEvents.
     */
    cursor?: AlarmEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlarmEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlarmEvents.
     */
    skip?: number
    distinct?: AlarmEventScalarFieldEnum | AlarmEventScalarFieldEnum[]
  }

  /**
   * AlarmEvent create
   */
  export type AlarmEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventInclude<ExtArgs> | null
    /**
     * The data needed to create a AlarmEvent.
     */
    data: XOR<AlarmEventCreateInput, AlarmEventUncheckedCreateInput>
  }

  /**
   * AlarmEvent createMany
   */
  export type AlarmEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlarmEvents.
     */
    data: AlarmEventCreateManyInput | AlarmEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlarmEvent createManyAndReturn
   */
  export type AlarmEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * The data used to create many AlarmEvents.
     */
    data: AlarmEventCreateManyInput | AlarmEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlarmEvent update
   */
  export type AlarmEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventInclude<ExtArgs> | null
    /**
     * The data needed to update a AlarmEvent.
     */
    data: XOR<AlarmEventUpdateInput, AlarmEventUncheckedUpdateInput>
    /**
     * Choose, which AlarmEvent to update.
     */
    where: AlarmEventWhereUniqueInput
  }

  /**
   * AlarmEvent updateMany
   */
  export type AlarmEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlarmEvents.
     */
    data: XOR<AlarmEventUpdateManyMutationInput, AlarmEventUncheckedUpdateManyInput>
    /**
     * Filter which AlarmEvents to update
     */
    where?: AlarmEventWhereInput
    /**
     * Limit how many AlarmEvents to update.
     */
    limit?: number
  }

  /**
   * AlarmEvent updateManyAndReturn
   */
  export type AlarmEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * The data used to update AlarmEvents.
     */
    data: XOR<AlarmEventUpdateManyMutationInput, AlarmEventUncheckedUpdateManyInput>
    /**
     * Filter which AlarmEvents to update
     */
    where?: AlarmEventWhereInput
    /**
     * Limit how many AlarmEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlarmEvent upsert
   */
  export type AlarmEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventInclude<ExtArgs> | null
    /**
     * The filter to search for the AlarmEvent to update in case it exists.
     */
    where: AlarmEventWhereUniqueInput
    /**
     * In case the AlarmEvent found by the `where` argument doesn't exist, create a new AlarmEvent with this data.
     */
    create: XOR<AlarmEventCreateInput, AlarmEventUncheckedCreateInput>
    /**
     * In case the AlarmEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlarmEventUpdateInput, AlarmEventUncheckedUpdateInput>
  }

  /**
   * AlarmEvent delete
   */
  export type AlarmEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventInclude<ExtArgs> | null
    /**
     * Filter which AlarmEvent to delete.
     */
    where: AlarmEventWhereUniqueInput
  }

  /**
   * AlarmEvent deleteMany
   */
  export type AlarmEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlarmEvents to delete
     */
    where?: AlarmEventWhereInput
    /**
     * Limit how many AlarmEvents to delete.
     */
    limit?: number
  }

  /**
   * AlarmEvent without action
   */
  export type AlarmEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmEvent
     */
    select?: AlarmEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlarmEvent
     */
    omit?: AlarmEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmEventInclude<ExtArgs> | null
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


  export const GlucoseStatsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    average: 'average',
    standardDeviation: 'standardDeviation',
    highCount: 'highCount',
    lowCount: 'lowCount',
    inRangeCount: 'inRangeCount',
    totalReadings: 'totalReadings',
    highPercentage: 'highPercentage',
    lowPercentage: 'lowPercentage',
    inRangePercentage: 'inRangePercentage',
    minGlucose: 'minGlucose',
    maxGlucose: 'maxGlucose',
    timeInRange: 'timeInRange',
    lastCalculated: 'lastCalculated',
    updatedAt: 'updatedAt'
  };

  export type GlucoseStatsScalarFieldEnum = (typeof GlucoseStatsScalarFieldEnum)[keyof typeof GlucoseStatsScalarFieldEnum]


  export const InsulinStatsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalDays: 'totalDays',
    avgTotalInsulin: 'avgTotalInsulin',
    avgDailyBolus: 'avgDailyBolus',
    avgDailyBasal: 'avgDailyBasal',
    avgDailyCarbs: 'avgDailyCarbs',
    bolusPercentage: 'bolusPercentage',
    basalPercentage: 'basalPercentage',
    insulinCarbRatio: 'insulinCarbRatio',
    totalBolusCount: 'totalBolusCount',
    totalBasalChanges: 'totalBasalChanges',
    avgBolusesPerDay: 'avgBolusesPerDay',
    lastCalculated: 'lastCalculated',
    updatedAt: 'updatedAt',
    dataStartDate: 'dataStartDate',
    dataEndDate: 'dataEndDate'
  };

  export type InsulinStatsScalarFieldEnum = (typeof InsulinStatsScalarFieldEnum)[keyof typeof InsulinStatsScalarFieldEnum]


  export const BolusRecordScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    amount: 'amount',
    bolusType: 'bolusType',
    duration: 'duration',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BolusRecordScalarFieldEnum = (typeof BolusRecordScalarFieldEnum)[keyof typeof BolusRecordScalarFieldEnum]


  export const BasalRecordScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    rate: 'rate',
    duration: 'duration',
    changeType: 'changeType',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BasalRecordScalarFieldEnum = (typeof BasalRecordScalarFieldEnum)[keyof typeof BasalRecordScalarFieldEnum]


  export const CarbEntryScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    carbAmount: 'carbAmount',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarbEntryScalarFieldEnum = (typeof CarbEntryScalarFieldEnum)[keyof typeof CarbEntryScalarFieldEnum]


  export const AlarmEventScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    eventType: 'eventType',
    deviceId: 'deviceId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlarmEventScalarFieldEnum = (typeof AlarmEventScalarFieldEnum)[keyof typeof AlarmEventScalarFieldEnum]


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
    glucoseStats?: XOR<GlucoseStatsNullableScalarRelationFilter, GlucoseStatsWhereInput> | null
    insulinStats?: XOR<InsulinStatsNullableScalarRelationFilter, InsulinStatsWhereInput> | null
    bolusRecords?: BolusRecordListRelationFilter
    basalRecords?: BasalRecordListRelationFilter
    carbEntries?: CarbEntryListRelationFilter
    alarmEvents?: AlarmEventListRelationFilter
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
    glucoseStats?: GlucoseStatsOrderByWithRelationInput
    insulinStats?: InsulinStatsOrderByWithRelationInput
    bolusRecords?: BolusRecordOrderByRelationAggregateInput
    basalRecords?: BasalRecordOrderByRelationAggregateInput
    carbEntries?: CarbEntryOrderByRelationAggregateInput
    alarmEvents?: AlarmEventOrderByRelationAggregateInput
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
    glucoseStats?: XOR<GlucoseStatsNullableScalarRelationFilter, GlucoseStatsWhereInput> | null
    insulinStats?: XOR<InsulinStatsNullableScalarRelationFilter, InsulinStatsWhereInput> | null
    bolusRecords?: BolusRecordListRelationFilter
    basalRecords?: BasalRecordListRelationFilter
    carbEntries?: CarbEntryListRelationFilter
    alarmEvents?: AlarmEventListRelationFilter
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

  export type GlucoseStatsWhereInput = {
    AND?: GlucoseStatsWhereInput | GlucoseStatsWhereInput[]
    OR?: GlucoseStatsWhereInput[]
    NOT?: GlucoseStatsWhereInput | GlucoseStatsWhereInput[]
    id?: StringFilter<"GlucoseStats"> | string
    userId?: StringFilter<"GlucoseStats"> | string
    average?: FloatFilter<"GlucoseStats"> | number
    standardDeviation?: FloatFilter<"GlucoseStats"> | number
    highCount?: IntFilter<"GlucoseStats"> | number
    lowCount?: IntFilter<"GlucoseStats"> | number
    inRangeCount?: IntFilter<"GlucoseStats"> | number
    totalReadings?: IntFilter<"GlucoseStats"> | number
    highPercentage?: FloatFilter<"GlucoseStats"> | number
    lowPercentage?: FloatFilter<"GlucoseStats"> | number
    inRangePercentage?: FloatFilter<"GlucoseStats"> | number
    minGlucose?: FloatFilter<"GlucoseStats"> | number
    maxGlucose?: FloatFilter<"GlucoseStats"> | number
    timeInRange?: StringFilter<"GlucoseStats"> | string
    lastCalculated?: DateTimeFilter<"GlucoseStats"> | Date | string
    updatedAt?: DateTimeFilter<"GlucoseStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GlucoseStatsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    average?: SortOrder
    standardDeviation?: SortOrder
    highCount?: SortOrder
    lowCount?: SortOrder
    inRangeCount?: SortOrder
    totalReadings?: SortOrder
    highPercentage?: SortOrder
    lowPercentage?: SortOrder
    inRangePercentage?: SortOrder
    minGlucose?: SortOrder
    maxGlucose?: SortOrder
    timeInRange?: SortOrder
    lastCalculated?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GlucoseStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: GlucoseStatsWhereInput | GlucoseStatsWhereInput[]
    OR?: GlucoseStatsWhereInput[]
    NOT?: GlucoseStatsWhereInput | GlucoseStatsWhereInput[]
    average?: FloatFilter<"GlucoseStats"> | number
    standardDeviation?: FloatFilter<"GlucoseStats"> | number
    highCount?: IntFilter<"GlucoseStats"> | number
    lowCount?: IntFilter<"GlucoseStats"> | number
    inRangeCount?: IntFilter<"GlucoseStats"> | number
    totalReadings?: IntFilter<"GlucoseStats"> | number
    highPercentage?: FloatFilter<"GlucoseStats"> | number
    lowPercentage?: FloatFilter<"GlucoseStats"> | number
    inRangePercentage?: FloatFilter<"GlucoseStats"> | number
    minGlucose?: FloatFilter<"GlucoseStats"> | number
    maxGlucose?: FloatFilter<"GlucoseStats"> | number
    timeInRange?: StringFilter<"GlucoseStats"> | string
    lastCalculated?: DateTimeFilter<"GlucoseStats"> | Date | string
    updatedAt?: DateTimeFilter<"GlucoseStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type GlucoseStatsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    average?: SortOrder
    standardDeviation?: SortOrder
    highCount?: SortOrder
    lowCount?: SortOrder
    inRangeCount?: SortOrder
    totalReadings?: SortOrder
    highPercentage?: SortOrder
    lowPercentage?: SortOrder
    inRangePercentage?: SortOrder
    minGlucose?: SortOrder
    maxGlucose?: SortOrder
    timeInRange?: SortOrder
    lastCalculated?: SortOrder
    updatedAt?: SortOrder
    _count?: GlucoseStatsCountOrderByAggregateInput
    _avg?: GlucoseStatsAvgOrderByAggregateInput
    _max?: GlucoseStatsMaxOrderByAggregateInput
    _min?: GlucoseStatsMinOrderByAggregateInput
    _sum?: GlucoseStatsSumOrderByAggregateInput
  }

  export type GlucoseStatsScalarWhereWithAggregatesInput = {
    AND?: GlucoseStatsScalarWhereWithAggregatesInput | GlucoseStatsScalarWhereWithAggregatesInput[]
    OR?: GlucoseStatsScalarWhereWithAggregatesInput[]
    NOT?: GlucoseStatsScalarWhereWithAggregatesInput | GlucoseStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlucoseStats"> | string
    userId?: StringWithAggregatesFilter<"GlucoseStats"> | string
    average?: FloatWithAggregatesFilter<"GlucoseStats"> | number
    standardDeviation?: FloatWithAggregatesFilter<"GlucoseStats"> | number
    highCount?: IntWithAggregatesFilter<"GlucoseStats"> | number
    lowCount?: IntWithAggregatesFilter<"GlucoseStats"> | number
    inRangeCount?: IntWithAggregatesFilter<"GlucoseStats"> | number
    totalReadings?: IntWithAggregatesFilter<"GlucoseStats"> | number
    highPercentage?: FloatWithAggregatesFilter<"GlucoseStats"> | number
    lowPercentage?: FloatWithAggregatesFilter<"GlucoseStats"> | number
    inRangePercentage?: FloatWithAggregatesFilter<"GlucoseStats"> | number
    minGlucose?: FloatWithAggregatesFilter<"GlucoseStats"> | number
    maxGlucose?: FloatWithAggregatesFilter<"GlucoseStats"> | number
    timeInRange?: StringWithAggregatesFilter<"GlucoseStats"> | string
    lastCalculated?: DateTimeWithAggregatesFilter<"GlucoseStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GlucoseStats"> | Date | string
  }

  export type InsulinStatsWhereInput = {
    AND?: InsulinStatsWhereInput | InsulinStatsWhereInput[]
    OR?: InsulinStatsWhereInput[]
    NOT?: InsulinStatsWhereInput | InsulinStatsWhereInput[]
    id?: StringFilter<"InsulinStats"> | string
    userId?: StringFilter<"InsulinStats"> | string
    totalDays?: IntFilter<"InsulinStats"> | number
    avgTotalInsulin?: FloatFilter<"InsulinStats"> | number
    avgDailyBolus?: FloatFilter<"InsulinStats"> | number
    avgDailyBasal?: FloatFilter<"InsulinStats"> | number
    avgDailyCarbs?: FloatFilter<"InsulinStats"> | number
    bolusPercentage?: FloatFilter<"InsulinStats"> | number
    basalPercentage?: FloatFilter<"InsulinStats"> | number
    insulinCarbRatio?: FloatNullableFilter<"InsulinStats"> | number | null
    totalBolusCount?: IntFilter<"InsulinStats"> | number
    totalBasalChanges?: IntFilter<"InsulinStats"> | number
    avgBolusesPerDay?: FloatFilter<"InsulinStats"> | number
    lastCalculated?: DateTimeFilter<"InsulinStats"> | Date | string
    updatedAt?: DateTimeFilter<"InsulinStats"> | Date | string
    dataStartDate?: DateTimeFilter<"InsulinStats"> | Date | string
    dataEndDate?: DateTimeFilter<"InsulinStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InsulinStatsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalDays?: SortOrder
    avgTotalInsulin?: SortOrder
    avgDailyBolus?: SortOrder
    avgDailyBasal?: SortOrder
    avgDailyCarbs?: SortOrder
    bolusPercentage?: SortOrder
    basalPercentage?: SortOrder
    insulinCarbRatio?: SortOrderInput | SortOrder
    totalBolusCount?: SortOrder
    totalBasalChanges?: SortOrder
    avgBolusesPerDay?: SortOrder
    lastCalculated?: SortOrder
    updatedAt?: SortOrder
    dataStartDate?: SortOrder
    dataEndDate?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InsulinStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: InsulinStatsWhereInput | InsulinStatsWhereInput[]
    OR?: InsulinStatsWhereInput[]
    NOT?: InsulinStatsWhereInput | InsulinStatsWhereInput[]
    totalDays?: IntFilter<"InsulinStats"> | number
    avgTotalInsulin?: FloatFilter<"InsulinStats"> | number
    avgDailyBolus?: FloatFilter<"InsulinStats"> | number
    avgDailyBasal?: FloatFilter<"InsulinStats"> | number
    avgDailyCarbs?: FloatFilter<"InsulinStats"> | number
    bolusPercentage?: FloatFilter<"InsulinStats"> | number
    basalPercentage?: FloatFilter<"InsulinStats"> | number
    insulinCarbRatio?: FloatNullableFilter<"InsulinStats"> | number | null
    totalBolusCount?: IntFilter<"InsulinStats"> | number
    totalBasalChanges?: IntFilter<"InsulinStats"> | number
    avgBolusesPerDay?: FloatFilter<"InsulinStats"> | number
    lastCalculated?: DateTimeFilter<"InsulinStats"> | Date | string
    updatedAt?: DateTimeFilter<"InsulinStats"> | Date | string
    dataStartDate?: DateTimeFilter<"InsulinStats"> | Date | string
    dataEndDate?: DateTimeFilter<"InsulinStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type InsulinStatsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalDays?: SortOrder
    avgTotalInsulin?: SortOrder
    avgDailyBolus?: SortOrder
    avgDailyBasal?: SortOrder
    avgDailyCarbs?: SortOrder
    bolusPercentage?: SortOrder
    basalPercentage?: SortOrder
    insulinCarbRatio?: SortOrderInput | SortOrder
    totalBolusCount?: SortOrder
    totalBasalChanges?: SortOrder
    avgBolusesPerDay?: SortOrder
    lastCalculated?: SortOrder
    updatedAt?: SortOrder
    dataStartDate?: SortOrder
    dataEndDate?: SortOrder
    _count?: InsulinStatsCountOrderByAggregateInput
    _avg?: InsulinStatsAvgOrderByAggregateInput
    _max?: InsulinStatsMaxOrderByAggregateInput
    _min?: InsulinStatsMinOrderByAggregateInput
    _sum?: InsulinStatsSumOrderByAggregateInput
  }

  export type InsulinStatsScalarWhereWithAggregatesInput = {
    AND?: InsulinStatsScalarWhereWithAggregatesInput | InsulinStatsScalarWhereWithAggregatesInput[]
    OR?: InsulinStatsScalarWhereWithAggregatesInput[]
    NOT?: InsulinStatsScalarWhereWithAggregatesInput | InsulinStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InsulinStats"> | string
    userId?: StringWithAggregatesFilter<"InsulinStats"> | string
    totalDays?: IntWithAggregatesFilter<"InsulinStats"> | number
    avgTotalInsulin?: FloatWithAggregatesFilter<"InsulinStats"> | number
    avgDailyBolus?: FloatWithAggregatesFilter<"InsulinStats"> | number
    avgDailyBasal?: FloatWithAggregatesFilter<"InsulinStats"> | number
    avgDailyCarbs?: FloatWithAggregatesFilter<"InsulinStats"> | number
    bolusPercentage?: FloatWithAggregatesFilter<"InsulinStats"> | number
    basalPercentage?: FloatWithAggregatesFilter<"InsulinStats"> | number
    insulinCarbRatio?: FloatNullableWithAggregatesFilter<"InsulinStats"> | number | null
    totalBolusCount?: IntWithAggregatesFilter<"InsulinStats"> | number
    totalBasalChanges?: IntWithAggregatesFilter<"InsulinStats"> | number
    avgBolusesPerDay?: FloatWithAggregatesFilter<"InsulinStats"> | number
    lastCalculated?: DateTimeWithAggregatesFilter<"InsulinStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InsulinStats"> | Date | string
    dataStartDate?: DateTimeWithAggregatesFilter<"InsulinStats"> | Date | string
    dataEndDate?: DateTimeWithAggregatesFilter<"InsulinStats"> | Date | string
  }

  export type BolusRecordWhereInput = {
    AND?: BolusRecordWhereInput | BolusRecordWhereInput[]
    OR?: BolusRecordWhereInput[]
    NOT?: BolusRecordWhereInput | BolusRecordWhereInput[]
    id?: StringFilter<"BolusRecord"> | string
    timestamp?: DateTimeFilter<"BolusRecord"> | Date | string
    amount?: FloatFilter<"BolusRecord"> | number
    bolusType?: StringFilter<"BolusRecord"> | string
    duration?: IntNullableFilter<"BolusRecord"> | number | null
    userId?: StringFilter<"BolusRecord"> | string
    createdAt?: DateTimeFilter<"BolusRecord"> | Date | string
    updatedAt?: DateTimeFilter<"BolusRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BolusRecordOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    amount?: SortOrder
    bolusType?: SortOrder
    duration?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BolusRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BolusRecordWhereInput | BolusRecordWhereInput[]
    OR?: BolusRecordWhereInput[]
    NOT?: BolusRecordWhereInput | BolusRecordWhereInput[]
    timestamp?: DateTimeFilter<"BolusRecord"> | Date | string
    amount?: FloatFilter<"BolusRecord"> | number
    bolusType?: StringFilter<"BolusRecord"> | string
    duration?: IntNullableFilter<"BolusRecord"> | number | null
    userId?: StringFilter<"BolusRecord"> | string
    createdAt?: DateTimeFilter<"BolusRecord"> | Date | string
    updatedAt?: DateTimeFilter<"BolusRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BolusRecordOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    amount?: SortOrder
    bolusType?: SortOrder
    duration?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BolusRecordCountOrderByAggregateInput
    _avg?: BolusRecordAvgOrderByAggregateInput
    _max?: BolusRecordMaxOrderByAggregateInput
    _min?: BolusRecordMinOrderByAggregateInput
    _sum?: BolusRecordSumOrderByAggregateInput
  }

  export type BolusRecordScalarWhereWithAggregatesInput = {
    AND?: BolusRecordScalarWhereWithAggregatesInput | BolusRecordScalarWhereWithAggregatesInput[]
    OR?: BolusRecordScalarWhereWithAggregatesInput[]
    NOT?: BolusRecordScalarWhereWithAggregatesInput | BolusRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BolusRecord"> | string
    timestamp?: DateTimeWithAggregatesFilter<"BolusRecord"> | Date | string
    amount?: FloatWithAggregatesFilter<"BolusRecord"> | number
    bolusType?: StringWithAggregatesFilter<"BolusRecord"> | string
    duration?: IntNullableWithAggregatesFilter<"BolusRecord"> | number | null
    userId?: StringWithAggregatesFilter<"BolusRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BolusRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BolusRecord"> | Date | string
  }

  export type BasalRecordWhereInput = {
    AND?: BasalRecordWhereInput | BasalRecordWhereInput[]
    OR?: BasalRecordWhereInput[]
    NOT?: BasalRecordWhereInput | BasalRecordWhereInput[]
    id?: StringFilter<"BasalRecord"> | string
    timestamp?: DateTimeFilter<"BasalRecord"> | Date | string
    rate?: FloatFilter<"BasalRecord"> | number
    duration?: IntFilter<"BasalRecord"> | number
    changeType?: StringNullableFilter<"BasalRecord"> | string | null
    userId?: StringFilter<"BasalRecord"> | string
    createdAt?: DateTimeFilter<"BasalRecord"> | Date | string
    updatedAt?: DateTimeFilter<"BasalRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BasalRecordOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    rate?: SortOrder
    duration?: SortOrder
    changeType?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BasalRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BasalRecordWhereInput | BasalRecordWhereInput[]
    OR?: BasalRecordWhereInput[]
    NOT?: BasalRecordWhereInput | BasalRecordWhereInput[]
    timestamp?: DateTimeFilter<"BasalRecord"> | Date | string
    rate?: FloatFilter<"BasalRecord"> | number
    duration?: IntFilter<"BasalRecord"> | number
    changeType?: StringNullableFilter<"BasalRecord"> | string | null
    userId?: StringFilter<"BasalRecord"> | string
    createdAt?: DateTimeFilter<"BasalRecord"> | Date | string
    updatedAt?: DateTimeFilter<"BasalRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BasalRecordOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    rate?: SortOrder
    duration?: SortOrder
    changeType?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BasalRecordCountOrderByAggregateInput
    _avg?: BasalRecordAvgOrderByAggregateInput
    _max?: BasalRecordMaxOrderByAggregateInput
    _min?: BasalRecordMinOrderByAggregateInput
    _sum?: BasalRecordSumOrderByAggregateInput
  }

  export type BasalRecordScalarWhereWithAggregatesInput = {
    AND?: BasalRecordScalarWhereWithAggregatesInput | BasalRecordScalarWhereWithAggregatesInput[]
    OR?: BasalRecordScalarWhereWithAggregatesInput[]
    NOT?: BasalRecordScalarWhereWithAggregatesInput | BasalRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BasalRecord"> | string
    timestamp?: DateTimeWithAggregatesFilter<"BasalRecord"> | Date | string
    rate?: FloatWithAggregatesFilter<"BasalRecord"> | number
    duration?: IntWithAggregatesFilter<"BasalRecord"> | number
    changeType?: StringNullableWithAggregatesFilter<"BasalRecord"> | string | null
    userId?: StringWithAggregatesFilter<"BasalRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BasalRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BasalRecord"> | Date | string
  }

  export type CarbEntryWhereInput = {
    AND?: CarbEntryWhereInput | CarbEntryWhereInput[]
    OR?: CarbEntryWhereInput[]
    NOT?: CarbEntryWhereInput | CarbEntryWhereInput[]
    id?: StringFilter<"CarbEntry"> | string
    timestamp?: DateTimeFilter<"CarbEntry"> | Date | string
    carbAmount?: FloatFilter<"CarbEntry"> | number
    userId?: StringFilter<"CarbEntry"> | string
    createdAt?: DateTimeFilter<"CarbEntry"> | Date | string
    updatedAt?: DateTimeFilter<"CarbEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CarbEntryOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    carbAmount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CarbEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarbEntryWhereInput | CarbEntryWhereInput[]
    OR?: CarbEntryWhereInput[]
    NOT?: CarbEntryWhereInput | CarbEntryWhereInput[]
    timestamp?: DateTimeFilter<"CarbEntry"> | Date | string
    carbAmount?: FloatFilter<"CarbEntry"> | number
    userId?: StringFilter<"CarbEntry"> | string
    createdAt?: DateTimeFilter<"CarbEntry"> | Date | string
    updatedAt?: DateTimeFilter<"CarbEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CarbEntryOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    carbAmount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarbEntryCountOrderByAggregateInput
    _avg?: CarbEntryAvgOrderByAggregateInput
    _max?: CarbEntryMaxOrderByAggregateInput
    _min?: CarbEntryMinOrderByAggregateInput
    _sum?: CarbEntrySumOrderByAggregateInput
  }

  export type CarbEntryScalarWhereWithAggregatesInput = {
    AND?: CarbEntryScalarWhereWithAggregatesInput | CarbEntryScalarWhereWithAggregatesInput[]
    OR?: CarbEntryScalarWhereWithAggregatesInput[]
    NOT?: CarbEntryScalarWhereWithAggregatesInput | CarbEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CarbEntry"> | string
    timestamp?: DateTimeWithAggregatesFilter<"CarbEntry"> | Date | string
    carbAmount?: FloatWithAggregatesFilter<"CarbEntry"> | number
    userId?: StringWithAggregatesFilter<"CarbEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CarbEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CarbEntry"> | Date | string
  }

  export type AlarmEventWhereInput = {
    AND?: AlarmEventWhereInput | AlarmEventWhereInput[]
    OR?: AlarmEventWhereInput[]
    NOT?: AlarmEventWhereInput | AlarmEventWhereInput[]
    id?: StringFilter<"AlarmEvent"> | string
    timestamp?: DateTimeFilter<"AlarmEvent"> | Date | string
    eventType?: StringFilter<"AlarmEvent"> | string
    deviceId?: StringNullableFilter<"AlarmEvent"> | string | null
    userId?: StringFilter<"AlarmEvent"> | string
    createdAt?: DateTimeFilter<"AlarmEvent"> | Date | string
    updatedAt?: DateTimeFilter<"AlarmEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AlarmEventOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AlarmEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlarmEventWhereInput | AlarmEventWhereInput[]
    OR?: AlarmEventWhereInput[]
    NOT?: AlarmEventWhereInput | AlarmEventWhereInput[]
    timestamp?: DateTimeFilter<"AlarmEvent"> | Date | string
    eventType?: StringFilter<"AlarmEvent"> | string
    deviceId?: StringNullableFilter<"AlarmEvent"> | string | null
    userId?: StringFilter<"AlarmEvent"> | string
    createdAt?: DateTimeFilter<"AlarmEvent"> | Date | string
    updatedAt?: DateTimeFilter<"AlarmEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AlarmEventOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlarmEventCountOrderByAggregateInput
    _max?: AlarmEventMaxOrderByAggregateInput
    _min?: AlarmEventMinOrderByAggregateInput
  }

  export type AlarmEventScalarWhereWithAggregatesInput = {
    AND?: AlarmEventScalarWhereWithAggregatesInput | AlarmEventScalarWhereWithAggregatesInput[]
    OR?: AlarmEventScalarWhereWithAggregatesInput[]
    NOT?: AlarmEventScalarWhereWithAggregatesInput | AlarmEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlarmEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AlarmEvent"> | Date | string
    eventType?: StringWithAggregatesFilter<"AlarmEvent"> | string
    deviceId?: StringNullableWithAggregatesFilter<"AlarmEvent"> | string | null
    userId?: StringWithAggregatesFilter<"AlarmEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AlarmEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlarmEvent"> | Date | string
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
    glucoseStats?: GlucoseStatsCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventCreateNestedManyWithoutUserInput
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
    glucoseStats?: GlucoseStatsUncheckedCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsUncheckedCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordUncheckedCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordUncheckedCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryUncheckedCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventUncheckedCreateNestedManyWithoutUserInput
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
    glucoseStats?: GlucoseStatsUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUpdateManyWithoutUserNestedInput
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
    glucoseStats?: GlucoseStatsUncheckedUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUncheckedUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUncheckedUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUncheckedUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUncheckedUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUncheckedUpdateManyWithoutUserNestedInput
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

  export type GlucoseStatsCreateInput = {
    id?: string
    average: number
    standardDeviation: number
    highCount: number
    lowCount: number
    inRangeCount: number
    totalReadings: number
    highPercentage: number
    lowPercentage: number
    inRangePercentage: number
    minGlucose: number
    maxGlucose: number
    timeInRange: string
    lastCalculated?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGlucoseStatsInput
  }

  export type GlucoseStatsUncheckedCreateInput = {
    id?: string
    userId: string
    average: number
    standardDeviation: number
    highCount: number
    lowCount: number
    inRangeCount: number
    totalReadings: number
    highPercentage: number
    lowPercentage: number
    inRangePercentage: number
    minGlucose: number
    maxGlucose: number
    timeInRange: string
    lastCalculated?: Date | string
    updatedAt?: Date | string
  }

  export type GlucoseStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    standardDeviation?: FloatFieldUpdateOperationsInput | number
    highCount?: IntFieldUpdateOperationsInput | number
    lowCount?: IntFieldUpdateOperationsInput | number
    inRangeCount?: IntFieldUpdateOperationsInput | number
    totalReadings?: IntFieldUpdateOperationsInput | number
    highPercentage?: FloatFieldUpdateOperationsInput | number
    lowPercentage?: FloatFieldUpdateOperationsInput | number
    inRangePercentage?: FloatFieldUpdateOperationsInput | number
    minGlucose?: FloatFieldUpdateOperationsInput | number
    maxGlucose?: FloatFieldUpdateOperationsInput | number
    timeInRange?: StringFieldUpdateOperationsInput | string
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGlucoseStatsNestedInput
  }

  export type GlucoseStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    standardDeviation?: FloatFieldUpdateOperationsInput | number
    highCount?: IntFieldUpdateOperationsInput | number
    lowCount?: IntFieldUpdateOperationsInput | number
    inRangeCount?: IntFieldUpdateOperationsInput | number
    totalReadings?: IntFieldUpdateOperationsInput | number
    highPercentage?: FloatFieldUpdateOperationsInput | number
    lowPercentage?: FloatFieldUpdateOperationsInput | number
    inRangePercentage?: FloatFieldUpdateOperationsInput | number
    minGlucose?: FloatFieldUpdateOperationsInput | number
    maxGlucose?: FloatFieldUpdateOperationsInput | number
    timeInRange?: StringFieldUpdateOperationsInput | string
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseStatsCreateManyInput = {
    id?: string
    userId: string
    average: number
    standardDeviation: number
    highCount: number
    lowCount: number
    inRangeCount: number
    totalReadings: number
    highPercentage: number
    lowPercentage: number
    inRangePercentage: number
    minGlucose: number
    maxGlucose: number
    timeInRange: string
    lastCalculated?: Date | string
    updatedAt?: Date | string
  }

  export type GlucoseStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    standardDeviation?: FloatFieldUpdateOperationsInput | number
    highCount?: IntFieldUpdateOperationsInput | number
    lowCount?: IntFieldUpdateOperationsInput | number
    inRangeCount?: IntFieldUpdateOperationsInput | number
    totalReadings?: IntFieldUpdateOperationsInput | number
    highPercentage?: FloatFieldUpdateOperationsInput | number
    lowPercentage?: FloatFieldUpdateOperationsInput | number
    inRangePercentage?: FloatFieldUpdateOperationsInput | number
    minGlucose?: FloatFieldUpdateOperationsInput | number
    maxGlucose?: FloatFieldUpdateOperationsInput | number
    timeInRange?: StringFieldUpdateOperationsInput | string
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    standardDeviation?: FloatFieldUpdateOperationsInput | number
    highCount?: IntFieldUpdateOperationsInput | number
    lowCount?: IntFieldUpdateOperationsInput | number
    inRangeCount?: IntFieldUpdateOperationsInput | number
    totalReadings?: IntFieldUpdateOperationsInput | number
    highPercentage?: FloatFieldUpdateOperationsInput | number
    lowPercentage?: FloatFieldUpdateOperationsInput | number
    inRangePercentage?: FloatFieldUpdateOperationsInput | number
    minGlucose?: FloatFieldUpdateOperationsInput | number
    maxGlucose?: FloatFieldUpdateOperationsInput | number
    timeInRange?: StringFieldUpdateOperationsInput | string
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsulinStatsCreateInput = {
    id?: string
    totalDays: number
    avgTotalInsulin: number
    avgDailyBolus: number
    avgDailyBasal: number
    avgDailyCarbs: number
    bolusPercentage: number
    basalPercentage: number
    insulinCarbRatio?: number | null
    totalBolusCount: number
    totalBasalChanges: number
    avgBolusesPerDay: number
    lastCalculated?: Date | string
    updatedAt?: Date | string
    dataStartDate: Date | string
    dataEndDate: Date | string
    user: UserCreateNestedOneWithoutInsulinStatsInput
  }

  export type InsulinStatsUncheckedCreateInput = {
    id?: string
    userId: string
    totalDays: number
    avgTotalInsulin: number
    avgDailyBolus: number
    avgDailyBasal: number
    avgDailyCarbs: number
    bolusPercentage: number
    basalPercentage: number
    insulinCarbRatio?: number | null
    totalBolusCount: number
    totalBasalChanges: number
    avgBolusesPerDay: number
    lastCalculated?: Date | string
    updatedAt?: Date | string
    dataStartDate: Date | string
    dataEndDate: Date | string
  }

  export type InsulinStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDays?: IntFieldUpdateOperationsInput | number
    avgTotalInsulin?: FloatFieldUpdateOperationsInput | number
    avgDailyBolus?: FloatFieldUpdateOperationsInput | number
    avgDailyBasal?: FloatFieldUpdateOperationsInput | number
    avgDailyCarbs?: FloatFieldUpdateOperationsInput | number
    bolusPercentage?: FloatFieldUpdateOperationsInput | number
    basalPercentage?: FloatFieldUpdateOperationsInput | number
    insulinCarbRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBolusCount?: IntFieldUpdateOperationsInput | number
    totalBasalChanges?: IntFieldUpdateOperationsInput | number
    avgBolusesPerDay?: FloatFieldUpdateOperationsInput | number
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInsulinStatsNestedInput
  }

  export type InsulinStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalDays?: IntFieldUpdateOperationsInput | number
    avgTotalInsulin?: FloatFieldUpdateOperationsInput | number
    avgDailyBolus?: FloatFieldUpdateOperationsInput | number
    avgDailyBasal?: FloatFieldUpdateOperationsInput | number
    avgDailyCarbs?: FloatFieldUpdateOperationsInput | number
    bolusPercentage?: FloatFieldUpdateOperationsInput | number
    basalPercentage?: FloatFieldUpdateOperationsInput | number
    insulinCarbRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBolusCount?: IntFieldUpdateOperationsInput | number
    totalBasalChanges?: IntFieldUpdateOperationsInput | number
    avgBolusesPerDay?: FloatFieldUpdateOperationsInput | number
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsulinStatsCreateManyInput = {
    id?: string
    userId: string
    totalDays: number
    avgTotalInsulin: number
    avgDailyBolus: number
    avgDailyBasal: number
    avgDailyCarbs: number
    bolusPercentage: number
    basalPercentage: number
    insulinCarbRatio?: number | null
    totalBolusCount: number
    totalBasalChanges: number
    avgBolusesPerDay: number
    lastCalculated?: Date | string
    updatedAt?: Date | string
    dataStartDate: Date | string
    dataEndDate: Date | string
  }

  export type InsulinStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDays?: IntFieldUpdateOperationsInput | number
    avgTotalInsulin?: FloatFieldUpdateOperationsInput | number
    avgDailyBolus?: FloatFieldUpdateOperationsInput | number
    avgDailyBasal?: FloatFieldUpdateOperationsInput | number
    avgDailyCarbs?: FloatFieldUpdateOperationsInput | number
    bolusPercentage?: FloatFieldUpdateOperationsInput | number
    basalPercentage?: FloatFieldUpdateOperationsInput | number
    insulinCarbRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBolusCount?: IntFieldUpdateOperationsInput | number
    totalBasalChanges?: IntFieldUpdateOperationsInput | number
    avgBolusesPerDay?: FloatFieldUpdateOperationsInput | number
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsulinStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalDays?: IntFieldUpdateOperationsInput | number
    avgTotalInsulin?: FloatFieldUpdateOperationsInput | number
    avgDailyBolus?: FloatFieldUpdateOperationsInput | number
    avgDailyBasal?: FloatFieldUpdateOperationsInput | number
    avgDailyCarbs?: FloatFieldUpdateOperationsInput | number
    bolusPercentage?: FloatFieldUpdateOperationsInput | number
    basalPercentage?: FloatFieldUpdateOperationsInput | number
    insulinCarbRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBolusCount?: IntFieldUpdateOperationsInput | number
    totalBasalChanges?: IntFieldUpdateOperationsInput | number
    avgBolusesPerDay?: FloatFieldUpdateOperationsInput | number
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BolusRecordCreateInput = {
    id?: string
    timestamp: Date | string
    amount: number
    bolusType: string
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBolusRecordsInput
  }

  export type BolusRecordUncheckedCreateInput = {
    id?: string
    timestamp: Date | string
    amount: number
    bolusType: string
    duration?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BolusRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    bolusType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBolusRecordsNestedInput
  }

  export type BolusRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    bolusType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BolusRecordCreateManyInput = {
    id?: string
    timestamp: Date | string
    amount: number
    bolusType: string
    duration?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BolusRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    bolusType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BolusRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    bolusType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BasalRecordCreateInput = {
    id?: string
    timestamp: Date | string
    rate: number
    duration: number
    changeType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBasalRecordsInput
  }

  export type BasalRecordUncheckedCreateInput = {
    id?: string
    timestamp: Date | string
    rate: number
    duration: number
    changeType?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BasalRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rate?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    changeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBasalRecordsNestedInput
  }

  export type BasalRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rate?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    changeType?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BasalRecordCreateManyInput = {
    id?: string
    timestamp: Date | string
    rate: number
    duration: number
    changeType?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BasalRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rate?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    changeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BasalRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rate?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    changeType?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarbEntryCreateInput = {
    id?: string
    timestamp: Date | string
    carbAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCarbEntriesInput
  }

  export type CarbEntryUncheckedCreateInput = {
    id?: string
    timestamp: Date | string
    carbAmount: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarbEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    carbAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCarbEntriesNestedInput
  }

  export type CarbEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    carbAmount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarbEntryCreateManyInput = {
    id?: string
    timestamp: Date | string
    carbAmount: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarbEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    carbAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarbEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    carbAmount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmEventCreateInput = {
    id?: string
    timestamp: Date | string
    eventType: string
    deviceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAlarmEventsInput
  }

  export type AlarmEventUncheckedCreateInput = {
    id?: string
    timestamp: Date | string
    eventType: string
    deviceId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAlarmEventsNestedInput
  }

  export type AlarmEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmEventCreateManyInput = {
    id?: string
    timestamp: Date | string
    eventType: string
    deviceId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type GlucoseStatsNullableScalarRelationFilter = {
    is?: GlucoseStatsWhereInput | null
    isNot?: GlucoseStatsWhereInput | null
  }

  export type InsulinStatsNullableScalarRelationFilter = {
    is?: InsulinStatsWhereInput | null
    isNot?: InsulinStatsWhereInput | null
  }

  export type BolusRecordListRelationFilter = {
    every?: BolusRecordWhereInput
    some?: BolusRecordWhereInput
    none?: BolusRecordWhereInput
  }

  export type BasalRecordListRelationFilter = {
    every?: BasalRecordWhereInput
    some?: BasalRecordWhereInput
    none?: BasalRecordWhereInput
  }

  export type CarbEntryListRelationFilter = {
    every?: CarbEntryWhereInput
    some?: CarbEntryWhereInput
    none?: CarbEntryWhereInput
  }

  export type AlarmEventListRelationFilter = {
    every?: AlarmEventWhereInput
    some?: AlarmEventWhereInput
    none?: AlarmEventWhereInput
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

  export type BolusRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BasalRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarbEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlarmEventOrderByRelationAggregateInput = {
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

  export type GlucoseStatsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    average?: SortOrder
    standardDeviation?: SortOrder
    highCount?: SortOrder
    lowCount?: SortOrder
    inRangeCount?: SortOrder
    totalReadings?: SortOrder
    highPercentage?: SortOrder
    lowPercentage?: SortOrder
    inRangePercentage?: SortOrder
    minGlucose?: SortOrder
    maxGlucose?: SortOrder
    timeInRange?: SortOrder
    lastCalculated?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlucoseStatsAvgOrderByAggregateInput = {
    average?: SortOrder
    standardDeviation?: SortOrder
    highCount?: SortOrder
    lowCount?: SortOrder
    inRangeCount?: SortOrder
    totalReadings?: SortOrder
    highPercentage?: SortOrder
    lowPercentage?: SortOrder
    inRangePercentage?: SortOrder
    minGlucose?: SortOrder
    maxGlucose?: SortOrder
  }

  export type GlucoseStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    average?: SortOrder
    standardDeviation?: SortOrder
    highCount?: SortOrder
    lowCount?: SortOrder
    inRangeCount?: SortOrder
    totalReadings?: SortOrder
    highPercentage?: SortOrder
    lowPercentage?: SortOrder
    inRangePercentage?: SortOrder
    minGlucose?: SortOrder
    maxGlucose?: SortOrder
    timeInRange?: SortOrder
    lastCalculated?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlucoseStatsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    average?: SortOrder
    standardDeviation?: SortOrder
    highCount?: SortOrder
    lowCount?: SortOrder
    inRangeCount?: SortOrder
    totalReadings?: SortOrder
    highPercentage?: SortOrder
    lowPercentage?: SortOrder
    inRangePercentage?: SortOrder
    minGlucose?: SortOrder
    maxGlucose?: SortOrder
    timeInRange?: SortOrder
    lastCalculated?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlucoseStatsSumOrderByAggregateInput = {
    average?: SortOrder
    standardDeviation?: SortOrder
    highCount?: SortOrder
    lowCount?: SortOrder
    inRangeCount?: SortOrder
    totalReadings?: SortOrder
    highPercentage?: SortOrder
    lowPercentage?: SortOrder
    inRangePercentage?: SortOrder
    minGlucose?: SortOrder
    maxGlucose?: SortOrder
  }

  export type InsulinStatsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalDays?: SortOrder
    avgTotalInsulin?: SortOrder
    avgDailyBolus?: SortOrder
    avgDailyBasal?: SortOrder
    avgDailyCarbs?: SortOrder
    bolusPercentage?: SortOrder
    basalPercentage?: SortOrder
    insulinCarbRatio?: SortOrder
    totalBolusCount?: SortOrder
    totalBasalChanges?: SortOrder
    avgBolusesPerDay?: SortOrder
    lastCalculated?: SortOrder
    updatedAt?: SortOrder
    dataStartDate?: SortOrder
    dataEndDate?: SortOrder
  }

  export type InsulinStatsAvgOrderByAggregateInput = {
    totalDays?: SortOrder
    avgTotalInsulin?: SortOrder
    avgDailyBolus?: SortOrder
    avgDailyBasal?: SortOrder
    avgDailyCarbs?: SortOrder
    bolusPercentage?: SortOrder
    basalPercentage?: SortOrder
    insulinCarbRatio?: SortOrder
    totalBolusCount?: SortOrder
    totalBasalChanges?: SortOrder
    avgBolusesPerDay?: SortOrder
  }

  export type InsulinStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalDays?: SortOrder
    avgTotalInsulin?: SortOrder
    avgDailyBolus?: SortOrder
    avgDailyBasal?: SortOrder
    avgDailyCarbs?: SortOrder
    bolusPercentage?: SortOrder
    basalPercentage?: SortOrder
    insulinCarbRatio?: SortOrder
    totalBolusCount?: SortOrder
    totalBasalChanges?: SortOrder
    avgBolusesPerDay?: SortOrder
    lastCalculated?: SortOrder
    updatedAt?: SortOrder
    dataStartDate?: SortOrder
    dataEndDate?: SortOrder
  }

  export type InsulinStatsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalDays?: SortOrder
    avgTotalInsulin?: SortOrder
    avgDailyBolus?: SortOrder
    avgDailyBasal?: SortOrder
    avgDailyCarbs?: SortOrder
    bolusPercentage?: SortOrder
    basalPercentage?: SortOrder
    insulinCarbRatio?: SortOrder
    totalBolusCount?: SortOrder
    totalBasalChanges?: SortOrder
    avgBolusesPerDay?: SortOrder
    lastCalculated?: SortOrder
    updatedAt?: SortOrder
    dataStartDate?: SortOrder
    dataEndDate?: SortOrder
  }

  export type InsulinStatsSumOrderByAggregateInput = {
    totalDays?: SortOrder
    avgTotalInsulin?: SortOrder
    avgDailyBolus?: SortOrder
    avgDailyBasal?: SortOrder
    avgDailyCarbs?: SortOrder
    bolusPercentage?: SortOrder
    basalPercentage?: SortOrder
    insulinCarbRatio?: SortOrder
    totalBolusCount?: SortOrder
    totalBasalChanges?: SortOrder
    avgBolusesPerDay?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BolusRecordCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    amount?: SortOrder
    bolusType?: SortOrder
    duration?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BolusRecordAvgOrderByAggregateInput = {
    amount?: SortOrder
    duration?: SortOrder
  }

  export type BolusRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    amount?: SortOrder
    bolusType?: SortOrder
    duration?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BolusRecordMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    amount?: SortOrder
    bolusType?: SortOrder
    duration?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BolusRecordSumOrderByAggregateInput = {
    amount?: SortOrder
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BasalRecordCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    rate?: SortOrder
    duration?: SortOrder
    changeType?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BasalRecordAvgOrderByAggregateInput = {
    rate?: SortOrder
    duration?: SortOrder
  }

  export type BasalRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    rate?: SortOrder
    duration?: SortOrder
    changeType?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BasalRecordMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    rate?: SortOrder
    duration?: SortOrder
    changeType?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BasalRecordSumOrderByAggregateInput = {
    rate?: SortOrder
    duration?: SortOrder
  }

  export type CarbEntryCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    carbAmount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarbEntryAvgOrderByAggregateInput = {
    carbAmount?: SortOrder
  }

  export type CarbEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    carbAmount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarbEntryMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    carbAmount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarbEntrySumOrderByAggregateInput = {
    carbAmount?: SortOrder
  }

  export type AlarmEventCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlarmEventMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlarmEventMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type GlucoseStatsCreateNestedOneWithoutUserInput = {
    create?: XOR<GlucoseStatsCreateWithoutUserInput, GlucoseStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: GlucoseStatsCreateOrConnectWithoutUserInput
    connect?: GlucoseStatsWhereUniqueInput
  }

  export type InsulinStatsCreateNestedOneWithoutUserInput = {
    create?: XOR<InsulinStatsCreateWithoutUserInput, InsulinStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: InsulinStatsCreateOrConnectWithoutUserInput
    connect?: InsulinStatsWhereUniqueInput
  }

  export type BolusRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<BolusRecordCreateWithoutUserInput, BolusRecordUncheckedCreateWithoutUserInput> | BolusRecordCreateWithoutUserInput[] | BolusRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BolusRecordCreateOrConnectWithoutUserInput | BolusRecordCreateOrConnectWithoutUserInput[]
    createMany?: BolusRecordCreateManyUserInputEnvelope
    connect?: BolusRecordWhereUniqueInput | BolusRecordWhereUniqueInput[]
  }

  export type BasalRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<BasalRecordCreateWithoutUserInput, BasalRecordUncheckedCreateWithoutUserInput> | BasalRecordCreateWithoutUserInput[] | BasalRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BasalRecordCreateOrConnectWithoutUserInput | BasalRecordCreateOrConnectWithoutUserInput[]
    createMany?: BasalRecordCreateManyUserInputEnvelope
    connect?: BasalRecordWhereUniqueInput | BasalRecordWhereUniqueInput[]
  }

  export type CarbEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<CarbEntryCreateWithoutUserInput, CarbEntryUncheckedCreateWithoutUserInput> | CarbEntryCreateWithoutUserInput[] | CarbEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarbEntryCreateOrConnectWithoutUserInput | CarbEntryCreateOrConnectWithoutUserInput[]
    createMany?: CarbEntryCreateManyUserInputEnvelope
    connect?: CarbEntryWhereUniqueInput | CarbEntryWhereUniqueInput[]
  }

  export type AlarmEventCreateNestedManyWithoutUserInput = {
    create?: XOR<AlarmEventCreateWithoutUserInput, AlarmEventUncheckedCreateWithoutUserInput> | AlarmEventCreateWithoutUserInput[] | AlarmEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlarmEventCreateOrConnectWithoutUserInput | AlarmEventCreateOrConnectWithoutUserInput[]
    createMany?: AlarmEventCreateManyUserInputEnvelope
    connect?: AlarmEventWhereUniqueInput | AlarmEventWhereUniqueInput[]
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

  export type GlucoseStatsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<GlucoseStatsCreateWithoutUserInput, GlucoseStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: GlucoseStatsCreateOrConnectWithoutUserInput
    connect?: GlucoseStatsWhereUniqueInput
  }

  export type InsulinStatsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InsulinStatsCreateWithoutUserInput, InsulinStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: InsulinStatsCreateOrConnectWithoutUserInput
    connect?: InsulinStatsWhereUniqueInput
  }

  export type BolusRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BolusRecordCreateWithoutUserInput, BolusRecordUncheckedCreateWithoutUserInput> | BolusRecordCreateWithoutUserInput[] | BolusRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BolusRecordCreateOrConnectWithoutUserInput | BolusRecordCreateOrConnectWithoutUserInput[]
    createMany?: BolusRecordCreateManyUserInputEnvelope
    connect?: BolusRecordWhereUniqueInput | BolusRecordWhereUniqueInput[]
  }

  export type BasalRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BasalRecordCreateWithoutUserInput, BasalRecordUncheckedCreateWithoutUserInput> | BasalRecordCreateWithoutUserInput[] | BasalRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BasalRecordCreateOrConnectWithoutUserInput | BasalRecordCreateOrConnectWithoutUserInput[]
    createMany?: BasalRecordCreateManyUserInputEnvelope
    connect?: BasalRecordWhereUniqueInput | BasalRecordWhereUniqueInput[]
  }

  export type CarbEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CarbEntryCreateWithoutUserInput, CarbEntryUncheckedCreateWithoutUserInput> | CarbEntryCreateWithoutUserInput[] | CarbEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarbEntryCreateOrConnectWithoutUserInput | CarbEntryCreateOrConnectWithoutUserInput[]
    createMany?: CarbEntryCreateManyUserInputEnvelope
    connect?: CarbEntryWhereUniqueInput | CarbEntryWhereUniqueInput[]
  }

  export type AlarmEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlarmEventCreateWithoutUserInput, AlarmEventUncheckedCreateWithoutUserInput> | AlarmEventCreateWithoutUserInput[] | AlarmEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlarmEventCreateOrConnectWithoutUserInput | AlarmEventCreateOrConnectWithoutUserInput[]
    createMany?: AlarmEventCreateManyUserInputEnvelope
    connect?: AlarmEventWhereUniqueInput | AlarmEventWhereUniqueInput[]
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

  export type GlucoseStatsUpdateOneWithoutUserNestedInput = {
    create?: XOR<GlucoseStatsCreateWithoutUserInput, GlucoseStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: GlucoseStatsCreateOrConnectWithoutUserInput
    upsert?: GlucoseStatsUpsertWithoutUserInput
    disconnect?: GlucoseStatsWhereInput | boolean
    delete?: GlucoseStatsWhereInput | boolean
    connect?: GlucoseStatsWhereUniqueInput
    update?: XOR<XOR<GlucoseStatsUpdateToOneWithWhereWithoutUserInput, GlucoseStatsUpdateWithoutUserInput>, GlucoseStatsUncheckedUpdateWithoutUserInput>
  }

  export type InsulinStatsUpdateOneWithoutUserNestedInput = {
    create?: XOR<InsulinStatsCreateWithoutUserInput, InsulinStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: InsulinStatsCreateOrConnectWithoutUserInput
    upsert?: InsulinStatsUpsertWithoutUserInput
    disconnect?: InsulinStatsWhereInput | boolean
    delete?: InsulinStatsWhereInput | boolean
    connect?: InsulinStatsWhereUniqueInput
    update?: XOR<XOR<InsulinStatsUpdateToOneWithWhereWithoutUserInput, InsulinStatsUpdateWithoutUserInput>, InsulinStatsUncheckedUpdateWithoutUserInput>
  }

  export type BolusRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<BolusRecordCreateWithoutUserInput, BolusRecordUncheckedCreateWithoutUserInput> | BolusRecordCreateWithoutUserInput[] | BolusRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BolusRecordCreateOrConnectWithoutUserInput | BolusRecordCreateOrConnectWithoutUserInput[]
    upsert?: BolusRecordUpsertWithWhereUniqueWithoutUserInput | BolusRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BolusRecordCreateManyUserInputEnvelope
    set?: BolusRecordWhereUniqueInput | BolusRecordWhereUniqueInput[]
    disconnect?: BolusRecordWhereUniqueInput | BolusRecordWhereUniqueInput[]
    delete?: BolusRecordWhereUniqueInput | BolusRecordWhereUniqueInput[]
    connect?: BolusRecordWhereUniqueInput | BolusRecordWhereUniqueInput[]
    update?: BolusRecordUpdateWithWhereUniqueWithoutUserInput | BolusRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BolusRecordUpdateManyWithWhereWithoutUserInput | BolusRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BolusRecordScalarWhereInput | BolusRecordScalarWhereInput[]
  }

  export type BasalRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<BasalRecordCreateWithoutUserInput, BasalRecordUncheckedCreateWithoutUserInput> | BasalRecordCreateWithoutUserInput[] | BasalRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BasalRecordCreateOrConnectWithoutUserInput | BasalRecordCreateOrConnectWithoutUserInput[]
    upsert?: BasalRecordUpsertWithWhereUniqueWithoutUserInput | BasalRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BasalRecordCreateManyUserInputEnvelope
    set?: BasalRecordWhereUniqueInput | BasalRecordWhereUniqueInput[]
    disconnect?: BasalRecordWhereUniqueInput | BasalRecordWhereUniqueInput[]
    delete?: BasalRecordWhereUniqueInput | BasalRecordWhereUniqueInput[]
    connect?: BasalRecordWhereUniqueInput | BasalRecordWhereUniqueInput[]
    update?: BasalRecordUpdateWithWhereUniqueWithoutUserInput | BasalRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BasalRecordUpdateManyWithWhereWithoutUserInput | BasalRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BasalRecordScalarWhereInput | BasalRecordScalarWhereInput[]
  }

  export type CarbEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CarbEntryCreateWithoutUserInput, CarbEntryUncheckedCreateWithoutUserInput> | CarbEntryCreateWithoutUserInput[] | CarbEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarbEntryCreateOrConnectWithoutUserInput | CarbEntryCreateOrConnectWithoutUserInput[]
    upsert?: CarbEntryUpsertWithWhereUniqueWithoutUserInput | CarbEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CarbEntryCreateManyUserInputEnvelope
    set?: CarbEntryWhereUniqueInput | CarbEntryWhereUniqueInput[]
    disconnect?: CarbEntryWhereUniqueInput | CarbEntryWhereUniqueInput[]
    delete?: CarbEntryWhereUniqueInput | CarbEntryWhereUniqueInput[]
    connect?: CarbEntryWhereUniqueInput | CarbEntryWhereUniqueInput[]
    update?: CarbEntryUpdateWithWhereUniqueWithoutUserInput | CarbEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CarbEntryUpdateManyWithWhereWithoutUserInput | CarbEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CarbEntryScalarWhereInput | CarbEntryScalarWhereInput[]
  }

  export type AlarmEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlarmEventCreateWithoutUserInput, AlarmEventUncheckedCreateWithoutUserInput> | AlarmEventCreateWithoutUserInput[] | AlarmEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlarmEventCreateOrConnectWithoutUserInput | AlarmEventCreateOrConnectWithoutUserInput[]
    upsert?: AlarmEventUpsertWithWhereUniqueWithoutUserInput | AlarmEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlarmEventCreateManyUserInputEnvelope
    set?: AlarmEventWhereUniqueInput | AlarmEventWhereUniqueInput[]
    disconnect?: AlarmEventWhereUniqueInput | AlarmEventWhereUniqueInput[]
    delete?: AlarmEventWhereUniqueInput | AlarmEventWhereUniqueInput[]
    connect?: AlarmEventWhereUniqueInput | AlarmEventWhereUniqueInput[]
    update?: AlarmEventUpdateWithWhereUniqueWithoutUserInput | AlarmEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlarmEventUpdateManyWithWhereWithoutUserInput | AlarmEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlarmEventScalarWhereInput | AlarmEventScalarWhereInput[]
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

  export type GlucoseStatsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<GlucoseStatsCreateWithoutUserInput, GlucoseStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: GlucoseStatsCreateOrConnectWithoutUserInput
    upsert?: GlucoseStatsUpsertWithoutUserInput
    disconnect?: GlucoseStatsWhereInput | boolean
    delete?: GlucoseStatsWhereInput | boolean
    connect?: GlucoseStatsWhereUniqueInput
    update?: XOR<XOR<GlucoseStatsUpdateToOneWithWhereWithoutUserInput, GlucoseStatsUpdateWithoutUserInput>, GlucoseStatsUncheckedUpdateWithoutUserInput>
  }

  export type InsulinStatsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InsulinStatsCreateWithoutUserInput, InsulinStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: InsulinStatsCreateOrConnectWithoutUserInput
    upsert?: InsulinStatsUpsertWithoutUserInput
    disconnect?: InsulinStatsWhereInput | boolean
    delete?: InsulinStatsWhereInput | boolean
    connect?: InsulinStatsWhereUniqueInput
    update?: XOR<XOR<InsulinStatsUpdateToOneWithWhereWithoutUserInput, InsulinStatsUpdateWithoutUserInput>, InsulinStatsUncheckedUpdateWithoutUserInput>
  }

  export type BolusRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BolusRecordCreateWithoutUserInput, BolusRecordUncheckedCreateWithoutUserInput> | BolusRecordCreateWithoutUserInput[] | BolusRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BolusRecordCreateOrConnectWithoutUserInput | BolusRecordCreateOrConnectWithoutUserInput[]
    upsert?: BolusRecordUpsertWithWhereUniqueWithoutUserInput | BolusRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BolusRecordCreateManyUserInputEnvelope
    set?: BolusRecordWhereUniqueInput | BolusRecordWhereUniqueInput[]
    disconnect?: BolusRecordWhereUniqueInput | BolusRecordWhereUniqueInput[]
    delete?: BolusRecordWhereUniqueInput | BolusRecordWhereUniqueInput[]
    connect?: BolusRecordWhereUniqueInput | BolusRecordWhereUniqueInput[]
    update?: BolusRecordUpdateWithWhereUniqueWithoutUserInput | BolusRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BolusRecordUpdateManyWithWhereWithoutUserInput | BolusRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BolusRecordScalarWhereInput | BolusRecordScalarWhereInput[]
  }

  export type BasalRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BasalRecordCreateWithoutUserInput, BasalRecordUncheckedCreateWithoutUserInput> | BasalRecordCreateWithoutUserInput[] | BasalRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BasalRecordCreateOrConnectWithoutUserInput | BasalRecordCreateOrConnectWithoutUserInput[]
    upsert?: BasalRecordUpsertWithWhereUniqueWithoutUserInput | BasalRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BasalRecordCreateManyUserInputEnvelope
    set?: BasalRecordWhereUniqueInput | BasalRecordWhereUniqueInput[]
    disconnect?: BasalRecordWhereUniqueInput | BasalRecordWhereUniqueInput[]
    delete?: BasalRecordWhereUniqueInput | BasalRecordWhereUniqueInput[]
    connect?: BasalRecordWhereUniqueInput | BasalRecordWhereUniqueInput[]
    update?: BasalRecordUpdateWithWhereUniqueWithoutUserInput | BasalRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BasalRecordUpdateManyWithWhereWithoutUserInput | BasalRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BasalRecordScalarWhereInput | BasalRecordScalarWhereInput[]
  }

  export type CarbEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CarbEntryCreateWithoutUserInput, CarbEntryUncheckedCreateWithoutUserInput> | CarbEntryCreateWithoutUserInput[] | CarbEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarbEntryCreateOrConnectWithoutUserInput | CarbEntryCreateOrConnectWithoutUserInput[]
    upsert?: CarbEntryUpsertWithWhereUniqueWithoutUserInput | CarbEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CarbEntryCreateManyUserInputEnvelope
    set?: CarbEntryWhereUniqueInput | CarbEntryWhereUniqueInput[]
    disconnect?: CarbEntryWhereUniqueInput | CarbEntryWhereUniqueInput[]
    delete?: CarbEntryWhereUniqueInput | CarbEntryWhereUniqueInput[]
    connect?: CarbEntryWhereUniqueInput | CarbEntryWhereUniqueInput[]
    update?: CarbEntryUpdateWithWhereUniqueWithoutUserInput | CarbEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CarbEntryUpdateManyWithWhereWithoutUserInput | CarbEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CarbEntryScalarWhereInput | CarbEntryScalarWhereInput[]
  }

  export type AlarmEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlarmEventCreateWithoutUserInput, AlarmEventUncheckedCreateWithoutUserInput> | AlarmEventCreateWithoutUserInput[] | AlarmEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlarmEventCreateOrConnectWithoutUserInput | AlarmEventCreateOrConnectWithoutUserInput[]
    upsert?: AlarmEventUpsertWithWhereUniqueWithoutUserInput | AlarmEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlarmEventCreateManyUserInputEnvelope
    set?: AlarmEventWhereUniqueInput | AlarmEventWhereUniqueInput[]
    disconnect?: AlarmEventWhereUniqueInput | AlarmEventWhereUniqueInput[]
    delete?: AlarmEventWhereUniqueInput | AlarmEventWhereUniqueInput[]
    connect?: AlarmEventWhereUniqueInput | AlarmEventWhereUniqueInput[]
    update?: AlarmEventUpdateWithWhereUniqueWithoutUserInput | AlarmEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlarmEventUpdateManyWithWhereWithoutUserInput | AlarmEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlarmEventScalarWhereInput | AlarmEventScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutGlucoseStatsInput = {
    create?: XOR<UserCreateWithoutGlucoseStatsInput, UserUncheckedCreateWithoutGlucoseStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGlucoseStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGlucoseStatsNestedInput = {
    create?: XOR<UserCreateWithoutGlucoseStatsInput, UserUncheckedCreateWithoutGlucoseStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGlucoseStatsInput
    upsert?: UserUpsertWithoutGlucoseStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGlucoseStatsInput, UserUpdateWithoutGlucoseStatsInput>, UserUncheckedUpdateWithoutGlucoseStatsInput>
  }

  export type UserCreateNestedOneWithoutInsulinStatsInput = {
    create?: XOR<UserCreateWithoutInsulinStatsInput, UserUncheckedCreateWithoutInsulinStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInsulinStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInsulinStatsNestedInput = {
    create?: XOR<UserCreateWithoutInsulinStatsInput, UserUncheckedCreateWithoutInsulinStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInsulinStatsInput
    upsert?: UserUpsertWithoutInsulinStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInsulinStatsInput, UserUpdateWithoutInsulinStatsInput>, UserUncheckedUpdateWithoutInsulinStatsInput>
  }

  export type UserCreateNestedOneWithoutBolusRecordsInput = {
    create?: XOR<UserCreateWithoutBolusRecordsInput, UserUncheckedCreateWithoutBolusRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBolusRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBolusRecordsNestedInput = {
    create?: XOR<UserCreateWithoutBolusRecordsInput, UserUncheckedCreateWithoutBolusRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBolusRecordsInput
    upsert?: UserUpsertWithoutBolusRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBolusRecordsInput, UserUpdateWithoutBolusRecordsInput>, UserUncheckedUpdateWithoutBolusRecordsInput>
  }

  export type UserCreateNestedOneWithoutBasalRecordsInput = {
    create?: XOR<UserCreateWithoutBasalRecordsInput, UserUncheckedCreateWithoutBasalRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBasalRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBasalRecordsNestedInput = {
    create?: XOR<UserCreateWithoutBasalRecordsInput, UserUncheckedCreateWithoutBasalRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBasalRecordsInput
    upsert?: UserUpsertWithoutBasalRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBasalRecordsInput, UserUpdateWithoutBasalRecordsInput>, UserUncheckedUpdateWithoutBasalRecordsInput>
  }

  export type UserCreateNestedOneWithoutCarbEntriesInput = {
    create?: XOR<UserCreateWithoutCarbEntriesInput, UserUncheckedCreateWithoutCarbEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarbEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCarbEntriesNestedInput = {
    create?: XOR<UserCreateWithoutCarbEntriesInput, UserUncheckedCreateWithoutCarbEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarbEntriesInput
    upsert?: UserUpsertWithoutCarbEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarbEntriesInput, UserUpdateWithoutCarbEntriesInput>, UserUncheckedUpdateWithoutCarbEntriesInput>
  }

  export type UserCreateNestedOneWithoutAlarmEventsInput = {
    create?: XOR<UserCreateWithoutAlarmEventsInput, UserUncheckedCreateWithoutAlarmEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlarmEventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAlarmEventsNestedInput = {
    create?: XOR<UserCreateWithoutAlarmEventsInput, UserUncheckedCreateWithoutAlarmEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlarmEventsInput
    upsert?: UserUpsertWithoutAlarmEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlarmEventsInput, UserUpdateWithoutAlarmEventsInput>, UserUncheckedUpdateWithoutAlarmEventsInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type GlucoseStatsCreateWithoutUserInput = {
    id?: string
    average: number
    standardDeviation: number
    highCount: number
    lowCount: number
    inRangeCount: number
    totalReadings: number
    highPercentage: number
    lowPercentage: number
    inRangePercentage: number
    minGlucose: number
    maxGlucose: number
    timeInRange: string
    lastCalculated?: Date | string
    updatedAt?: Date | string
  }

  export type GlucoseStatsUncheckedCreateWithoutUserInput = {
    id?: string
    average: number
    standardDeviation: number
    highCount: number
    lowCount: number
    inRangeCount: number
    totalReadings: number
    highPercentage: number
    lowPercentage: number
    inRangePercentage: number
    minGlucose: number
    maxGlucose: number
    timeInRange: string
    lastCalculated?: Date | string
    updatedAt?: Date | string
  }

  export type GlucoseStatsCreateOrConnectWithoutUserInput = {
    where: GlucoseStatsWhereUniqueInput
    create: XOR<GlucoseStatsCreateWithoutUserInput, GlucoseStatsUncheckedCreateWithoutUserInput>
  }

  export type InsulinStatsCreateWithoutUserInput = {
    id?: string
    totalDays: number
    avgTotalInsulin: number
    avgDailyBolus: number
    avgDailyBasal: number
    avgDailyCarbs: number
    bolusPercentage: number
    basalPercentage: number
    insulinCarbRatio?: number | null
    totalBolusCount: number
    totalBasalChanges: number
    avgBolusesPerDay: number
    lastCalculated?: Date | string
    updatedAt?: Date | string
    dataStartDate: Date | string
    dataEndDate: Date | string
  }

  export type InsulinStatsUncheckedCreateWithoutUserInput = {
    id?: string
    totalDays: number
    avgTotalInsulin: number
    avgDailyBolus: number
    avgDailyBasal: number
    avgDailyCarbs: number
    bolusPercentage: number
    basalPercentage: number
    insulinCarbRatio?: number | null
    totalBolusCount: number
    totalBasalChanges: number
    avgBolusesPerDay: number
    lastCalculated?: Date | string
    updatedAt?: Date | string
    dataStartDate: Date | string
    dataEndDate: Date | string
  }

  export type InsulinStatsCreateOrConnectWithoutUserInput = {
    where: InsulinStatsWhereUniqueInput
    create: XOR<InsulinStatsCreateWithoutUserInput, InsulinStatsUncheckedCreateWithoutUserInput>
  }

  export type BolusRecordCreateWithoutUserInput = {
    id?: string
    timestamp: Date | string
    amount: number
    bolusType: string
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BolusRecordUncheckedCreateWithoutUserInput = {
    id?: string
    timestamp: Date | string
    amount: number
    bolusType: string
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BolusRecordCreateOrConnectWithoutUserInput = {
    where: BolusRecordWhereUniqueInput
    create: XOR<BolusRecordCreateWithoutUserInput, BolusRecordUncheckedCreateWithoutUserInput>
  }

  export type BolusRecordCreateManyUserInputEnvelope = {
    data: BolusRecordCreateManyUserInput | BolusRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BasalRecordCreateWithoutUserInput = {
    id?: string
    timestamp: Date | string
    rate: number
    duration: number
    changeType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BasalRecordUncheckedCreateWithoutUserInput = {
    id?: string
    timestamp: Date | string
    rate: number
    duration: number
    changeType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BasalRecordCreateOrConnectWithoutUserInput = {
    where: BasalRecordWhereUniqueInput
    create: XOR<BasalRecordCreateWithoutUserInput, BasalRecordUncheckedCreateWithoutUserInput>
  }

  export type BasalRecordCreateManyUserInputEnvelope = {
    data: BasalRecordCreateManyUserInput | BasalRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CarbEntryCreateWithoutUserInput = {
    id?: string
    timestamp: Date | string
    carbAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarbEntryUncheckedCreateWithoutUserInput = {
    id?: string
    timestamp: Date | string
    carbAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarbEntryCreateOrConnectWithoutUserInput = {
    where: CarbEntryWhereUniqueInput
    create: XOR<CarbEntryCreateWithoutUserInput, CarbEntryUncheckedCreateWithoutUserInput>
  }

  export type CarbEntryCreateManyUserInputEnvelope = {
    data: CarbEntryCreateManyUserInput | CarbEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AlarmEventCreateWithoutUserInput = {
    id?: string
    timestamp: Date | string
    eventType: string
    deviceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmEventUncheckedCreateWithoutUserInput = {
    id?: string
    timestamp: Date | string
    eventType: string
    deviceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmEventCreateOrConnectWithoutUserInput = {
    where: AlarmEventWhereUniqueInput
    create: XOR<AlarmEventCreateWithoutUserInput, AlarmEventUncheckedCreateWithoutUserInput>
  }

  export type AlarmEventCreateManyUserInputEnvelope = {
    data: AlarmEventCreateManyUserInput | AlarmEventCreateManyUserInput[]
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

  export type GlucoseStatsUpsertWithoutUserInput = {
    update: XOR<GlucoseStatsUpdateWithoutUserInput, GlucoseStatsUncheckedUpdateWithoutUserInput>
    create: XOR<GlucoseStatsCreateWithoutUserInput, GlucoseStatsUncheckedCreateWithoutUserInput>
    where?: GlucoseStatsWhereInput
  }

  export type GlucoseStatsUpdateToOneWithWhereWithoutUserInput = {
    where?: GlucoseStatsWhereInput
    data: XOR<GlucoseStatsUpdateWithoutUserInput, GlucoseStatsUncheckedUpdateWithoutUserInput>
  }

  export type GlucoseStatsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    standardDeviation?: FloatFieldUpdateOperationsInput | number
    highCount?: IntFieldUpdateOperationsInput | number
    lowCount?: IntFieldUpdateOperationsInput | number
    inRangeCount?: IntFieldUpdateOperationsInput | number
    totalReadings?: IntFieldUpdateOperationsInput | number
    highPercentage?: FloatFieldUpdateOperationsInput | number
    lowPercentage?: FloatFieldUpdateOperationsInput | number
    inRangePercentage?: FloatFieldUpdateOperationsInput | number
    minGlucose?: FloatFieldUpdateOperationsInput | number
    maxGlucose?: FloatFieldUpdateOperationsInput | number
    timeInRange?: StringFieldUpdateOperationsInput | string
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseStatsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    average?: FloatFieldUpdateOperationsInput | number
    standardDeviation?: FloatFieldUpdateOperationsInput | number
    highCount?: IntFieldUpdateOperationsInput | number
    lowCount?: IntFieldUpdateOperationsInput | number
    inRangeCount?: IntFieldUpdateOperationsInput | number
    totalReadings?: IntFieldUpdateOperationsInput | number
    highPercentage?: FloatFieldUpdateOperationsInput | number
    lowPercentage?: FloatFieldUpdateOperationsInput | number
    inRangePercentage?: FloatFieldUpdateOperationsInput | number
    minGlucose?: FloatFieldUpdateOperationsInput | number
    maxGlucose?: FloatFieldUpdateOperationsInput | number
    timeInRange?: StringFieldUpdateOperationsInput | string
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsulinStatsUpsertWithoutUserInput = {
    update: XOR<InsulinStatsUpdateWithoutUserInput, InsulinStatsUncheckedUpdateWithoutUserInput>
    create: XOR<InsulinStatsCreateWithoutUserInput, InsulinStatsUncheckedCreateWithoutUserInput>
    where?: InsulinStatsWhereInput
  }

  export type InsulinStatsUpdateToOneWithWhereWithoutUserInput = {
    where?: InsulinStatsWhereInput
    data: XOR<InsulinStatsUpdateWithoutUserInput, InsulinStatsUncheckedUpdateWithoutUserInput>
  }

  export type InsulinStatsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDays?: IntFieldUpdateOperationsInput | number
    avgTotalInsulin?: FloatFieldUpdateOperationsInput | number
    avgDailyBolus?: FloatFieldUpdateOperationsInput | number
    avgDailyBasal?: FloatFieldUpdateOperationsInput | number
    avgDailyCarbs?: FloatFieldUpdateOperationsInput | number
    bolusPercentage?: FloatFieldUpdateOperationsInput | number
    basalPercentage?: FloatFieldUpdateOperationsInput | number
    insulinCarbRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBolusCount?: IntFieldUpdateOperationsInput | number
    totalBasalChanges?: IntFieldUpdateOperationsInput | number
    avgBolusesPerDay?: FloatFieldUpdateOperationsInput | number
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsulinStatsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDays?: IntFieldUpdateOperationsInput | number
    avgTotalInsulin?: FloatFieldUpdateOperationsInput | number
    avgDailyBolus?: FloatFieldUpdateOperationsInput | number
    avgDailyBasal?: FloatFieldUpdateOperationsInput | number
    avgDailyCarbs?: FloatFieldUpdateOperationsInput | number
    bolusPercentage?: FloatFieldUpdateOperationsInput | number
    basalPercentage?: FloatFieldUpdateOperationsInput | number
    insulinCarbRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBolusCount?: IntFieldUpdateOperationsInput | number
    totalBasalChanges?: IntFieldUpdateOperationsInput | number
    avgBolusesPerDay?: FloatFieldUpdateOperationsInput | number
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BolusRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: BolusRecordWhereUniqueInput
    update: XOR<BolusRecordUpdateWithoutUserInput, BolusRecordUncheckedUpdateWithoutUserInput>
    create: XOR<BolusRecordCreateWithoutUserInput, BolusRecordUncheckedCreateWithoutUserInput>
  }

  export type BolusRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: BolusRecordWhereUniqueInput
    data: XOR<BolusRecordUpdateWithoutUserInput, BolusRecordUncheckedUpdateWithoutUserInput>
  }

  export type BolusRecordUpdateManyWithWhereWithoutUserInput = {
    where: BolusRecordScalarWhereInput
    data: XOR<BolusRecordUpdateManyMutationInput, BolusRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type BolusRecordScalarWhereInput = {
    AND?: BolusRecordScalarWhereInput | BolusRecordScalarWhereInput[]
    OR?: BolusRecordScalarWhereInput[]
    NOT?: BolusRecordScalarWhereInput | BolusRecordScalarWhereInput[]
    id?: StringFilter<"BolusRecord"> | string
    timestamp?: DateTimeFilter<"BolusRecord"> | Date | string
    amount?: FloatFilter<"BolusRecord"> | number
    bolusType?: StringFilter<"BolusRecord"> | string
    duration?: IntNullableFilter<"BolusRecord"> | number | null
    userId?: StringFilter<"BolusRecord"> | string
    createdAt?: DateTimeFilter<"BolusRecord"> | Date | string
    updatedAt?: DateTimeFilter<"BolusRecord"> | Date | string
  }

  export type BasalRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: BasalRecordWhereUniqueInput
    update: XOR<BasalRecordUpdateWithoutUserInput, BasalRecordUncheckedUpdateWithoutUserInput>
    create: XOR<BasalRecordCreateWithoutUserInput, BasalRecordUncheckedCreateWithoutUserInput>
  }

  export type BasalRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: BasalRecordWhereUniqueInput
    data: XOR<BasalRecordUpdateWithoutUserInput, BasalRecordUncheckedUpdateWithoutUserInput>
  }

  export type BasalRecordUpdateManyWithWhereWithoutUserInput = {
    where: BasalRecordScalarWhereInput
    data: XOR<BasalRecordUpdateManyMutationInput, BasalRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type BasalRecordScalarWhereInput = {
    AND?: BasalRecordScalarWhereInput | BasalRecordScalarWhereInput[]
    OR?: BasalRecordScalarWhereInput[]
    NOT?: BasalRecordScalarWhereInput | BasalRecordScalarWhereInput[]
    id?: StringFilter<"BasalRecord"> | string
    timestamp?: DateTimeFilter<"BasalRecord"> | Date | string
    rate?: FloatFilter<"BasalRecord"> | number
    duration?: IntFilter<"BasalRecord"> | number
    changeType?: StringNullableFilter<"BasalRecord"> | string | null
    userId?: StringFilter<"BasalRecord"> | string
    createdAt?: DateTimeFilter<"BasalRecord"> | Date | string
    updatedAt?: DateTimeFilter<"BasalRecord"> | Date | string
  }

  export type CarbEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: CarbEntryWhereUniqueInput
    update: XOR<CarbEntryUpdateWithoutUserInput, CarbEntryUncheckedUpdateWithoutUserInput>
    create: XOR<CarbEntryCreateWithoutUserInput, CarbEntryUncheckedCreateWithoutUserInput>
  }

  export type CarbEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: CarbEntryWhereUniqueInput
    data: XOR<CarbEntryUpdateWithoutUserInput, CarbEntryUncheckedUpdateWithoutUserInput>
  }

  export type CarbEntryUpdateManyWithWhereWithoutUserInput = {
    where: CarbEntryScalarWhereInput
    data: XOR<CarbEntryUpdateManyMutationInput, CarbEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type CarbEntryScalarWhereInput = {
    AND?: CarbEntryScalarWhereInput | CarbEntryScalarWhereInput[]
    OR?: CarbEntryScalarWhereInput[]
    NOT?: CarbEntryScalarWhereInput | CarbEntryScalarWhereInput[]
    id?: StringFilter<"CarbEntry"> | string
    timestamp?: DateTimeFilter<"CarbEntry"> | Date | string
    carbAmount?: FloatFilter<"CarbEntry"> | number
    userId?: StringFilter<"CarbEntry"> | string
    createdAt?: DateTimeFilter<"CarbEntry"> | Date | string
    updatedAt?: DateTimeFilter<"CarbEntry"> | Date | string
  }

  export type AlarmEventUpsertWithWhereUniqueWithoutUserInput = {
    where: AlarmEventWhereUniqueInput
    update: XOR<AlarmEventUpdateWithoutUserInput, AlarmEventUncheckedUpdateWithoutUserInput>
    create: XOR<AlarmEventCreateWithoutUserInput, AlarmEventUncheckedCreateWithoutUserInput>
  }

  export type AlarmEventUpdateWithWhereUniqueWithoutUserInput = {
    where: AlarmEventWhereUniqueInput
    data: XOR<AlarmEventUpdateWithoutUserInput, AlarmEventUncheckedUpdateWithoutUserInput>
  }

  export type AlarmEventUpdateManyWithWhereWithoutUserInput = {
    where: AlarmEventScalarWhereInput
    data: XOR<AlarmEventUpdateManyMutationInput, AlarmEventUncheckedUpdateManyWithoutUserInput>
  }

  export type AlarmEventScalarWhereInput = {
    AND?: AlarmEventScalarWhereInput | AlarmEventScalarWhereInput[]
    OR?: AlarmEventScalarWhereInput[]
    NOT?: AlarmEventScalarWhereInput | AlarmEventScalarWhereInput[]
    id?: StringFilter<"AlarmEvent"> | string
    timestamp?: DateTimeFilter<"AlarmEvent"> | Date | string
    eventType?: StringFilter<"AlarmEvent"> | string
    deviceId?: StringNullableFilter<"AlarmEvent"> | string | null
    userId?: StringFilter<"AlarmEvent"> | string
    createdAt?: DateTimeFilter<"AlarmEvent"> | Date | string
    updatedAt?: DateTimeFilter<"AlarmEvent"> | Date | string
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
    glucoseStats?: GlucoseStatsCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventCreateNestedManyWithoutUserInput
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
    glucoseStats?: GlucoseStatsUncheckedCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsUncheckedCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordUncheckedCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordUncheckedCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryUncheckedCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventUncheckedCreateNestedManyWithoutUserInput
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
    glucoseStats?: GlucoseStatsUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUpdateManyWithoutUserNestedInput
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
    glucoseStats?: GlucoseStatsUncheckedUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUncheckedUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUncheckedUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUncheckedUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUncheckedUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUncheckedUpdateManyWithoutUserNestedInput
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
    glucoseStats?: GlucoseStatsCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventCreateNestedManyWithoutUserInput
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
    glucoseStats?: GlucoseStatsUncheckedCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsUncheckedCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordUncheckedCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordUncheckedCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryUncheckedCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventUncheckedCreateNestedManyWithoutUserInput
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
    glucoseStats?: GlucoseStatsUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUpdateManyWithoutUserNestedInput
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
    glucoseStats?: GlucoseStatsUncheckedUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUncheckedUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUncheckedUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUncheckedUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUncheckedUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGlucoseStatsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadCreateNestedManyWithoutUserInput
    insulinStats?: InsulinStatsCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGlucoseStatsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadUncheckedCreateNestedManyWithoutUserInput
    insulinStats?: InsulinStatsUncheckedCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordUncheckedCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordUncheckedCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryUncheckedCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGlucoseStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGlucoseStatsInput, UserUncheckedCreateWithoutGlucoseStatsInput>
  }

  export type UserUpsertWithoutGlucoseStatsInput = {
    update: XOR<UserUpdateWithoutGlucoseStatsInput, UserUncheckedUpdateWithoutGlucoseStatsInput>
    create: XOR<UserCreateWithoutGlucoseStatsInput, UserUncheckedCreateWithoutGlucoseStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGlucoseStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGlucoseStatsInput, UserUncheckedUpdateWithoutGlucoseStatsInput>
  }

  export type UserUpdateWithoutGlucoseStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUpdateManyWithoutUserNestedInput
    insulinStats?: InsulinStatsUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGlucoseStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUncheckedUpdateManyWithoutUserNestedInput
    insulinStats?: InsulinStatsUncheckedUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUncheckedUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUncheckedUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUncheckedUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInsulinStatsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadCreateNestedManyWithoutUserInput
    glucoseStats?: GlucoseStatsCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInsulinStatsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadUncheckedCreateNestedManyWithoutUserInput
    glucoseStats?: GlucoseStatsUncheckedCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordUncheckedCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordUncheckedCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryUncheckedCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInsulinStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInsulinStatsInput, UserUncheckedCreateWithoutInsulinStatsInput>
  }

  export type UserUpsertWithoutInsulinStatsInput = {
    update: XOR<UserUpdateWithoutInsulinStatsInput, UserUncheckedUpdateWithoutInsulinStatsInput>
    create: XOR<UserCreateWithoutInsulinStatsInput, UserUncheckedCreateWithoutInsulinStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInsulinStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInsulinStatsInput, UserUncheckedUpdateWithoutInsulinStatsInput>
  }

  export type UserUpdateWithoutInsulinStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUpdateManyWithoutUserNestedInput
    glucoseStats?: GlucoseStatsUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInsulinStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUncheckedUpdateManyWithoutUserNestedInput
    glucoseStats?: GlucoseStatsUncheckedUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUncheckedUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUncheckedUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUncheckedUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBolusRecordsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadCreateNestedManyWithoutUserInput
    glucoseStats?: GlucoseStatsCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsCreateNestedOneWithoutUserInput
    basalRecords?: BasalRecordCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBolusRecordsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadUncheckedCreateNestedManyWithoutUserInput
    glucoseStats?: GlucoseStatsUncheckedCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsUncheckedCreateNestedOneWithoutUserInput
    basalRecords?: BasalRecordUncheckedCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryUncheckedCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBolusRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBolusRecordsInput, UserUncheckedCreateWithoutBolusRecordsInput>
  }

  export type UserUpsertWithoutBolusRecordsInput = {
    update: XOR<UserUpdateWithoutBolusRecordsInput, UserUncheckedUpdateWithoutBolusRecordsInput>
    create: XOR<UserCreateWithoutBolusRecordsInput, UserUncheckedCreateWithoutBolusRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBolusRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBolusRecordsInput, UserUncheckedUpdateWithoutBolusRecordsInput>
  }

  export type UserUpdateWithoutBolusRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUpdateManyWithoutUserNestedInput
    glucoseStats?: GlucoseStatsUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUpdateOneWithoutUserNestedInput
    basalRecords?: BasalRecordUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBolusRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUncheckedUpdateManyWithoutUserNestedInput
    glucoseStats?: GlucoseStatsUncheckedUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUncheckedUpdateOneWithoutUserNestedInput
    basalRecords?: BasalRecordUncheckedUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUncheckedUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBasalRecordsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadCreateNestedManyWithoutUserInput
    glucoseStats?: GlucoseStatsCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBasalRecordsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadUncheckedCreateNestedManyWithoutUserInput
    glucoseStats?: GlucoseStatsUncheckedCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsUncheckedCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordUncheckedCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryUncheckedCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBasalRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBasalRecordsInput, UserUncheckedCreateWithoutBasalRecordsInput>
  }

  export type UserUpsertWithoutBasalRecordsInput = {
    update: XOR<UserUpdateWithoutBasalRecordsInput, UserUncheckedUpdateWithoutBasalRecordsInput>
    create: XOR<UserCreateWithoutBasalRecordsInput, UserUncheckedCreateWithoutBasalRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBasalRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBasalRecordsInput, UserUncheckedUpdateWithoutBasalRecordsInput>
  }

  export type UserUpdateWithoutBasalRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUpdateManyWithoutUserNestedInput
    glucoseStats?: GlucoseStatsUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBasalRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUncheckedUpdateManyWithoutUserNestedInput
    glucoseStats?: GlucoseStatsUncheckedUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUncheckedUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUncheckedUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUncheckedUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCarbEntriesInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadCreateNestedManyWithoutUserInput
    glucoseStats?: GlucoseStatsCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCarbEntriesInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadUncheckedCreateNestedManyWithoutUserInput
    glucoseStats?: GlucoseStatsUncheckedCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsUncheckedCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordUncheckedCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordUncheckedCreateNestedManyWithoutUserInput
    alarmEvents?: AlarmEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCarbEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarbEntriesInput, UserUncheckedCreateWithoutCarbEntriesInput>
  }

  export type UserUpsertWithoutCarbEntriesInput = {
    update: XOR<UserUpdateWithoutCarbEntriesInput, UserUncheckedUpdateWithoutCarbEntriesInput>
    create: XOR<UserCreateWithoutCarbEntriesInput, UserUncheckedCreateWithoutCarbEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarbEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarbEntriesInput, UserUncheckedUpdateWithoutCarbEntriesInput>
  }

  export type UserUpdateWithoutCarbEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUpdateManyWithoutUserNestedInput
    glucoseStats?: GlucoseStatsUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCarbEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUncheckedUpdateManyWithoutUserNestedInput
    glucoseStats?: GlucoseStatsUncheckedUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUncheckedUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUncheckedUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUncheckedUpdateManyWithoutUserNestedInput
    alarmEvents?: AlarmEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAlarmEventsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadCreateNestedManyWithoutUserInput
    glucoseStats?: GlucoseStatsCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAlarmEventsInput = {
    id?: string
    clerkId: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    dataUploads?: DataUploadUncheckedCreateNestedManyWithoutUserInput
    glucoseStats?: GlucoseStatsUncheckedCreateNestedOneWithoutUserInput
    insulinStats?: InsulinStatsUncheckedCreateNestedOneWithoutUserInput
    bolusRecords?: BolusRecordUncheckedCreateNestedManyWithoutUserInput
    basalRecords?: BasalRecordUncheckedCreateNestedManyWithoutUserInput
    carbEntries?: CarbEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAlarmEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlarmEventsInput, UserUncheckedCreateWithoutAlarmEventsInput>
  }

  export type UserUpsertWithoutAlarmEventsInput = {
    update: XOR<UserUpdateWithoutAlarmEventsInput, UserUncheckedUpdateWithoutAlarmEventsInput>
    create: XOR<UserCreateWithoutAlarmEventsInput, UserUncheckedCreateWithoutAlarmEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlarmEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlarmEventsInput, UserUncheckedUpdateWithoutAlarmEventsInput>
  }

  export type UserUpdateWithoutAlarmEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUpdateManyWithoutUserNestedInput
    glucoseStats?: GlucoseStatsUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlarmEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    dataUploads?: DataUploadUncheckedUpdateManyWithoutUserNestedInput
    glucoseStats?: GlucoseStatsUncheckedUpdateOneWithoutUserNestedInput
    insulinStats?: InsulinStatsUncheckedUpdateOneWithoutUserNestedInput
    bolusRecords?: BolusRecordUncheckedUpdateManyWithoutUserNestedInput
    basalRecords?: BasalRecordUncheckedUpdateManyWithoutUserNestedInput
    carbEntries?: CarbEntryUncheckedUpdateManyWithoutUserNestedInput
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

  export type BolusRecordCreateManyUserInput = {
    id?: string
    timestamp: Date | string
    amount: number
    bolusType: string
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BasalRecordCreateManyUserInput = {
    id?: string
    timestamp: Date | string
    rate: number
    duration: number
    changeType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarbEntryCreateManyUserInput = {
    id?: string
    timestamp: Date | string
    carbAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmEventCreateManyUserInput = {
    id?: string
    timestamp: Date | string
    eventType: string
    deviceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type BolusRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    bolusType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BolusRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    bolusType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BolusRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    bolusType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BasalRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rate?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    changeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BasalRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rate?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    changeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BasalRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rate?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    changeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarbEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    carbAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarbEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    carbAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarbEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    carbAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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