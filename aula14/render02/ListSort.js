import React from "react";
import { Text } from 'react-native';

const arrows = new Map([
    [true, "~"],
    [false, "^"]
]);

export default function ListSort({ onSort, asc }) {
    return (
        <Text onPress={onSort}>{arrows.get(asc)}</Text>
    )
}