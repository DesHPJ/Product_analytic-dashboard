
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
 * Model ai_table_product_list
 * 
 */
export type ai_table_product_list = $Result.DefaultSelection<Prisma.$ai_table_product_listPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ai_table_product_lists
 * const ai_table_product_lists = await prisma.ai_table_product_list.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Ai_table_product_lists
   * const ai_table_product_lists = await prisma.ai_table_product_list.findMany()
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
   * `prisma.ai_table_product_list`: Exposes CRUD operations for the **ai_table_product_list** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_table_product_lists
    * const ai_table_product_lists = await prisma.ai_table_product_list.findMany()
    * ```
    */
  get ai_table_product_list(): Prisma.ai_table_product_listDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    ai_table_product_list: 'ai_table_product_list'
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
      modelProps: "ai_table_product_list"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ai_table_product_list: {
        payload: Prisma.$ai_table_product_listPayload<ExtArgs>
        fields: Prisma.ai_table_product_listFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ai_table_product_listFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_table_product_listPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ai_table_product_listFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_table_product_listPayload>
          }
          findFirst: {
            args: Prisma.ai_table_product_listFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_table_product_listPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ai_table_product_listFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_table_product_listPayload>
          }
          findMany: {
            args: Prisma.ai_table_product_listFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_table_product_listPayload>[]
          }
          create: {
            args: Prisma.ai_table_product_listCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_table_product_listPayload>
          }
          createMany: {
            args: Prisma.ai_table_product_listCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ai_table_product_listCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_table_product_listPayload>[]
          }
          delete: {
            args: Prisma.ai_table_product_listDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_table_product_listPayload>
          }
          update: {
            args: Prisma.ai_table_product_listUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_table_product_listPayload>
          }
          deleteMany: {
            args: Prisma.ai_table_product_listDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ai_table_product_listUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ai_table_product_listUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_table_product_listPayload>[]
          }
          upsert: {
            args: Prisma.ai_table_product_listUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_table_product_listPayload>
          }
          aggregate: {
            args: Prisma.Ai_table_product_listAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAi_table_product_list>
          }
          groupBy: {
            args: Prisma.ai_table_product_listGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ai_table_product_listGroupByOutputType>[]
          }
          count: {
            args: Prisma.ai_table_product_listCountArgs<ExtArgs>
            result: $Utils.Optional<Ai_table_product_listCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    ai_table_product_list?: ai_table_product_listOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model ai_table_product_list
   */

  export type AggregateAi_table_product_list = {
    _count: Ai_table_product_listCountAggregateOutputType | null
    _min: Ai_table_product_listMinAggregateOutputType | null
    _max: Ai_table_product_listMaxAggregateOutputType | null
  }

  export type Ai_table_product_listMinAggregateOutputType = {
    ai_table_identifier: string | null
    row_number: string | null
    product_id: string | null
    date_sold: Date | null
    product_name: string | null
    category: string | null
    actual_price_inr: string | null
    rating: string | null
    about_product: string | null
    user_id: string | null
    user_name_usd: string | null
    review_id: string | null
    review_title: string | null
    review_content: string | null
    product_link: string | null
  }

  export type Ai_table_product_listMaxAggregateOutputType = {
    ai_table_identifier: string | null
    row_number: string | null
    product_id: string | null
    date_sold: Date | null
    product_name: string | null
    category: string | null
    actual_price_inr: string | null
    rating: string | null
    about_product: string | null
    user_id: string | null
    user_name_usd: string | null
    review_id: string | null
    review_title: string | null
    review_content: string | null
    product_link: string | null
  }

  export type Ai_table_product_listCountAggregateOutputType = {
    ai_table_identifier: number
    row_number: number
    product_id: number
    date_sold: number
    product_name: number
    category: number
    actual_price_inr: number
    rating: number
    about_product: number
    user_id: number
    user_name_usd: number
    review_id: number
    review_title: number
    review_content: number
    product_link: number
    _all: number
  }


  export type Ai_table_product_listMinAggregateInputType = {
    ai_table_identifier?: true
    row_number?: true
    product_id?: true
    date_sold?: true
    product_name?: true
    category?: true
    actual_price_inr?: true
    rating?: true
    about_product?: true
    user_id?: true
    user_name_usd?: true
    review_id?: true
    review_title?: true
    review_content?: true
    product_link?: true
  }

  export type Ai_table_product_listMaxAggregateInputType = {
    ai_table_identifier?: true
    row_number?: true
    product_id?: true
    date_sold?: true
    product_name?: true
    category?: true
    actual_price_inr?: true
    rating?: true
    about_product?: true
    user_id?: true
    user_name_usd?: true
    review_id?: true
    review_title?: true
    review_content?: true
    product_link?: true
  }

  export type Ai_table_product_listCountAggregateInputType = {
    ai_table_identifier?: true
    row_number?: true
    product_id?: true
    date_sold?: true
    product_name?: true
    category?: true
    actual_price_inr?: true
    rating?: true
    about_product?: true
    user_id?: true
    user_name_usd?: true
    review_id?: true
    review_title?: true
    review_content?: true
    product_link?: true
    _all?: true
  }

  export type Ai_table_product_listAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_table_product_list to aggregate.
     */
    where?: ai_table_product_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_table_product_lists to fetch.
     */
    orderBy?: ai_table_product_listOrderByWithRelationInput | ai_table_product_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ai_table_product_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_table_product_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_table_product_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_table_product_lists
    **/
    _count?: true | Ai_table_product_listCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_table_product_listMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_table_product_listMaxAggregateInputType
  }

  export type GetAi_table_product_listAggregateType<T extends Ai_table_product_listAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_table_product_list]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_table_product_list[P]>
      : GetScalarType<T[P], AggregateAi_table_product_list[P]>
  }




  export type ai_table_product_listGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ai_table_product_listWhereInput
    orderBy?: ai_table_product_listOrderByWithAggregationInput | ai_table_product_listOrderByWithAggregationInput[]
    by: Ai_table_product_listScalarFieldEnum[] | Ai_table_product_listScalarFieldEnum
    having?: ai_table_product_listScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_table_product_listCountAggregateInputType | true
    _min?: Ai_table_product_listMinAggregateInputType
    _max?: Ai_table_product_listMaxAggregateInputType
  }

  export type Ai_table_product_listGroupByOutputType = {
    ai_table_identifier: string
    row_number: string | null
    product_id: string | null
    date_sold: Date | null
    product_name: string | null
    category: string | null
    actual_price_inr: string | null
    rating: string | null
    about_product: string | null
    user_id: string | null
    user_name_usd: string | null
    review_id: string | null
    review_title: string | null
    review_content: string | null
    product_link: string | null
    _count: Ai_table_product_listCountAggregateOutputType | null
    _min: Ai_table_product_listMinAggregateOutputType | null
    _max: Ai_table_product_listMaxAggregateOutputType | null
  }

  type GetAi_table_product_listGroupByPayload<T extends ai_table_product_listGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ai_table_product_listGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_table_product_listGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_table_product_listGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_table_product_listGroupByOutputType[P]>
        }
      >
    >


  export type ai_table_product_listSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ai_table_identifier?: boolean
    row_number?: boolean
    product_id?: boolean
    date_sold?: boolean
    product_name?: boolean
    category?: boolean
    actual_price_inr?: boolean
    rating?: boolean
    about_product?: boolean
    user_id?: boolean
    user_name_usd?: boolean
    review_id?: boolean
    review_title?: boolean
    review_content?: boolean
    product_link?: boolean
  }, ExtArgs["result"]["ai_table_product_list"]>

  export type ai_table_product_listSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ai_table_identifier?: boolean
    row_number?: boolean
    product_id?: boolean
    date_sold?: boolean
    product_name?: boolean
    category?: boolean
    actual_price_inr?: boolean
    rating?: boolean
    about_product?: boolean
    user_id?: boolean
    user_name_usd?: boolean
    review_id?: boolean
    review_title?: boolean
    review_content?: boolean
    product_link?: boolean
  }, ExtArgs["result"]["ai_table_product_list"]>

  export type ai_table_product_listSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ai_table_identifier?: boolean
    row_number?: boolean
    product_id?: boolean
    date_sold?: boolean
    product_name?: boolean
    category?: boolean
    actual_price_inr?: boolean
    rating?: boolean
    about_product?: boolean
    user_id?: boolean
    user_name_usd?: boolean
    review_id?: boolean
    review_title?: boolean
    review_content?: boolean
    product_link?: boolean
  }, ExtArgs["result"]["ai_table_product_list"]>

  export type ai_table_product_listSelectScalar = {
    ai_table_identifier?: boolean
    row_number?: boolean
    product_id?: boolean
    date_sold?: boolean
    product_name?: boolean
    category?: boolean
    actual_price_inr?: boolean
    rating?: boolean
    about_product?: boolean
    user_id?: boolean
    user_name_usd?: boolean
    review_id?: boolean
    review_title?: boolean
    review_content?: boolean
    product_link?: boolean
  }

  export type ai_table_product_listOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ai_table_identifier" | "row_number" | "product_id" | "date_sold" | "product_name" | "category" | "actual_price_inr" | "rating" | "about_product" | "user_id" | "user_name_usd" | "review_id" | "review_title" | "review_content" | "product_link", ExtArgs["result"]["ai_table_product_list"]>

  export type $ai_table_product_listPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ai_table_product_list"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ai_table_identifier: string
      row_number: string | null
      product_id: string | null
      date_sold: Date | null
      product_name: string | null
      category: string | null
      actual_price_inr: string | null
      rating: string | null
      about_product: string | null
      user_id: string | null
      user_name_usd: string | null
      review_id: string | null
      review_title: string | null
      review_content: string | null
      product_link: string | null
    }, ExtArgs["result"]["ai_table_product_list"]>
    composites: {}
  }

  type ai_table_product_listGetPayload<S extends boolean | null | undefined | ai_table_product_listDefaultArgs> = $Result.GetResult<Prisma.$ai_table_product_listPayload, S>

  type ai_table_product_listCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ai_table_product_listFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ai_table_product_listCountAggregateInputType | true
    }

  export interface ai_table_product_listDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ai_table_product_list'], meta: { name: 'ai_table_product_list' } }
    /**
     * Find zero or one Ai_table_product_list that matches the filter.
     * @param {ai_table_product_listFindUniqueArgs} args - Arguments to find a Ai_table_product_list
     * @example
     * // Get one Ai_table_product_list
     * const ai_table_product_list = await prisma.ai_table_product_list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ai_table_product_listFindUniqueArgs>(args: SelectSubset<T, ai_table_product_listFindUniqueArgs<ExtArgs>>): Prisma__ai_table_product_listClient<$Result.GetResult<Prisma.$ai_table_product_listPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ai_table_product_list that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ai_table_product_listFindUniqueOrThrowArgs} args - Arguments to find a Ai_table_product_list
     * @example
     * // Get one Ai_table_product_list
     * const ai_table_product_list = await prisma.ai_table_product_list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ai_table_product_listFindUniqueOrThrowArgs>(args: SelectSubset<T, ai_table_product_listFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ai_table_product_listClient<$Result.GetResult<Prisma.$ai_table_product_listPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_table_product_list that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_table_product_listFindFirstArgs} args - Arguments to find a Ai_table_product_list
     * @example
     * // Get one Ai_table_product_list
     * const ai_table_product_list = await prisma.ai_table_product_list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ai_table_product_listFindFirstArgs>(args?: SelectSubset<T, ai_table_product_listFindFirstArgs<ExtArgs>>): Prisma__ai_table_product_listClient<$Result.GetResult<Prisma.$ai_table_product_listPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_table_product_list that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_table_product_listFindFirstOrThrowArgs} args - Arguments to find a Ai_table_product_list
     * @example
     * // Get one Ai_table_product_list
     * const ai_table_product_list = await prisma.ai_table_product_list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ai_table_product_listFindFirstOrThrowArgs>(args?: SelectSubset<T, ai_table_product_listFindFirstOrThrowArgs<ExtArgs>>): Prisma__ai_table_product_listClient<$Result.GetResult<Prisma.$ai_table_product_listPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ai_table_product_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_table_product_listFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_table_product_lists
     * const ai_table_product_lists = await prisma.ai_table_product_list.findMany()
     * 
     * // Get first 10 Ai_table_product_lists
     * const ai_table_product_lists = await prisma.ai_table_product_list.findMany({ take: 10 })
     * 
     * // Only select the `ai_table_identifier`
     * const ai_table_product_listWithAi_table_identifierOnly = await prisma.ai_table_product_list.findMany({ select: { ai_table_identifier: true } })
     * 
     */
    findMany<T extends ai_table_product_listFindManyArgs>(args?: SelectSubset<T, ai_table_product_listFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_table_product_listPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ai_table_product_list.
     * @param {ai_table_product_listCreateArgs} args - Arguments to create a Ai_table_product_list.
     * @example
     * // Create one Ai_table_product_list
     * const Ai_table_product_list = await prisma.ai_table_product_list.create({
     *   data: {
     *     // ... data to create a Ai_table_product_list
     *   }
     * })
     * 
     */
    create<T extends ai_table_product_listCreateArgs>(args: SelectSubset<T, ai_table_product_listCreateArgs<ExtArgs>>): Prisma__ai_table_product_listClient<$Result.GetResult<Prisma.$ai_table_product_listPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ai_table_product_lists.
     * @param {ai_table_product_listCreateManyArgs} args - Arguments to create many Ai_table_product_lists.
     * @example
     * // Create many Ai_table_product_lists
     * const ai_table_product_list = await prisma.ai_table_product_list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ai_table_product_listCreateManyArgs>(args?: SelectSubset<T, ai_table_product_listCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ai_table_product_lists and returns the data saved in the database.
     * @param {ai_table_product_listCreateManyAndReturnArgs} args - Arguments to create many Ai_table_product_lists.
     * @example
     * // Create many Ai_table_product_lists
     * const ai_table_product_list = await prisma.ai_table_product_list.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ai_table_product_lists and only return the `ai_table_identifier`
     * const ai_table_product_listWithAi_table_identifierOnly = await prisma.ai_table_product_list.createManyAndReturn({
     *   select: { ai_table_identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ai_table_product_listCreateManyAndReturnArgs>(args?: SelectSubset<T, ai_table_product_listCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_table_product_listPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ai_table_product_list.
     * @param {ai_table_product_listDeleteArgs} args - Arguments to delete one Ai_table_product_list.
     * @example
     * // Delete one Ai_table_product_list
     * const Ai_table_product_list = await prisma.ai_table_product_list.delete({
     *   where: {
     *     // ... filter to delete one Ai_table_product_list
     *   }
     * })
     * 
     */
    delete<T extends ai_table_product_listDeleteArgs>(args: SelectSubset<T, ai_table_product_listDeleteArgs<ExtArgs>>): Prisma__ai_table_product_listClient<$Result.GetResult<Prisma.$ai_table_product_listPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ai_table_product_list.
     * @param {ai_table_product_listUpdateArgs} args - Arguments to update one Ai_table_product_list.
     * @example
     * // Update one Ai_table_product_list
     * const ai_table_product_list = await prisma.ai_table_product_list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ai_table_product_listUpdateArgs>(args: SelectSubset<T, ai_table_product_listUpdateArgs<ExtArgs>>): Prisma__ai_table_product_listClient<$Result.GetResult<Prisma.$ai_table_product_listPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ai_table_product_lists.
     * @param {ai_table_product_listDeleteManyArgs} args - Arguments to filter Ai_table_product_lists to delete.
     * @example
     * // Delete a few Ai_table_product_lists
     * const { count } = await prisma.ai_table_product_list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ai_table_product_listDeleteManyArgs>(args?: SelectSubset<T, ai_table_product_listDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_table_product_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_table_product_listUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_table_product_lists
     * const ai_table_product_list = await prisma.ai_table_product_list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ai_table_product_listUpdateManyArgs>(args: SelectSubset<T, ai_table_product_listUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_table_product_lists and returns the data updated in the database.
     * @param {ai_table_product_listUpdateManyAndReturnArgs} args - Arguments to update many Ai_table_product_lists.
     * @example
     * // Update many Ai_table_product_lists
     * const ai_table_product_list = await prisma.ai_table_product_list.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ai_table_product_lists and only return the `ai_table_identifier`
     * const ai_table_product_listWithAi_table_identifierOnly = await prisma.ai_table_product_list.updateManyAndReturn({
     *   select: { ai_table_identifier: true },
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
    updateManyAndReturn<T extends ai_table_product_listUpdateManyAndReturnArgs>(args: SelectSubset<T, ai_table_product_listUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_table_product_listPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ai_table_product_list.
     * @param {ai_table_product_listUpsertArgs} args - Arguments to update or create a Ai_table_product_list.
     * @example
     * // Update or create a Ai_table_product_list
     * const ai_table_product_list = await prisma.ai_table_product_list.upsert({
     *   create: {
     *     // ... data to create a Ai_table_product_list
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_table_product_list we want to update
     *   }
     * })
     */
    upsert<T extends ai_table_product_listUpsertArgs>(args: SelectSubset<T, ai_table_product_listUpsertArgs<ExtArgs>>): Prisma__ai_table_product_listClient<$Result.GetResult<Prisma.$ai_table_product_listPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ai_table_product_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_table_product_listCountArgs} args - Arguments to filter Ai_table_product_lists to count.
     * @example
     * // Count the number of Ai_table_product_lists
     * const count = await prisma.ai_table_product_list.count({
     *   where: {
     *     // ... the filter for the Ai_table_product_lists we want to count
     *   }
     * })
    **/
    count<T extends ai_table_product_listCountArgs>(
      args?: Subset<T, ai_table_product_listCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_table_product_listCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_table_product_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_table_product_listAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_table_product_listAggregateArgs>(args: Subset<T, Ai_table_product_listAggregateArgs>): Prisma.PrismaPromise<GetAi_table_product_listAggregateType<T>>

    /**
     * Group by Ai_table_product_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_table_product_listGroupByArgs} args - Group by arguments.
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
      T extends ai_table_product_listGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ai_table_product_listGroupByArgs['orderBy'] }
        : { orderBy?: ai_table_product_listGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ai_table_product_listGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_table_product_listGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ai_table_product_list model
   */
  readonly fields: ai_table_product_listFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_table_product_list.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ai_table_product_listClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ai_table_product_list model
   */
  interface ai_table_product_listFieldRefs {
    readonly ai_table_identifier: FieldRef<"ai_table_product_list", 'String'>
    readonly row_number: FieldRef<"ai_table_product_list", 'String'>
    readonly product_id: FieldRef<"ai_table_product_list", 'String'>
    readonly date_sold: FieldRef<"ai_table_product_list", 'DateTime'>
    readonly product_name: FieldRef<"ai_table_product_list", 'String'>
    readonly category: FieldRef<"ai_table_product_list", 'String'>
    readonly actual_price_inr: FieldRef<"ai_table_product_list", 'String'>
    readonly rating: FieldRef<"ai_table_product_list", 'String'>
    readonly about_product: FieldRef<"ai_table_product_list", 'String'>
    readonly user_id: FieldRef<"ai_table_product_list", 'String'>
    readonly user_name_usd: FieldRef<"ai_table_product_list", 'String'>
    readonly review_id: FieldRef<"ai_table_product_list", 'String'>
    readonly review_title: FieldRef<"ai_table_product_list", 'String'>
    readonly review_content: FieldRef<"ai_table_product_list", 'String'>
    readonly product_link: FieldRef<"ai_table_product_list", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ai_table_product_list findUnique
   */
  export type ai_table_product_listFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_table_product_list
     */
    select?: ai_table_product_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_table_product_list
     */
    omit?: ai_table_product_listOmit<ExtArgs> | null
    /**
     * Filter, which ai_table_product_list to fetch.
     */
    where: ai_table_product_listWhereUniqueInput
  }

  /**
   * ai_table_product_list findUniqueOrThrow
   */
  export type ai_table_product_listFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_table_product_list
     */
    select?: ai_table_product_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_table_product_list
     */
    omit?: ai_table_product_listOmit<ExtArgs> | null
    /**
     * Filter, which ai_table_product_list to fetch.
     */
    where: ai_table_product_listWhereUniqueInput
  }

  /**
   * ai_table_product_list findFirst
   */
  export type ai_table_product_listFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_table_product_list
     */
    select?: ai_table_product_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_table_product_list
     */
    omit?: ai_table_product_listOmit<ExtArgs> | null
    /**
     * Filter, which ai_table_product_list to fetch.
     */
    where?: ai_table_product_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_table_product_lists to fetch.
     */
    orderBy?: ai_table_product_listOrderByWithRelationInput | ai_table_product_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_table_product_lists.
     */
    cursor?: ai_table_product_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_table_product_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_table_product_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_table_product_lists.
     */
    distinct?: Ai_table_product_listScalarFieldEnum | Ai_table_product_listScalarFieldEnum[]
  }

  /**
   * ai_table_product_list findFirstOrThrow
   */
  export type ai_table_product_listFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_table_product_list
     */
    select?: ai_table_product_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_table_product_list
     */
    omit?: ai_table_product_listOmit<ExtArgs> | null
    /**
     * Filter, which ai_table_product_list to fetch.
     */
    where?: ai_table_product_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_table_product_lists to fetch.
     */
    orderBy?: ai_table_product_listOrderByWithRelationInput | ai_table_product_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_table_product_lists.
     */
    cursor?: ai_table_product_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_table_product_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_table_product_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_table_product_lists.
     */
    distinct?: Ai_table_product_listScalarFieldEnum | Ai_table_product_listScalarFieldEnum[]
  }

  /**
   * ai_table_product_list findMany
   */
  export type ai_table_product_listFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_table_product_list
     */
    select?: ai_table_product_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_table_product_list
     */
    omit?: ai_table_product_listOmit<ExtArgs> | null
    /**
     * Filter, which ai_table_product_lists to fetch.
     */
    where?: ai_table_product_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_table_product_lists to fetch.
     */
    orderBy?: ai_table_product_listOrderByWithRelationInput | ai_table_product_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_table_product_lists.
     */
    cursor?: ai_table_product_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_table_product_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_table_product_lists.
     */
    skip?: number
    distinct?: Ai_table_product_listScalarFieldEnum | Ai_table_product_listScalarFieldEnum[]
  }

  /**
   * ai_table_product_list create
   */
  export type ai_table_product_listCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_table_product_list
     */
    select?: ai_table_product_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_table_product_list
     */
    omit?: ai_table_product_listOmit<ExtArgs> | null
    /**
     * The data needed to create a ai_table_product_list.
     */
    data?: XOR<ai_table_product_listCreateInput, ai_table_product_listUncheckedCreateInput>
  }

  /**
   * ai_table_product_list createMany
   */
  export type ai_table_product_listCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ai_table_product_lists.
     */
    data: ai_table_product_listCreateManyInput | ai_table_product_listCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_table_product_list createManyAndReturn
   */
  export type ai_table_product_listCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_table_product_list
     */
    select?: ai_table_product_listSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ai_table_product_list
     */
    omit?: ai_table_product_listOmit<ExtArgs> | null
    /**
     * The data used to create many ai_table_product_lists.
     */
    data: ai_table_product_listCreateManyInput | ai_table_product_listCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_table_product_list update
   */
  export type ai_table_product_listUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_table_product_list
     */
    select?: ai_table_product_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_table_product_list
     */
    omit?: ai_table_product_listOmit<ExtArgs> | null
    /**
     * The data needed to update a ai_table_product_list.
     */
    data: XOR<ai_table_product_listUpdateInput, ai_table_product_listUncheckedUpdateInput>
    /**
     * Choose, which ai_table_product_list to update.
     */
    where: ai_table_product_listWhereUniqueInput
  }

  /**
   * ai_table_product_list updateMany
   */
  export type ai_table_product_listUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ai_table_product_lists.
     */
    data: XOR<ai_table_product_listUpdateManyMutationInput, ai_table_product_listUncheckedUpdateManyInput>
    /**
     * Filter which ai_table_product_lists to update
     */
    where?: ai_table_product_listWhereInput
    /**
     * Limit how many ai_table_product_lists to update.
     */
    limit?: number
  }

  /**
   * ai_table_product_list updateManyAndReturn
   */
  export type ai_table_product_listUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_table_product_list
     */
    select?: ai_table_product_listSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ai_table_product_list
     */
    omit?: ai_table_product_listOmit<ExtArgs> | null
    /**
     * The data used to update ai_table_product_lists.
     */
    data: XOR<ai_table_product_listUpdateManyMutationInput, ai_table_product_listUncheckedUpdateManyInput>
    /**
     * Filter which ai_table_product_lists to update
     */
    where?: ai_table_product_listWhereInput
    /**
     * Limit how many ai_table_product_lists to update.
     */
    limit?: number
  }

  /**
   * ai_table_product_list upsert
   */
  export type ai_table_product_listUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_table_product_list
     */
    select?: ai_table_product_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_table_product_list
     */
    omit?: ai_table_product_listOmit<ExtArgs> | null
    /**
     * The filter to search for the ai_table_product_list to update in case it exists.
     */
    where: ai_table_product_listWhereUniqueInput
    /**
     * In case the ai_table_product_list found by the `where` argument doesn't exist, create a new ai_table_product_list with this data.
     */
    create: XOR<ai_table_product_listCreateInput, ai_table_product_listUncheckedCreateInput>
    /**
     * In case the ai_table_product_list was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ai_table_product_listUpdateInput, ai_table_product_listUncheckedUpdateInput>
  }

  /**
   * ai_table_product_list delete
   */
  export type ai_table_product_listDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_table_product_list
     */
    select?: ai_table_product_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_table_product_list
     */
    omit?: ai_table_product_listOmit<ExtArgs> | null
    /**
     * Filter which ai_table_product_list to delete.
     */
    where: ai_table_product_listWhereUniqueInput
  }

  /**
   * ai_table_product_list deleteMany
   */
  export type ai_table_product_listDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_table_product_lists to delete
     */
    where?: ai_table_product_listWhereInput
    /**
     * Limit how many ai_table_product_lists to delete.
     */
    limit?: number
  }

  /**
   * ai_table_product_list without action
   */
  export type ai_table_product_listDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_table_product_list
     */
    select?: ai_table_product_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_table_product_list
     */
    omit?: ai_table_product_listOmit<ExtArgs> | null
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


  export const Ai_table_product_listScalarFieldEnum: {
    ai_table_identifier: 'ai_table_identifier',
    row_number: 'row_number',
    product_id: 'product_id',
    date_sold: 'date_sold',
    product_name: 'product_name',
    category: 'category',
    actual_price_inr: 'actual_price_inr',
    rating: 'rating',
    about_product: 'about_product',
    user_id: 'user_id',
    user_name_usd: 'user_name_usd',
    review_id: 'review_id',
    review_title: 'review_title',
    review_content: 'review_content',
    product_link: 'product_link'
  };

  export type Ai_table_product_listScalarFieldEnum = (typeof Ai_table_product_listScalarFieldEnum)[keyof typeof Ai_table_product_listScalarFieldEnum]


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


  export type ai_table_product_listWhereInput = {
    AND?: ai_table_product_listWhereInput | ai_table_product_listWhereInput[]
    OR?: ai_table_product_listWhereInput[]
    NOT?: ai_table_product_listWhereInput | ai_table_product_listWhereInput[]
    ai_table_identifier?: UuidFilter<"ai_table_product_list"> | string
    row_number?: StringNullableFilter<"ai_table_product_list"> | string | null
    product_id?: StringNullableFilter<"ai_table_product_list"> | string | null
    date_sold?: DateTimeNullableFilter<"ai_table_product_list"> | Date | string | null
    product_name?: StringNullableFilter<"ai_table_product_list"> | string | null
    category?: StringNullableFilter<"ai_table_product_list"> | string | null
    actual_price_inr?: StringNullableFilter<"ai_table_product_list"> | string | null
    rating?: StringNullableFilter<"ai_table_product_list"> | string | null
    about_product?: StringNullableFilter<"ai_table_product_list"> | string | null
    user_id?: StringNullableFilter<"ai_table_product_list"> | string | null
    user_name_usd?: StringNullableFilter<"ai_table_product_list"> | string | null
    review_id?: StringNullableFilter<"ai_table_product_list"> | string | null
    review_title?: StringNullableFilter<"ai_table_product_list"> | string | null
    review_content?: StringNullableFilter<"ai_table_product_list"> | string | null
    product_link?: StringNullableFilter<"ai_table_product_list"> | string | null
  }

  export type ai_table_product_listOrderByWithRelationInput = {
    ai_table_identifier?: SortOrder
    row_number?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    date_sold?: SortOrderInput | SortOrder
    product_name?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    actual_price_inr?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    about_product?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    user_name_usd?: SortOrderInput | SortOrder
    review_id?: SortOrderInput | SortOrder
    review_title?: SortOrderInput | SortOrder
    review_content?: SortOrderInput | SortOrder
    product_link?: SortOrderInput | SortOrder
  }

  export type ai_table_product_listWhereUniqueInput = Prisma.AtLeast<{
    ai_table_identifier?: string
    AND?: ai_table_product_listWhereInput | ai_table_product_listWhereInput[]
    OR?: ai_table_product_listWhereInput[]
    NOT?: ai_table_product_listWhereInput | ai_table_product_listWhereInput[]
    row_number?: StringNullableFilter<"ai_table_product_list"> | string | null
    product_id?: StringNullableFilter<"ai_table_product_list"> | string | null
    date_sold?: DateTimeNullableFilter<"ai_table_product_list"> | Date | string | null
    product_name?: StringNullableFilter<"ai_table_product_list"> | string | null
    category?: StringNullableFilter<"ai_table_product_list"> | string | null
    actual_price_inr?: StringNullableFilter<"ai_table_product_list"> | string | null
    rating?: StringNullableFilter<"ai_table_product_list"> | string | null
    about_product?: StringNullableFilter<"ai_table_product_list"> | string | null
    user_id?: StringNullableFilter<"ai_table_product_list"> | string | null
    user_name_usd?: StringNullableFilter<"ai_table_product_list"> | string | null
    review_id?: StringNullableFilter<"ai_table_product_list"> | string | null
    review_title?: StringNullableFilter<"ai_table_product_list"> | string | null
    review_content?: StringNullableFilter<"ai_table_product_list"> | string | null
    product_link?: StringNullableFilter<"ai_table_product_list"> | string | null
  }, "ai_table_identifier">

  export type ai_table_product_listOrderByWithAggregationInput = {
    ai_table_identifier?: SortOrder
    row_number?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    date_sold?: SortOrderInput | SortOrder
    product_name?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    actual_price_inr?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    about_product?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    user_name_usd?: SortOrderInput | SortOrder
    review_id?: SortOrderInput | SortOrder
    review_title?: SortOrderInput | SortOrder
    review_content?: SortOrderInput | SortOrder
    product_link?: SortOrderInput | SortOrder
    _count?: ai_table_product_listCountOrderByAggregateInput
    _max?: ai_table_product_listMaxOrderByAggregateInput
    _min?: ai_table_product_listMinOrderByAggregateInput
  }

  export type ai_table_product_listScalarWhereWithAggregatesInput = {
    AND?: ai_table_product_listScalarWhereWithAggregatesInput | ai_table_product_listScalarWhereWithAggregatesInput[]
    OR?: ai_table_product_listScalarWhereWithAggregatesInput[]
    NOT?: ai_table_product_listScalarWhereWithAggregatesInput | ai_table_product_listScalarWhereWithAggregatesInput[]
    ai_table_identifier?: UuidWithAggregatesFilter<"ai_table_product_list"> | string
    row_number?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
    product_id?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
    date_sold?: DateTimeNullableWithAggregatesFilter<"ai_table_product_list"> | Date | string | null
    product_name?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
    category?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
    actual_price_inr?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
    rating?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
    about_product?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
    user_id?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
    user_name_usd?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
    review_id?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
    review_title?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
    review_content?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
    product_link?: StringNullableWithAggregatesFilter<"ai_table_product_list"> | string | null
  }

  export type ai_table_product_listCreateInput = {
    ai_table_identifier?: string
    row_number?: string | null
    product_id?: string | null
    date_sold?: Date | string | null
    product_name?: string | null
    category?: string | null
    actual_price_inr?: string | null
    rating?: string | null
    about_product?: string | null
    user_id?: string | null
    user_name_usd?: string | null
    review_id?: string | null
    review_title?: string | null
    review_content?: string | null
    product_link?: string | null
  }

  export type ai_table_product_listUncheckedCreateInput = {
    ai_table_identifier?: string
    row_number?: string | null
    product_id?: string | null
    date_sold?: Date | string | null
    product_name?: string | null
    category?: string | null
    actual_price_inr?: string | null
    rating?: string | null
    about_product?: string | null
    user_id?: string | null
    user_name_usd?: string | null
    review_id?: string | null
    review_title?: string | null
    review_content?: string | null
    product_link?: string | null
  }

  export type ai_table_product_listUpdateInput = {
    ai_table_identifier?: StringFieldUpdateOperationsInput | string
    row_number?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    date_sold?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    actual_price_inr?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    about_product?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name_usd?: NullableStringFieldUpdateOperationsInput | string | null
    review_id?: NullableStringFieldUpdateOperationsInput | string | null
    review_title?: NullableStringFieldUpdateOperationsInput | string | null
    review_content?: NullableStringFieldUpdateOperationsInput | string | null
    product_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ai_table_product_listUncheckedUpdateInput = {
    ai_table_identifier?: StringFieldUpdateOperationsInput | string
    row_number?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    date_sold?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    actual_price_inr?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    about_product?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name_usd?: NullableStringFieldUpdateOperationsInput | string | null
    review_id?: NullableStringFieldUpdateOperationsInput | string | null
    review_title?: NullableStringFieldUpdateOperationsInput | string | null
    review_content?: NullableStringFieldUpdateOperationsInput | string | null
    product_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ai_table_product_listCreateManyInput = {
    ai_table_identifier?: string
    row_number?: string | null
    product_id?: string | null
    date_sold?: Date | string | null
    product_name?: string | null
    category?: string | null
    actual_price_inr?: string | null
    rating?: string | null
    about_product?: string | null
    user_id?: string | null
    user_name_usd?: string | null
    review_id?: string | null
    review_title?: string | null
    review_content?: string | null
    product_link?: string | null
  }

  export type ai_table_product_listUpdateManyMutationInput = {
    ai_table_identifier?: StringFieldUpdateOperationsInput | string
    row_number?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    date_sold?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    actual_price_inr?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    about_product?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name_usd?: NullableStringFieldUpdateOperationsInput | string | null
    review_id?: NullableStringFieldUpdateOperationsInput | string | null
    review_title?: NullableStringFieldUpdateOperationsInput | string | null
    review_content?: NullableStringFieldUpdateOperationsInput | string | null
    product_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ai_table_product_listUncheckedUpdateManyInput = {
    ai_table_identifier?: StringFieldUpdateOperationsInput | string
    row_number?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    date_sold?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    actual_price_inr?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    about_product?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name_usd?: NullableStringFieldUpdateOperationsInput | string | null
    review_id?: NullableStringFieldUpdateOperationsInput | string | null
    review_title?: NullableStringFieldUpdateOperationsInput | string | null
    review_content?: NullableStringFieldUpdateOperationsInput | string | null
    product_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ai_table_product_listCountOrderByAggregateInput = {
    ai_table_identifier?: SortOrder
    row_number?: SortOrder
    product_id?: SortOrder
    date_sold?: SortOrder
    product_name?: SortOrder
    category?: SortOrder
    actual_price_inr?: SortOrder
    rating?: SortOrder
    about_product?: SortOrder
    user_id?: SortOrder
    user_name_usd?: SortOrder
    review_id?: SortOrder
    review_title?: SortOrder
    review_content?: SortOrder
    product_link?: SortOrder
  }

  export type ai_table_product_listMaxOrderByAggregateInput = {
    ai_table_identifier?: SortOrder
    row_number?: SortOrder
    product_id?: SortOrder
    date_sold?: SortOrder
    product_name?: SortOrder
    category?: SortOrder
    actual_price_inr?: SortOrder
    rating?: SortOrder
    about_product?: SortOrder
    user_id?: SortOrder
    user_name_usd?: SortOrder
    review_id?: SortOrder
    review_title?: SortOrder
    review_content?: SortOrder
    product_link?: SortOrder
  }

  export type ai_table_product_listMinOrderByAggregateInput = {
    ai_table_identifier?: SortOrder
    row_number?: SortOrder
    product_id?: SortOrder
    date_sold?: SortOrder
    product_name?: SortOrder
    category?: SortOrder
    actual_price_inr?: SortOrder
    rating?: SortOrder
    about_product?: SortOrder
    user_id?: SortOrder
    user_name_usd?: SortOrder
    review_id?: SortOrder
    review_title?: SortOrder
    review_content?: SortOrder
    product_link?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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