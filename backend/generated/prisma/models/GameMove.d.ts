import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model GameMove
 *
 */
export type GameMoveModel = runtime.Types.Result.DefaultSelection<Prisma.$GameMovePayload>;
export type AggregateGameMove = {
    _count: GameMoveCountAggregateOutputType | null;
    _avg: GameMoveAvgAggregateOutputType | null;
    _sum: GameMoveSumAggregateOutputType | null;
    _min: GameMoveMinAggregateOutputType | null;
    _max: GameMoveMaxAggregateOutputType | null;
};
export type GameMoveAvgAggregateOutputType = {
    moveNumber: number | null;
    timeSpentMs: number | null;
};
export type GameMoveSumAggregateOutputType = {
    moveNumber: number | null;
    timeSpentMs: number | null;
};
export type GameMoveMinAggregateOutputType = {
    id: string | null;
    gameId: string | null;
    moveNumber: number | null;
    moverId: string | null;
    color: $Enums.GameColor | null;
    fromSquare: string | null;
    toSquare: string | null;
    san: string | null;
    uci: string | null;
    fenBefore: string | null;
    fenAfter: string | null;
    result: $Enums.MoveResult | null;
    timeSpentMs: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
};
export type GameMoveMaxAggregateOutputType = {
    id: string | null;
    gameId: string | null;
    moveNumber: number | null;
    moverId: string | null;
    color: $Enums.GameColor | null;
    fromSquare: string | null;
    toSquare: string | null;
    san: string | null;
    uci: string | null;
    fenBefore: string | null;
    fenAfter: string | null;
    result: $Enums.MoveResult | null;
    timeSpentMs: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
};
export type GameMoveCountAggregateOutputType = {
    id: number;
    gameId: number;
    moveNumber: number;
    moverId: number;
    color: number;
    fromSquare: number;
    toSquare: number;
    san: number;
    uci: number;
    fenBefore: number;
    fenAfter: number;
    result: number;
    timeSpentMs: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    createdById: number;
    updatedById: number;
    deletedById: number;
    _all: number;
};
export type GameMoveAvgAggregateInputType = {
    moveNumber?: true;
    timeSpentMs?: true;
};
export type GameMoveSumAggregateInputType = {
    moveNumber?: true;
    timeSpentMs?: true;
};
export type GameMoveMinAggregateInputType = {
    id?: true;
    gameId?: true;
    moveNumber?: true;
    moverId?: true;
    color?: true;
    fromSquare?: true;
    toSquare?: true;
    san?: true;
    uci?: true;
    fenBefore?: true;
    fenAfter?: true;
    result?: true;
    timeSpentMs?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
};
export type GameMoveMaxAggregateInputType = {
    id?: true;
    gameId?: true;
    moveNumber?: true;
    moverId?: true;
    color?: true;
    fromSquare?: true;
    toSquare?: true;
    san?: true;
    uci?: true;
    fenBefore?: true;
    fenAfter?: true;
    result?: true;
    timeSpentMs?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
};
export type GameMoveCountAggregateInputType = {
    id?: true;
    gameId?: true;
    moveNumber?: true;
    moverId?: true;
    color?: true;
    fromSquare?: true;
    toSquare?: true;
    san?: true;
    uci?: true;
    fenBefore?: true;
    fenAfter?: true;
    result?: true;
    timeSpentMs?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
    _all?: true;
};
export type GameMoveAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which GameMove to aggregate.
     */
    where?: Prisma.GameMoveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GameMoves to fetch.
     */
    orderBy?: Prisma.GameMoveOrderByWithRelationInput | Prisma.GameMoveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.GameMoveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GameMoves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GameMoves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned GameMoves
    **/
    _count?: true | GameMoveCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: GameMoveAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: GameMoveSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: GameMoveMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: GameMoveMaxAggregateInputType;
};
export type GetGameMoveAggregateType<T extends GameMoveAggregateArgs> = {
    [P in keyof T & keyof AggregateGameMove]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGameMove[P]> : Prisma.GetScalarType<T[P], AggregateGameMove[P]>;
};
export type GameMoveGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GameMoveWhereInput;
    orderBy?: Prisma.GameMoveOrderByWithAggregationInput | Prisma.GameMoveOrderByWithAggregationInput[];
    by: Prisma.GameMoveScalarFieldEnum[] | Prisma.GameMoveScalarFieldEnum;
    having?: Prisma.GameMoveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GameMoveCountAggregateInputType | true;
    _avg?: GameMoveAvgAggregateInputType;
    _sum?: GameMoveSumAggregateInputType;
    _min?: GameMoveMinAggregateInputType;
    _max?: GameMoveMaxAggregateInputType;
};
export type GameMoveGroupByOutputType = {
    id: string;
    gameId: string;
    moveNumber: number;
    moverId: string | null;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san: string | null;
    uci: string | null;
    fenBefore: string | null;
    fenAfter: string | null;
    result: $Enums.MoveResult;
    timeSpentMs: number | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
    _count: GameMoveCountAggregateOutputType | null;
    _avg: GameMoveAvgAggregateOutputType | null;
    _sum: GameMoveSumAggregateOutputType | null;
    _min: GameMoveMinAggregateOutputType | null;
    _max: GameMoveMaxAggregateOutputType | null;
};
export type GetGameMoveGroupByPayload<T extends GameMoveGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GameMoveGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GameMoveGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GameMoveGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GameMoveGroupByOutputType[P]>;
}>>;
export type GameMoveWhereInput = {
    AND?: Prisma.GameMoveWhereInput | Prisma.GameMoveWhereInput[];
    OR?: Prisma.GameMoveWhereInput[];
    NOT?: Prisma.GameMoveWhereInput | Prisma.GameMoveWhereInput[];
    id?: Prisma.StringFilter<"GameMove"> | string;
    gameId?: Prisma.StringFilter<"GameMove"> | string;
    moveNumber?: Prisma.IntFilter<"GameMove"> | number;
    moverId?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    color?: Prisma.EnumGameColorFilter<"GameMove"> | $Enums.GameColor;
    fromSquare?: Prisma.StringFilter<"GameMove"> | string;
    toSquare?: Prisma.StringFilter<"GameMove"> | string;
    san?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    uci?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    fenBefore?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    fenAfter?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    result?: Prisma.EnumMoveResultFilter<"GameMove"> | $Enums.MoveResult;
    timeSpentMs?: Prisma.IntNullableFilter<"GameMove"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"GameMove"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GameMove"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"GameMove"> | Date | string | null;
    createdById?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    game?: Prisma.XOR<Prisma.GameScalarRelationFilter, Prisma.GameWhereInput>;
    mover?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    deletedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type GameMoveOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    gameId?: Prisma.SortOrder;
    moveNumber?: Prisma.SortOrder;
    moverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fromSquare?: Prisma.SortOrder;
    toSquare?: Prisma.SortOrder;
    san?: Prisma.SortOrderInput | Prisma.SortOrder;
    uci?: Prisma.SortOrderInput | Prisma.SortOrder;
    fenBefore?: Prisma.SortOrderInput | Prisma.SortOrder;
    fenAfter?: Prisma.SortOrderInput | Prisma.SortOrder;
    result?: Prisma.SortOrder;
    timeSpentMs?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    game?: Prisma.GameOrderByWithRelationInput;
    mover?: Prisma.UserOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    updatedBy?: Prisma.UserOrderByWithRelationInput;
    deletedBy?: Prisma.UserOrderByWithRelationInput;
};
export type GameMoveWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    gameId_moveNumber?: Prisma.GameMoveGameIdMoveNumberCompoundUniqueInput;
    AND?: Prisma.GameMoveWhereInput | Prisma.GameMoveWhereInput[];
    OR?: Prisma.GameMoveWhereInput[];
    NOT?: Prisma.GameMoveWhereInput | Prisma.GameMoveWhereInput[];
    gameId?: Prisma.StringFilter<"GameMove"> | string;
    moveNumber?: Prisma.IntFilter<"GameMove"> | number;
    moverId?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    color?: Prisma.EnumGameColorFilter<"GameMove"> | $Enums.GameColor;
    fromSquare?: Prisma.StringFilter<"GameMove"> | string;
    toSquare?: Prisma.StringFilter<"GameMove"> | string;
    san?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    uci?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    fenBefore?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    fenAfter?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    result?: Prisma.EnumMoveResultFilter<"GameMove"> | $Enums.MoveResult;
    timeSpentMs?: Prisma.IntNullableFilter<"GameMove"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"GameMove"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GameMove"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"GameMove"> | Date | string | null;
    createdById?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    game?: Prisma.XOR<Prisma.GameScalarRelationFilter, Prisma.GameWhereInput>;
    mover?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    deletedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "gameId_moveNumber">;
