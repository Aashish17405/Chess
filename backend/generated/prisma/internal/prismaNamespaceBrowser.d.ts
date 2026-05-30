import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Game: "Game";
    readonly GameMove: "GameMove";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly username: "username";
    readonly displayName: "displayName";
    readonly passwordHash: "passwordHash";
    readonly avatarUrl: "avatarUrl";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly deletedById: "deletedById";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const GameScalarFieldEnum: {
    readonly id: "id";
    readonly status: "status";
    readonly whitePlayerId: "whitePlayerId";
    readonly blackPlayerId: "blackPlayerId";
    readonly winnerColor: "winnerColor";
    readonly startedAt: "startedAt";
    readonly endedAt: "endedAt";
    readonly lastMoveAt: "lastMoveAt";
    readonly initialFen: "initialFen";
    readonly finalFen: "finalFen";
    readonly resultReason: "resultReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly deletedById: "deletedById";
};
export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum];
export declare const GameMoveScalarFieldEnum: {
    readonly id: "id";
    readonly gameId: "gameId";
    readonly moveNumber: "moveNumber";
    readonly moverId: "moverId";
    readonly color: "color";
    readonly fromSquare: "fromSquare";
    readonly toSquare: "toSquare";
    readonly san: "san";
    readonly uci: "uci";
    readonly fenBefore: "fenBefore";
    readonly fenAfter: "fenAfter";
    readonly result: "result";
    readonly timeSpentMs: "timeSpentMs";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly deletedById: "deletedById";
};
export type GameMoveScalarFieldEnum = (typeof GameMoveScalarFieldEnum)[keyof typeof GameMoveScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map