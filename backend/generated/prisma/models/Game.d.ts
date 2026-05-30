import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Game
 *
 */
export type GameModel = runtime.Types.Result.DefaultSelection<Prisma.$GamePayload>;
export type AggregateGame = {
    _count: GameCountAggregateOutputType | null;
    _min: GameMinAggregateOutputType | null;
    _max: GameMaxAggregateOutputType | null;
};
export type GameMinAggregateOutputType = {
    id: string | null;
    status: $Enums.GameStatus | null;
    whitePlayerId: string | null;
    blackPlayerId: string | null;
    winnerColor: $Enums.GameColor | null;
    startedAt: Date | null;
    endedAt: Date | null;
    lastMoveAt: Date | null;
    initialFen: string | null;
    finalFen: string | null;
    resultReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
};
export type GameMaxAggregateOutputType = {
    id: string | null;
    status: $Enums.GameStatus | null;
    whitePlayerId: string | null;
    blackPlayerId: string | null;
    winnerColor: $Enums.GameColor | null;
    startedAt: Date | null;
    endedAt: Date | null;
    lastMoveAt: Date | null;
    initialFen: string | null;
    finalFen: string | null;
    resultReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
};
export type GameCountAggregateOutputType = {
    id: number;
    status: number;
    whitePlayerId: number;
    blackPlayerId: number;
    winnerColor: number;
    startedAt: number;
    endedAt: number;
    lastMoveAt: number;
    initialFen: number;
    finalFen: number;
    resultReason: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    createdById: number;
    updatedById: number;
    deletedById: number;
    _all: number;
};
export type GameMinAggregateInputType = {
    id?: true;
    status?: true;
    whitePlayerId?: true;
    blackPlayerId?: true;
    winnerColor?: true;
    startedAt?: true;
    endedAt?: true;
    lastMoveAt?: true;
    initialFen?: true;
    finalFen?: true;
    resultReason?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
};
export type GameMaxAggregateInputType = {
    id?: true;
    status?: true;
    whitePlayerId?: true;
    blackPlayerId?: true;
    winnerColor?: true;
    startedAt?: true;
    endedAt?: true;
    lastMoveAt?: true;
    initialFen?: true;
    finalFen?: true;
    resultReason?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
};
export type GameCountAggregateInputType = {
    id?: true;
    status?: true;
    whitePlayerId?: true;
    blackPlayerId?: true;
    winnerColor?: true;
    startedAt?: true;
    endedAt?: true;
    lastMoveAt?: true;
    initialFen?: true;
    finalFen?: true;
    resultReason?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
    _all?: true;
};
export type GameAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: Prisma.GameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Games to fetch.
     */
    orderBy?: Prisma.GameOrderByWithRelationInput | Prisma.GameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.GameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType;
};
export type GetGameAggregateType<T extends GameAggregateArgs> = {
    [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGame[P]> : Prisma.GetScalarType<T[P], AggregateGame[P]>;
};
export type GameGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GameWhereInput;
    orderBy?: Prisma.GameOrderByWithAggregationInput | Prisma.GameOrderByWithAggregationInput[];
    by: Prisma.GameScalarFieldEnum[] | Prisma.GameScalarFieldEnum;
    having?: Prisma.GameScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GameCountAggregateInputType | true;
    _min?: GameMinAggregateInputType;
    _max?: GameMaxAggregateInputType;
};
export type GameGroupByOutputType = {
    id: string;
    status: $Enums.GameStatus;
    whitePlayerId: string | null;
    blackPlayerId: string | null;
    winnerColor: $Enums.GameColor | null;
    startedAt: Date | null;
    endedAt: Date | null;
    lastMoveAt: Date | null;
    initialFen: string;
    finalFen: string | null;
    resultReason: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
    _count: GameCountAggregateOutputType | null;
    _min: GameMinAggregateOutputType | null;
    _max: GameMaxAggregateOutputType | null;
};
export type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GameGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GameGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GameGroupByOutputType[P]>;
}>>;
export type GameWhereInput = {
    AND?: Prisma.GameWhereInput | Prisma.GameWhereInput[];
    OR?: Prisma.GameWhereInput[];
    NOT?: Prisma.GameWhereInput | Prisma.GameWhereInput[];
    id?: Prisma.StringFilter<"Game"> | string;
    status?: Prisma.EnumGameStatusFilter<"Game"> | $Enums.GameStatus;
    whitePlayerId?: Prisma.StringNullableFilter<"Game"> | string | null;
    blackPlayerId?: Prisma.StringNullableFilter<"Game"> | string | null;
    winnerColor?: Prisma.EnumGameColorNullableFilter<"Game"> | $Enums.GameColor | null;
    startedAt?: Prisma.DateTimeNullableFilter<"Game"> | Date | string | null;
    endedAt?: Prisma.DateTimeNullableFilter<"Game"> | Date | string | null;
    lastMoveAt?: Prisma.DateTimeNullableFilter<"Game"> | Date | string | null;
    initialFen?: Prisma.StringFilter<"Game"> | string;
    finalFen?: Prisma.StringNullableFilter<"Game"> | string | null;
    resultReason?: Prisma.StringNullableFilter<"Game"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Game"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Game"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Game"> | Date | string | null;
    createdById?: Prisma.StringNullableFilter<"Game"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"Game"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"Game"> | string | null;
    whitePlayer?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    blackPlayer?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    deletedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    moves?: Prisma.GameMoveListRelationFilter;
};
export type GameOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    whitePlayerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    blackPlayerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    winnerColor?: Prisma.SortOrderInput | Prisma.SortOrder;
    startedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastMoveAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    initialFen?: Prisma.SortOrder;
    finalFen?: Prisma.SortOrderInput | Prisma.SortOrder;
    resultReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    whitePlayer?: Prisma.UserOrderByWithRelationInput;
    blackPlayer?: Prisma.UserOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    updatedBy?: Prisma.UserOrderByWithRelationInput;
    deletedBy?: Prisma.UserOrderByWithRelationInput;
    moves?: Prisma.GameMoveOrderByRelationAggregateInput;
};
export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GameWhereInput | Prisma.GameWhereInput[];
    OR?: Prisma.GameWhereInput[];
    NOT?: Prisma.GameWhereInput | Prisma.GameWhereInput[];
    status?: Prisma.EnumGameStatusFilter<"Game"> | $Enums.GameStatus;
    whitePlayerId?: Prisma.StringNullableFilter<"Game"> | string | null;
    blackPlayerId?: Prisma.StringNullableFilter<"Game"> | string | null;
    winnerColor?: Prisma.EnumGameColorNullableFilter<"Game"> | $Enums.GameColor | null;
    startedAt?: Prisma.DateTimeNullableFilter<"Game"> | Date | string | null;
    endedAt?: Prisma.DateTimeNullableFilter<"Game"> | Date | string | null;
    lastMoveAt?: Prisma.DateTimeNullableFilter<"Game"> | Date | string | null;
    initialFen?: Prisma.StringFilter<"Game"> | string;
    finalFen?: Prisma.StringNullableFilter<"Game"> | string | null;
    resultReason?: Prisma.StringNullableFilter<"Game"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Game"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Game"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Game"> | Date | string | null;
    createdById?: Prisma.StringNullableFilter<"Game"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"Game"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"Game"> | string | null;
    whitePlayer?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    blackPlayer?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    deletedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    moves?: Prisma.GameMoveListRelationFilter;
}, "id">;
export type GameOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    whitePlayerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    blackPlayerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    winnerColor?: Prisma.SortOrderInput | Prisma.SortOrder;
    startedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastMoveAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    initialFen?: Prisma.SortOrder;
    finalFen?: Prisma.SortOrderInput | Prisma.SortOrder;
    resultReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.GameCountOrderByAggregateInput;
    _max?: Prisma.GameMaxOrderByAggregateInput;
    _min?: Prisma.GameMinOrderByAggregateInput;
};
export type GameScalarWhereWithAggregatesInput = {
    AND?: Prisma.GameScalarWhereWithAggregatesInput | Prisma.GameScalarWhereWithAggregatesInput[];
    OR?: Prisma.GameScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GameScalarWhereWithAggregatesInput | Prisma.GameScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Game"> | string;
    status?: Prisma.EnumGameStatusWithAggregatesFilter<"Game"> | $Enums.GameStatus;
    whitePlayerId?: Prisma.StringNullableWithAggregatesFilter<"Game"> | string | null;
    blackPlayerId?: Prisma.StringNullableWithAggregatesFilter<"Game"> | string | null;
    winnerColor?: Prisma.EnumGameColorNullableWithAggregatesFilter<"Game"> | $Enums.GameColor | null;
    startedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null;
    endedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null;
    lastMoveAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null;
    initialFen?: Prisma.StringWithAggregatesFilter<"Game"> | string;
    finalFen?: Prisma.StringNullableWithAggregatesFilter<"Game"> | string | null;
    resultReason?: Prisma.StringNullableWithAggregatesFilter<"Game"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Game"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Game"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"Game"> | string | null;
    updatedById?: Prisma.StringNullableWithAggregatesFilter<"Game"> | string | null;
    deletedById?: Prisma.StringNullableWithAggregatesFilter<"Game"> | string | null;
};
export type GameCreateInput = {
    id?: string;
    status?: $Enums.GameStatus;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    whitePlayer?: Prisma.UserCreateNestedOneWithoutWhiteGamesInput;
    blackPlayer?: Prisma.UserCreateNestedOneWithoutBlackGamesInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedGamesInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedGamesInput;
    deletedBy?: Prisma.UserCreateNestedOneWithoutDeletedGamesInput;
    moves?: Prisma.GameMoveCreateNestedManyWithoutGameInput;
};
export type GameUncheckedCreateInput = {
    id?: string;
    status?: $Enums.GameStatus;
    whitePlayerId?: string | null;
    blackPlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    moves?: Prisma.GameMoveUncheckedCreateNestedManyWithoutGameInput;
};
export type GameUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    whitePlayer?: Prisma.UserUpdateOneWithoutWhiteGamesNestedInput;
    blackPlayer?: Prisma.UserUpdateOneWithoutBlackGamesNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedGamesNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedGamesNestedInput;
    deletedBy?: Prisma.UserUpdateOneWithoutDeletedGamesNestedInput;
    moves?: Prisma.GameMoveUpdateManyWithoutGameNestedInput;
};
export type GameUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    whitePlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blackPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moves?: Prisma.GameMoveUncheckedUpdateManyWithoutGameNestedInput;
};
export type GameCreateManyInput = {
    id?: string;
    status?: $Enums.GameStatus;
    whitePlayerId?: string | null;
    blackPlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GameUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    whitePlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blackPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameListRelationFilter = {
    every?: Prisma.GameWhereInput;
    some?: Prisma.GameWhereInput;
    none?: Prisma.GameWhereInput;
};
export type GameOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GameCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    whitePlayerId?: Prisma.SortOrder;
    blackPlayerId?: Prisma.SortOrder;
    winnerColor?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    lastMoveAt?: Prisma.SortOrder;
    initialFen?: Prisma.SortOrder;
    finalFen?: Prisma.SortOrder;
    resultReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
};
export type GameMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    whitePlayerId?: Prisma.SortOrder;
    blackPlayerId?: Prisma.SortOrder;
    winnerColor?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    lastMoveAt?: Prisma.SortOrder;
    initialFen?: Prisma.SortOrder;
    finalFen?: Prisma.SortOrder;
    resultReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
};
export type GameMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    whitePlayerId?: Prisma.SortOrder;
    blackPlayerId?: Prisma.SortOrder;
    winnerColor?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    lastMoveAt?: Prisma.SortOrder;
    initialFen?: Prisma.SortOrder;
    finalFen?: Prisma.SortOrder;
    resultReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
};
export type GameScalarRelationFilter = {
    is?: Prisma.GameWhereInput;
    isNot?: Prisma.GameWhereInput;
};
export type GameCreateNestedManyWithoutWhitePlayerInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutWhitePlayerInput, Prisma.GameUncheckedCreateWithoutWhitePlayerInput> | Prisma.GameCreateWithoutWhitePlayerInput[] | Prisma.GameUncheckedCreateWithoutWhitePlayerInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutWhitePlayerInput | Prisma.GameCreateOrConnectWithoutWhitePlayerInput[];
    createMany?: Prisma.GameCreateManyWhitePlayerInputEnvelope;
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
};
export type GameCreateNestedManyWithoutBlackPlayerInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutBlackPlayerInput, Prisma.GameUncheckedCreateWithoutBlackPlayerInput> | Prisma.GameCreateWithoutBlackPlayerInput[] | Prisma.GameUncheckedCreateWithoutBlackPlayerInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutBlackPlayerInput | Prisma.GameCreateOrConnectWithoutBlackPlayerInput[];
    createMany?: Prisma.GameCreateManyBlackPlayerInputEnvelope;
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
};
export type GameCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutCreatedByInput, Prisma.GameUncheckedCreateWithoutCreatedByInput> | Prisma.GameCreateWithoutCreatedByInput[] | Prisma.GameUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutCreatedByInput | Prisma.GameCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.GameCreateManyCreatedByInputEnvelope;
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
};
export type GameCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutUpdatedByInput, Prisma.GameUncheckedCreateWithoutUpdatedByInput> | Prisma.GameCreateWithoutUpdatedByInput[] | Prisma.GameUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutUpdatedByInput | Prisma.GameCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.GameCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
};
export type GameCreateNestedManyWithoutDeletedByInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutDeletedByInput, Prisma.GameUncheckedCreateWithoutDeletedByInput> | Prisma.GameCreateWithoutDeletedByInput[] | Prisma.GameUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutDeletedByInput | Prisma.GameCreateOrConnectWithoutDeletedByInput[];
    createMany?: Prisma.GameCreateManyDeletedByInputEnvelope;
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
};
export type GameUncheckedCreateNestedManyWithoutWhitePlayerInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutWhitePlayerInput, Prisma.GameUncheckedCreateWithoutWhitePlayerInput> | Prisma.GameCreateWithoutWhitePlayerInput[] | Prisma.GameUncheckedCreateWithoutWhitePlayerInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutWhitePlayerInput | Prisma.GameCreateOrConnectWithoutWhitePlayerInput[];
    createMany?: Prisma.GameCreateManyWhitePlayerInputEnvelope;
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
};
export type GameUncheckedCreateNestedManyWithoutBlackPlayerInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutBlackPlayerInput, Prisma.GameUncheckedCreateWithoutBlackPlayerInput> | Prisma.GameCreateWithoutBlackPlayerInput[] | Prisma.GameUncheckedCreateWithoutBlackPlayerInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutBlackPlayerInput | Prisma.GameCreateOrConnectWithoutBlackPlayerInput[];
    createMany?: Prisma.GameCreateManyBlackPlayerInputEnvelope;
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
};
export type GameUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutCreatedByInput, Prisma.GameUncheckedCreateWithoutCreatedByInput> | Prisma.GameCreateWithoutCreatedByInput[] | Prisma.GameUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutCreatedByInput | Prisma.GameCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.GameCreateManyCreatedByInputEnvelope;
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
};
export type GameUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutUpdatedByInput, Prisma.GameUncheckedCreateWithoutUpdatedByInput> | Prisma.GameCreateWithoutUpdatedByInput[] | Prisma.GameUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutUpdatedByInput | Prisma.GameCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.GameCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
};
export type GameUncheckedCreateNestedManyWithoutDeletedByInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutDeletedByInput, Prisma.GameUncheckedCreateWithoutDeletedByInput> | Prisma.GameCreateWithoutDeletedByInput[] | Prisma.GameUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutDeletedByInput | Prisma.GameCreateOrConnectWithoutDeletedByInput[];
    createMany?: Prisma.GameCreateManyDeletedByInputEnvelope;
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
};
export type GameUpdateManyWithoutWhitePlayerNestedInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutWhitePlayerInput, Prisma.GameUncheckedCreateWithoutWhitePlayerInput> | Prisma.GameCreateWithoutWhitePlayerInput[] | Prisma.GameUncheckedCreateWithoutWhitePlayerInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutWhitePlayerInput | Prisma.GameCreateOrConnectWithoutWhitePlayerInput[];
    upsert?: Prisma.GameUpsertWithWhereUniqueWithoutWhitePlayerInput | Prisma.GameUpsertWithWhereUniqueWithoutWhitePlayerInput[];
    createMany?: Prisma.GameCreateManyWhitePlayerInputEnvelope;
    set?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    disconnect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    delete?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    update?: Prisma.GameUpdateWithWhereUniqueWithoutWhitePlayerInput | Prisma.GameUpdateWithWhereUniqueWithoutWhitePlayerInput[];
    updateMany?: Prisma.GameUpdateManyWithWhereWithoutWhitePlayerInput | Prisma.GameUpdateManyWithWhereWithoutWhitePlayerInput[];
    deleteMany?: Prisma.GameScalarWhereInput | Prisma.GameScalarWhereInput[];
};
export type GameUpdateManyWithoutBlackPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutBlackPlayerInput, Prisma.GameUncheckedCreateWithoutBlackPlayerInput> | Prisma.GameCreateWithoutBlackPlayerInput[] | Prisma.GameUncheckedCreateWithoutBlackPlayerInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutBlackPlayerInput | Prisma.GameCreateOrConnectWithoutBlackPlayerInput[];
    upsert?: Prisma.GameUpsertWithWhereUniqueWithoutBlackPlayerInput | Prisma.GameUpsertWithWhereUniqueWithoutBlackPlayerInput[];
    createMany?: Prisma.GameCreateManyBlackPlayerInputEnvelope;
    set?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    disconnect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    delete?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    update?: Prisma.GameUpdateWithWhereUniqueWithoutBlackPlayerInput | Prisma.GameUpdateWithWhereUniqueWithoutBlackPlayerInput[];
    updateMany?: Prisma.GameUpdateManyWithWhereWithoutBlackPlayerInput | Prisma.GameUpdateManyWithWhereWithoutBlackPlayerInput[];
    deleteMany?: Prisma.GameScalarWhereInput | Prisma.GameScalarWhereInput[];
};
export type GameUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutCreatedByInput, Prisma.GameUncheckedCreateWithoutCreatedByInput> | Prisma.GameCreateWithoutCreatedByInput[] | Prisma.GameUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutCreatedByInput | Prisma.GameCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.GameUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.GameUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.GameCreateManyCreatedByInputEnvelope;
    set?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    disconnect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    delete?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    update?: Prisma.GameUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.GameUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.GameUpdateManyWithWhereWithoutCreatedByInput | Prisma.GameUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.GameScalarWhereInput | Prisma.GameScalarWhereInput[];
};
export type GameUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutUpdatedByInput, Prisma.GameUncheckedCreateWithoutUpdatedByInput> | Prisma.GameCreateWithoutUpdatedByInput[] | Prisma.GameUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutUpdatedByInput | Prisma.GameCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.GameUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.GameUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.GameCreateManyUpdatedByInputEnvelope;
    set?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    disconnect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    delete?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    update?: Prisma.GameUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.GameUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.GameUpdateManyWithWhereWithoutUpdatedByInput | Prisma.GameUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.GameScalarWhereInput | Prisma.GameScalarWhereInput[];
};
export type GameUpdateManyWithoutDeletedByNestedInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutDeletedByInput, Prisma.GameUncheckedCreateWithoutDeletedByInput> | Prisma.GameCreateWithoutDeletedByInput[] | Prisma.GameUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutDeletedByInput | Prisma.GameCreateOrConnectWithoutDeletedByInput[];
    upsert?: Prisma.GameUpsertWithWhereUniqueWithoutDeletedByInput | Prisma.GameUpsertWithWhereUniqueWithoutDeletedByInput[];
    createMany?: Prisma.GameCreateManyDeletedByInputEnvelope;
    set?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    disconnect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    delete?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    update?: Prisma.GameUpdateWithWhereUniqueWithoutDeletedByInput | Prisma.GameUpdateWithWhereUniqueWithoutDeletedByInput[];
    updateMany?: Prisma.GameUpdateManyWithWhereWithoutDeletedByInput | Prisma.GameUpdateManyWithWhereWithoutDeletedByInput[];
    deleteMany?: Prisma.GameScalarWhereInput | Prisma.GameScalarWhereInput[];
};
export type GameUncheckedUpdateManyWithoutWhitePlayerNestedInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutWhitePlayerInput, Prisma.GameUncheckedCreateWithoutWhitePlayerInput> | Prisma.GameCreateWithoutWhitePlayerInput[] | Prisma.GameUncheckedCreateWithoutWhitePlayerInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutWhitePlayerInput | Prisma.GameCreateOrConnectWithoutWhitePlayerInput[];
    upsert?: Prisma.GameUpsertWithWhereUniqueWithoutWhitePlayerInput | Prisma.GameUpsertWithWhereUniqueWithoutWhitePlayerInput[];
    createMany?: Prisma.GameCreateManyWhitePlayerInputEnvelope;
    set?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    disconnect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    delete?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    update?: Prisma.GameUpdateWithWhereUniqueWithoutWhitePlayerInput | Prisma.GameUpdateWithWhereUniqueWithoutWhitePlayerInput[];
    updateMany?: Prisma.GameUpdateManyWithWhereWithoutWhitePlayerInput | Prisma.GameUpdateManyWithWhereWithoutWhitePlayerInput[];
    deleteMany?: Prisma.GameScalarWhereInput | Prisma.GameScalarWhereInput[];
};
export type GameUncheckedUpdateManyWithoutBlackPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutBlackPlayerInput, Prisma.GameUncheckedCreateWithoutBlackPlayerInput> | Prisma.GameCreateWithoutBlackPlayerInput[] | Prisma.GameUncheckedCreateWithoutBlackPlayerInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutBlackPlayerInput | Prisma.GameCreateOrConnectWithoutBlackPlayerInput[];
    upsert?: Prisma.GameUpsertWithWhereUniqueWithoutBlackPlayerInput | Prisma.GameUpsertWithWhereUniqueWithoutBlackPlayerInput[];
    createMany?: Prisma.GameCreateManyBlackPlayerInputEnvelope;
    set?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    disconnect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    delete?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    update?: Prisma.GameUpdateWithWhereUniqueWithoutBlackPlayerInput | Prisma.GameUpdateWithWhereUniqueWithoutBlackPlayerInput[];
    updateMany?: Prisma.GameUpdateManyWithWhereWithoutBlackPlayerInput | Prisma.GameUpdateManyWithWhereWithoutBlackPlayerInput[];
    deleteMany?: Prisma.GameScalarWhereInput | Prisma.GameScalarWhereInput[];
};
export type GameUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutCreatedByInput, Prisma.GameUncheckedCreateWithoutCreatedByInput> | Prisma.GameCreateWithoutCreatedByInput[] | Prisma.GameUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutCreatedByInput | Prisma.GameCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.GameUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.GameUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.GameCreateManyCreatedByInputEnvelope;
    set?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    disconnect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    delete?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    update?: Prisma.GameUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.GameUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.GameUpdateManyWithWhereWithoutCreatedByInput | Prisma.GameUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.GameScalarWhereInput | Prisma.GameScalarWhereInput[];
};
export type GameUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutUpdatedByInput, Prisma.GameUncheckedCreateWithoutUpdatedByInput> | Prisma.GameCreateWithoutUpdatedByInput[] | Prisma.GameUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutUpdatedByInput | Prisma.GameCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.GameUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.GameUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.GameCreateManyUpdatedByInputEnvelope;
    set?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    disconnect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    delete?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    update?: Prisma.GameUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.GameUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.GameUpdateManyWithWhereWithoutUpdatedByInput | Prisma.GameUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.GameScalarWhereInput | Prisma.GameScalarWhereInput[];
};
export type GameUncheckedUpdateManyWithoutDeletedByNestedInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutDeletedByInput, Prisma.GameUncheckedCreateWithoutDeletedByInput> | Prisma.GameCreateWithoutDeletedByInput[] | Prisma.GameUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutDeletedByInput | Prisma.GameCreateOrConnectWithoutDeletedByInput[];
    upsert?: Prisma.GameUpsertWithWhereUniqueWithoutDeletedByInput | Prisma.GameUpsertWithWhereUniqueWithoutDeletedByInput[];
    createMany?: Prisma.GameCreateManyDeletedByInputEnvelope;
    set?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    disconnect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    delete?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    connect?: Prisma.GameWhereUniqueInput | Prisma.GameWhereUniqueInput[];
    update?: Prisma.GameUpdateWithWhereUniqueWithoutDeletedByInput | Prisma.GameUpdateWithWhereUniqueWithoutDeletedByInput[];
    updateMany?: Prisma.GameUpdateManyWithWhereWithoutDeletedByInput | Prisma.GameUpdateManyWithWhereWithoutDeletedByInput[];
    deleteMany?: Prisma.GameScalarWhereInput | Prisma.GameScalarWhereInput[];
};
export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus;
};
export type NullableEnumGameColorFieldUpdateOperationsInput = {
    set?: $Enums.GameColor | null;
};
export type GameCreateNestedOneWithoutMovesInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutMovesInput, Prisma.GameUncheckedCreateWithoutMovesInput>;
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutMovesInput;
    connect?: Prisma.GameWhereUniqueInput;
};
export type GameUpdateOneRequiredWithoutMovesNestedInput = {
    create?: Prisma.XOR<Prisma.GameCreateWithoutMovesInput, Prisma.GameUncheckedCreateWithoutMovesInput>;
    connectOrCreate?: Prisma.GameCreateOrConnectWithoutMovesInput;
    upsert?: Prisma.GameUpsertWithoutMovesInput;
    connect?: Prisma.GameWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GameUpdateToOneWithWhereWithoutMovesInput, Prisma.GameUpdateWithoutMovesInput>, Prisma.GameUncheckedUpdateWithoutMovesInput>;
};
export type GameCreateWithoutWhitePlayerInput = {
    id?: string;
    status?: $Enums.GameStatus;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    blackPlayer?: Prisma.UserCreateNestedOneWithoutBlackGamesInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedGamesInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedGamesInput;
    deletedBy?: Prisma.UserCreateNestedOneWithoutDeletedGamesInput;
    moves?: Prisma.GameMoveCreateNestedManyWithoutGameInput;
};
export type GameUncheckedCreateWithoutWhitePlayerInput = {
    id?: string;
    status?: $Enums.GameStatus;
    blackPlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    moves?: Prisma.GameMoveUncheckedCreateNestedManyWithoutGameInput;
};
export type GameCreateOrConnectWithoutWhitePlayerInput = {
    where: Prisma.GameWhereUniqueInput;
    create: Prisma.XOR<Prisma.GameCreateWithoutWhitePlayerInput, Prisma.GameUncheckedCreateWithoutWhitePlayerInput>;
};
export type GameCreateManyWhitePlayerInputEnvelope = {
    data: Prisma.GameCreateManyWhitePlayerInput | Prisma.GameCreateManyWhitePlayerInput[];
    skipDuplicates?: boolean;
};
export type GameCreateWithoutBlackPlayerInput = {
    id?: string;
    status?: $Enums.GameStatus;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    whitePlayer?: Prisma.UserCreateNestedOneWithoutWhiteGamesInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedGamesInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedGamesInput;
    deletedBy?: Prisma.UserCreateNestedOneWithoutDeletedGamesInput;
    moves?: Prisma.GameMoveCreateNestedManyWithoutGameInput;
};
export type GameUncheckedCreateWithoutBlackPlayerInput = {
    id?: string;
    status?: $Enums.GameStatus;
    whitePlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    moves?: Prisma.GameMoveUncheckedCreateNestedManyWithoutGameInput;
};
export type GameCreateOrConnectWithoutBlackPlayerInput = {
    where: Prisma.GameWhereUniqueInput;
    create: Prisma.XOR<Prisma.GameCreateWithoutBlackPlayerInput, Prisma.GameUncheckedCreateWithoutBlackPlayerInput>;
};
export type GameCreateManyBlackPlayerInputEnvelope = {
    data: Prisma.GameCreateManyBlackPlayerInput | Prisma.GameCreateManyBlackPlayerInput[];
    skipDuplicates?: boolean;
};
export type GameCreateWithoutCreatedByInput = {
    id?: string;
    status?: $Enums.GameStatus;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    whitePlayer?: Prisma.UserCreateNestedOneWithoutWhiteGamesInput;
    blackPlayer?: Prisma.UserCreateNestedOneWithoutBlackGamesInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedGamesInput;
    deletedBy?: Prisma.UserCreateNestedOneWithoutDeletedGamesInput;
    moves?: Prisma.GameMoveCreateNestedManyWithoutGameInput;
};
export type GameUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    status?: $Enums.GameStatus;
    whitePlayerId?: string | null;
    blackPlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    moves?: Prisma.GameMoveUncheckedCreateNestedManyWithoutGameInput;
};
export type GameCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.GameWhereUniqueInput;
    create: Prisma.XOR<Prisma.GameCreateWithoutCreatedByInput, Prisma.GameUncheckedCreateWithoutCreatedByInput>;
};
export type GameCreateManyCreatedByInputEnvelope = {
    data: Prisma.GameCreateManyCreatedByInput | Prisma.GameCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type GameCreateWithoutUpdatedByInput = {
    id?: string;
    status?: $Enums.GameStatus;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    whitePlayer?: Prisma.UserCreateNestedOneWithoutWhiteGamesInput;
    blackPlayer?: Prisma.UserCreateNestedOneWithoutBlackGamesInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedGamesInput;
    deletedBy?: Prisma.UserCreateNestedOneWithoutDeletedGamesInput;
    moves?: Prisma.GameMoveCreateNestedManyWithoutGameInput;
};
export type GameUncheckedCreateWithoutUpdatedByInput = {
    id?: string;
    status?: $Enums.GameStatus;
    whitePlayerId?: string | null;
    blackPlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    deletedById?: string | null;
    moves?: Prisma.GameMoveUncheckedCreateNestedManyWithoutGameInput;
};
export type GameCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.GameWhereUniqueInput;
    create: Prisma.XOR<Prisma.GameCreateWithoutUpdatedByInput, Prisma.GameUncheckedCreateWithoutUpdatedByInput>;
};
export type GameCreateManyUpdatedByInputEnvelope = {
    data: Prisma.GameCreateManyUpdatedByInput | Prisma.GameCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type GameCreateWithoutDeletedByInput = {
    id?: string;
    status?: $Enums.GameStatus;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    whitePlayer?: Prisma.UserCreateNestedOneWithoutWhiteGamesInput;
    blackPlayer?: Prisma.UserCreateNestedOneWithoutBlackGamesInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedGamesInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedGamesInput;
    moves?: Prisma.GameMoveCreateNestedManyWithoutGameInput;
};
export type GameUncheckedCreateWithoutDeletedByInput = {
    id?: string;
    status?: $Enums.GameStatus;
    whitePlayerId?: string | null;
    blackPlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    moves?: Prisma.GameMoveUncheckedCreateNestedManyWithoutGameInput;
};
export type GameCreateOrConnectWithoutDeletedByInput = {
    where: Prisma.GameWhereUniqueInput;
    create: Prisma.XOR<Prisma.GameCreateWithoutDeletedByInput, Prisma.GameUncheckedCreateWithoutDeletedByInput>;
};
export type GameCreateManyDeletedByInputEnvelope = {
    data: Prisma.GameCreateManyDeletedByInput | Prisma.GameCreateManyDeletedByInput[];
    skipDuplicates?: boolean;
};
export type GameUpsertWithWhereUniqueWithoutWhitePlayerInput = {
    where: Prisma.GameWhereUniqueInput;
    update: Prisma.XOR<Prisma.GameUpdateWithoutWhitePlayerInput, Prisma.GameUncheckedUpdateWithoutWhitePlayerInput>;
    create: Prisma.XOR<Prisma.GameCreateWithoutWhitePlayerInput, Prisma.GameUncheckedCreateWithoutWhitePlayerInput>;
};
export type GameUpdateWithWhereUniqueWithoutWhitePlayerInput = {
    where: Prisma.GameWhereUniqueInput;
    data: Prisma.XOR<Prisma.GameUpdateWithoutWhitePlayerInput, Prisma.GameUncheckedUpdateWithoutWhitePlayerInput>;
};
export type GameUpdateManyWithWhereWithoutWhitePlayerInput = {
    where: Prisma.GameScalarWhereInput;
    data: Prisma.XOR<Prisma.GameUpdateManyMutationInput, Prisma.GameUncheckedUpdateManyWithoutWhitePlayerInput>;
};
export type GameScalarWhereInput = {
    AND?: Prisma.GameScalarWhereInput | Prisma.GameScalarWhereInput[];
    OR?: Prisma.GameScalarWhereInput[];
    NOT?: Prisma.GameScalarWhereInput | Prisma.GameScalarWhereInput[];
    id?: Prisma.StringFilter<"Game"> | string;
    status?: Prisma.EnumGameStatusFilter<"Game"> | $Enums.GameStatus;
    whitePlayerId?: Prisma.StringNullableFilter<"Game"> | string | null;
    blackPlayerId?: Prisma.StringNullableFilter<"Game"> | string | null;
    winnerColor?: Prisma.EnumGameColorNullableFilter<"Game"> | $Enums.GameColor | null;
    startedAt?: Prisma.DateTimeNullableFilter<"Game"> | Date | string | null;
    endedAt?: Prisma.DateTimeNullableFilter<"Game"> | Date | string | null;
    lastMoveAt?: Prisma.DateTimeNullableFilter<"Game"> | Date | string | null;
    initialFen?: Prisma.StringFilter<"Game"> | string;
    finalFen?: Prisma.StringNullableFilter<"Game"> | string | null;
    resultReason?: Prisma.StringNullableFilter<"Game"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Game"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Game"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Game"> | Date | string | null;
    createdById?: Prisma.StringNullableFilter<"Game"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"Game"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"Game"> | string | null;
};
export type GameUpsertWithWhereUniqueWithoutBlackPlayerInput = {
    where: Prisma.GameWhereUniqueInput;
    update: Prisma.XOR<Prisma.GameUpdateWithoutBlackPlayerInput, Prisma.GameUncheckedUpdateWithoutBlackPlayerInput>;
    create: Prisma.XOR<Prisma.GameCreateWithoutBlackPlayerInput, Prisma.GameUncheckedCreateWithoutBlackPlayerInput>;
};
export type GameUpdateWithWhereUniqueWithoutBlackPlayerInput = {
    where: Prisma.GameWhereUniqueInput;
    data: Prisma.XOR<Prisma.GameUpdateWithoutBlackPlayerInput, Prisma.GameUncheckedUpdateWithoutBlackPlayerInput>;
};
export type GameUpdateManyWithWhereWithoutBlackPlayerInput = {
    where: Prisma.GameScalarWhereInput;
    data: Prisma.XOR<Prisma.GameUpdateManyMutationInput, Prisma.GameUncheckedUpdateManyWithoutBlackPlayerInput>;
};
export type GameUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.GameWhereUniqueInput;
    update: Prisma.XOR<Prisma.GameUpdateWithoutCreatedByInput, Prisma.GameUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.GameCreateWithoutCreatedByInput, Prisma.GameUncheckedCreateWithoutCreatedByInput>;
};
export type GameUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.GameWhereUniqueInput;
    data: Prisma.XOR<Prisma.GameUpdateWithoutCreatedByInput, Prisma.GameUncheckedUpdateWithoutCreatedByInput>;
};
export type GameUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.GameScalarWhereInput;
    data: Prisma.XOR<Prisma.GameUpdateManyMutationInput, Prisma.GameUncheckedUpdateManyWithoutCreatedByInput>;
};
export type GameUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.GameWhereUniqueInput;
    update: Prisma.XOR<Prisma.GameUpdateWithoutUpdatedByInput, Prisma.GameUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.GameCreateWithoutUpdatedByInput, Prisma.GameUncheckedCreateWithoutUpdatedByInput>;
};
export type GameUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.GameWhereUniqueInput;
    data: Prisma.XOR<Prisma.GameUpdateWithoutUpdatedByInput, Prisma.GameUncheckedUpdateWithoutUpdatedByInput>;
};
export type GameUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.GameScalarWhereInput;
    data: Prisma.XOR<Prisma.GameUpdateManyMutationInput, Prisma.GameUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type GameUpsertWithWhereUniqueWithoutDeletedByInput = {
    where: Prisma.GameWhereUniqueInput;
    update: Prisma.XOR<Prisma.GameUpdateWithoutDeletedByInput, Prisma.GameUncheckedUpdateWithoutDeletedByInput>;
    create: Prisma.XOR<Prisma.GameCreateWithoutDeletedByInput, Prisma.GameUncheckedCreateWithoutDeletedByInput>;
};
export type GameUpdateWithWhereUniqueWithoutDeletedByInput = {
    where: Prisma.GameWhereUniqueInput;
    data: Prisma.XOR<Prisma.GameUpdateWithoutDeletedByInput, Prisma.GameUncheckedUpdateWithoutDeletedByInput>;
};
export type GameUpdateManyWithWhereWithoutDeletedByInput = {
    where: Prisma.GameScalarWhereInput;
    data: Prisma.XOR<Prisma.GameUpdateManyMutationInput, Prisma.GameUncheckedUpdateManyWithoutDeletedByInput>;
};
export type GameCreateWithoutMovesInput = {
    id?: string;
    status?: $Enums.GameStatus;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    whitePlayer?: Prisma.UserCreateNestedOneWithoutWhiteGamesInput;
    blackPlayer?: Prisma.UserCreateNestedOneWithoutBlackGamesInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedGamesInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedGamesInput;
    deletedBy?: Prisma.UserCreateNestedOneWithoutDeletedGamesInput;
};
export type GameUncheckedCreateWithoutMovesInput = {
    id?: string;
    status?: $Enums.GameStatus;
    whitePlayerId?: string | null;
    blackPlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameCreateOrConnectWithoutMovesInput = {
    where: Prisma.GameWhereUniqueInput;
    create: Prisma.XOR<Prisma.GameCreateWithoutMovesInput, Prisma.GameUncheckedCreateWithoutMovesInput>;
};
export type GameUpsertWithoutMovesInput = {
    update: Prisma.XOR<Prisma.GameUpdateWithoutMovesInput, Prisma.GameUncheckedUpdateWithoutMovesInput>;
    create: Prisma.XOR<Prisma.GameCreateWithoutMovesInput, Prisma.GameUncheckedCreateWithoutMovesInput>;
    where?: Prisma.GameWhereInput;
};
export type GameUpdateToOneWithWhereWithoutMovesInput = {
    where?: Prisma.GameWhereInput;
    data: Prisma.XOR<Prisma.GameUpdateWithoutMovesInput, Prisma.GameUncheckedUpdateWithoutMovesInput>;
};
export type GameUpdateWithoutMovesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    whitePlayer?: Prisma.UserUpdateOneWithoutWhiteGamesNestedInput;
    blackPlayer?: Prisma.UserUpdateOneWithoutBlackGamesNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedGamesNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedGamesNestedInput;
    deletedBy?: Prisma.UserUpdateOneWithoutDeletedGamesNestedInput;
};
export type GameUncheckedUpdateWithoutMovesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    whitePlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blackPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameCreateManyWhitePlayerInput = {
    id?: string;
    status?: $Enums.GameStatus;
    blackPlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameCreateManyBlackPlayerInput = {
    id?: string;
    status?: $Enums.GameStatus;
    whitePlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameCreateManyCreatedByInput = {
    id?: string;
    status?: $Enums.GameStatus;
    whitePlayerId?: string | null;
    blackPlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    updatedById?: string | null;
    deletedById?: string | null;
};
export type GameCreateManyUpdatedByInput = {
    id?: string;
    status?: $Enums.GameStatus;
    whitePlayerId?: string | null;
    blackPlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    deletedById?: string | null;
};
export type GameCreateManyDeletedByInput = {
    id?: string;
    status?: $Enums.GameStatus;
    whitePlayerId?: string | null;
    blackPlayerId?: string | null;
    winnerColor?: $Enums.GameColor | null;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    lastMoveAt?: Date | string | null;
    initialFen?: string;
    finalFen?: string | null;
    resultReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdById?: string | null;
    updatedById?: string | null;
};
export type GameUpdateWithoutWhitePlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    blackPlayer?: Prisma.UserUpdateOneWithoutBlackGamesNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedGamesNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedGamesNestedInput;
    deletedBy?: Prisma.UserUpdateOneWithoutDeletedGamesNestedInput;
    moves?: Prisma.GameMoveUpdateManyWithoutGameNestedInput;
};
export type GameUncheckedUpdateWithoutWhitePlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    blackPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moves?: Prisma.GameMoveUncheckedUpdateManyWithoutGameNestedInput;
};
export type GameUncheckedUpdateManyWithoutWhitePlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    blackPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameUpdateWithoutBlackPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    whitePlayer?: Prisma.UserUpdateOneWithoutWhiteGamesNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedGamesNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedGamesNestedInput;
    deletedBy?: Prisma.UserUpdateOneWithoutDeletedGamesNestedInput;
    moves?: Prisma.GameMoveUpdateManyWithoutGameNestedInput;
};
export type GameUncheckedUpdateWithoutBlackPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    whitePlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moves?: Prisma.GameMoveUncheckedUpdateManyWithoutGameNestedInput;
};
export type GameUncheckedUpdateManyWithoutBlackPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    whitePlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    whitePlayer?: Prisma.UserUpdateOneWithoutWhiteGamesNestedInput;
    blackPlayer?: Prisma.UserUpdateOneWithoutBlackGamesNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedGamesNestedInput;
    deletedBy?: Prisma.UserUpdateOneWithoutDeletedGamesNestedInput;
    moves?: Prisma.GameMoveUpdateManyWithoutGameNestedInput;
};
export type GameUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    whitePlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blackPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moves?: Prisma.GameMoveUncheckedUpdateManyWithoutGameNestedInput;
};
export type GameUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    whitePlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blackPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    whitePlayer?: Prisma.UserUpdateOneWithoutWhiteGamesNestedInput;
    blackPlayer?: Prisma.UserUpdateOneWithoutBlackGamesNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedGamesNestedInput;
    deletedBy?: Prisma.UserUpdateOneWithoutDeletedGamesNestedInput;
    moves?: Prisma.GameMoveUpdateManyWithoutGameNestedInput;
};
export type GameUncheckedUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    whitePlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blackPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moves?: Prisma.GameMoveUncheckedUpdateManyWithoutGameNestedInput;
};
export type GameUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    whitePlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blackPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type GameUpdateWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    whitePlayer?: Prisma.UserUpdateOneWithoutWhiteGamesNestedInput;
    blackPlayer?: Prisma.UserUpdateOneWithoutBlackGamesNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedGamesNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedGamesNestedInput;
    moves?: Prisma.GameMoveUpdateManyWithoutGameNestedInput;
};
export type GameUncheckedUpdateWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    whitePlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blackPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moves?: Prisma.GameMoveUncheckedUpdateManyWithoutGameNestedInput;
};
export type GameUncheckedUpdateManyWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus;
    whitePlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blackPlayerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerColor?: Prisma.NullableEnumGameColorFieldUpdateOperationsInput | $Enums.GameColor | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMoveAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    initialFen?: Prisma.StringFieldUpdateOperationsInput | string;
    finalFen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type GameCountOutputType
 */