export type GameMoveOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    gameId?: Prisma.SortOrder;
    moveNumber?: Prisma.SortOrder;
    moverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fromSquare?: Prisma.SortOrder;
    toSquare?: Prisma.SortOrder;
    san?: Prisma.SortOrderInput | Prisma.SortOrder;
    uci?: Prisma.SortOrderInput | Prisma.SortOrder;
    fenBefore?: Prisma.SortOrderInput | Prisma.SortOrder;
    fenAfter?: Prisma.SortOrderInput | Prisma.SortOrder;
    result?: Prisma.SortOrder;
    timeSpentMs?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.GameMoveCountOrderByAggregateInput;
    _avg?: Prisma.GameMoveAvgOrderByAggregateInput;
    _max?: Prisma.GameMoveMaxOrderByAggregateInput;
    _min?: Prisma.GameMoveMinOrderByAggregateInput;
    _sum?: Prisma.GameMoveSumOrderByAggregateInput;
};
export type GameMoveScalarWhereWithAggregatesInput = {
    AND?: Prisma.GameMoveScalarWhereWithAggregatesInput | Prisma.GameMoveScalarWhereWithAggregatesInput[];
    OR?: Prisma.GameMoveScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GameMoveScalarWhereWithAggregatesInput | Prisma.GameMoveScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GameMove"> | string;
    gameId?: Prisma.StringWithAggregatesFilter<"GameMove"> | string;
    moveNumber?: Prisma.IntWithAggregatesFilter<"GameMove"> | number;
    moverId?: Prisma.StringNullableWithAggregatesFilter<"GameMove"> | string | null;
    color?: Prisma.EnumGameColorWithAggregatesFilter<"GameMove"> | $Enums.GameColor;
    fromSquare?: Prisma.StringWithAggregatesFilter<"GameMove"> | string;
    toSquare?: Prisma.StringWithAggregatesFilter<"GameMove"> | string;
    san?: Prisma.StringNullableWithAggregatesFilter<"GameMove"> | string | null;
    uci?: Prisma.StringNullableWithAggregatesFilter<"GameMove"> | string | null;
    fenBefore?: Prisma.StringNullableWithAggregatesFilter<"GameMove"> | string | null;
    fenAfter?: Prisma.StringNullableWithAggregatesFilter<"GameMove"> | string | null;
    result?: Prisma.EnumMoveResultWithAggregatesFilter<"GameMove"> | $Enums.MoveResult;
    timeSpentMs?: Prisma.IntNullableWithAggregatesFilter<"GameMove"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GameMove"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"GameMove"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"GameMove"> | Date | string | null;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"GameMove"> | string | null;
    updatedById?: Prisma.StringNullableWithAggregatesFilter<"GameMove"> | string | null;
    deletedById?: Prisma.StringNullableWithAggregatesFilter<"GameMove"> | string | null;
};
export type GameMoveCreateInput = {
    id?: string;
    moveNumber: number;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    game: Prisma.GameCreateNestedOneWithoutMovesInput;
    mover?: Prisma.UserCreateNestedOneWithoutMovesMadeInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedMovesInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedMovesInput;
    deletedBy?: Prisma.UserCreateNestedOneWithoutDeletedMovesInput;
};
export type GameMoveUncheckedCreateInput = {
    id?: string;
    gameId: string;
    moveNumber: number;
    moverId?: string | null;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameMoveUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    game?: Prisma.GameUpdateOneRequiredWithoutMovesNestedInput;
    mover?: Prisma.UserUpdateOneWithoutMovesMadeNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedMovesNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedMovesNestedInput;
    deletedBy?: Prisma.UserUpdateOneWithoutDeletedMovesNestedInput;
};
export type GameMoveUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gameId?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    moverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameMoveCreateManyInput = {
    id?: string;
    gameId: string;
    moveNumber: number;
    moverId?: string | null;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameMoveUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GameMoveUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gameId?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    moverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameMoveListRelationFilter = {
    every?: Prisma.GameMoveWhereInput;
    some?: Prisma.GameMoveWhereInput;
    none?: Prisma.GameMoveWhereInput;
};
export type GameMoveOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GameMoveGameIdMoveNumberCompoundUniqueInput = {
    gameId: string;
    moveNumber: number;
};
export type GameMoveCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    gameId?: Prisma.SortOrder;
    moveNumber?: Prisma.SortOrder;
    moverId?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fromSquare?: Prisma.SortOrder;
    toSquare?: Prisma.SortOrder;
    san?: Prisma.SortOrder;
    uci?: Prisma.SortOrder;
    fenBefore?: Prisma.SortOrder;
    fenAfter?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    timeSpentMs?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
};
export type GameMoveAvgOrderByAggregateInput = {
    moveNumber?: Prisma.SortOrder;
    timeSpentMs?: Prisma.SortOrder;
};
export type GameMoveMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    gameId?: Prisma.SortOrder;
    moveNumber?: Prisma.SortOrder;
    moverId?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fromSquare?: Prisma.SortOrder;
    toSquare?: Prisma.SortOrder;
    san?: Prisma.SortOrder;
    uci?: Prisma.SortOrder;
    fenBefore?: Prisma.SortOrder;
    fenAfter?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    timeSpentMs?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
};
export type GameMoveMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    gameId?: Prisma.SortOrder;
    moveNumber?: Prisma.SortOrder;
    moverId?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fromSquare?: Prisma.SortOrder;
    toSquare?: Prisma.SortOrder;
    san?: Prisma.SortOrder;
    uci?: Prisma.SortOrder;
    fenBefore?: Prisma.SortOrder;
    fenAfter?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    timeSpentMs?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
};
export type GameMoveSumOrderByAggregateInput = {
    moveNumber?: Prisma.SortOrder;
    timeSpentMs?: Prisma.SortOrder;
};
export type GameMoveCreateNestedManyWithoutMoverInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutMoverInput, Prisma.GameMoveUncheckedCreateWithoutMoverInput> | Prisma.GameMoveCreateWithoutMoverInput[] | Prisma.GameMoveUncheckedCreateWithoutMoverInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutMoverInput | Prisma.GameMoveCreateOrConnectWithoutMoverInput[];
    createMany?: Prisma.GameMoveCreateManyMoverInputEnvelope;
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
};
export type GameMoveCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutCreatedByInput, Prisma.GameMoveUncheckedCreateWithoutCreatedByInput> | Prisma.GameMoveCreateWithoutCreatedByInput[] | Prisma.GameMoveUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutCreatedByInput | Prisma.GameMoveCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.GameMoveCreateManyCreatedByInputEnvelope;
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
};
export type GameMoveCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutUpdatedByInput, Prisma.GameMoveUncheckedCreateWithoutUpdatedByInput> | Prisma.GameMoveCreateWithoutUpdatedByInput[] | Prisma.GameMoveUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutUpdatedByInput | Prisma.GameMoveCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.GameMoveCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
};
export type GameMoveCreateNestedManyWithoutDeletedByInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutDeletedByInput, Prisma.GameMoveUncheckedCreateWithoutDeletedByInput> | Prisma.GameMoveCreateWithoutDeletedByInput[] | Prisma.GameMoveUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutDeletedByInput | Prisma.GameMoveCreateOrConnectWithoutDeletedByInput[];
    createMany?: Prisma.GameMoveCreateManyDeletedByInputEnvelope;
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
};
export type GameMoveUncheckedCreateNestedManyWithoutMoverInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutMoverInput, Prisma.GameMoveUncheckedCreateWithoutMoverInput> | Prisma.GameMoveCreateWithoutMoverInput[] | Prisma.GameMoveUncheckedCreateWithoutMoverInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutMoverInput | Prisma.GameMoveCreateOrConnectWithoutMoverInput[];
    createMany?: Prisma.GameMoveCreateManyMoverInputEnvelope;
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
};
export type GameMoveUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutCreatedByInput, Prisma.GameMoveUncheckedCreateWithoutCreatedByInput> | Prisma.GameMoveCreateWithoutCreatedByInput[] | Prisma.GameMoveUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutCreatedByInput | Prisma.GameMoveCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.GameMoveCreateManyCreatedByInputEnvelope;
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
};
export type GameMoveUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutUpdatedByInput, Prisma.GameMoveUncheckedCreateWithoutUpdatedByInput> | Prisma.GameMoveCreateWithoutUpdatedByInput[] | Prisma.GameMoveUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutUpdatedByInput | Prisma.GameMoveCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.GameMoveCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
};
export type GameMoveUncheckedCreateNestedManyWithoutDeletedByInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutDeletedByInput, Prisma.GameMoveUncheckedCreateWithoutDeletedByInput> | Prisma.GameMoveCreateWithoutDeletedByInput[] | Prisma.GameMoveUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutDeletedByInput | Prisma.GameMoveCreateOrConnectWithoutDeletedByInput[];
    createMany?: Prisma.GameMoveCreateManyDeletedByInputEnvelope;
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
};
export type GameMoveUpdateManyWithoutMoverNestedInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutMoverInput, Prisma.GameMoveUncheckedCreateWithoutMoverInput> | Prisma.GameMoveCreateWithoutMoverInput[] | Prisma.GameMoveUncheckedCreateWithoutMoverInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutMoverInput | Prisma.GameMoveCreateOrConnectWithoutMoverInput[];
    upsert?: Prisma.GameMoveUpsertWithWhereUniqueWithoutMoverInput | Prisma.GameMoveUpsertWithWhereUniqueWithoutMoverInput[];
    createMany?: Prisma.GameMoveCreateManyMoverInputEnvelope;
    set?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    disconnect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    delete?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    update?: Prisma.GameMoveUpdateWithWhereUniqueWithoutMoverInput | Prisma.GameMoveUpdateWithWhereUniqueWithoutMoverInput[];
    updateMany?: Prisma.GameMoveUpdateManyWithWhereWithoutMoverInput | Prisma.GameMoveUpdateManyWithWhereWithoutMoverInput[];
    deleteMany?: Prisma.GameMoveScalarWhereInput | Prisma.GameMoveScalarWhereInput[];
};
export type GameMoveUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutCreatedByInput, Prisma.GameMoveUncheckedCreateWithoutCreatedByInput> | Prisma.GameMoveCreateWithoutCreatedByInput[] | Prisma.GameMoveUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutCreatedByInput | Prisma.GameMoveCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.GameMoveUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.GameMoveUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.GameMoveCreateManyCreatedByInputEnvelope;
    set?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    disconnect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    delete?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    update?: Prisma.GameMoveUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.GameMoveUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.GameMoveUpdateManyWithWhereWithoutCreatedByInput | Prisma.GameMoveUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.GameMoveScalarWhereInput | Prisma.GameMoveScalarWhereInput[];
};
export type GameMoveUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutUpdatedByInput, Prisma.GameMoveUncheckedCreateWithoutUpdatedByInput> | Prisma.GameMoveCreateWithoutUpdatedByInput[] | Prisma.GameMoveUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutUpdatedByInput | Prisma.GameMoveCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.GameMoveUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.GameMoveUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.GameMoveCreateManyUpdatedByInputEnvelope;
    set?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    disconnect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    delete?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    update?: Prisma.GameMoveUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.GameMoveUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.GameMoveUpdateManyWithWhereWithoutUpdatedByInput | Prisma.GameMoveUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.GameMoveScalarWhereInput | Prisma.GameMoveScalarWhereInput[];
};
export type GameMoveUpdateManyWithoutDeletedByNestedInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutDeletedByInput, Prisma.GameMoveUncheckedCreateWithoutDeletedByInput> | Prisma.GameMoveCreateWithoutDeletedByInput[] | Prisma.GameMoveUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutDeletedByInput | Prisma.GameMoveCreateOrConnectWithoutDeletedByInput[];
    upsert?: Prisma.GameMoveUpsertWithWhereUniqueWithoutDeletedByInput | Prisma.GameMoveUpsertWithWhereUniqueWithoutDeletedByInput[];
    createMany?: Prisma.GameMoveCreateManyDeletedByInputEnvelope;
    set?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    disconnect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    delete?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    update?: Prisma.GameMoveUpdateWithWhereUniqueWithoutDeletedByInput | Prisma.GameMoveUpdateWithWhereUniqueWithoutDeletedByInput[];
    updateMany?: Prisma.GameMoveUpdateManyWithWhereWithoutDeletedByInput | Prisma.GameMoveUpdateManyWithWhereWithoutDeletedByInput[];
    deleteMany?: Prisma.GameMoveScalarWhereInput | Prisma.GameMoveScalarWhereInput[];
};
export type GameMoveUncheckedUpdateManyWithoutMoverNestedInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutMoverInput, Prisma.GameMoveUncheckedCreateWithoutMoverInput> | Prisma.GameMoveCreateWithoutMoverInput[] | Prisma.GameMoveUncheckedCreateWithoutMoverInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutMoverInput | Prisma.GameMoveCreateOrConnectWithoutMoverInput[];
    upsert?: Prisma.GameMoveUpsertWithWhereUniqueWithoutMoverInput | Prisma.GameMoveUpsertWithWhereUniqueWithoutMoverInput[];
    createMany?: Prisma.GameMoveCreateManyMoverInputEnvelope;
    set?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    disconnect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    delete?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    update?: Prisma.GameMoveUpdateWithWhereUniqueWithoutMoverInput | Prisma.GameMoveUpdateWithWhereUniqueWithoutMoverInput[];
    updateMany?: Prisma.GameMoveUpdateManyWithWhereWithoutMoverInput | Prisma.GameMoveUpdateManyWithWhereWithoutMoverInput[];
    deleteMany?: Prisma.GameMoveScalarWhereInput | Prisma.GameMoveScalarWhereInput[];
};
export type GameMoveUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutCreatedByInput, Prisma.GameMoveUncheckedCreateWithoutCreatedByInput> | Prisma.GameMoveCreateWithoutCreatedByInput[] | Prisma.GameMoveUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutCreatedByInput | Prisma.GameMoveCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.GameMoveUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.GameMoveUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.GameMoveCreateManyCreatedByInputEnvelope;
    set?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    disconnect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    delete?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    update?: Prisma.GameMoveUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.GameMoveUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.GameMoveUpdateManyWithWhereWithoutCreatedByInput | Prisma.GameMoveUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.GameMoveScalarWhereInput | Prisma.GameMoveScalarWhereInput[];
};
export type GameMoveUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutUpdatedByInput, Prisma.GameMoveUncheckedCreateWithoutUpdatedByInput> | Prisma.GameMoveCreateWithoutUpdatedByInput[] | Prisma.GameMoveUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutUpdatedByInput | Prisma.GameMoveCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.GameMoveUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.GameMoveUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.GameMoveCreateManyUpdatedByInputEnvelope;
    set?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    disconnect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    delete?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    update?: Prisma.GameMoveUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.GameMoveUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.GameMoveUpdateManyWithWhereWithoutUpdatedByInput | Prisma.GameMoveUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.GameMoveScalarWhereInput | Prisma.GameMoveScalarWhereInput[];
};
export type GameMoveUncheckedUpdateManyWithoutDeletedByNestedInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutDeletedByInput, Prisma.GameMoveUncheckedCreateWithoutDeletedByInput> | Prisma.GameMoveCreateWithoutDeletedByInput[] | Prisma.GameMoveUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutDeletedByInput | Prisma.GameMoveCreateOrConnectWithoutDeletedByInput[];
    upsert?: Prisma.GameMoveUpsertWithWhereUniqueWithoutDeletedByInput | Prisma.GameMoveUpsertWithWhereUniqueWithoutDeletedByInput[];
    createMany?: Prisma.GameMoveCreateManyDeletedByInputEnvelope;
    set?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    disconnect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    delete?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    update?: Prisma.GameMoveUpdateWithWhereUniqueWithoutDeletedByInput | Prisma.GameMoveUpdateWithWhereUniqueWithoutDeletedByInput[];
    updateMany?: Prisma.GameMoveUpdateManyWithWhereWithoutDeletedByInput | Prisma.GameMoveUpdateManyWithWhereWithoutDeletedByInput[];
    deleteMany?: Prisma.GameMoveScalarWhereInput | Prisma.GameMoveScalarWhereInput[];
};
export type GameMoveCreateNestedManyWithoutGameInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutGameInput, Prisma.GameMoveUncheckedCreateWithoutGameInput> | Prisma.GameMoveCreateWithoutGameInput[] | Prisma.GameMoveUncheckedCreateWithoutGameInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutGameInput | Prisma.GameMoveCreateOrConnectWithoutGameInput[];
    createMany?: Prisma.GameMoveCreateManyGameInputEnvelope;
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
};
export type GameMoveUncheckedCreateNestedManyWithoutGameInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutGameInput, Prisma.GameMoveUncheckedCreateWithoutGameInput> | Prisma.GameMoveCreateWithoutGameInput[] | Prisma.GameMoveUncheckedCreateWithoutGameInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutGameInput | Prisma.GameMoveCreateOrConnectWithoutGameInput[];
    createMany?: Prisma.GameMoveCreateManyGameInputEnvelope;
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
};
export type GameMoveUpdateManyWithoutGameNestedInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutGameInput, Prisma.GameMoveUncheckedCreateWithoutGameInput> | Prisma.GameMoveCreateWithoutGameInput[] | Prisma.GameMoveUncheckedCreateWithoutGameInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutGameInput | Prisma.GameMoveCreateOrConnectWithoutGameInput[];
    upsert?: Prisma.GameMoveUpsertWithWhereUniqueWithoutGameInput | Prisma.GameMoveUpsertWithWhereUniqueWithoutGameInput[];
    createMany?: Prisma.GameMoveCreateManyGameInputEnvelope;
    set?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    disconnect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    delete?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    update?: Prisma.GameMoveUpdateWithWhereUniqueWithoutGameInput | Prisma.GameMoveUpdateWithWhereUniqueWithoutGameInput[];
    updateMany?: Prisma.GameMoveUpdateManyWithWhereWithoutGameInput | Prisma.GameMoveUpdateManyWithWhereWithoutGameInput[];
    deleteMany?: Prisma.GameMoveScalarWhereInput | Prisma.GameMoveScalarWhereInput[];
};
export type GameMoveUncheckedUpdateManyWithoutGameNestedInput = {
    create?: Prisma.XOR<Prisma.GameMoveCreateWithoutGameInput, Prisma.GameMoveUncheckedCreateWithoutGameInput> | Prisma.GameMoveCreateWithoutGameInput[] | Prisma.GameMoveUncheckedCreateWithoutGameInput[];
    connectOrCreate?: Prisma.GameMoveCreateOrConnectWithoutGameInput | Prisma.GameMoveCreateOrConnectWithoutGameInput[];
    upsert?: Prisma.GameMoveUpsertWithWhereUniqueWithoutGameInput | Prisma.GameMoveUpsertWithWhereUniqueWithoutGameInput[];
    createMany?: Prisma.GameMoveCreateManyGameInputEnvelope;
    set?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    disconnect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    delete?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    connect?: Prisma.GameMoveWhereUniqueInput | Prisma.GameMoveWhereUniqueInput[];
    update?: Prisma.GameMoveUpdateWithWhereUniqueWithoutGameInput | Prisma.GameMoveUpdateWithWhereUniqueWithoutGameInput[];
    updateMany?: Prisma.GameMoveUpdateManyWithWhereWithoutGameInput | Prisma.GameMoveUpdateManyWithWhereWithoutGameInput[];
    deleteMany?: Prisma.GameMoveScalarWhereInput | Prisma.GameMoveScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumGameColorFieldUpdateOperationsInput = {
    set?: $Enums.GameColor;
};
export type EnumMoveResultFieldUpdateOperationsInput = {
    set?: $Enums.MoveResult;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type GameMoveCreateWithoutMoverInput = {
    id?: string;
    moveNumber: number;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    game: Prisma.GameCreateNestedOneWithoutMovesInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedMovesInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedMovesInput;
    deletedBy?: Prisma.UserCreateNestedOneWithoutDeletedMovesInput;
};
export type GameMoveUncheckedCreateWithoutMoverInput = {
    id?: string;
    gameId: string;
    moveNumber: number;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameMoveCreateOrConnectWithoutMoverInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    create: Prisma.XOR<Prisma.GameMoveCreateWithoutMoverInput, Prisma.GameMoveUncheckedCreateWithoutMoverInput>;
};
export type GameMoveCreateManyMoverInputEnvelope = {
    data: Prisma.GameMoveCreateManyMoverInput | Prisma.GameMoveCreateManyMoverInput[];
    skipDuplicates?: boolean;
};
export type GameMoveCreateWithoutCreatedByInput = {
    id?: string;
    moveNumber: number;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    game: Prisma.GameCreateNestedOneWithoutMovesInput;
    mover?: Prisma.UserCreateNestedOneWithoutMovesMadeInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedMovesInput;
    deletedBy?: Prisma.UserCreateNestedOneWithoutDeletedMovesInput;
};
export type GameMoveUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    gameId: string;
    moveNumber: number;
    moverId?: string | null;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameMoveCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    create: Prisma.XOR<Prisma.GameMoveCreateWithoutCreatedByInput, Prisma.GameMoveUncheckedCreateWithoutCreatedByInput>;
};
export type GameMoveCreateManyCreatedByInputEnvelope = {
    data: Prisma.GameMoveCreateManyCreatedByInput | Prisma.GameMoveCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type GameMoveCreateWithoutUpdatedByInput = {
    id?: string;
    moveNumber: number;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    game: Prisma.GameCreateNestedOneWithoutMovesInput;
    mover?: Prisma.UserCreateNestedOneWithoutMovesMadeInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedMovesInput;
    deletedBy?: Prisma.UserCreateNestedOneWithoutDeletedMovesInput;
};
export type GameMoveUncheckedCreateWithoutUpdatedByInput = {
    id?: string;
    gameId: string;
    moveNumber: number;
    moverId?: string | null;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    deletedById?: string | null;
};
export type GameMoveCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    create: Prisma.XOR<Prisma.GameMoveCreateWithoutUpdatedByInput, Prisma.GameMoveUncheckedCreateWithoutUpdatedByInput>;
};
export type GameMoveCreateManyUpdatedByInputEnvelope = {
    data: Prisma.GameMoveCreateManyUpdatedByInput | Prisma.GameMoveCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type GameMoveCreateWithoutDeletedByInput = {
    id?: string;
    moveNumber: number;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    game: Prisma.GameCreateNestedOneWithoutMovesInput;
    mover?: Prisma.UserCreateNestedOneWithoutMovesMadeInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedMovesInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedMovesInput;
};
export type GameMoveUncheckedCreateWithoutDeletedByInput = {
    id?: string;
    gameId: string;
    moveNumber: number;
    moverId?: string | null;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
};
export type GameMoveCreateOrConnectWithoutDeletedByInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    create: Prisma.XOR<Prisma.GameMoveCreateWithoutDeletedByInput, Prisma.GameMoveUncheckedCreateWithoutDeletedByInput>;
};
export type GameMoveCreateManyDeletedByInputEnvelope = {
    data: Prisma.GameMoveCreateManyDeletedByInput | Prisma.GameMoveCreateManyDeletedByInput[];
    skipDuplicates?: boolean;
};
export type GameMoveUpsertWithWhereUniqueWithoutMoverInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    update: Prisma.XOR<Prisma.GameMoveUpdateWithoutMoverInput, Prisma.GameMoveUncheckedUpdateWithoutMoverInput>;
    create: Prisma.XOR<Prisma.GameMoveCreateWithoutMoverInput, Prisma.GameMoveUncheckedCreateWithoutMoverInput>;
};
export type GameMoveUpdateWithWhereUniqueWithoutMoverInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    data: Prisma.XOR<Prisma.GameMoveUpdateWithoutMoverInput, Prisma.GameMoveUncheckedUpdateWithoutMoverInput>;
};
export type GameMoveUpdateManyWithWhereWithoutMoverInput = {
    where: Prisma.GameMoveScalarWhereInput;
    data: Prisma.XOR<Prisma.GameMoveUpdateManyMutationInput, Prisma.GameMoveUncheckedUpdateManyWithoutMoverInput>;
};
export type GameMoveScalarWhereInput = {
    AND?: Prisma.GameMoveScalarWhereInput | Prisma.GameMoveScalarWhereInput[];
    OR?: Prisma.GameMoveScalarWhereInput[];
    NOT?: Prisma.GameMoveScalarWhereInput | Prisma.GameMoveScalarWhereInput[];
    id?: Prisma.StringFilter<"GameMove"> | string;
    gameId?: Prisma.StringFilter<"GameMove"> | string;
    moveNumber?: Prisma.IntFilter<"GameMove"> | number;
    moverId?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    color?: Prisma.EnumGameColorFilter<"GameMove"> | $Enums.GameColor;
    fromSquare?: Prisma.StringFilter<"GameMove"> | string;
    toSquare?: Prisma.StringFilter<"GameMove"> | string;
    san?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    uci?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    fenBefore?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    fenAfter?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    result?: Prisma.EnumMoveResultFilter<"GameMove"> | $Enums.MoveResult;
    timeSpentMs?: Prisma.IntNullableFilter<"GameMove"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"GameMove"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GameMove"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"GameMove"> | Date | string | null;
    createdById?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"GameMove"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"GameMove"> | string | null;
};
export type GameMoveUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    update: Prisma.XOR<Prisma.GameMoveUpdateWithoutCreatedByInput, Prisma.GameMoveUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.GameMoveCreateWithoutCreatedByInput, Prisma.GameMoveUncheckedCreateWithoutCreatedByInput>;
};
export type GameMoveUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    data: Prisma.XOR<Prisma.GameMoveUpdateWithoutCreatedByInput, Prisma.GameMoveUncheckedUpdateWithoutCreatedByInput>;
};
export type GameMoveUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.GameMoveScalarWhereInput;
    data: Prisma.XOR<Prisma.GameMoveUpdateManyMutationInput, Prisma.GameMoveUncheckedUpdateManyWithoutCreatedByInput>;
};
export type GameMoveUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    update: Prisma.XOR<Prisma.GameMoveUpdateWithoutUpdatedByInput, Prisma.GameMoveUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.GameMoveCreateWithoutUpdatedByInput, Prisma.GameMoveUncheckedCreateWithoutUpdatedByInput>;
};
export type GameMoveUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    data: Prisma.XOR<Prisma.GameMoveUpdateWithoutUpdatedByInput, Prisma.GameMoveUncheckedUpdateWithoutUpdatedByInput>;
};
export type GameMoveUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.GameMoveScalarWhereInput;
    data: Prisma.XOR<Prisma.GameMoveUpdateManyMutationInput, Prisma.GameMoveUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type GameMoveUpsertWithWhereUniqueWithoutDeletedByInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    update: Prisma.XOR<Prisma.GameMoveUpdateWithoutDeletedByInput, Prisma.GameMoveUncheckedUpdateWithoutDeletedByInput>;
    create: Prisma.XOR<Prisma.GameMoveCreateWithoutDeletedByInput, Prisma.GameMoveUncheckedCreateWithoutDeletedByInput>;
};
export type GameMoveUpdateWithWhereUniqueWithoutDeletedByInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    data: Prisma.XOR<Prisma.GameMoveUpdateWithoutDeletedByInput, Prisma.GameMoveUncheckedUpdateWithoutDeletedByInput>;
};
export type GameMoveUpdateManyWithWhereWithoutDeletedByInput = {
    where: Prisma.GameMoveScalarWhereInput;
    data: Prisma.XOR<Prisma.GameMoveUpdateManyMutationInput, Prisma.GameMoveUncheckedUpdateManyWithoutDeletedByInput>;
};
export type GameMoveCreateWithoutGameInput = {
    id?: string;
    moveNumber: number;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    mover?: Prisma.UserCreateNestedOneWithoutMovesMadeInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedMovesInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedMovesInput;
    deletedBy?: Prisma.UserCreateNestedOneWithoutDeletedMovesInput;
};
export type GameMoveUncheckedCreateWithoutGameInput = {
    id?: string;
    moveNumber: number;
    moverId?: string | null;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameMoveCreateOrConnectWithoutGameInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    create: Prisma.XOR<Prisma.GameMoveCreateWithoutGameInput, Prisma.GameMoveUncheckedCreateWithoutGameInput>;
};
export type GameMoveCreateManyGameInputEnvelope = {
    data: Prisma.GameMoveCreateManyGameInput | Prisma.GameMoveCreateManyGameInput[];
    skipDuplicates?: boolean;
};
export type GameMoveUpsertWithWhereUniqueWithoutGameInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    update: Prisma.XOR<Prisma.GameMoveUpdateWithoutGameInput, Prisma.GameMoveUncheckedUpdateWithoutGameInput>;
    create: Prisma.XOR<Prisma.GameMoveCreateWithoutGameInput, Prisma.GameMoveUncheckedCreateWithoutGameInput>;
};
export type GameMoveUpdateWithWhereUniqueWithoutGameInput = {
    where: Prisma.GameMoveWhereUniqueInput;
    data: Prisma.XOR<Prisma.GameMoveUpdateWithoutGameInput, Prisma.GameMoveUncheckedUpdateWithoutGameInput>;
};
export type GameMoveUpdateManyWithWhereWithoutGameInput = {
    where: Prisma.GameMoveScalarWhereInput;
    data: Prisma.XOR<Prisma.GameMoveUpdateManyMutationInput, Prisma.GameMoveUncheckedUpdateManyWithoutGameInput>;
};
export type GameMoveCreateManyMoverInput = {
    id?: string;
    gameId: string;
    moveNumber: number;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameMoveCreateManyCreatedByInput = {
    id?: string;
    gameId: string;
    moveNumber: number;
    moverId?: string | null;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameMoveCreateManyUpdatedByInput = {
    id?: string;
    gameId: string;
    moveNumber: number;
    moverId?: string | null;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    deletedById?: string | null;
};
export type GameMoveCreateManyDeletedByInput = {
    id?: string;
    gameId: string;
    moveNumber: number;
    moverId?: string | null;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
};
export type GameMoveUpdateWithoutMoverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    game?: Prisma.GameUpdateOneRequiredWithoutMovesNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedMovesNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedMovesNestedInput;
    deletedBy?: Prisma.UserUpdateOneWithoutDeletedMovesNestedInput;
};
export type GameMoveUncheckedUpdateWithoutMoverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gameId?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameMoveUncheckedUpdateManyWithoutMoverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gameId?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameMoveUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    game?: Prisma.GameUpdateOneRequiredWithoutMovesNestedInput;
    mover?: Prisma.UserUpdateOneWithoutMovesMadeNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedMovesNestedInput;
    deletedBy?: Prisma.UserUpdateOneWithoutDeletedMovesNestedInput;
};
export type GameMoveUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gameId?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    moverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameMoveUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gameId?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    moverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameMoveUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    game?: Prisma.GameUpdateOneRequiredWithoutMovesNestedInput;
    mover?: Prisma.UserUpdateOneWithoutMovesMadeNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedMovesNestedInput;
    deletedBy?: Prisma.UserUpdateOneWithoutDeletedMovesNestedInput;
};
export type GameMoveUncheckedUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gameId?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    moverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameMoveUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gameId?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    moverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameMoveUpdateWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    game?: Prisma.GameUpdateOneRequiredWithoutMovesNestedInput;
    mover?: Prisma.UserUpdateOneWithoutMovesMadeNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedMovesNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedMovesNestedInput;
};
export type GameMoveUncheckedUpdateWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gameId?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    moverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameMoveUncheckedUpdateManyWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gameId?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    moverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameMoveCreateManyGameInput = {
    id?: string;
    moveNumber: number;
    moverId?: string | null;
    color: $Enums.GameColor;
    fromSquare: string;
    toSquare: string;
    san?: string | null;
    uci?: string | null;
    fenBefore?: string | null;
    fenAfter?: string | null;
    result?: $Enums.MoveResult;
    timeSpentMs?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameMoveUpdateWithoutGameInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    mover?: Prisma.UserUpdateOneWithoutMovesMadeNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedMovesNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedMovesNestedInput;
    deletedBy?: Prisma.UserUpdateOneWithoutDeletedMovesNestedInput;
};
export type GameMoveUncheckedUpdateWithoutGameInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    moverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameMoveUncheckedUpdateManyWithoutGameInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moveNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    moverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.EnumGameColorFieldUpdateOperationsInput | $Enums.GameColor;
    fromSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    toSquare?: Prisma.StringFieldUpdateOperationsInput | string;
    san?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uci?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenBefore?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fenAfter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.EnumMoveResultFieldUpdateOperationsInput | $Enums.MoveResult;
    timeSpentMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameMoveSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    gameId?: boolean;
    moveNumber?: boolean;
    moverId?: boolean;
    color?: boolean;
    fromSquare?: boolean;
    toSquare?: boolean;
    san?: boolean;
    uci?: boolean;
    fenBefore?: boolean;
    fenAfter?: boolean;
    result?: boolean;
    timeSpentMs?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    game?: boolean | Prisma.GameDefaultArgs<ExtArgs>;
    mover?: boolean | Prisma.GameMove$moverArgs<ExtArgs>;
    createdBy?: boolean | Prisma.GameMove$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.GameMove$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.GameMove$deletedByArgs<ExtArgs>;
}, ExtArgs["result"]["gameMove"]>;
export type GameMoveSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    gameId?: boolean;
    moveNumber?: boolean;
    moverId?: boolean;
    color?: boolean;
    fromSquare?: boolean;
    toSquare?: boolean;
    san?: boolean;
    uci?: boolean;
    fenBefore?: boolean;
    fenAfter?: boolean;
    result?: boolean;
    timeSpentMs?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    game?: boolean | Prisma.GameDefaultArgs<ExtArgs>;
    mover?: boolean | Prisma.GameMove$moverArgs<ExtArgs>;
    createdBy?: boolean | Prisma.GameMove$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.GameMove$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.GameMove$deletedByArgs<ExtArgs>;
}, ExtArgs["result"]["gameMove"]>;
export type GameMoveSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    gameId?: boolean;
    moveNumber?: boolean;
    moverId?: boolean;
    color?: boolean;
    fromSquare?: boolean;
    toSquare?: boolean;
    san?: boolean;
    uci?: boolean;
    fenBefore?: boolean;
    fenAfter?: boolean;
    result?: boolean;
    timeSpentMs?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    game?: boolean | Prisma.GameDefaultArgs<ExtArgs>;
    mover?: boolean | Prisma.GameMove$moverArgs<ExtArgs>;
    createdBy?: boolean | Prisma.GameMove$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.GameMove$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.GameMove$deletedByArgs<ExtArgs>;
}, ExtArgs["result"]["gameMove"]>;
export type GameMoveSelectScalar = {
    id?: boolean;
    gameId?: boolean;
    moveNumber?: boolean;
    moverId?: boolean;
    color?: boolean;
    fromSquare?: boolean;
    toSquare?: boolean;
    san?: boolean;
    uci?: boolean;
    fenBefore?: boolean;
    fenAfter?: boolean;
    result?: boolean;
    timeSpentMs?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
};
export type GameMoveOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "gameId" | "moveNumber" | "moverId" | "color" | "fromSquare" | "toSquare" | "san" | "uci" | "fenBefore" | "fenAfter" | "result" | "timeSpentMs" | "createdAt" | "updatedAt" | "deletedAt" | "createdById" | "updatedById" | "deletedById", ExtArgs["result"]["gameMove"]>;
export type GameMoveInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    game?: boolean | Prisma.GameDefaultArgs<ExtArgs>;
    mover?: boolean | Prisma.GameMove$moverArgs<ExtArgs>;
    createdBy?: boolean | Prisma.GameMove$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.GameMove$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.GameMove$deletedByArgs<ExtArgs>;
};
export type GameMoveIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    game?: boolean | Prisma.GameDefaultArgs<ExtArgs>;
    mover?: boolean | Prisma.GameMove$moverArgs<ExtArgs>;
    createdBy?: boolean | Prisma.GameMove$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.GameMove$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.GameMove$deletedByArgs<ExtArgs>;
};
export type GameMoveIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    game?: boolean | Prisma.GameDefaultArgs<ExtArgs>;
    mover?: boolean | Prisma.GameMove$moverArgs<ExtArgs>;
    createdBy?: boolean | Prisma.GameMove$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.GameMove$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.GameMove$deletedByArgs<ExtArgs>;
};
export type $GameMovePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GameMove";
    objects: {
        game: Prisma.$GamePayload<ExtArgs>;
        mover: Prisma.$UserPayload<ExtArgs> | null;
        createdBy: Prisma.$UserPayload<ExtArgs> | null;
        updatedBy: Prisma.$UserPayload<ExtArgs> | null;
        deletedBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        gameId: string;
        moveNumber: number;
        moverId: string | null;
        color: $Enums.GameColor;
        fromSquare: string;
        toSquare: string;
        san: string | null;
        uci: string | null;
        fenBefore: string | null;
        fenAfter: string | null;
        result: $Enums.MoveResult;
        timeSpentMs: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
    }, ExtArgs["result"]["gameMove"]>;
    composites: {};
};
export type GameMoveGetPayload<S extends boolean | null | undefined | GameMoveDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GameMovePayload, S>;
export type GameMoveCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GameMoveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GameMoveCountAggregateInputType | true;
};
export interface GameMoveDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GameMove'];
        meta: {
            name: 'GameMove';
        };
    };
    /**
     * Find zero or one GameMove that matches the filter.
     * @param {GameMoveFindUniqueArgs} args - Arguments to find a GameMove
     * @example
     * // Get one GameMove
     * const gameMove = await prisma.gameMove.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameMoveFindUniqueArgs>(args: Prisma.SelectSubset<T, GameMoveFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GameMoveClient<runtime.Types.Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one GameMove that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameMoveFindUniqueOrThrowArgs} args - Arguments to find a GameMove
     * @example
     * // Get one GameMove
     * const gameMove = await prisma.gameMove.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameMoveFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GameMoveFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GameMoveClient<runtime.Types.Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first GameMove that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveFindFirstArgs} args - Arguments to find a GameMove
     * @example
     * // Get one GameMove
     * const gameMove = await prisma.gameMove.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameMoveFindFirstArgs>(args?: Prisma.SelectSubset<T, GameMoveFindFirstArgs<ExtArgs>>): Prisma.Prisma__GameMoveClient<runtime.Types.Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first GameMove that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveFindFirstOrThrowArgs} args - Arguments to find a GameMove
     * @example
     * // Get one GameMove
     * const gameMove = await prisma.gameMove.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameMoveFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GameMoveFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GameMoveClient<runtime.Types.Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more GameMoves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameMoves
     * const gameMoves = await prisma.gameMove.findMany()
     *
     * // Get first 10 GameMoves
     * const gameMoves = await prisma.gameMove.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const gameMoveWithIdOnly = await prisma.gameMove.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GameMoveFindManyArgs>(args?: Prisma.SelectSubset<T, GameMoveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a GameMove.
     * @param {GameMoveCreateArgs} args - Arguments to create a GameMove.
     * @example
     * // Create one GameMove
     * const GameMove = await prisma.gameMove.create({
     *   data: {
     *     // ... data to create a GameMove
     *   }
     * })
     *
     */
    create<T extends GameMoveCreateArgs>(args: Prisma.SelectSubset<T, GameMoveCreateArgs<ExtArgs>>): Prisma.Prisma__GameMoveClient<runtime.Types.Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many GameMoves.
     * @param {GameMoveCreateManyArgs} args - Arguments to create many GameMoves.
     * @example
     * // Create many GameMoves
     * const gameMove = await prisma.gameMove.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GameMoveCreateManyArgs>(args?: Prisma.SelectSubset<T, GameMoveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many GameMoves and returns the data saved in the database.
     * @param {GameMoveCreateManyAndReturnArgs} args - Arguments to create many GameMoves.
     * @example
     * // Create many GameMoves
     * const gameMove = await prisma.gameMove.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many GameMoves and only return the `id`
     * const gameMoveWithIdOnly = await prisma.gameMove.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GameMoveCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GameMoveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a GameMove.
     * @param {GameMoveDeleteArgs} args - Arguments to delete one GameMove.
     * @example
     * // Delete one GameMove
     * const GameMove = await prisma.gameMove.delete({
     *   where: {
     *     // ... filter to delete one GameMove
     *   }
     * })
     *
     */
    delete<T extends GameMoveDeleteArgs>(args: Prisma.SelectSubset<T, GameMoveDeleteArgs<ExtArgs>>): Prisma.Prisma__GameMoveClient<runtime.Types.Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one GameMove.
     * @param {GameMoveUpdateArgs} args - Arguments to update one GameMove.
     * @example
     * // Update one GameMove
     * const gameMove = await prisma.gameMove.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GameMoveUpdateArgs>(args: Prisma.SelectSubset<T, GameMoveUpdateArgs<ExtArgs>>): Prisma.Prisma__GameMoveClient<runtime.Types.Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more GameMoves.
     * @param {GameMoveDeleteManyArgs} args - Arguments to filter GameMoves to delete.
     * @example
     * // Delete a few GameMoves
     * const { count } = await prisma.gameMove.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GameMoveDeleteManyArgs>(args?: Prisma.SelectSubset<T, GameMoveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more GameMoves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameMoves
     * const gameMove = await prisma.gameMove.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GameMoveUpdateManyArgs>(args: Prisma.SelectSubset<T, GameMoveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more GameMoves and returns the data updated in the database.
     * @param {GameMoveUpdateManyAndReturnArgs} args - Arguments to update many GameMoves.
     * @example
     * // Update many GameMoves
     * const gameMove = await prisma.gameMove.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more GameMoves and only return the `id`
     * const gameMoveWithIdOnly = await prisma.gameMove.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameMoveUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GameMoveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one GameMove.
     * @param {GameMoveUpsertArgs} args - Arguments to update or create a GameMove.
     * @example
     * // Update or create a GameMove
     * const gameMove = await prisma.gameMove.upsert({
     *   create: {
     *     // ... data to create a GameMove
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameMove we want to update
     *   }
     * })
     */
    upsert<T extends GameMoveUpsertArgs>(args: Prisma.SelectSubset<T, GameMoveUpsertArgs<ExtArgs>>): Prisma.Prisma__GameMoveClient<runtime.Types.Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of GameMoves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveCountArgs} args - Arguments to filter GameMoves to count.
     * @example
     * // Count the number of GameMoves
     * const count = await prisma.gameMove.count({
     *   where: {
     *     // ... the filter for the GameMoves we want to count
     *   }
     * })
    **/
    count<T extends GameMoveCountArgs>(args?: Prisma.Subset<T, GameMoveCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GameMoveCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a GameMove.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameMoveAggregateArgs>(args: Prisma.Subset<T, GameMoveAggregateArgs>): Prisma.PrismaPromise<GetGameMoveAggregateType<T>>;
    /**
     * Group by GameMove.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveGroupByArgs} args - Group by arguments.
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
    groupBy<T extends GameMoveGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GameMoveGroupByArgs['orderBy'];
    } : {
        orderBy?: GameMoveGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GameMoveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameMoveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the GameMove model
     */
    readonly fields: GameMoveFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for GameMove.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__GameMoveClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    game<T extends Prisma.GameDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GameDefaultArgs<ExtArgs>>): Prisma.Prisma__GameClient<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    mover<T extends Prisma.GameMove$moverArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GameMove$moverArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.GameMove$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GameMove$createdByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    updatedBy<T extends Prisma.GameMove$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GameMove$updatedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    deletedBy<T extends Prisma.GameMove$deletedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GameMove$deletedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the GameMove model
 */
export interface GameMoveFieldRefs {
    readonly id: Prisma.FieldRef<"GameMove", 'String'>;
    readonly gameId: Prisma.FieldRef<"GameMove", 'String'>;
    readonly moveNumber: Prisma.FieldRef<"GameMove", 'Int'>;
    readonly moverId: Prisma.FieldRef<"GameMove", 'String'>;
    readonly color: Prisma.FieldRef<"GameMove", 'GameColor'>;
    readonly fromSquare: Prisma.FieldRef<"GameMove", 'String'>;
    readonly toSquare: Prisma.FieldRef<"GameMove", 'String'>;
    readonly san: Prisma.FieldRef<"GameMove", 'String'>;
    readonly uci: Prisma.FieldRef<"GameMove", 'String'>;
    readonly fenBefore: Prisma.FieldRef<"GameMove", 'String'>;
    readonly fenAfter: Prisma.FieldRef<"GameMove", 'String'>;
    readonly result: Prisma.FieldRef<"GameMove", 'MoveResult'>;
    readonly timeSpentMs: Prisma.FieldRef<"GameMove", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"GameMove", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"GameMove", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"GameMove", 'DateTime'>;
    readonly createdById: Prisma.FieldRef<"GameMove", 'String'>;
    readonly updatedById: Prisma.FieldRef<"GameMove", 'String'>;
    readonly deletedById: Prisma.FieldRef<"GameMove", 'String'>;
}
/**
 * GameMove findUnique
 */
export type GameMoveFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: Prisma.GameMoveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GameMove
     */
    omit?: Prisma.GameMoveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameMoveInclude<ExtArgs> | null;
    /**
     * Filter, which GameMove to fetch.
     */
    where: Prisma.GameMoveWhereUniqueInput;
};
/**
 * GameMove findUniqueOrThrow
 */
export type GameMoveFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: Prisma.GameMoveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GameMove
     */
    omit?: Prisma.GameMoveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameMoveInclude<ExtArgs> | null;
    /**
     * Filter, which GameMove to fetch.
     */
    where: Prisma.GameMoveWhereUniqueInput;
};
/**
 * GameMove findFirst
 */
export type GameMoveFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: Prisma.GameMoveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GameMove
     */
    omit?: Prisma.GameMoveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameMoveInclude<ExtArgs> | null;
    /**
     * Filter, which GameMove to fetch.
     */
    where?: Prisma.GameMoveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GameMoves to fetch.
     */
    orderBy?: Prisma.GameMoveOrderByWithRelationInput | Prisma.GameMoveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GameMoves.
     */
    cursor?: Prisma.GameMoveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GameMoves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GameMoves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GameMoves.
     */
    distinct?: Prisma.GameMoveScalarFieldEnum | Prisma.GameMoveScalarFieldEnum[];
};
/**
 * GameMove findFirstOrThrow
 */
export type GameMoveFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: Prisma.GameMoveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GameMove
     */
    omit?: Prisma.GameMoveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameMoveInclude<ExtArgs> | null;
    /**
     * Filter, which GameMove to fetch.
     */
    where?: Prisma.GameMoveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GameMoves to fetch.
     */
    orderBy?: Prisma.GameMoveOrderByWithRelationInput | Prisma.GameMoveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GameMoves.
     */
    cursor?: Prisma.GameMoveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GameMoves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GameMoves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GameMoves.
     */
    distinct?: Prisma.GameMoveScalarFieldEnum | Prisma.GameMoveScalarFieldEnum[];
};
/**
 * GameMove findMany
 */