export type GameCountOutputType = {
    moves: number;
};
export type GameCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    moves?: boolean | GameCountOutputTypeCountMovesArgs;
};
/**
 * GameCountOutputType without action
 */
export type GameCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: Prisma.GameCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * GameCountOutputType without action
 */
export type GameCountOutputTypeCountMovesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GameMoveWhereInput;
};
export type GameSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    whitePlayerId?: boolean;
    blackPlayerId?: boolean;
    winnerColor?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    lastMoveAt?: boolean;
    initialFen?: boolean;
    finalFen?: boolean;
    resultReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    whitePlayer?: boolean | Prisma.Game$whitePlayerArgs<ExtArgs>;
    blackPlayer?: boolean | Prisma.Game$blackPlayerArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Game$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Game$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Game$deletedByArgs<ExtArgs>;
    moves?: boolean | Prisma.Game$movesArgs<ExtArgs>;
    _count?: boolean | Prisma.GameCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["game"]>;
export type GameSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    whitePlayerId?: boolean;
    blackPlayerId?: boolean;
    winnerColor?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    lastMoveAt?: boolean;
    initialFen?: boolean;
    finalFen?: boolean;
    resultReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    whitePlayer?: boolean | Prisma.Game$whitePlayerArgs<ExtArgs>;
    blackPlayer?: boolean | Prisma.Game$blackPlayerArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Game$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Game$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Game$deletedByArgs<ExtArgs>;
}, ExtArgs["result"]["game"]>;
export type GameSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    whitePlayerId?: boolean;
    blackPlayerId?: boolean;
    winnerColor?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    lastMoveAt?: boolean;
    initialFen?: boolean;
    finalFen?: boolean;
    resultReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    whitePlayer?: boolean | Prisma.Game$whitePlayerArgs<ExtArgs>;
    blackPlayer?: boolean | Prisma.Game$blackPlayerArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Game$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Game$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Game$deletedByArgs<ExtArgs>;
}, ExtArgs["result"]["game"]>;
export type GameSelectScalar = {
    id?: boolean;
    status?: boolean;
    whitePlayerId?: boolean;
    blackPlayerId?: boolean;
    winnerColor?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    lastMoveAt?: boolean;
    initialFen?: boolean;
    finalFen?: boolean;
    resultReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
};
export type GameOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "status" | "whitePlayerId" | "blackPlayerId" | "winnerColor" | "startedAt" | "endedAt" | "lastMoveAt" | "initialFen" | "finalFen" | "resultReason" | "createdAt" | "updatedAt" | "deletedAt" | "createdById" | "updatedById" | "deletedById", ExtArgs["result"]["game"]>;
export type GameInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    whitePlayer?: boolean | Prisma.Game$whitePlayerArgs<ExtArgs>;
    blackPlayer?: boolean | Prisma.Game$blackPlayerArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Game$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Game$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Game$deletedByArgs<ExtArgs>;
    moves?: boolean | Prisma.Game$movesArgs<ExtArgs>;
    _count?: boolean | Prisma.GameCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GameIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    whitePlayer?: boolean | Prisma.Game$whitePlayerArgs<ExtArgs>;
    blackPlayer?: boolean | Prisma.Game$blackPlayerArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Game$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Game$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Game$deletedByArgs<ExtArgs>;
};
export type GameIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    whitePlayer?: boolean | Prisma.Game$whitePlayerArgs<ExtArgs>;
    blackPlayer?: boolean | Prisma.Game$blackPlayerArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Game$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Game$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Game$deletedByArgs<ExtArgs>;
};
export type $GamePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Game";
    objects: {
        whitePlayer: Prisma.$UserPayload<ExtArgs> | null;
        blackPlayer: Prisma.$UserPayload<ExtArgs> | null;
        createdBy: Prisma.$UserPayload<ExtArgs> | null;
        updatedBy: Prisma.$UserPayload<ExtArgs> | null;
        deletedBy: Prisma.$UserPayload<ExtArgs> | null;
        moves: Prisma.$GameMovePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        status: $Enums.GameStatus;
        whitePlayerId: string | null;
        blackPlayerId: string | null;
        winnerColor: $Enums.GameColor | null;
        startedAt: Date | null;
        endedAt: Date | null;
        lastMoveAt: Date | null;
        initialFen: string;
        finalFen: string | null;
        resultReason: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
    }, ExtArgs["result"]["game"]>;
    composites: {};
};
export type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GamePayload, S>;
export type GameCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GameCountAggregateInputType | true;
};
export interface GameDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Game'];
        meta: {
            name: 'Game';
        };
    };
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: Prisma.SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GameClient<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GameClient<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: Prisma.SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma.Prisma__GameClient<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GameClient<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     *
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GameFindManyArgs>(args?: Prisma.SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     *
     */
    create<T extends GameCreateArgs>(args: Prisma.SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma.Prisma__GameClient<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GameCreateManyArgs>(args?: Prisma.SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     *
     */
    delete<T extends GameDeleteArgs>(args: Prisma.SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma.Prisma__GameClient<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GameUpdateArgs>(args: Prisma.SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma.Prisma__GameClient<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: Prisma.SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GameUpdateManyArgs>(args: Prisma.SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: Prisma.SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma.Prisma__GameClient<runtime.Types.Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(args?: Prisma.Subset<T, GameCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GameCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Prisma.Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>;
    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
    groupBy<T extends GameGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GameGroupByArgs['orderBy'];
    } : {
        orderBy?: GameGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Game model
     */
    readonly fields: GameFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Game.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__GameClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    whitePlayer<T extends Prisma.Game$whitePlayerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Game$whitePlayerArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    blackPlayer<T extends Prisma.Game$blackPlayerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Game$blackPlayerArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.Game$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Game$createdByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    updatedBy<T extends Prisma.Game$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Game$updatedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    deletedBy<T extends Prisma.Game$deletedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Game$deletedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    moves<T extends Prisma.Game$movesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Game$movesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Game model
 */
export interface GameFieldRefs {
    readonly id: Prisma.FieldRef<"Game", 'String'>;
    readonly status: Prisma.FieldRef<"Game", 'GameStatus'>;
    readonly whitePlayerId: Prisma.FieldRef<"Game", 'String'>;
    readonly blackPlayerId: Prisma.FieldRef<"Game", 'String'>;
    readonly winnerColor: Prisma.FieldRef<"Game", 'GameColor'>;
    readonly startedAt: Prisma.FieldRef<"Game", 'DateTime'>;
    readonly endedAt: Prisma.FieldRef<"Game", 'DateTime'>;
    readonly lastMoveAt: Prisma.FieldRef<"Game", 'DateTime'>;
    readonly initialFen: Prisma.FieldRef<"Game", 'String'>;
    readonly finalFen: Prisma.FieldRef<"Game", 'String'>;
    readonly resultReason: Prisma.FieldRef<"Game", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Game", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Game", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Game", 'DateTime'>;
    readonly createdById: Prisma.FieldRef<"Game", 'String'>;
    readonly updatedById: Prisma.FieldRef<"Game", 'String'>;
    readonly deletedById: Prisma.FieldRef<"Game", 'String'>;
}
/**
 * Game findUnique
 */
export type GameFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameInclude<ExtArgs> | null;
    /**
     * Filter, which Game to fetch.
     */
    where: Prisma.GameWhereUniqueInput;
};
/**
 * Game findUniqueOrThrow
 */
export type GameFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameInclude<ExtArgs> | null;
    /**
     * Filter, which Game to fetch.
     */
    where: Prisma.GameWhereUniqueInput;
};
/**
 * Game findFirst
 */
export type GameFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameInclude<ExtArgs> | null;
    /**
     * Filter, which Game to fetch.
     */
    where?: Prisma.GameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Games to fetch.
     */
    orderBy?: Prisma.GameOrderByWithRelationInput | Prisma.GameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Games.
     */
    cursor?: Prisma.GameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Games.
     */
    distinct?: Prisma.GameScalarFieldEnum | Prisma.GameScalarFieldEnum[];
};
/**
 * Game findFirstOrThrow
 */
export type GameFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameInclude<ExtArgs> | null;
    /**
     * Filter, which Game to fetch.
     */
    where?: Prisma.GameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Games to fetch.
     */
    orderBy?: Prisma.GameOrderByWithRelationInput | Prisma.GameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Games.
     */
    cursor?: Prisma.GameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Games.
     */
    distinct?: Prisma.GameScalarFieldEnum | Prisma.GameScalarFieldEnum[];
};
/**
 * Game findMany
 */
export type GameFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameInclude<ExtArgs> | null;
    /**
     * Filter, which Games to fetch.
     */
    where?: Prisma.GameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Games to fetch.
     */
    orderBy?: Prisma.GameOrderByWithRelationInput | Prisma.GameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Games.
     */
    cursor?: Prisma.GameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Games.
     */
    distinct?: Prisma.GameScalarFieldEnum | Prisma.GameScalarFieldEnum[];
};
/**
 * Game create
 */
export type GameCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameInclude<ExtArgs> | null;
    /**
     * The data needed to create a Game.
     */
    data: Prisma.XOR<Prisma.GameCreateInput, Prisma.GameUncheckedCreateInput>;
};
/**
 * Game createMany
 */
export type GameCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: Prisma.GameCreateManyInput | Prisma.GameCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Game createManyAndReturn
 */
export type GameCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * The data used to create many Games.
     */
    data: Prisma.GameCreateManyInput | Prisma.GameCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Game update
 */
export type GameUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameInclude<ExtArgs> | null;
    /**
     * The data needed to update a Game.
     */
    data: Prisma.XOR<Prisma.GameUpdateInput, Prisma.GameUncheckedUpdateInput>;
    /**
     * Choose, which Game to update.
     */
    where: Prisma.GameWhereUniqueInput;
};
/**
 * Game updateMany
 */