export type GameMoveFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: Prisma.GameMoveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GameMove
     */
    omit?: Prisma.GameMoveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameMoveInclude<ExtArgs> | null;
    /**
     * Filter, which GameMoves to fetch.
     */
    where?: Prisma.GameMoveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GameMoves to fetch.
     */
    orderBy?: Prisma.GameMoveOrderByWithRelationInput | Prisma.GameMoveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing GameMoves.
     */
    cursor?: Prisma.GameMoveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GameMoves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GameMoves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GameMoves.
     */
    distinct?: Prisma.GameMoveScalarFieldEnum | Prisma.GameMoveScalarFieldEnum[];
};
/**
 * GameMove create
 */
export type GameMoveCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: Prisma.GameMoveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GameMove
     */
    omit?: Prisma.GameMoveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameMoveInclude<ExtArgs> | null;
    /**
     * The data needed to create a GameMove.
     */
    data: Prisma.XOR<Prisma.GameMoveCreateInput, Prisma.GameMoveUncheckedCreateInput>;
};
/**
 * GameMove createMany
 */
export type GameMoveCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameMoves.
     */
    data: Prisma.GameMoveCreateManyInput | Prisma.GameMoveCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * GameMove createManyAndReturn
 */
export type GameMoveCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: Prisma.GameMoveSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GameMove
     */
    omit?: Prisma.GameMoveOmit<ExtArgs> | null;
    /**
     * The data used to create many GameMoves.
     */
    data: Prisma.GameMoveCreateManyInput | Prisma.GameMoveCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameMoveIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * GameMove update
 */