export type GameUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: Prisma.XOR<Prisma.GameUpdateManyMutationInput, Prisma.GameUncheckedUpdateManyInput>;
    /**
     * Filter which Games to update
     */
    where?: Prisma.GameWhereInput;
    /**
     * Limit how many Games to update.
     */
    limit?: number;
};
/**
 * Game updateManyAndReturn
 */
export type GameUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * The data used to update Games.
     */
    data: Prisma.XOR<Prisma.GameUpdateManyMutationInput, Prisma.GameUncheckedUpdateManyInput>;
    /**
     * Filter which Games to update
     */
    where?: Prisma.GameWhereInput;
    /**
     * Limit how many Games to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Game upsert
 */
export type GameUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameInclude<ExtArgs> | null;
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: Prisma.GameWhereUniqueInput;
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: Prisma.XOR<Prisma.GameCreateInput, Prisma.GameUncheckedCreateInput>;
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.GameUpdateInput, Prisma.GameUncheckedUpdateInput>;
};
/**
 * Game delete
 */
export type GameDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameInclude<ExtArgs> | null;
    /**
     * Filter which Game to delete.
     */
    where: Prisma.GameWhereUniqueInput;
};
/**
 * Game deleteMany
 */
export type GameDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: Prisma.GameWhereInput;
    /**
     * Limit how many Games to delete.
     */
    limit?: number;
};
/**
 * Game.whitePlayer
 */
export type Game$whitePlayerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Game.blackPlayer
 */
export type Game$blackPlayerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Game.createdBy
 */
export type Game$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Game.updatedBy
 */
export type Game$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Game.deletedBy
 */
export type Game$deletedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Game.moves
 */
export type Game$movesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.GameMoveWhereInput;
    orderBy?: Prisma.GameMoveOrderByWithRelationInput | Prisma.GameMoveOrderByWithRelationInput[];
    cursor?: Prisma.GameMoveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GameMoveScalarFieldEnum | Prisma.GameMoveScalarFieldEnum[];
};
/**
 * Game without action
 */
export type GameDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: Prisma.GameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Game
     */
    omit?: Prisma.GameOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GameInclude<ExtArgs> | null;
};
//# sourceMappingURL=Game.d.ts.map