export type GameMoveUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: Prisma.GameMoveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GameMove
     */
    omit?: Prisma.GameMoveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameMoveInclude<ExtArgs> | null;
    /**
     * The data needed to update a GameMove.
     */
    data: Prisma.XOR<Prisma.GameMoveUpdateInput, Prisma.GameMoveUncheckedUpdateInput>;
    /**
     * Choose, which GameMove to update.
     */
    where: Prisma.GameMoveWhereUniqueInput;
};
/**
 * GameMove updateMany
 */
export type GameMoveUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update GameMoves.
     */
    data: Prisma.XOR<Prisma.GameMoveUpdateManyMutationInput, Prisma.GameMoveUncheckedUpdateManyInput>;
    /**
     * Filter which GameMoves to update
     */
    where?: Prisma.GameMoveWhereInput;
    /**
     * Limit how many GameMoves to update.
     */
    limit?: number;
};
/**
 * GameMove updateManyAndReturn
 */
export type GameMoveUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: Prisma.GameMoveSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GameMove
     */
    omit?: Prisma.GameMoveOmit<ExtArgs> | null;
    /**
     * The data used to update GameMoves.
     */
    data: Prisma.XOR<Prisma.GameMoveUpdateManyMutationInput, Prisma.GameMoveUncheckedUpdateManyInput>;
    /**
     * Filter which GameMoves to update
     */
    where?: Prisma.GameMoveWhereInput;
    /**
     * Limit how many GameMoves to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameMoveIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * GameMove upsert
 */
export type GameMoveUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: Prisma.GameMoveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GameMove
     */
    omit?: Prisma.GameMoveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameMoveInclude<ExtArgs> | null;
    /**
     * The filter to search for the GameMove to update in case it exists.
     */
    where: Prisma.GameMoveWhereUniqueInput;
    /**
     * In case the GameMove found by the `where` argument doesn't exist, create a new GameMove with this data.
     */
    create: Prisma.XOR<Prisma.GameMoveCreateInput, Prisma.GameMoveUncheckedCreateInput>;
    /**
     * In case the GameMove was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.GameMoveUpdateInput, Prisma.GameMoveUncheckedUpdateInput>;
};
/**
 * GameMove delete
 */
export type GameMoveDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: Prisma.GameMoveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GameMove
     */
    omit?: Prisma.GameMoveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameMoveInclude<ExtArgs> | null;
    /**
     * Filter which GameMove to delete.
     */
    where: Prisma.GameMoveWhereUniqueInput;
};
/**
 * GameMove deleteMany
 */
export type GameMoveDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which GameMoves to delete
     */
    where?: Prisma.GameMoveWhereInput;
    /**
     * Limit how many GameMoves to delete.
     */
    limit?: number;
};
/**
 * GameMove.mover
 */
export type GameMove$moverArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * GameMove.createdBy
 */
export type GameMove$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * GameMove.updatedBy
 */
export type GameMove$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * GameMove.deletedBy
 */
export type GameMove$deletedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * GameMove without action
 */
export type GameMoveDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: Prisma.GameMoveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GameMove
     */
    omit?: Prisma.GameMoveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameMoveInclude<ExtArgs> | null;
};
//# sourceMappingURL=GameMove.d.ts.map